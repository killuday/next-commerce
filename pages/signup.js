import { useForm, Controller } from "react-hook-form";
import axios from "axios";
import Link from "next/link";
import { useState } from "react";

export default function Signup() {
  const {
    control,
    handleSubmit,
    formState: { errors },
    register,
    reset,
  } = useForm();

  const [errorMessage, setErrorMessage] = useState(null);

  const onSubmit = async (data) => {
    try {
      // Send a POST request to the signup API
      const response = await axios.post("http://localhost:4000/api/signup", data);

      // Handle the response, e.g., display a success message
      console.log(response.data.message, response.data.data);
      reset();
    } catch (error) {
      // Handle errors, e.g., display an error message
      console.error("Error registering user:", error);

      // Set the error message to be displayed in the UI
      if (error.response && error.response.data) {
        setErrorMessage(error.response.data.error);
      } else {
        setErrorMessage("An error occurred while signing up.");
      }
    }
  };

  return (
    <div className="max-w-md mx-auto my-10 p-10 border rounded-lg bg-white">
      <h2 className="text-3xl font-bold text-center mb-14">Sign Up</h2>
      <form onSubmit={handleSubmit(onSubmit)}>
        <div className="mb-4">
          <label htmlFor="username" className="block text-sm font-medium text-gray-700">
            Username
          </label>
          <Controller
            name="username"
            control={control}
            defaultValue=""
            render={({ field }) => (
              <input
                {...field}
                type="text"
                id="username"
                {...register("username", {
                  required: "Username is required",
                  minLength: {
                    value: 4,
                    message: "Username must be at least 4 characters long",
                  },
                })}
                className="mt-1 p-2 border border-gray-300 rounded-md w-full focus:outline-none focus:ring focus:ring-blue-300"
              />
            )}
          />
          {errors.username && (
            <p className="text-red-500 text-sm">{errors.username.message}</p>
          )}
        </div>

        <div className="mb-4">
          <label htmlFor="email" className="block text-sm font-medium text-gray-700">
            Email
          </label>
          <Controller
            name="email"
            control={control}
            defaultValue=""
            render={({ field }) => (
              <input
                {...field}
                type="email"
                id="email"
                {...register("email", {
                  required: "Email is required",
                  pattern: {
                    value: /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,4}$/,
                    message: "Invalid email format",
                  },
                })}
                className="mt-1 p-2 border border-gray-300 rounded-md w-full focus:outline-none focus:ring focus:ring-blue-300"
              />
            )}
          />
          {errors.email && (
            <p className="text-red-500 text-sm">{errors.email.message}</p>
          )}
          {errorMessage && (
        <p className="text-red-500 text-sm " >{errorMessage}</p>
      )}
        </div>

        <div className="mb-4">
          <label htmlFor="password" className="block text-sm font-medium text-gray-700">
            Password
          </label>
          <Controller
            name="password"
            control={control}
            defaultValue=""
            render={({ field }) => (
              <input
                {...field}
                type="password"
                id="password"
                {...register("password", {
                  required: "Password is required",
                  pattern: {
                    value: /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z]).{6,}$/,
                    message:
                      "Password must contain at least 6 characters, including one uppercase letter, one lowercase letter, and one number.",
                  },
                })}
                className="mt-1 p-2 border border-gray-300 rounded-md w-full focus:outline-none focus:ring focus:ring-blue-300"
              />
            )}
          />
          {errors.password && (
            <p className="text-red-500 text-sm">{errors.password.message}</p>
          )}
        </div>

        <div className="mt-2 mb-4">
          <Link href="/login">
            <p className="text-blue-500 hover:underline text-center">
              Already have an account? Log in here.
            </p>
          </Link>
        </div>

        <div className="flex justify-center">
          <button
            type="submit"
            className="px-4 py-2 w-full bg-blue-500 text-white rounded-md hover:bg-blue-700 focus:outline-none focus:ring focus:ring-blue-300"
          >
            Sign Up
          </button>
        </div>
      </form>
    </div>
  );
}
