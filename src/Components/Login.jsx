import { useState, useRef } from "react";
import { checkValidForm } from "../utils/FormValidation";
import { createUserWithEmailAndPassword, updateProfile } from "firebase/auth";
import { signInWithEmailAndPassword } from "firebase/auth";
import { auth } from "../utils/Firebase";
import { useNavigate } from "react-router-dom";
import { useDispatch } from "react-redux";
import { addUser } from "../store/reducers/userSlice";

const Login = () => {
  const [isSignedIn, setIsSignedIn] = useState(true);
  const [errorMsg, setErrorMsg] = useState(null);
  const email = useRef(null);
  const name = useRef(null);
  const password = useRef(null);
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const HandleForm = () => {
    setIsSignedIn(!isSignedIn);
  };
  const handleFormValidation = () => {
    const message = checkValidForm(
      email.current.value,
      password.current.value,
      // name.current.value
    );
    setErrorMsg(message);

    if (message) return;

    if (!isSignedIn) {
      createUserWithEmailAndPassword(
        auth,
        email.current.value,
        password.current.value
      )
        .then((userCredential) => {
          const user = userCredential.user;
          updateProfile(user, {
            displayName: name.current.value
          }).then(() => {
            const { uid, email, displayName } = auth.currentUser;
            dispatch(addUser({ uid: uid, email: email, displayName: displayName }));
             navigate("/home")
          }).catch((error) => {
             setErrorMsg(error.message);
          });
        
          navigate("/home")
        })
        .catch((error) => {
          const errorCode = error.code;
          const errorMessage = error.message;
          // ..
        });
    } else {
      signInWithEmailAndPassword(
        auth,
        email.current.value,
        password.current.value
      )
        .then((userCredential) => {
          const user = userCredential.user;
          navigate("/home")
        })
        .catch((error) => {
          const errorCode = error.code;
          const errorMessage = error.message;
        });
    }
  };
  return (
    <>
      <div
        style={{
          background: `linear-gradient(rgba(0,0,0,.7),rgba(0,0,0,.5),rgba(0,0,0,.8)),url(https://static.vecteezy.com/system/resources/previews/029/785/028/non_2x/director-s-chair-with-megaphone-and-clapboard-free-photo.jpg)`,
          backgroundSize: "cover",
          backgroundRepeat: "no-repeat",
        }}
        className="w-screen h-screen relative overflow-hidden"
      >
        <div className=" flex justify-center mt-[13%]">
          <form
            onSubmit={(e) => e.preventDefault()}
            className="w-3/12 py-3 pb-4 bg-black/40 backdrop-blur rounded-lg px-[2%]"
          >
            <h1 className="font-black text-3xl text-[#dadada] my-3 pb-2">
              {isSignedIn ? "Sign In" : "Sign Up"}
            </h1>
            {!isSignedIn && (
              <input
                ref={name}
                type="text"
                placeholder="Enter Full Name"
                className="py-3 rounded-md w-full mb-4 px-3 bg-zinc-700 outline-none text-zinc-100"
              />
            )}
            <input
              ref={email}
              type="email"
              placeholder="Enter Email"
              className="py-3 rounded-md w-full  px-3 bg-zinc-700 outline-none text-zinc-100 mb-4"
            />
            <input
              ref={password}
              type="password"
              placeholder="Enter Password"
              className="py-3 rounded-md w-full  px-3 bg-zinc-700 outline-none text-zinc-100 "
            />
            <p className="text-sm font-semibold my-4 text-red-600">
              {errorMsg}
            </p>
            <button
              onClick={handleFormValidation}
              className="py-2 px-3 w-full rounded-md bg-[#FF671F] text-white font-semibold"
              type="submit"
            >
              {isSignedIn ? "Sign In" : "Sign Up"}
            </button>
            <p
              onClick={HandleForm}
              className="mt-3 cursor-pointer text-[#dadada] text-sm ml-1"
            >
              {isSignedIn
                ? "If not Register? Please Sign Up"
                : "Already User? Please Sign In"}
            </p>
          </form>
        </div>
      </div>
    </>
  );
};

export default Login;
