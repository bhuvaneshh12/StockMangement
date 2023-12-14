import React from'react'
import Login from './LogIn'
// import SignUp from './SignUp'
// import Navigate from './Navigate';
import {BrowserRouter,Routes,Route} from "react-router-dom";
export default function Head(){
 {
  
    return (
      <div>
       {/* <SignUp/>  */}
       <LogIn/>
             {/* <BrowserRouter>
      <Navigate></Navigate>
      <Routes>
          <Route path="/Login" element= <Login/> > </Route>
          <Route path="/Signup" element= <SignUp/> > </Route>
        </Routes>
      </BrowserRouter> */}
      </div>
    )
  }
}
