import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { useForm } from "react-hook-form";
import { z } from "zod";
import { zodResolver } from "@hookform/resolvers/zod";
import { signup } from "../../services/api";

// Schema validation with Zod
const signUpSchema = z.object({
    name: z.string().min(2, "Name must be at least 2 characters."),
    email: z.string().email("Invalid email address."),
    password: z
        .string()
        .min(6, "Password must be at least 6 characters.")
        .regex(/[A-Z]/, "Password must contain at least one uppercase letter.")
        .regex(/[a-z]/, "Password must contain at least one lowercase letter.")
        .regex(/[0-9]/, "Password must contain at least one number."),
});

type SignUpFormData = z.infer<typeof signUpSchema>;

const SignUp: React.FC = () => {
    const [passwordVisible, setPasswordVisible] = useState(false);
    const [passwordStrength, setPasswordStrength] = useState<string | null>(null);
    const [error, setError] = useState<string | null>(null);
    const navigate = useNavigate();

    const {
        register,
        handleSubmit,
        watch,
        formState: { errors, isSubmitting },
    } = useForm<SignUpFormData>({
        resolver: zodResolver(signUpSchema),
    });

    const passwordValue = watch("password");

    // Function to calculate password strength
    const calculatePasswordStrength = (password: string) => {
        let strength = "Weak";
        if (password.length >= 8 && /[A-Z]/.test(password) && /[0-9]/.test(password)) {
            strength = "Strong";
        } else if (password.length >= 6) {
            strength = "Medium";
        }
        setPasswordStrength(strength);
    };

    // Watch password and calculate its strength dynamically
    React.useEffect(() => {
        if (passwordValue) calculatePasswordStrength(passwordValue);
    }, [passwordValue]);

    const togglePasswordVisibility = () => {
        setPasswordVisible((prev) => !prev);
    };

    const onSubmit = async (data: {name: string, email: string, password: string}) => {
        try {
            setError(null);
            await signup(data);
            alert("Account created successfully!");
            navigate("/login");
        } catch (err: any) {
            setError(err.response?.data?.message || "Something went wrong.");
        }
    };

    return (
        <div className="signup-container">
            <h2>Sign Up</h2>
            {error && <p style={{ color: "red" }}>{error}</p>}
            <form onSubmit={handleSubmit(onSubmit)}>
                <div>
                    <input
                        type="text"
                        placeholder="Name"
                        {...register("name")}
                        required
                    />
                    {errors.name && <p style={{ color: "red" }}>{errors.name.message}</p>}
                </div>
                <div>
                    <input
                        type="email"
                        placeholder="Email"
                        {...register("email")}
                        required
                    />
                    {errors.email && <p style={{ color: "red" }}>{errors.email.message}</p>}
                </div>
                <div style={{ position: "relative" }}>
                    <input
                        type={passwordVisible ? "text" : "password"}
                        placeholder="Password"
                        {...register("password")}
                        required
                    />
                    <button
                        type="button"
                        onClick={togglePasswordVisibility}
                        style={{
                            position: "absolute",
                            right: "10px",
                            top: "50%",
                            transform: "translateY(-50%)",
                            background: "none",
                            border: "none",
                            cursor: "pointer",
                        }}
                    >
                        {passwordVisible ? "Hide" : "Show"}
                    </button>
                    {errors.password && (
                        <p style={{ color: "red" }}>{errors.password.message}</p>
                    )}
                </div>
                {passwordStrength && (
                    <p style={{ color: passwordStrength === "Strong" ? "green" : passwordStrength === "Medium" ? "orange" : "red" }}>
                        Password Strength: {passwordStrength}
                    </p>
                )}
                <button type="submit" disabled={isSubmitting}>
                    {isSubmitting ? "Signing up..." : "Sign Up"}
                </button>
            </form>
        </div>
    );
};

export default SignUp;
