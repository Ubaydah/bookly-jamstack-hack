import { useState } from "react";

export const LoginUserForm = () => {
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");

    const send = () => {
        fetch("/api/user/login", {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
            },
            body: JSON.stringify({
                email,
                password
            }),
        }).then(() => window.location.reload());
    };

    return (
        <form
            onSubmit={(e) => {
                e.preventDefault();
                send();
            }}
            style={{ display: "flex", gap: 8 }}
        >
            <label>
                Login:
                <input
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    type="text"
                    placeholder="Enter your email"
                />
                <input
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                    type="text"
                    placeholder="Enter your password"
                />
            </label>
            <button>Save</button>
        </form>
    );
};