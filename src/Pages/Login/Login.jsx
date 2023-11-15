import { TEInput, TERipple } from "tw-elements-react";
import { FcGoogle } from "react-icons/fc";
import formImg from "../../assets/others/login.png";
import formBg from "../../assets/others/bg.png";
import { Link } from "react-router-dom";
import { FaHome } from "react-icons/fa";
import {
  loadCaptchaEnginge,
  LoadCanvasTemplate,
  // LoadCanvasTemplateNoReload,
  validateCaptcha,
} from "react-simple-captcha";
import { useContext, useEffect, useRef, useState } from "react";
import { AuthContext } from "../../Providers/AuthProvider";

const Login = () => {
  const {signInUser} = useContext(AuthContext); 
  const captchaRef = useRef(null); 
  const [disabled, setDisabled] = useState(true); 

  useEffect(() => {
    loadCaptchaEnginge(6);
  }, []);

  const handleLogin = (e) => {
    e.preventDefault();
    const form = e.target;
    const email = form.email.value;
    const password = form.password.value;
    console.log(email, password);
    signInUser(email, password)
    .then(result => {
       const user = result.user; 
       console.log(user); 
    })
  };

  const  handleValidateCaptcha =() => {  
        const user_captcha_value = captchaRef.current.value; 
        console.log(user_captcha_value);  
        if(validateCaptcha(user_captcha_value)){
          setDisabled(false)
        }
        else{
          setDisabled(true) 
        }
  }
  return (
    <section className=" h-min" style={{ backgroundImage: `url(${formBg})` }}>
      <div className=" w-full p-12">
        <div
          className="flex lg:flex-row flex-col items-center justify-center lg:justify-between max-w-[1200px] mx-auto lg:px-8 px-6 py-8"
          style={{ boxShadow: "10px 10px 10px 10px rgba(0, 0, 0, 0.25)" }}
        >
          <div className="shrink-1 mb-12 grow-0 basis-auto md:mb-0 md:w-9/12 md:shrink-0 lg:w-6/12 xl:w-6/12">
            <Link to="/">
              <FaHome className="text-4xl text-[#D1A054] hover:scale-110 duration-300" />
            </Link>
            <img
              src={formImg}
              className="max-w-full flex-1"
              alt="Sample image"
            />
          </div>
          <div className="mb-12 md:mb-0 md:w-8/12 lg:w-5/12 xl:w-5/12 ">
            <h3 className="text-center text-[#151515] lg:text-[40px] md:text-[32px] text-[28px] font-bold font-inter">
              Login
            </h3>
            <form onSubmit={handleLogin}>
              <div className="flex flex-row items-center justify-center lg:justify-start">
                <p className="mb-0 mr-4 text-lg">Sign in with</p>
                <TERipple rippleColor="light">
                  <button
                    type="button"
                    className=" bg-white shadow-lg p-2 rounded-full"
                  >
                    <FcGoogle className=" text-2xl" />
                  </button>
                </TERipple>
              </div>
              <div className="my-4 flex items-center before:mt-0.5 before:flex-1 before:border-t before:border-[#D1A054] after:mt-0.5 after:flex-1 after:border-t after:border-[#D1A054]">
                <p className="mx-4 mb-0 text-center font-semibold dark:text-white text-[#D1A054]">
                  Or
                </p>
              </div>
              <TEInput
                type="email"
                name="email"
                label="Email address"
                size="lg"
                className="mb-6 text-[#444] border-[#D1A054]"
              ></TEInput>
              <TEInput
                type="password"
                name="password"
                label="Password"
                className="mb-6"
                size="lg"
              ></TEInput>
              <TEInput
                type="text"
                ref={captchaRef} 
                label={
                  <>
                    <LoadCanvasTemplate
                      reloadText="Captcha"
                      reloadColor="transparent"
                    />
                  </>
                }
                name="captcha"
                placeholder="Type the captcha above"
                className="mb-2"
                size="lg"
              >
              </TEInput>
              <button onClick={handleValidateCaptcha}  className="btn btn-outline btn-sm mb-6 text-[#D1A054] hover:bg-pink-700 hover:border-none  capitalize">Validate</button>
              <div className="mb-6 flex items-center md:justify-between lg:flex-row flex-col">
                <div className="mb-[0.125rem] block min-h-[1.5rem] pl-[1.5rem]">
                  <input
                    className="relative float-left -ml-[1.5rem] mr-[6px] mt-[0.15rem] h-[1.125rem] w-[1.125rem] appearance-none rounded-[0.25rem] border-[0.125rem] border-solid border-[#D1A054] outline-none before:pointer-events-none before:absolute before:h-[0.875rem] before:w-[0.875rem] before:scale-0 before:rounded-full before:bg-transparent before:opacity-0 before:shadow-[0px_0px_0px_13px_transparent] before:content-[''] checked:border-primary checked:bg-primary checked:before:opacity-[0.16] checked:after:absolute checked:after:-mt-px checked:after:ml-[0.25rem] checked:after:block checked:after:h-[0.8125rem] checked:after:w-[0.375rem] checked:after:rotate-45 checked:after:border-[0.125rem] checked:after:border-l-0 checked:after:border-t-0 checked:after:border-solid checked:after:border-[#D1A054]checked:after:bg-transparent checked:after:content-[''] hover:cursor-pointer hover:before:opacity-[0.04] hover:before:shadow-[0px_0px_0px_13px_rgba(0,0,0,0.6)] focus:shadow-none focus:transition-[border-color_0.2s] focus:before:scale-100 focus:before:opacity-[0.12] focus:before:shadow-[0px_0px_0px_13px_rgba(0,0,0,0.6)] focus:before:transition-[box-shadow_0.2s,transform_0.2s] focus:after:absolute focus:after:z-[1] focus:after:block focus:after:h-[0.875rem] focus:after:w-[0.875rem] focus:after:rounded-[0.125rem] focus:after:content-[''] checked:focus:before:scale-100 checked:focus:before:shadow-[0px_0px_0px_13px_#3b71ca] checked:focus:before:transition-[box-shadow_0.2s,transform_0.2s] checked:focus:after:-mt-px checked:focus:after:ml-[0.25rem] checked:focus:after:h-[0.8125rem] checked:focus:after:w-[0.375rem] checked:focus:after:rotate-45 checked:focus:after:rounded-none checked:focus:after:border-[0.125rem] checked:focus:after:border-l-0 checked:focus:after:border-t-0 checked:focus:after:border-solid checked:focus:after:border-white checked:focus:after:bg-transparent dark:border-[#D1A054]dark:checked:border-primary dark:checked:bg-primary dark:focus:before:shadow-[0px_0px_0px_13px_rgba(255,255,255,0.4)] dark:checked:focus:before:shadow-[0px_0px_0px_13px_#3b71ca]"
                    type="checkbox"
                    value=""
                    id="exampleCheck2"
                  />
                  <label
                    className="inline-block pl-[0.15rem] hover:cursor-pointer text-[#D1A054]"
                    htmlFor="exampleCheck2"
                  >
                    Remember me
                  </label>
                </div>
                <Link className="text-[#D1A054]" href="#!">
                  Forgot password?
                </Link>
              </div>

              <div className="text-center gap-4 items-center">
                <TERipple rippleColor="light">
                  <button disabled={disabled} 
                    type="submit"
                    className="btn btn-glass bg-[#DBB984] hover:bg-[#DBB984]  text-white font-bold font-inter w-full px-5 py-2 rounded-sm "
                  >
                    Login
                  </button>
                </TERipple>
                <div className="flex lg:flex-row md:flex-col gap-4 my-5">
                  <div>
                    <Link className="mb-0 mt-2 pt-1 text-sm font-semibold text-[#D1A054]">
                      Dont have an account?{" "}
                    </Link>
                  </div>
                  <Link to="/register">
                    <button
                      href="#!"
                      className="transition duration-150 ease-in-out text-[#D1A054] hover:text-danger-600 focus:text-danger-600 active:text-danger-700"
                    >
                      Register
                    </button>
                  </Link>
                </div>
              </div>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Login;
