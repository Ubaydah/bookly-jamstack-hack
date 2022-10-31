import { useState } from "react";

export const RegisterUserForm = () => {
    const [email, setEmail] = useState("");
    const [username, setUsername] = useState("");
    const [password, setPassword] = useState("");

    const send = () => {
        fetch("/api/user/register", {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
            },
            body: JSON.stringify({
                email,
                username,
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
                Register:
                <input
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    type="text"
                    placeholder="Enter your email"
                />
                <input
                    value={username}
                    onChange={(e) => setUsername(e.target.value)}
                    type="text"
                    placeholder="Enter your username"
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