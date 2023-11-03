import React, { useContext } from "react";
import { validate } from "../../utils/validate";
import { createUserWithEmailAndPassword,signInWithEmailAndPassword } from "firebase/auth";
import { auth } from "../../utils/firebase";
import UserContext from "../../utils/UserContext";

const Button = ({
  border,
  marginTop,
  width,
  marginX,
  marginBottom,
  paddingY,
  color,
  nameRef,
  emailRef,
  passwordRef,
  errors,
  setErrors,
  setAuthData
}) => {
  const userData=useContext(UserContext)

  function handleSubmit() {
    console.log(nameRef, passwordRef, emailRef);
    const validations = validate(
      nameRef?.current?.value,
      emailRef?.current?.value,
      passwordRef?.current?.value
    );
    setErrors(validations);
    if (
      validations[1] === true &&
      validations[2] === true &&
      nameRef?.current === null
    ) {

      signInWithEmailAndPassword(
        auth,
        emailRef?.current?.value,
        passwordRef?.current?.value
        )
  .then((userCredential) => {
    
    const user = userCredential.user;
      console.log(user)
      setAuthData(user)
     
      console.log(userData)

  })
  .catch((error) => {
    const errorCode = error.code;
    const errorMessage = error.message;
    console.log(error)
  });

    } else if (
      validations[0] ===true &&
      validations[1] === true &&
      validations[2] === true
    ) {
      createUserWithEmailAndPassword(
        auth,
        emailRef?.current?.value,
        passwordRef?.current?.value
      )
        .then((userCredential) => {
          // Signed up
          const user = userCredential.user;
          console.log(user)
          setAuthData(user)
        })
        .catch((error) => {
          const errorCode = error.code;
          const errorMessage = error.message;
          console.log(error)
        });
    }
  }
  return (
    <button
      onClick={handleSubmit}
      className={`${border} 
     ${marginTop} ${width} ${marginX} ${marginBottom} ${paddingY} ${color} 'rounded-sm' `}>
      Submit
    </button>
  );
};

export default Button;
