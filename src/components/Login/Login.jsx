import { signInWithEmailAndPassword } from "firebase/auth";
import auth from "../../firebase/firebase.config";
import { useRef, useState } from "react";
import { Link } from "react-router-dom";


const Login = () => {
    const [errorMessage, setErrorMessage] = useState('');
    const [successMessage, setSuccessMessage] = useState('');
    const emailRef = useRef(null);
    const handleLogin = e => {
        e.preventDefault();
        setErrorMessage('');
        setSuccessMessage('');
        const userEmail = e.target.email.value;
        const userPassword = e.target.password.value;
        signInWithEmailAndPassword(auth, userEmail, userPassword)
        .then(result => {
            console.log(result.user);
            setSuccessMessage('Successfully Logged In');
        })
        .catch(error => {
            console.error(error);
            setErrorMessage(error.message);
        })
    }
    const handleForgetPassword = () => {
        if (!emailRef.current.value) {
            console.log('please provide an email');
            return;
        }
        else if (!/^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/.test(emailRef.current.value)) {
            console.log('Please provide a valid email');
            return;
        }
        else {
            console.log('successful');
            return;
        }
    }
    return (
        <div className="hero bg-base-200 min-h-screen">
            <div className="hero-content flex-col lg:flex-row-reverse">
                <div className="text-center lg:text-left">
                    <h1 className="text-5xl font-bold">Login now!</h1>
                    <p className="py-6">
                        Provident cupiditate voluptatem et in. Quaerat fugiat ut assumenda excepturi exercitationem
                        quasi. In deleniti eaque aut repudiandae et a id nisi.
                    </p>
                </div>
                <div className="card bg-base-100 w-full max-w-sm shrink-0 shadow-2xl">
                    <form onSubmit={handleLogin}>
                        <div className="card-body">
                            <fieldset className="fieldset">
                                <label className="fieldset-label">Email</label>
                                <input type="email" 
                                ref={emailRef}
                                className="input" 
                                name='email'
                                placeholder="Email" />
                                <label className="fieldset-label">Password</label>
                                <input type="password" 
                                name='password' 
                                className="input" placeholder="Password" />
                                <div><a onClick={handleForgetPassword} className="link link-hover">Forgot password?</a></div>
                                <button className="btn btn-neutral mt-4">Login</button>
                                {
                                    errorMessage && <div>
                                       <p className="text-3xl text-red-700">{errorMessage}</p>
                                    </div>
                                }
                                {
                                    successMessage && <div>
                                        <p className="text-3xl text-green-700">{successMessage}</p>
                                    </div>
                                }
                                <p>New Here? Please <Link to='/signUp'>Sign Up</Link></p>
                            </fieldset>
                        </div>
                    </form>
                </div>
            </div>
        </div>
    );
};

export default Login;