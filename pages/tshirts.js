import Link from 'next/link'
import React, { useEffect, useState } from 'react'
import Image from 'next/image';




const Tshirts = () => {
  const [data,setData]=useState([]);
  useEffect(() => {
    // Define the API endpoint
    const apiUrl = 'http://localhost:3000/getallproducts';
  
    // Fetch data from the API
    fetch(apiUrl)
      .then(response => {
        if (!response.ok) {
          throw new Error('Network response was not ok');
        }
        return response.json();
      })
      .then(data => {
        setData(data);
        console.log(data)
      })
      .catch(error => {
        console.error('Error fetching data:', error);
      });
  }, []);
  return (
    <section className="text-gray-600 body-font">
        <div className="container  px-5 py-24 mx-auto">
          <div className="flex flex-wrap -m-4">
            <Link  href={"/product/relaxed-fit"}>
              <div className="grid grid-cols-1 gap-x-6 gap-y-10 sm:grid-cols-2 m-5 lg:grid-cols-4 xl:gap-x-8 ">

              {data.map((hoodie) => (
                <>
                  <div key={hoodie.id} className=" border shadow-xl rounded-xl ">
                    <div className="">
                      <Image width={500} height={500} 
                        src={hoodie.imageUrl} className="w-full hover:opacity-75 h-full object-contain rounded-t-xl " alt="" /> 
                    </div>
                    <div className="flex justify-between p-5">
                      <div>
                      <h2>{hoodie.name}</h2>
                      
                      <p className="truncate">{hoodie.color}</p>
                      <p>{hoodie.size}</p>
                      </div>
                      <p>₹{hoodie.type}</p>
                    </div>
                  </div>
                </>
              ))}
              </div>
            </Link>
          </div>
        </div>
      </section>
  )
}

export default Tshirts