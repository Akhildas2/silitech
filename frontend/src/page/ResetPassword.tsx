import React, { useState,type FormEvent } from "react";
import "./ResetPassword.css";

const ResetPassword: React.FC = () => {
  const [newPassword, setNewPassword] = useState<string>("");
  const [confirmPassword, setConfirmPassword] = useState<string>("");
  const [message, setMessage] = useState<string>("");
  const [color, setColor] = useState<string>("");

  const handleSubmit = (e: FormEvent) => {
    e.preventDefault();

    if (newPassword.length < 6) {
      setColor("red");
      setMessage("Password must be at least 6 characters!");
      return;
    }

    if (newPassword !== confirmPassword) {
      setColor("red");
      setMessage("Passwords do not match!");
      return;
    }

    setColor("green");
    setMessage("Password reset successful!");
  };

  return (
    <div className="reset-container">
      <form className="reset-box" onSubmit={handleSubmit}>
        <h2>Reset Password</h2>

        <input
          type="password"
          placeholder="New Password"
          value={newPassword}
          onChange={(e) => setNewPassword(e.target.value)}
          required
        />

        <input
          type="password"
          placeholder="Confirm Password"
          value={confirmPassword}
          onChange={(e) => setConfirmPassword(e.target.value)}
          required
        />

        <button type="submit">Reset Password</button>

        {message && <p style={{ color }}>{message}</p>}
      </form>
    </div>
  );
};

export default ResetPassword;