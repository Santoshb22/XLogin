import { useState } from "react";

const Home = () => {
    const [formData, setFormData] = useState({
        username: "",
        password: "",
    })

    const [message, setMessage] = useState("");
    const [error, setError] = useState(false); 

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData((prevData) => ({
            ...prevData,
            [name]: value,
        }))

        setError("");
    }

    const handleSubmit = (e) => {
        e.preventDefault();
        const { username, password } = formData;

        if (!username || !password) {
            setError(true); 
            return;
        }

        if (username === "user" && password === "password") {
            setMessage(`Welcome, ${username}!`); 
            setError(""); 
        } else {
            setError(true); 
            setMessage(""); 
        }

        setFormData({
            username: "",
            password: "",
        })
    }

    return (
        <div>
            <div>
                <h1>Login Page</h1>
            </div>

            {error && <p>Invalid username or password</p>}

            {
              message?  (<p>{message}</p>) :
              (
                <form onSubmit={handleSubmit}>
                <div>
                    <label htmlFor="userName">Username: </label>
                    <input
                        onChange={handleChange}
                        type="text"
                        name="username" 
                        value={formData.username}
                        id="userName"
                        placeholder="username"
                        required
                    />
                </div>

                <div>
                    <label htmlFor="password">Password: </label>
                    <input
                        onChange={handleChange}
                        type="password"
                        name="password"
                        value={formData.password}
                        id="password"
                        placeholder="password"
                        required
                    />
                </div>

                <button type="submit">Submit</button>
            </form>
              )
            }

        </div>
    )
}

export default Home;
