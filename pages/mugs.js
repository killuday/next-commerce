import React from 'react'
import Link from 'next/link'


const mugData = [
  {
    id: 1,
    name: "Classic Mug",
    price: 9.99,
    color: "White",
    imageUrl: "https://lp2.hm.com/hmgoepprod?set=quality%5B79%5D%2Csource%5B%2F02%2Fe7%2F02e7f05ce80da2b89c20b469fc4b82d319e95eac.jpg%5D%2Corigin%5Bdam%5D%2Ccategory%5B%5D%2Ctype%5BLOOKBOOK%5D%2Cres%5Bm%5D%2Chmver%5B1%5D&call=url[file:/product/main]",
  },
  {
    id: 2,
    name: "Colorful Mug",
    price: 12.99,
    color: "Blue",
    imageUrl: "https://lp2.hm.com/hmgoepprod?set=quality%5B79%5D%2Csource%5B%2F02%2Fe7%2F02e7f05ce80da2b89c20b469fc4b82d319e95eac.jpg%5D%2Corigin%5Bdam%5D%2Ccategory%5B%5D%2Ctype%5BLOOKBOOK%5D%2Cres%5Bm%5D%2Chmver%5B1%5D&call=url[file:/product/main]",
  },
  {
    id: 3,
    name: "Elegant Mug",
    price: 14.99,
    color: "Black",
    imageUrl: "https://lp2.hm.com/hmgoepprod?set=quality%5B79%5D%2Csource%5B%2F02%2Fe7%2F02e7f05ce80da2b89c20b469fc4b82d319e95eac.jpg%5D%2Corigin%5Bdam%5D%2Ccategory%5B%5D%2Ctype%5BLOOKBOOK%5D%2Cres%5Bm%5D%2Chmver%5B1%5D&call=url[file:/product/main]",
  },
  {
    id: 4,
    name: "Travel Mug",
    price: 18.99,
    color: "Silver",
    imageUrl: "https://lp2.hm.com/hmgoepprod?set=quality%5B79%5D%2Csource%5B%2F02%2Fe7%2F02e7f05ce80da2b89c20b469fc4b82d319e95eac.jpg%5D%2Corigin%5Bdam%5D%2Ccategory%5B%5D%2Ctype%5BLOOKBOOK%5D%2Cres%5Bm%5D%2Chmver%5B1%5D&call=url[file:/product/main]",
  },
  {
    id: 5,
    name: "Patterned Mug",
    price: 10.99,
    color: "Red",
    imageUrl: "https://lp2.hm.com/hmgoepprod?set=quality%5B79%5D%2Csource%5B%2F02%2Fe7%2F02e7f05ce80da2b89c20b469fc4b82d319e95eac.jpg%5D%2Corigin%5Bdam%5D%2Ccategory%5B%5D%2Ctype%5BLOOKBOOK%5D%2Cres%5Bm%5D%2Chmver%5B1%5D&call=url[file:/product/main]",
  },
  {
    id: 6,
    name: "Funny Mug",
    price: 8.99,
    color: "White",
    imageUrl: "https://lp2.hm.com/hmgoepprod?set=quality%5B79%5D%2Csource%5B%2F02%2Fe7%2F02e7f05ce80da2b89c20b469fc4b82d319e95eac.jpg%5D%2Corigin%5Bdam%5D%2Ccategory%5B%5D%2Ctype%5BLOOKBOOK%5D%2Cres%5Bm%5D%2Chmver%5B1%5D&call=url[file:/product/main]",
  },
  {
    id: 7,
    name: "Modern Mug",
    price: 16.99,
    color: "Green",
    imageUrl: "https://lp2.hm.com/hmgoepprod?set=quality%5B79%5D%2Csource%5B%2F02%2Fe7%2F02e7f05ce80da2b89c20b469fc4b82d319e95eac.jpg%5D%2Corigin%5Bdam%5D%2Ccategory%5B%5D%2Ctype%5BLOOKBOOK%5D%2Cres%5Bm%5D%2Chmver%5B1%5D&call=url[file:/product/main]",
  },
  {
    id: 8,
    name: "Personalized Mug",
    price: 13.99,
    color: "White",
    imageUrl: "https://lp2.hm.com/hmgoepprod?set=quality%5B79%5D%2Csource%5B%2F02%2Fe7%2F02e7f05ce80da2b89c20b469fc4b82d319e95eac.jpg%5D%2Corigin%5Bdam%5D%2Ccategory%5B%5D%2Ctype%5BLOOKBOOK%5D%2Cres%5Bm%5D%2Chmver%5B1%5D&call=url[file:/product/main]",
  },
];



const Mugs = () => {
  return (
    <>
      <section className="text-gray-600 body-font">
        <div className="container  px-5 py-24 mx-auto">
          <div className="flex flex-wrap -m-4">
            <Link  href={"/product/relaxed-fit"}>
              <div className="grid grid-cols-1 gap-x-6 gap-y-10 sm:grid-cols-2 m-5 lg:grid-cols-4 xl:gap-x-8 ">

              {mugData.map((mug) => (
                <>
                  <div key={mug.id} className=" border shadow-xl rounded-xl ">
                    <div className="">
                      <img src={mug.imageUrl} className="w-full hover:opacity-75 h-full object-contain rounded-t-xl " alt="" /> 
                    </div>
                    <div className="flex justify-between p-5">
                      <div>
                      <h2>{mug.name}</h2>
                      
                      <p className="truncate">{mug.colors}</p>
                      <p>{mug.sizes}</p>
                      </div>
                      <p>₹{mug.price}</p>
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

export default Mugs