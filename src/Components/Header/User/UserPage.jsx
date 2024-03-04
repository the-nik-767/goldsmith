// import React, { useState } from 'react';
// import { Formik, Form, Field, ErrorMessage } from 'formik';
// import './style/UserLogo.css'

// const UserPage = () => {
//   const [isSignup, setSignup] = useState(false);

//   const handleButtonClick = () => {
//     setSignup(!isSignup);
//   };

//   return (
//     <div className='flex justify-center'>
//       <div className='mt-28 w-full max-w-screen-lg'>
//         <div className={`cont ${isSignup ? 's--signup' : ''}`}>
//           <Formik
//             initialValues={{
//               email: '',
//               password: '',
//               name: '',
//             }}
//             validate={(values) => {
//               const errors = {};
//               if (!values.email) {
//                 errors.email = 'Enter a valid email';
//               } else if (!/\S+@\S+\.\S+/.test(values.email)) {
//                 errors.email = 'Invalid email address';
//               }
//               if (!values.password) {
//                 errors.password = 'Enter Password';
//               } else if (values.password.length < 8) {
//                 errors.password = 'Password must be at least 8 characters long';
//               }
//               if (isSignup && !values.name) {
//                 errors.name = 'Enter Your Name';
//               }
//               return errors;
//             }}
//             onSubmit={(values) => {
//               alert(JSON.stringify(values, null, 2));
//             }}
//           >
//             {({ isSubmitting }) => (
//               <Form className="flex user-page-1 md:flex-row">
//                 <div className="form sign-in p-0 md:w-1/2 md:pr-2">
//                   <h2 className='h2'>Welcome</h2>
//                   <label className='label'>
//                     <span className='span'>Email</span>
//                     <Field className='input1' type="email" name="email" />
//                     <ErrorMessage name="email" component="div" className="error" />
//                   </label>
//                   <label className='label'>
//                     <span className='span'>Password</span>
//                     <Field className='input1' type="password" name="password" />
//                     <ErrorMessage name="password" component="div" className="error" />
//                   </label>
//                   <p className="forgot-pass">Forgot password?</p>
//                   <button type="submit" className="submit buttonUser1" disabled={isSubmitting}>
//                     Sign In
//                   </button>
//                   {/* <button type="submit" onClick={handleButtonClick} className="submit sign-up-btn-user buttonUser1" disabled={isSubmitting} >
//                     Sign up
//                   </button> */}
//                   <button type="button" onClick={handleButtonClick} className="submit sign-up-btn-user buttonUser1" disabled={isSubmitting}>
//                     Sign up
//                   </button>
//                 </div>
//                 <div className="sub-cont md:w-1/2 md:pl-2">
//                   <div className="img123">
//                     <div className={`img__text ${isSignup ? 'm--in' : 'm--up'}`}>
//                       <h3>
//                         {isSignup
//                           ? "If you already have an account, just sign in."
//                           : "Don't have an account? Please Sign up!"}
//                       </h3>
//                     </div>
//                     <div className="img__btn" onClick={handleButtonClick}>
//                       <span className={isSignup ? 'm--in' : 'm--up'}>
//                         {isSignup ? 'Sign In' : 'Sign Up'}
//                       </span>
//                     </div>

//                   </div>
//                   <div className="form sign-up">
//                     <h2 className="text-center mb-4">Create your Account</h2>
//                     <label className='label'>
//                       <span className='span'>Name</span>
//                       <Field className='input1' type="text" name="name" />
//                       <ErrorMessage name="name" component="div" className="error" />
//                     </label>
//                     <label className='label'>
//                       <span className='span'> Email</span>
//                       <Field className='input1' type="email" name="email" />
//                       <ErrorMessage name="email" component="div" className="error" />
//                     </label>
//                     <label className='label'>
//                       <span className='span'>Password</span>
//                       <Field className='input1' type="password" name="password" />
//                       <ErrorMessage name="password" component="div" className="error" />
//                     </label>
//                     <button type="submit" className="submit buttonUser1" disabled={isSubmitting}>
//                       Sign Up
//                     </button>
//                   </div>
//                 </div>
//               </Form>
//             )}
//           </Formik>
//         </div>
//       </div>
//     </div>
//   );
// };

// export default UserPage;



import React, { useState } from 'react';
import './style/UserLogo.css'; // Assuming your CSS file is named styles.css and is located in the same directory
import { Formik, Form, Field, ErrorMessage } from 'formik';
import * as Yup from 'yup';
const LoginForm = () => {
  const [activeForm, setActiveForm] = useState('login');

  const switchForm = (form) => {
    setActiveForm(form);
  };

  const loginSchema = Yup.object().shape({
    email: Yup.string().email('Invalid email').required('*Enter Your Email'),
    password: Yup.string().required('*Enter Your Password'),
  });
  
  const signupSchema = Yup.object().shape({
    name: Yup.string().required('*Enter Your Name'),
    email: Yup.string().email('Invalid email').required('*Enter Your Email'),
    password: Yup.string().required('*Enyer Your Password'),
  });
  

  return (
    <section className="forms-section" style={{outline:'2px solid white' ,outlineOffset:'-10px'}}>
     
      <div className="forms mt-10">
        <div className={`form-wrapper ${activeForm === 'login' ? 'is-active' : ''}`}>
          <button type="button" className="switcher switcher-login" onClick={() => switchForm('login')}>
            Login
            <span className="underline"></span>
          </button>
          <Formik
            initialValues={{ email: '', password: '' }}
            validationSchema={loginSchema}
            onSubmit={(values, actions) => {
            
              console.log('Logging in with:', values);
              actions.setSubmitting(false);
            }}
          >
            {({ isSubmitting }) => (
              <Form className="form form-login">
                <Field type="email" name="email" placeholder="Email" className="form-field"/>
                <ErrorMessage name="email" component="div" className="error-message" /><br />
                <Field type="password" name="password" placeholder="Password" className="form-field"/>
                <ErrorMessage name="password" component="div" className="error-message " />
                <button type="submit" className=" submit"disabled={isSubmitting}>Login</button>
              </Form>
            )}
          </Formik>
        </div>
        <div className={`form-wrapper ${activeForm === 'signup' ? 'is-active' : ''}`}>
          <button type="button" className="switcher switcher-signup  " onClick={() => switchForm('signup')}>
            Sign Up
            <span className="underline"></span>
          </button>
          <Formik
            initialValues={{ name: '', email: '', password: '' }}
            validationSchema={signupSchema}
            onSubmit={(values, actions) => {
              
              console.log('Signing up with:', values);
              actions.setSubmitting(false);
            }}
          >
            {({ isSubmitting }) => (
              <Form className="form form-signup">
                <Field type="text" name="name" placeholder="Name" className="form-field"/>
                <ErrorMessage name="name" component="div" className="error-message" /><br />
                <Field type="email" name="email" placeholder="Email" className="form-field"/>
                <ErrorMessage name="email" component="div" className="error-message" /><br/>
                <Field type="password" name="password" placeholder="Password" className="form-field"/>
                <ErrorMessage name="password" component="div" className="error-message" />
                <button type="submit" className=" submit" disabled={isSubmitting}>Sign Up</button>
              </Form>
            )}
          </Formik>
        </div>
      </div>
    </section>
  );
};

export default LoginForm;
