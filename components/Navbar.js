import Link from "next/link";
import React, { useRef } from "react";
import { FaOpencart } from "react-icons/fa";
import Image from "next/image";
import {
  AiFillCloseCircle,
  AiFillPlusCircle,
  AiFillMinusCircle,
} from "react-icons/ai";
import { BsFillBagCheckFill } from "react-icons/bs";

const Navbar = ({ cart, addToCart, removeFromCart, clearCart, subTotal }) => {
  const ref = useRef();
  console.log(cart, addToCart, removeFromCart, clearCart, subTotal);

  const toggleCart = () => {
    if (ref.current.classList.contains("translate-x-full")) {
      ref.current.classList.remove("translate-x-full");
      ref.current.classList.add("translate-x-0");
    } else if (!ref.current.classList.contains("translate-x-full")) {
      ref.current.classList.remove("translate-x-0");
      ref.current.classList.add("translate-x-full");
    }
  };
  

  return (
    <div>
      <header className="text-gray-600  body-font  left-0 top-0 w-full z-10 bg-white ease-in duration-300">
        <div className="container mx-auto flex flex-wrap p-5 flex-col md:flex-row items-center">
          <a className="flex title-font font-medium items-center text-gray-900 mb-4 md:mb-0">
            <Link legacyBehavior href={"/"}>
              <Image height={100}
              width={200}             
                className="w-10 h-10 text-white p-2 bg-pink-500 rounded-full"
                src="/logo.png"
                alt=""
              />
            </Link>
            <span className="ml-3 text-xl">The Wolf Store</span>
          </a>

          <nav className="md:ml-auto flex flex-wrap items-center text-base justify-center">
            <Link legacyBehavior href={"/tshirts"}>
              <a className="mr-5 hover:text-gray-900">Tshirts</a>
            </Link>
            <Link legacyBehavior href={"/hoodies"}>
              <a className="mr-5 hover:text-gray-900">Hoodies</a>
            </Link>
            <Link legacyBehavior href={"/mugs"}>
              <a className="mr-5 hover:text-gray-900">Mugs</a>
            </Link>
            <Link legacyBehavior href={"/perfumes"}>
              <a className="mr-5 hover:text-gray-900">Perfumes</a>
            </Link>
          </nav>
          <div
            onClick={toggleCart}
            className="cursor-pointer cart absolute right-0 top-6 mx-5"
          >
            <FaOpencart className="text-3xl" />
          </div>
        </div>
      </header>
      <div
        ref={ref}
        className=" w-72 h-full z-10 sideCart absolute top-0  right-0 bg-pink-100 py-10 px-8 transform transition-transform translate-x-full"
      >
        <h1 className="font-bold text-xl text-center">Shopping cart</h1>
        <span
          onClick={toggleCart}
          className="absolute top-4 right-2 cursor-pointer text-2xl text-pink-500"
        >
          <AiFillCloseCircle />
        </span>
        <ol className="list-decimal font-semibold">
          {Object.keys(cart).length == 0 && (
            <div className="my-4 font-semibold">No items in the cart</div>
          )}
          {Object.keys(cart).map((k) => {
            return (
              <li key={k}>
                <div className="item flex my-5">
                  <div className="w-2/3 font-semibold"> {cart[k].name} </div>
                  <div className="flex font-semibold items-center justify-center w-1/3 text-lg">
                    <AiFillMinusCircle
                      onClick={() => {
                        removeFromCart(
                          k,
                          1,
                          cart[k].price,
                          cart[k].name,
                          cart[k].size,
                          cart[k].variant
                        );
                      }}
                      className="cursor-pointer text-pink-500"
                    />{" "}
                    <span className="mx-2 text-sm">{cart[k].qty}</span>
                    <AiFillPlusCircle  onClick={() => {
                        addToCart(
                          k,
                          1,
                          cart[k].price,
                          cart[k].name,
                          cart[k].size,
                          cart[k].variant
                        );
                      }} className="cursor-pointer text-pink-500" />
                  </div>
                </div>
              </li>
            );
          })}
        </ol>
        <div className="flex">
          <Link href={'/checkout'}>
          <button className="flex mr-2  text-white bg-pink-500 border-0 py-2 px-6 focus:outline-none hover:bg-pink-600 rounded text-sm">
            <BsFillBagCheckFill className="m-1" />
            Checkout
          </button>
          </Link>
          <button
            onClick={clearCart}
            className="flex mr-2  text-white bg-pink-500 border-0 py-2 px-6 focus:outline-none hover:bg-pink-600 rounded text-sm"
          >
            {" "}
            Clear
          </button>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
