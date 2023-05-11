import React from 'react';
import login from '../../assets/images/login/und_Completed_03xt.png'

const Login = () => {

    const handleLogin=event=>{
        event.preventDefault()
    }
    return (
        <div className="hero min-h-screen bg-base-200">
        <div className="hero-content flex-col lg:flex-row ">
          <div className="lg:text-left w-1/2">
            {/* <h1 className="text-5xl font-bold">Login now!</h1> */}
           <img src={login} alt="" />
          </div>
          <div className="card flex-shrink-0 w-1/2 max-w-sm shadow-2xl bg-base-100">
            <div className="card-body">
            <h1 className="text-5xl font-bold">Login now!</h1>
             <form onSubmit={handleLogin} >

             <div className="form-control">
                <label className="label">
                  <span className="label-text">Email</span>
                </label>
                <input type="text" placeholder="email" className="input input-bordered" />
              </div>
              <div className="form-control">
                <label className="label">
                  <span className="label-text">Password</span>
                </label>
                <input type="text" placeholder="password" className="input input-bordered" />
                <label className="label">
                  <a href="#" className="label-text-alt link link-hover">Forgot password?</a>
                </label>
              </div>
              <div className="form-control mt-6">
                
               <input className="btn btn-primary" type="submit" value="Login" />
              </div>

             </form>
            </div>
          </div>
        </div>
      </div>
    );
};

export default Login;