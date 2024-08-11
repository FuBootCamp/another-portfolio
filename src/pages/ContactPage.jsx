import React, { useState } from "react";
import RenderImages from "../components/UI/Project/RenderImages";


export default function ContactPage() {

  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");
  const [error, setError] = useState("");

  const validateEmail = (email) => {
    const re = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
    return re.test(String(email).toLowerCase());
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!name) {
      setError("Name required");
    } else if (!email) {
           setError("Email required");
          } else if (!validateEmail(email)) {
                 setError("An email format is required"); 
                } else if (!message) {
                  setError("Message required"); 
                      } else {
                      setError("");
                  // Send form
                  console.log("Form sended", { name, email, message });
                  console.log(e.target);
    }
  };

  return (
    <div className="col-xl-6">
        <form onSubmit={handleSubmit}>
            <h4>Contact me, please fill this form and press SEND</h4>
            <p></p>
            <label>
              Name:
              <p></p>
              <input
                type="text"
                value={name}
                onChange={(e) => setName(e.target.value)}
              />
            </label>
            <p></p>

            <label>
              Email:
              <p></p>
              <input
                type="text"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
              />
            </label>
            <p></p>

            <label>
              Message:
              <p></p>
              <textarea
                value={message}
                onChange={(e) => setMessage(e.target.value)}
                rows="4" cols="44"
              />
            </label>
            <p></p>

            {error && <p style={{ color: "red" }}>{error}</p>}
            <button type="submit">Send</button>
        </form>
    </div>
  );
}
