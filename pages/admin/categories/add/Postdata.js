import axios from "axios";
import React, { useState } from "react";
import { Controller, useForm } from "react-hook-form";
import Select from "react-select";

const PostData = () => {
  const {
    register,
    handleSubmit,
    reset,
    control,
    formState: { errors },
  } = useForm();
  const sizes = ["XS", "S", "M", "L", "XL", "XXL"];
  const [selectedSizes, setSelectedSizes] = useState([]);
  const [successMessage, setSuccessMessage] = useState("");
  const onSubmit = async (formData) => {
    try {
      console.log("Form Data:", formData);
      formData.size = selectedSizes.join(","); // Assign the selected sizes to the form data

      // Make a POST request to your API endpoint using Axios
      const response = await axios.post(
        "http://localhost:4000/api/addproduct",
        formData
      );

      // Handle the successful response, e.g., show a success message
      setSuccessMessage("Product added successfully!");
      reset();
      setSelectedSizes([]); // Reset the selected sizes
      setTimeout(() => {
        setSuccessMessage("");
      }, 3000);
      console.log("Product added successfully!", response.data);
    } catch (error) {
      // Handle errors, e.g., show an error message
      console.error("Error adding product:", error.message);
    }
  };
  // const handleSizeChange = (selectedOptions) => {
  //   // Update the selected sizes when the user changes the selection
  //   setSelectedSizes(selectedOptions.map((option) => option.value));
  // };

  // const sizeOptions = sizes.map((size) => ({ value: size, label: size }));

  return (
    <>
      <form onSubmit={handleSubmit(onSubmit)}>
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="border-b border-gray-900/10 pb-12">
            <h2 className="text-base font-semibold leading-7 text-gray-900">
              Product Information
            </h2>
            <p className="mt-1 text-sm leading-6 text-gray-600">
              Use correct product information to post a product.
            </p>

            <div className="mt-10 grid grid-cols-1 gap-x-6 gap-y-8 sm:grid-cols-6">
              <div className="sm:col-span-3">
                <label
                  htmlFor="name"
                  className="block text-sm font-medium leading-6 text-gray-900"
                >
                  Product name
                </label>
                <div className="mt-2">
                  <input
                    type="text"
                    name="name"
                    id="name"
                    {...register("name", {
                      required: "Product name is required",
                    })}
                    autoComplete="given-name"
                    className={`block w-full rounded-md border-0 p-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6 ${
                      errors.name ? "border-red-500" : ""
                    }`}
                  />
                  {errors.name && (
                    <span className="text-red-500">{errors.name.message}</span>
                  )}
                </div>
              </div>

              <div className="sm:col-span-3">
                <label
                  htmlFor="color"
                  className="block text-sm font-medium leading-6 text-gray-900"
                >
                  Product Color
                </label>
                <div className="mt-2">
                  <input
                    type="text"
                    name="color"
                    id="color"
                    {...register("color", {
                      required: "Product color is required",
                    })}
                    autoComplete="family-name"
                    className={`block w-full rounded-md border-0 p-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6 ${
                      errors.color ? "border-red-500" : ""
                    }`}
                  />
                  {errors.color && (
                    <span className="text-red-500">{errors.color.message}</span>
                  )}
                </div>
              </div>

              <div className="sm:col-span-4">
                <label
                  htmlFor="type"
                  className="block text-sm font-medium leading-6 text-gray-900"
                >
                  Product Type
                </label>
                <div className="mt-2">
                  <input
                    type="text"
                    name="type"
                    id="type"
                    {...register("type", {
                      required: "Product type is required",
                    })}
                    className={`block w-full rounded-md border-0 p-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6 ${
                      errors.type ? "border-red-500" : ""
                    }`}
                  />
                  {errors.type && (
                    <span className="text-red-500">{errors.type.message}</span>
                  )}
                </div>
              </div>

              <div className="sm:col-span-3">
                <label
                  htmlFor="size"
                  className="block text-sm font-medium leading-6 text-gray-900"
                >
                  Product Size
                </label>
                <div className="mt-2">
                  <Controller
                    name="size"
                    {...register("size", {
                      required: "Product size is required",
                    })}
                    control={control}
                    render={({ field }) => (
                      <Select
                        isMulti
                        options={sizes.map((size) => ({
                          value: size,
                          label: size,
                        }))}
                        onChange={(selectedOptions) => {
                          // Update the selected sizes when the user changes the selection
                          setSelectedSizes(
                            selectedOptions.map((option) => option.value)
                          );
                          field.onChange(selectedOptions);
                        }}
                        value={sizes
                          .map((size) => ({ value: size, label: size }))
                          .filter((option) =>
                            selectedSizes.includes(option.value)
                          )}
                      />
                    )}
                  />

                  {errors.size && (
                    <span className="text-red-500">{errors.size.message}</span>
                  )}
                </div>
              </div>
              <div className="sm:col-span-4">
                <label
                  htmlFor="price"
                  className="block text-sm font-medium leading-6 text-gray-900"
                >
                  Product Price
                </label>
                <div className="mt-2">
                  <input
                    type="number"
                    name="price"
                    id="price"
                    {...register("price", {
                      required: "Product price is required",
                    })}
                    className={`block w-full rounded-md border-0 p-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6 ${
                      errors.price ? "border-red-500" : ""
                    }`}
                  />
                  {errors.price && (
                    <span className="text-red-500">{errors.price.message}</span>
                  )}
                </div>
              </div>
              <div className="col-span-full">
                <label
                  htmlFor="imageUrl"
                  className="block text-sm font-medium leading-6 text-gray-900"
                >
                  Image Url
                </label>
                <div className="mt-2">
                  <input
                    type="text"
                    name="imageUrl"
                    id="imageUrl"
                    {...register("imageUrl", {
                      required: "Image URL is required",
                    })}
                    autoComplete="street-address"
                    className={`block w-full rounded-md border-0 p-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6 ${
                      errors.imageUrl ? "border-red-500" : ""
                    }`}
                  />
                  {errors.imageUrl && (
                    <span className="text-red-500">
                      {errors.imageUrl.message}
                    </span>
                  )}
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="mt-6 flex max-w-7xl items-center justify-end gap-x-6">
          <button
            type="button"
            className="text-sm font-semibold leading-6 text-gray-900"
          >
            Cancel
          </button>
          <button
            type="submit"
            className="rounded-md bg-indigo-600 px-3 py-2 text-sm font-semibold text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
          >
            Upload
          </button>
        </div>
      </form>

      {successMessage && (
        <div className="container bg-green-600 rounded-md p-5 mx-auto mt-6 flex max-w-7xl items-center justify-start gap-x-6">
          <div className=" text-white">{successMessage}</div>
        </div>
      )}
    </>
  );
};

export default PostData;
