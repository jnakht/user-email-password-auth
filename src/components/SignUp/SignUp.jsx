

const SignUp = () => {
    return (
        <div className=" mt-[60px]">
            <h3 className="text-3xl mb-4">Please Register</h3>
            <form className=" flex flex-col">
                <input className=" bg-slate-500 mb-4 py-2 px-4" type="email" placeholder="Email Address" name="email" id="" />
                <input className="bg-slate-500 mb-4 py-2 px-4" type="password" placeholder="Password" name="password" id="" />
                <input className="btn btn-primary" type="submit" value="Submit" />
            </form>
        </div>
    );
};

export default SignUp;