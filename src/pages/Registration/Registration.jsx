import { Link, useNavigate } from "react-router-dom";
import { FcGoogle } from "react-icons/fc";
import { useContext, useState } from "react";
import { AuthContext } from "../../Providers/AuthProvider";
import Swal from "sweetalert2";
import { GoogleAuthProvider, getAuth, signInWithPopup } from "firebase/auth";
import app from "../../Firebase/firebase.config";


const Registration = () => {
  const [registerError, setRegisterError] = useState("");
  const [success, setSuccess] = useState("");

  const navigate = useNavigate();
  const { createUser } = useContext(AuthContext);

  const handleRegister = (e) => {
    e.preventDefault();
    console.log(e.currentTarget);
    const form = new FormData(e.currentTarget);
    const email = form.get("email");
    const password = form.get("password");
    const name = form.get("displayName");
    const photo = form.get("photo");
    console.log(email, password, name, photo);
    setRegisterError("");
    setSuccess("");

    if (password.length < 6) {
      setRegisterError("Password should be at least 6 characters or longer");
      return;
    } else if (!/[A-Z]/.test(password)) {
      setRegisterError(
        "your password should have at least one uppercase character"
      );
      return;
    } else if (!/[!@#$%^&*]/.test(password)) {
      setRegisterError(
        "your password should have at least one special(!,@,#,$,%,^,&,*) character"
      );
      return;
    }

    // create user
    createUser(email, password)
      .then((result) => {
        console.log(result.user);
        Swal.fire("Welcome", "Account created successfully", "success");
      })
      .catch((error) => {
        console.error(error);
        setRegisterError(error.message);
        Swal.fire("Sorry", "Account creation failed", "error");
      });
  };
  // googleSignIn
  const auth = getAuth(app);
  const provider = new GoogleAuthProvider();
  const handleGoogle = () => {
    signInWithPopup(auth, provider)
      .then((result) => {
        console.log(result.user);

        // navigate after login
        navigate(location?.state ? location.state : "/");
      })
      .catch((error) => {
        console.error(error);
      });
  };

  return (
    <div>
      <div className="w-4/5 md:3/4 lg:w-2/4 mx-auto py-20 border my-10 p-10">
        <h2 className="text-4xl text-center font-bold">Please Register</h2>
        <form onSubmit={handleRegister} className="card-body">
          <div className="form-control">
            <label className="label">
              <span className="label-text">Email</span>
            </label>
            <input
              type="email"
              placeholder="email"
              className="input input-bordered"
              required
              name="email"
            />
          </div>
          <div className="form-control">
            <label className="label">
              <span className="label-text">Password</span>
            </label>
            <input
              type="password"
              placeholder="password"
              className="input input-bordered"
              required
              name="password"
            />
            <label className="label">
              <a href="#" className="label-text-alt link link-hover">
                Forgot password?
              </a>
            </label>
          </div>

          {registerError && <p className="text-red-600"> {registerError} </p>}
          {success && <p className="text-green-600">Registration Successful</p>}

          <div className="form-control mt-6">
            <button className="btn btn-primary">Register</button>
          </div>
        </form>
        <p className="text-center my-3 mb-2">
          Already have an account? Please{" "}
          <Link className="text-sm font-bold text-blue-600" to="/login">
            login
          </Link>
        </p>
        <div
          onClick={handleGoogle}
          className="flex text-sm md:text-md lg:text-xl justify-center items-center gap-2 border w-full mx-auto px-3  py-2"
        >
          <FcGoogle className="text-2xl"></FcGoogle>
          <button className="">Register With google</button>
        </div>
      </div>
    </div>
  );
};

export default Registration;
