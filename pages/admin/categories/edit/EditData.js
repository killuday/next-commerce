import React, { useEffect, useState, Fragment } from "react";
import { FaCopy, FaEdit } from "react-icons/fa";
import { AiFillDelete } from "react-icons/ai";
import axios from "axios";
import Image from "next/image";
import { useRouter } from "next/router";
import { Dialog, Transition } from "@headlessui/react";
import Select from "react-select"; // Import react-select

const EditData = () => {
  const [data, setData] = useState([]);
  const [successMessage, setSuccessMessage] = useState(null);
  const [isEditModalOpen, setIsEditModalOpen] = useState(false);
  const [editProductId, setEditProductId] = useState("");
  const [editProduct, setEditProduct] = useState({
    name: "",
    color: "",
    type: "",
    size: [],
    price: 0,
    imageUrl: "",
  });

  const router = useRouter(); // Initialize the router

  const handleEditClick = (productId) => {
    setEditProductId(productId);
    // Use the router to navigate to the edit form page
    router.push(`/edit/${productId}`);
  };

  const copyToClipboard = (text) => {
    navigator.clipboard.writeText(text);
    setSuccessMessage("ID copied to clipboard");
    setTimeout(() => setSuccessMessage(null), 5000);
  };

  const deleteProduct = (productId) => {
    axios
      .delete(`http://localhost:4000/api/deleteproduct/${productId}`)
      .then((response) => {
        console.log("Product deleted:", productId);
        setSuccessMessage("Product deleted successfully");
        setTimeout(() => setSuccessMessage(null), 5000);
      })
      .catch((error) => {
        console.error("Error deleting product:", error);
      });
  };

  const closeEditModal = (e) => {
    // e.preventDefault()
    setIsEditModalOpen(false);
  };

  const openEditModal = (product) => {
    setEditProduct(product);
    setIsEditModalOpen(true);
  };

  useEffect(() => {
    // Use Axios to fetch data from the API
    axios
      .get("http://localhost:4000/api/getallproducts")
      .then((response) => {
        setData(response.data);
      })
      .catch((error) => {
        console.error("Error fetching data:", error);
      });
  }, []);

  const handleEditSubmit = (productId)  => {
  
    // Handle the submission of edited data
    // You can use Axios to send a PUT request to update the product based on `editProduct` state.
    // Update the product with `editProductId`.
    // After editing, close the modal.
    // Don't forget to handle any errors as needed.
    axios.put(`http://localhost:4000/api/editproduct/${productId}`, editProduct)
      .then(response => {
        // Handle the success response, e.g., show a success message
        console.log('Product updated successfully:', response.data);
      })
      .catch(error => {
        // Handle errors, e.g., show an error message
        console.error('Error updating product:', error);
      });
    closeEditModal();
  };
  
  

  return (
    <div className="container px-4 mx-auto max-w-8xl">
      <div className="relative overflow-x-auto">
        {successMessage && (
          <div className="bg-green-200 font-bold rounded-xl p-4 text-green-700 mb-4">
            {successMessage}
          </div>
        )}
        <table className="w-full text-sm text-left text-gray-500 dark:text-gray-400">
          <thead className="text-xs text-gray-700 uppercase bg-gray-50 dark:bg-gray-700 dark:text-gray-400">
            <tr>
              <th scope="col" className="px-6 py-3">
                Product name
              </th>
              <th scope="col" className="px-6 py-3">
                Id
              </th>
              <th scope="col" className="px-6 py-3">
                Color
              </th>
              <th scope="col" className="px-6 py-3">
                Type
              </th>
              <th scope="col" className="px-6 py-3">
                Size
              </th>
              <th scope="col" className="px-6 py-3">
                Price
              </th>
              <th scope="col" className="px-6 py-3">
                Image
              </th>
              <th scope="col" className="px-6 py-3">
                Actions
              </th>
            </tr>
          </thead>
          <tbody>
            {data.map((product, index) => (
              <tr
                key={index}
                className={`${
                  index % 2 === 0
                    ? "bg-white"
                    : "bg-gray-100 dark:bg-gray-800"
                } border-b dark:border-gray-700`}
              >
                <td className="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white">
                  {product.name}
                </td>
                <td className="px-6 py-4 ">
                  {product._id}{" "}
                  <button onClick={() => copyToClipboard(product._id)}>
                    <FaCopy size={15} />
                  </button>
                </td>
                <td className="px-6 py-4">{product.color}</td>
                <td className="px-6 py-4">{product.type}</td>
                <td className="px-6 py-4">{product.size}</td>
                <td className="px-6 py-4">${product.price}</td>
                <td className="px-6 py-4">
                  <Image
                    src={product.imageUrl}
                    alt={product.name}
                    height={50}
                    width={50}
                  />
                </td>
                <td className="px-6 py-4">
                  <button onClick={() => openEditModal(product)}>
                    <FaEdit size={21} />
                  </button>
                  <button onClick={() => deleteProduct(product._id)}>
                    <AiFillDelete size={21} />
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
      <Transition appear show={isEditModalOpen} as={Fragment}>
        <Dialog
          as="div"
          className="fixed inset-0 z-10 overflow-y-auto"
          onClose={closeEditModal}
        >
          <div className="min-h-screen px-4 text-center">
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
            <span
              className="inline-block h-screen align-middle"
              aria-hidden="true"
            >
              &#8203;
            </span>
            <Transition.Child
              as={Fragment}
              enter="ease-out duration-300"
              enterFrom="opacity-0 scale-95"
              enterTo="opacity-100 scale-100"
              leave="ease-in duration-200"
              leaveFrom="opacity-100 scale-100"
              leaveTo="opacity-0 scale-95"
            >
              <div className="inline-block w-full max-w-md p-6 my-8 overflow-hidden text-left align-middle transition-all transform bg-white shadow-xl rounded-2xl">
                <Dialog.Title
                  as="h3"
                  className="text-lg font-medium leading-6 text-gray-900"
                >
                  Edit Product
                </Dialog.Title>
                <form onSubmit={() => handleEditSubmit(editProduct._id)}>
                  <div className="mt-2">
                    <label className="block text-sm font-medium text-gray-700">
                      Product Name
                    </label>
                    <input
                      type="text"
                      name="name"
                      value={editProduct.name}
                      onChange={(e) =>
                        setEditProduct({
                          ...editProduct,
                          name: e.target.value,
                        })
                      }
                      className="mt-1 p-2 border border-gray-300 rounded-md w-full focus:outline-none focus:ring focus:ring-blue-300"
                    />
                  </div>
                  <div className="mt-2">
                    <label className="block text-sm font-medium text-gray-700">
                      Product Type
                    </label>
                    <input
                      type="text"
                      name="type"
                      value={editProduct.type}
                      onChange={(e) =>
                        setEditProduct({
                          ...editProduct,
                          type: e.target.value,
                        })
                      }
                      className="mt-1 p-2 border border-gray-300 rounded-md w-full focus:outline-none focus:ring focus:ring-blue-300"
                    />
                  </div>
                  <div className="mt-2">
                    <label className="block text-sm font-medium text-gray-700">
                      Product Color
                    </label>
                    <input
                      type="text"
                      name="color"
                      value={editProduct.color}
                      onChange={(e) =>
                        setEditProduct({
                          ...editProduct,
                          color: e.target.value,
                        })
                      }
                      className="mt-1 p-2 border border-gray-300 rounded-md w-full focus:outline-none focus:ring focus:ring-blue-300"
                    />
                  </div>
                  <div className="mt-2">
                    <label className="block text-sm font-medium text-gray-700">
                      Product Size
                    </label>
                    <input
                      type="text"
                      name="size"
                      value={editProduct.size}
                      onChange={(e) =>
                        setEditProduct({
                          ...editProduct,
                          size: e.target.value,
                        })
                      }
                      className="mt-1 p-2 border border-gray-300 rounded-md w-full focus:outline-none focus:ring focus:ring-blue-300"
                    />
                  </div>
                  <div className="mt-2">
                    <label className="block text-sm font-medium text-gray-700">
                      Product Price
                    </label>
                    <input
                      type="number"
                      name="price"
                      value={editProduct.price}
                      onChange={(e) =>
                        setEditProduct({
                          ...editProduct,
                          price: e.target.value,
                        })
                      }
                      className="mt-1 p-2 border border-gray-300 rounded-md w-full focus:outline-none focus:ring focus:ring-blue-300"
                    />
                  </div>
                  <div className="mt-2">
                    <label className="block text-sm font-medium text-gray-700">
                      Image URL
                    </label>
                    <input
                      type="text"
                      name="imageUrl"
                      value={editProduct.imageUrl}
                      onChange={(e) =>
                        setEditProduct({
                          ...editProduct,
                          imageUrl: e.target.value,
                        })
                      }
                      className="mt-1 p-2 border border-gray-300 rounded-md w-full focus:outline-none focus:ring focus:ring-blue-300"
                    />
                  </div>
                  <div className="mt-4 flex justify-end">
                    <button
                      type="submit"
                      className="px-4 py-2 text-white bg-blue-500 rounded-md hover:bg-blue-700 focus:outline-none focus:ring focus:ring-blue-300"
                    >
                      Save
                    </button>
                    <button
                    type="button"
                      onClick={closeEditModal}
                      className="ml-2 px-4 py-2 text-gray-600 bg-gray-200 rounded-md hover:bg-gray-300 focus:outline-none focus:ring focus:ring-gray-400"
                    >
                      Cancel
                    </button>
                  </div>
                </form>
              </div>
            </Transition.Child>
          </div>
        </Dialog>
      </Transition>
    </div>
  );
};

export default EditData;
