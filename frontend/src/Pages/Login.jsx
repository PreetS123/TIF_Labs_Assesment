import React,{useState} from "react";
import styled from "styled-components";
import styles from "../Styles/Login.module.css";
import {useNavigate} from 'react-router-dom';

export const Login = () => {
    const navigate = useNavigate();
    const [logdata,setLogData]= useState({
        email:"",
        password:""
    })

  const handleSubmit = (e) => {
    e.preventDefault();
    const getUserData= JSON.parse(localStorage.getItem('credential'));

    const {email,password}=logdata;
    if(getUserData && getUserData.length){
      const userLogin=getUserData.filter(item=>{
        return item.email===email && item.password===password
      })
      if(userLogin.length===0){
        alert('Invalid Credentials')
      }
      else{
        alert('Login Successfull');
        navigate('/home')
      }
    }
  };

  const handleChange=(e)=>{
    setLogData({
        ...logdata,
        [e.target.name]:e.target.value
    })
  }

  return (
    <>
      <div className={styles.loginWrapper}>
        <div className={styles.loginDiv}>
          <div className={styles.loginImage}>
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
                <button className={styles.btn} onClick={handleSubmit} >LOGIN</button>
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