
import React, { useState } from 'react';

const UserPage = () => {
  const [isSignup, setSignup] = useState(false);

  const handleButtonClick = () => {
    setSignup(!isSignup);
  };

  return (
    <div className='flex' style={{justifyContent:'center'}}>
      <div className='mt-28 w-full' >
        <div className={`cont ${isSignup ? 's--signup' : ''}`}>
          <div className="form sign-in p-0">
            <h2 className='h2'>Welcome</h2>
            <label className='label'>
              <span className='span'>Email</span>
              <input className='input1' type="email" />
            </label>
            <label className='label'>
              <span className='span'>Password</span>
              <input className='input1' type="password" />
            </label>
            <p className="forgot-pass">Forgot password?</p>
            <button type="button" className="submit buttonUser1">
              Sign In
            </button>
          </div>
          <div className="sub-cont">
            <div className="img123">
              <div className={`img__text ${isSignup ? 'm--in' : 'm--up'}`}>
                <h3>
                  {isSignup
                    ? "If you already have an account, just sign in."
                    : "Don't have an account? Please Sign up!"}
                </h3>
              </div>
              <div className="img__btn" onClick={handleButtonClick}>
                <span className={isSignup ? 'm--in' : 'm--up'}>
                  {isSignup ? 'Sign In' : 'Sign Up'}
                </span>
              </div>
            </div>
            <div className="form sign-up">
              <h2 style={{textAlign:'center'}}>Create your Account</h2>
              <label className='label'>
                <span className='span'>Name</span>
                <input className='input1' type="text" />
              </label>
              <label className='label'>
                <span className='span'> Email</span>
                <input className='input1' type="email" />
              </label>
              <label className='label'>
                <span className='span'>Password</span>
                <input className='input1' type="password" />
              </label>
              <button type="button " className="submit buttonUser1 ">
                Sign Up
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default UserPage;