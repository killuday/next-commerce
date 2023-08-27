import React from 'react'
import Link from 'next/link'
import Image from 'next/image';
const Perfumes = () => {

  const perfumeData = [
    {
      id: 1,
      name: "Eau de Parfum",
      price: 49.99,
      volume: "50ml",
      fragrance: "Floral",
      color: "Clear",
      imageUrl: "https://www.jeanpaulgaultier.com/cdn-cgi/image/width=510,quality=90,format=webp//medias/sys_master/images/h69/h9a/9640688320542/9640688255006/9640688255006.png",
    },
    {
      id: 2,
      name: "Citrus Splash",
      price: 39.99,
      volume: "30ml",
      fragrance: "Citrus",
      color: "Yellow",
      imageUrl: "https://www.jeanpaulgaultier.com/cdn-cgi/image/width=510,quality=90,format=webp//medias/sys_master/images/h69/h9a/9640688320542/9640688255006/9640688255006.png",
    },
    {
      id: 3,
      name: "Woody Aura",
      price: 59.99,
      volume: "100ml",
      fragrance: "Woody",
      color: "Brown",
      imageUrl: "https://www.jeanpaulgaultier.com/cdn-cgi/image/width=510,quality=90,format=webp//medias/sys_master/images/h69/h9a/9640688320542/9640688255006/9640688255006.png",
    },
    {
      id: 4,
      name: "Oriental Spice",
      price: 44.99,
      volume: "50ml",
      fragrance: "Spicy",
      color: "Red",
      imageUrl: "https://www.jeanpaulgaultier.com/cdn-cgi/image/width=510,quality=90,format=webp//medias/sys_master/images/h69/h9a/9640688320542/9640688255006/9640688255006.png",
    },
    {
      id: 5,
      name: "Aquatic Breeze",
      price: 34.99,
      volume: "30ml",
      fragrance: "Aquatic",
      color: "Blue",
      imageUrl: "https://www.jeanpaulgaultier.com/cdn-cgi/image/width=510,quality=90,format=webp//medias/sys_master/images/h69/h9a/9640688320542/9640688255006/9640688255006.png",
    },
    {
      id: 6,
      name: "Vanilla Dream",
      price: 54.99,
      volume: "75ml",
      fragrance: "Gourmand",
      color: "Cream",
      imageUrl: "https://www.jeanpaulgaultier.com/cdn-cgi/image/width=510,quality=90,format=webp//medias/sys_master/images/h69/h9a/9640688320542/9640688255006/9640688255006.png",
    },
    {
      id: 7,
      name: "Musk Elegance",
      price: 48.99,
      volume: "50ml",
      fragrance: "Musky",
      color: "Grey",
      imageUrl: "https://www.jeanpaulgaultier.com/cdn-cgi/image/width=510,quality=90,format=webp//medias/sys_master/images/h69/h9a/9640688320542/9640688255006/9640688255006.png",
    },
    {
      id: 8,
      name: "Fresh Zest",
      price: 42.99,
      volume: "100ml",
      fragrance: "Fresh",
      color: "Green",
      imageUrl: "https://www.jeanpaulgaultier.com/cdn-cgi/image/width=510,quality=90,format=webp//medias/sys_master/images/h69/h9a/9640688320542/9640688255006/9640688255006.png",
    },
  ];

  


  return (
    <>
        <section className="text-gray-600 body-font">
        <div className="container  px-5 py-24 mx-auto">
          <div className="flex flex-wrap -m-4">
            <Link  href={"/product/relaxed-fit"}>
              <div className="grid grid-cols-1 gap-x-6 gap-y-10 sm:grid-cols-2 m-5 lg:grid-cols-4 xl:gap-x-8 ">

              {perfumeData.map((perfume) => (
                <>
                  <div key={perfume.id} className=" border shadow-xl rounded-xl ">
                    <div className="">
                      <Image width={500} height={500} 
                       src={perfume.imageUrl} className="w-full hover:opacity-75 h-full object-contain rounded-t-xl " alt="" /> 
                    </div>
                    <div className="flex justify-between p-5">
                      <div>
                      <h2>{perfume.name}</h2>
                      
                      <p className="truncate">{perfume.colors}</p>
                      <p>{perfume.sizes}</p>
                      </div>
                      <p>₹{perfume.price}</p>
                    </div>
                  </div>
                </>
              ))}
              </div>
            </Link>
          </div>
        </div>
      </section>
    </>
  )
}

export default Perfumes