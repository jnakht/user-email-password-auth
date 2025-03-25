import { createUserWithEmailAndPassword } from "firebase/auth";
import auth from "../../firebase/firebase.config";
import { useState } from "react";
import { IoEye, IoEyeOff } from "react-icons/io5";
const SignUp = () => {
    const [registerError, setRegisterError] = useState('');
    const [registerSuccess, setRegisterSuccess] = useState('');
    const [showPassword, setShowPassword] = useState(false);
    const [termsAccepted, setTermsAccepted] = useState(false);
    const handleRegister = e => {
        e.preventDefault();
        setRegisterError('');
        setRegisterSuccess('');
        const userEmail = e.target.email.value;
        const userPassword = e.target.password.value;
        console.log('submitted with email: ', userEmail + ' password: ', userPassword);
        if (userPassword.length < 6) {
            setRegisterError('Password Should be at least 6 characters long');
            return;
        }
        // regular expression on password
        else if (!/[A-Z]/.test(userPassword)) {
            setRegisterError('Password must contain at least one uppercase letter');
            return;
        }
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

    const handleTermsAndConditions = (e) => {
        if(e.target.checked) {
            setTermsAccepted(true);
        }
        else {
            setTermsAccepted(false);
        }
    }
    return (
        <div className=" mt-[60px]">
            <h3 className="text-3xl mb-4">Please Register</h3>
            <form onSubmit={handleRegister} className=" flex flex-col relative">
                <input className=" bg-slate-500 mb-4 py-2 px-4" type="email" placeholder="Email Address" name="email" id="" required />
                <input className="bg-slate-500 mb-4 py-2 px-4" type={showPassword ? 'text' : 'password'} placeholder="Password" name="password" id="" required/>
                <span onClick={() => setShowPassword(!showPassword)} className="absolute top-17 right-5">
                    {
                        showPassword ? <IoEye /> 
                        :
                        <IoEyeOff />
                    }
                </span>
                <div className="mt-4 mb-6 flex gap-2">
                     <input onClick={handleTermsAndConditions} type="checkbox" defaultChecked           className="checkbox checkbox-success" />
                     <p>Accept the Terms and Conditions</p>
                </div>
                <input disabled={!termsAccepted} className="btn btn-primary" type="submit" value="Submit" />
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