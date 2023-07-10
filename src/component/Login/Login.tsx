import React, { useState } from "react";
import { signIn, signOut, useSession } from "next-auth/react"; // Import from "next-auth/react" instead of "next-auth/client"

interface SignupDetails {
  name: string;
  email: string;
  password: string;
}

const Login = () => {
  // const [session, loading] = useSession(); // Remove explicit type annotation
  const { data: session } = useSession();
  const [signupDetails, setSignupDetails] = useState<SignupDetails>({
    name: "",
    email: "",
    password: "",
  });

  const handleSignUpCss = () => {
    // Function implementation
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    // Specify the type of event
    setSignupDetails({
      ...signupDetails,
      [e.target.name]: e.target.value,
    });
  };

  const signUp = (e: React.MouseEvent<HTMLButtonElement>) => {
    // Specify the type of event
    e.preventDefault();
    // Sign up logic
  };

  if (!session) {
    return (
      <div>
        <button onClick={() => signIn()}>Sign In</button>
      </div>
    );
  }

  return <div>{/* Rest of the component code */}</div>;
};

export default Login;
