import { useState } from 'react'
import style from './RegisterPage.module.css'
const RegisterPage = () =>{
    const [visible,setVisible] = useState(true);

    const registerClickHandler = () =>{
        setVisible(false)
    }
    const logInClickHandler = () => {
      setVisible(true);
    };
    return (
      <>
        <div
          className={style.formBoxOne}
          style={{ display: visible ? "flex" : "none" }}
        >
          <h1 className={style.heading}>Register</h1>
          <div className={style.registerForm}>
            <input
              type="text"
              name=""
              id="userName"
              placeholder="Enter Your Name"
            />
            <input
              type="email"
              name=""
              id="userEmail"
              placeholder="Enter Your Email"
            />
            <input
              type="password"
              name=""
              id="userPassword"
              placeholder="Enter Your Password"
            />
          </div>
          <button className={style.registerBtn}>Register</button>
          <a onClick={registerClickHandler} href="#loginForm">
            <span className={style.alreadyAcc}>already have account?</span>{" "}
            login
          </a>
        </div>
        <div
          className={style.formBoxTwo}
          style={{ display: visible ? "none" : "flex" }}
        >
          <h1 className={style.heading}>Log-in</h1>
          <div className={style.logInForm}>
            <input
              type="email"
              name=""
              id="userEmail"
              placeholder="Enter Your Email"
            />
            <input
              type="password"
              name=""
              id="userPassword"
              placeholder="Enter Your Password"
            />
            <input
              type="password"
              name=""
              id="confirmPassword"
              placeholder="Re-enter Password"
            />
          </div>
          <button className={style.registerBtn}>Log-in</button>
          <a onClick={logInClickHandler} href="#loginForm">
            <span className={style.alreadyAcc}>Do not have account?</span>{" "}
            Register
          </a>
        </div>
      </>
    );
};
export default RegisterPage;