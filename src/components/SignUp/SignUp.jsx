import { createUserWithEmailAndPassword } from "firebase/auth";
import auth from "../../firebase/firebase.config";
import { useState } from "react";


const SignUp = () => {
    const [registerError, setRegisterError] = useState('');
    const [registerSuccess, setRegisterSuccess] = useState('');
    const handleRegister = e => {
        e.preventDefault();
        setRegisterError('');
        setRegisterSuccess('');
        const userEmail = e.target.email.value;
        const userPassword = e.target.password.value;
        console.log('submitted with email: ', userEmail + ' password: ', userPassword);
        createUserWithEmailAndPassword(auth, userEmail, userPassword)
        .then(result => {
            console.log(result);
            setRegisterSuccess('User Created Successfully');
        })
        .catch(error => {
            console.error(error);
            setRegisterError(error.message);
        })
    }
    return (
        <div className=" mt-[60px]">
            <h3 className="text-3xl mb-4">Please Register</h3>
            <form onSubmit={handleRegister} className=" flex flex-col">
                <input className=" bg-slate-500 mb-4 py-2 px-4" type="email" placeholder="Email Address" name="email" id="" />
                <input className="bg-slate-500 mb-4 py-2 px-4" type="password" placeholder="Password" name="password" id="" />
                <input className="btn btn-primary" type="submit" value="Submit" />
            </form>
            {
                registerError && <p className="text-2xl text-red-700">{registerError}</p>
            }
            {
                registerSuccess && <p className="text-2xl text-green-700">{registerSuccess}</p>
            }
        </div>
    );
};

export default SignUp;