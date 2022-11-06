import React,{useState,useEffect} from "react";
import styled from "styled-components";
import styles from "../Styles/SignUp.module.css";
import {useNavigate} from 'react-router-dom';

export const SignUp = () => {
    const navigate = useNavigate();
    const [error,setError]= useState(false);
    const [validData,setValidData]= useState(false);
    const [inpval,setInpVal]= useState({
        username:"",
        email:"",
        password:""
    })

  const handleSubmit = (e) => {
    e.preventDefault();
   
  };

  const handleChange=(e)=>{
    setInpVal({
        ...inpval,
        [e.target.name]:e.target.value
    })
  }

  return (
    <>
      <div className={styles.signupWrapper}>
        <div className={styles.signupDiv}>
          <div className={styles.signupImage}>
            <img
              src="https://tse3.mm.bing.net/th?id=OIP.W4JwOf9fsiNIwPhyOyHfnQHaE4&pid=Api&P=0"
              alt="FACE PREP"
            />
          </div>
          <h2> Start Your Journey</h2>
          <form >
            <div className={styles.formWrapper}>

            <div className={styles.formDiv}>
                <InsideDiv>
                  <label htmlFor="username">UserName</label>
                </InsideDiv>
                <InsideDiv>
                  <input className={styles.inputWrapper}  type="text" name="username" onChange={handleChange} />
                </InsideDiv>
              </div>

              <div className={styles.formDiv}>
                <InsideDiv>
                  <label htmlFor="email">Email</label>
                </InsideDiv>
                <InsideDiv>
                  <input className={styles.inputWrapper}  type="email" name="email" onChange={handleChange} />
                </InsideDiv>
              </div>

              <div className={styles.formDiv}>
                <InsideDiv>
                  <label htmlFor="password">Password</label>
                </InsideDiv>
                <InsideDiv>
                  <input className={styles.inputWrapper} type="password" name="password" onChange={handleChange} />
                </InsideDiv>
              </div>
               
              
              <FormButtonDiv>
                <button className={styles.btn} onClick={handleSubmit} >CREATE</button>
              </FormButtonDiv>
            </div>
          </form>
        </div>
      </div>
    </>
  );
};


const InsideDiv = styled.div`
  display: flex;
  justify-content: start;
  font-size: 15px;
`;

const FormButtonDiv = styled.div`
  width: 70%;
`;