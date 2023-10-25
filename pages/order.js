import React from "react";


const Order = () => {
  return (
    <div className="container px-20">
      <div className="border p-24 rounded-md border-solid bg-slate-100">
        <div className="flex justify-between">
          <h1 className="text-3xl font-bold ">
            Order #54879{" "}
            <span className="text-sm pl-5 font-medium text-purple-500">
              View invoice →{" "}
            </span>
          </h1>
          <h2 className="text-gray-500 text-base">
            Order placed{" "}
            <span className="text-gray-800 font-semibold">March 22, 2021</span>
          </h2>
        </div>
        <div className="border bg-white mt-11 rounded-lg">
          <div className="flex flex-row">
            <div className="basis-7/12  m-8">
              <div className="flex flex-row">
                <img
                  className="h-[170px] rounded-md w-auto "
                  src="https://tailwindui.com/img/ecommerce-images/confirmation-page-03-product-01.jpg"
                  alt=""
                />
                <div className="ml-5">
                  <h3>Nomad Tumbler</h3>
                  <h4>$35.00</h4>
                  <p className="text-slate-500 text-base">
                    This durable and portable insulated tumbler will keep your
                    beverage at the perfect temperature during your next
                    adventure.
                  </p>
                </div>
              </div>
            </div>
            <div className="basis-2/12 m-5">
              <h3>Delivery address</h3>
              <p className="text-slate-500 text-base pt-3 ">
                Floyd Miles 7363 Cynthia Pass Toronto, ON N3Y 4H8
              </p>
            </div>
            <div className="basis-3/12 m-5">
              <h3>Shipping updates</h3>
              <p className="text-slate-500 pt-2">f•••@example.com</p>
              <p className="text-slate-500 pt-2">1•••••••••40</p>
              <p className="text-blue-500 pt-2 font-semibold">Edit</p>
            </div>
          </div>
          <hr />
          <div className="m-5">
            <h3>Preparing to ship on March 24, 2021</h3>
          </div>
        </div>
        <div className="mt-14 p-5 rounded-lg bg-gray-200">
          <div className="flex flex-row ">
            <div className="basis-2/12 mx-5">
              <h3 className="text-base font-medium">Billing address</h3>
              <p className="mt-3 text-gray-500">
                Floyd Miles 7363 Cynthia Pass Toronto, ON N3Y 4H8
              </p>
            </div>
            <div className="basis-5/12 px-32">
              <h3>Payment information</h3>
              <p>Visa Ending with 4242 Expires 02 / 24</p>
            </div>
            <div className="basis-5/12 mx-10">
              <div className="flex justify-between border-b pb-3 border-solid border-slate-500">
                <p>Subtotal</p>
                <p>$72</p>
              </div>
              <div className="flex justify-between border-b pb-3 pt-3 border-solid border-slate-500">
                <p>Shipping</p>
                <p>$5</p>
              </div>
              <div className="flex justify-between border-b pb-3 pt-3 border-solid border-slate-500">
                <p>Tax</p>
                <p>$6.16</p>
              </div>
              <div className="flex justify-between pb-3 pt-3 ">
                <p>Subtotal</p>
                <p>83.16</p>
              </div>
              <hr />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Order;
