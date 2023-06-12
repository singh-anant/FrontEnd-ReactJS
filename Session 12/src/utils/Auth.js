import { auth } from "./firebase/firebase";
import { createUserWithEmailAndPassword } from "'https://www.gstatic.com/firebasejs/9.0.2/firebase-auth.js';";
import { useState } from "react";

const Auth = () => {
  const [email, setemail] = useState("");
  const [password, setpassword] = useState("");
  const signIn = async () => {
    await createUserWithEmailAndPassword(auth, email, password);
  };

  return (
    <div>
      <input
        type="text"
        placeholder="Email"
        onChange={(e) => setemail(e.target.value)}
      />
      <input
        type="password"
        placeholder="Password"
        onChange={(e) => setpassword(e.target.value)}
      />
      <button onClick={() => signIn}>Sign In</button>
    </div>
  );
};

export default Auth;
