// // src/components/Login.js
// import React from 'react';
// import { useDispatch } from 'react-redux';
// import { loginWithGoogle } from '../actions/authActions';
// import styles from './Login.module.css';
// const Login = () => {
//   const dispatch = useDispatch();

//   const handleGoogleLogin = () => {
//     dispatch(loginWithGoogle());
//   };

//   return (
//     <div>
//       <h1>Login</h1>
//       <div className='w-full'>
//         <div className={styles.trapeziumShape}>
//           Content inside the trapezium div
//         </div>
//       </div>

//       <button onClick={handleGoogleLogin}>Login with Google</button>
//     </div>
//   );
// };

// export default Login;

import React from 'react'
import { useDispatch } from 'react-redux';
import { loginWithGoogle } from '../actions/authActions';

function Login() {
  const dispatch = useDispatch();

  const handleGoogleLogin = () => {
    dispatch(loginWithGoogle());
  };
  return (
    <div className='min-h-screen py-16 bg-gradient-to-br from-sky-50 to-gray-200 flex items-center w-full'>

      <div class="  w-full ">
        <div class="relative container m-auto px-6 text-gray-100 md:px-12 xl:px-40">
          <div class="m-auto md:w-8/12 lg:w-6/12 xl:w-6/12">
            <div class="rounded-xl bg-gradient-to-br from-[#4285F4] to-[#286DE0] shadow-xl">
              <div class="p-6 sm:p-16">
                <div class="space-y-4">
                  <img src="\BoardLoginLogo.svg" className='mb-10' alt="Board Icon" />
                  <h2 class="mb-8 text-2xl text-white font-bold">Sign in to unlock the <br /> best of Board.</h2>
                </div>
                <div class="mt-16 grid space-y-4">
                  <button class="group h-12 px-6 border-2 border-gray-300 rounded-full transition duration-300 
 hover:border-blue-400 focus:bg-blue-50 active:bg-blue-100" onClick={handleGoogleLogin}>
                    <div class="relative flex items-center space-x-4 justify-center">
                      <img src="https://tailus.io/sources/blocks/social/preview/images/google.svg" class="absolute left-0 w-5" alt="google logo" />
                      <span class="block w-max font-semibold tracking-wide text-white text-sm transition duration-300  sm:text-base">Continue with Google</span>
                    </div>
                  </button>

                </div>

                <div class="mt-32 space-y-4 text-white text-center sm:-mb-8">
                  <p class="text-xs">By proceeding, you agree to our <a href="#" class="underline">Terms of Use</a> and confirm you have read our <a href="#" class="underline">Privacy and Cookie Statement</a>.</p>
                  <p class="text-xs">This site is protected by reCAPTCHA and the <a href="#" class="underline">Google Privacy Policy</a> and <a href="#" class="underline">Terms of Service</a> apply.</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>

  )
}

export default Login