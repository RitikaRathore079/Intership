import { useState } from "react";

function LoginForm() {
 const [username, setUsername] = useState("");
 const [isLoggedIn, setIsLoggedIn] = useState(false);

 const handleSubmit = (e) => {
 e.preventDefault();
 if (username.trim() !== "") {
 setIsLoggedIn(true);
 }
 };

 return (
 <div>
 {!isLoggedIn && ( <form onSubmit={handleSubmit}>
 <h2>Login Form</h2>
 <input type="text" placeholder="Enter username" value={username}onChange={(e) => setUsername(e.target.value)}/>
 <br /><br />
 <button type="submit">Login</button>
 </form>
 )}

 {isLoggedIn && <h2>Welcome, {username}!</h2>}
<div>
 {isLoggedIn ? ( <h2>Welcome, {username}!</h2>) : (<p>Please login to continue.</p>)}
</div>
</div>
 );
}
export default LoginForm;