import { Fragment } from 'react';
import { Dialog, Transition } from '@headlessui/react';
import { useForm, Controller } from 'react-hook-form';
import axios from 'axios';
import Link from 'next/link';

export default function SignupForm({ isOpen, onClose }) {
  const {
    control,
    handleSubmit,
    formState: { errors },
    register,
  } = useForm();

  const onSubmit = async (data) => {
    try {
      // Send a POST request to the signup API
      const response = await axios.post('http://localhost:4000/api/signup', data);

      // Handle the response, e.g., display a success message
      console.log(response.data.message, response.data.data);

      // Close the dialog or perform any other action
      onClose();
    } catch (error) {
      // Handle errors, e.g., display an error message
      console.error('Error registering user:', error);
    }
  };

  return (
    <Transition.Root show={isOpen} as={Fragment}>
      <Dialog as="div" className="fixed inset-0 z-10 overflow-y-auto" onClose={onClose}>
        <div className="flex items-center justify-center min-h-screen">
          <Transition.Child
            as={Fragment}
            enter="ease-out duration-300"
            enterFrom="opacity-0"
            enterTo="opacity-100"
            leave="ease-in duration-200"
            leaveFrom="opacity-100"
            leaveTo="opacity-0"
          >
            <Dialog.Overlay className="fixed inset-0 bg-black bg-opacity-30" />
          </Transition.Child>

          <Transition.Child
            as={Fragment}
            enter="ease-out duration-300"
            enterFrom="opacity-0 translate-y-4"
            enterTo="opacity-100 translate-y-0"
            leave="ease-in duration-200"
            leaveFrom="opacity-100 translate-y-0"
            leaveTo="opacity-0 translate-y-4"
          >
            <div className="bg-white rounded-lg p-4 w-full max-w-md">
              <Dialog.Title className="text-xl font-semibold">Sign Up</Dialog.Title>

              <form onSubmit={handleSubmit(onSubmit)}>
                <div className="mt-4">
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
                        {...register('username', {
                          required: 'Username is required',
                          minLength: {
                            value: 4,
                            message: 'Username must be at least 4 characters long',
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

                <div className="mt-4">
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
                        {...register('email', {
                          required: 'Email is required',
                          pattern: {
                            value: /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,4}$/,
                            message: 'Invalid email format',
                          },
                        })}
                        className="mt-1 p-2 border border-gray-300 rounded-md w-full focus:outline-none focus:ring focus:ring-blue-300"
                      />
                    )}
                  />
                  {errors.email && (
                    <p className="text-red-500 text-sm">{errors.email.message}</p>
                  )}
                </div>

                <div className="mt-4">
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
                        {...register('password', {
                          required: 'Password is required',
                          pattern: {
                            value: /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z]).{6,}$/,
                            message:
                              'Password must contain at least 6 characters, including one uppercase letter, one lowercase letter, and one number.',
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
                <div className="mt-6">
                <Link href="/login">
                  <p className="text-blue-500 hover:underline text-center">Already have an account? Log in here.</p>
                </Link>
              </div>
                <div className='flex justify-between '>

                <div className="mt-6">
                  <button
                    type="submit"
                    className="px-4 py-2 text-white bg-blue-500 rounded-md hover-bg-blue-700 focus:outline-none focus:ring focus:ring-blue-300"
                  >
                    Sign Up
                  </button>
                </div>
              <div className="mt-6">
                <button
                  onClick={onClose}
                  className="px-4 py-2 text-gray-600 bg-gray-200 rounded-md hover-bg-gray-300 focus:outline-none focus:ring focus:ring-gray-400"
                >
                  Cancel
                </button>
              </div>
                </div>
              </form>
             
            </div>
          </Transition.Child>
        </div>
      </Dialog>
    </Transition.Root>
  );
}
