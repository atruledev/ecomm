import React from "react";
import { useForm } from "react-hook-form";
import { useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import { counterAction } from "../../Store";
import axios from 'axios';


function Login() {
  const disptach = useDispatch();
  const navigate = useNavigate();

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const submitdata = (formDetails) => {

    try {
      if(formDetails){
        console.log('im here');
        axios.post('http://localhost:3000/api/login', formDetails)
        .then(res=>
        {
          console.log("response");
          if(res.status === 200){
            const token = localStorage.getItem("token");
            if(token){
            console.log("here is your data",res);
            navigate("/cart");
            disptach(counterAction.Authentication({authvalue: true}));
            }
          }else{
            console.log("soory something went wrong", res.data.message);
          }
        }
        )
      }
      
    } catch (error) {
      console.log("error while login", error)
      
    }
    
 
  };
  return (
    <>
      <section>
        <div class="flex flex-col items-center justify-center  py-6 mx-auto md:h-screen lg:py-0">
          <div class="w-full bg-white rounded-lg shadow dark:border md:mt-0 sm:max-w-md xl:p-0 dark:text-black dark:border-gray-700">
            <div class="p-6 space-y-4 md:space-y-6 sm:p-8">
              <h1 class="text-xl font-bold leading-tight tracking-tight text-black md:text-2xl">
                Sign in to your account
              </h1>
              <form
                class="space-y-4 md:space-y-6"
                onSubmit={handleSubmit(submitdata)}
              >
                <div>
                  <label
                    for="email"
                    class="block mb-2 text-sm font-medium text-black "
                  >
                    Your email
                  </label>
                  <input
                    type="email"
                    name="email"
                    {...register("email", {
                      required: { value: true, message: "email is required" },
                    })}
                    className="bg-gray-50 border border-gray-300 text-black sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:focus:border-blue-500"
                  />
                  {errors.email && (
                    <span style={{ color: "red" }}>{errors.email.message}</span>
                  )}
                </div>
                <div>
                  <label
                    for="password"
                    class="block mb-2 text-sm font-medium text-black"
                  >
                    Password
                  </label>
                  <input
                    type="password"
                    name="password"
                    autoComplete="on"
                    {...register("password", {
                      required: {
                        
                        message: "password is required",
                      },
                      minLength: {
                        value: 3,
                        message: "Password must be at least 3 characters long!",
                      },
                    })}
                    placeholder="••••••••"
                    class="bg-gray-50 border border-gray-300 text-black sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:focus:border-blue-500"
                    required=""
                  />
                  {errors.password && (
                    <span style={{ color: "red" }}>
                      {errors.password.message}
                    </span>
                  )}
                </div>
                <div class="flex items-center justify-between">
                  <div class="flex items-start">
                    <div class="flex items-center h-5">
                      <input
                        id="remember"
                        aria-describedby="remember"
                        type="checkbox"
                        class="w-4 h-4 border border-gray-300 rounded bg-gray-50 focus:ring-3 focus:ring-primary-300 dark:bg-gray-700 dark:border-gray-600 dark:focus:ring-primary-600 dark:ring-offset-gray-800"
                        required=""
                      />
                    </div>
                    <div class="ml-3 text-sm">
                      <label for="remember" class="text-gray-500">
                        Remember me
                      </label>
                    </div>
                  </div>
                  <a
                    href="#"
                    class="text-sm font-medium text-primary-600 hover:underline dark:text-primary-500"
                  >
                    Forgot password?
                  </a>
                </div>
                <button
                  type="submit"
                  class="w-full bg-black text-white bg-primary-600 hover:bg-primary-700 focus:ring-4 focus:outline-none focus:ring-primary-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-primary-600 dark:hover:bg-primary-700 dark:focus:ring-primary-800"
                >
                  Sign in
                </button>
                <p class="text-sm font-light text-black">
                  Don’t have an account yet?{" "}
                  <a
                    href="/signup"
                    class="font-medium text-primary-600 hover:underline dark:text-primary-500"
                  >
                    Sign up
                  </a>
                </p>
              </form>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}

export default Login;
