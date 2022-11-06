

  export const Validation=(val)=>{
    
    let error={};
     let signupData=JSON.parse(localStorage.getItem('credential'))||[];
    if(!val.fullname && val.fullname.length<5){
        error.fullname='Name of atleast 5 character is required.'
    }
    if(!val.email){
      error.email="Email is required."
    }
    else if(!/\S+@\S+\.\S+/.test(val.email)){
        error.email='Password is required.'
    }
    if(!val.password){
        error.password='Password is required'
    }
    else if(val.password.length<5){
        error.password="Password must be more than five character."
    }
    else{
       signupData.push(val);
       localStorage.setItem('credential',JSON.stringify(signupData))
    }
    return error;
  }