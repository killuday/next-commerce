import Link from 'next/link'
import React from 'react'
import Image from 'next/image';

const tshirtData = [
  {
    id: 1,
    name: "Basic T-Shirt",
    price: 19.99,
    sizes: ["S", "M", "L", "XL"],
    color: "White",
    imageUrl: "https://lp2.hm.com/hmgoepprod?set=source[/5d/04/5d04a763d793b1c6bd5f25765d3cca1a0a449a24.jpg],origin[dam],category[men_tshirtstanks_shortsleeve],type[DESCRIPTIVESTILLLIFE],res[y],hmver[2]&call=url[file:/product/main]",
  },
  {
    id: 2,
    name: "Graphic Print T-Shirt",
    price: 24.99,
    sizes: ["S", "M", "L", "XL"],
    color: "Black",
    imageUrl: "https://lp2.hm.com/hmgoepprod?set=source[/5d/04/5d04a763d793b1c6bd5f25765d3cca1a0a449a24.jpg],origin[dam],category[men_tshirtstanks_shortsleeve],type[DESCRIPTIVESTILLLIFE],res[y],hmver[2]&call=url[file:/product/main]",
  },
  {
    id: 3,
    name: "Striped T-Shirt",
    price: 22.99,
    sizes: ["S", "M", "L", "XL"],
    color: "Blue/White",
    imageUrl: "https://lp2.hm.com/hmgoepprod?set=source[/5d/04/5d04a763d793b1c6bd5f25765d3cca1a0a449a24.jpg],origin[dam],category[men_tshirtstanks_shortsleeve],type[DESCRIPTIVESTILLLIFE],res[y],hmver[2]&call=url[file:/product/main]",
  },
  {
    id: 4,
    name: "V-Neck T-Shirt",
    price: 18.99,
    sizes: ["S", "M", "L", "XL"],
    color: "Grey",
    imageUrl: "https://lp2.hm.com/hmgoepprod?set=source[/5d/04/5d04a763d793b1c6bd5f25765d3cca1a0a449a24.jpg],origin[dam],category[men_tshirtstanks_shortsleeve],type[DESCRIPTIVESTILLLIFE],res[y],hmver[2]&call=url[file:/product/main]",
  },
  {
    id: 5,
    name: "Printed T-Shirt",
    price: 20.99,
    sizes: ["S", "M", "L", "XL"],
    color: "Red",
    imageUrl: "https://lp2.hm.com/hmgoepprod?set=source[/5d/04/5d04a763d793b1c6bd5f25765d3cca1a0a449a24.jpg],origin[dam],category[men_tshirtstanks_shortsleeve],type[DESCRIPTIVESTILLLIFE],res[y],hmver[2]&call=url[file:/product/main]",
  },
  {
    id: 6,
    name: "Pocket T-Shirt",
    price: 21.99,
    sizes: ["S", "M", "L", "XL"],
    color: "Green",
    imageUrl:" https://lp2.hm.com/hmgoepprod?set=source[/5d/04/5d04a763d793b1c6bd5f25765d3cca1a0a449a24.jpg],origin[dam],category[men_tshirtstanks_shortsleeve],type[DESCRIPTIVESTILLLIFE],res[y],hmver[2]&call=url[file:/product/main]",
  },
  {
    id: 7,
    name: "Long Sleeve T-Shirt",
    price: 26.99,
    sizes: ["S", "M", "L", "XL"],
    color: "Black",
    imageUrl: "https://lp2.hm.com/hmgoepprod?set=source[/5d/04/5d04a763d793b1c6bd5f25765d3cca1a0a449a24.jpg],origin[dam],category[men_tshirtstanks_shortsleeve],type[DESCRIPTIVESTILLLIFE],res[y],hmver[2]&call=url[file:/product/main]",
  },
  {
    id: 8,
    name: "Retro T-Shirt",
    price: 23.99,
    sizes: ["S", "M", "L", "XL"],
    color: "Yellow",
    imageUrl: "https://lp2.hm.com/hmgoepprod?set=source[/5d/04/5d04a763d793b1c6bd5f25765d3cca1a0a449a24.jpg],origin[dam],category[men_tshirtstanks_shortsleeve],type[DESCRIPTIVESTILLLIFE],res[y],hmver[2]&call=url[file:/product/main]",
  },
];



const Tshirts = () => {
  return (
    <section className="text-gray-600 body-font">
        <div className="container  px-5 py-24 mx-auto">
          <div className="flex flex-wrap -m-4">
            <Link  href={"/product/relaxed-fit"}>
              <div className="grid grid-cols-1 gap-x-6 gap-y-10 sm:grid-cols-2 m-5 lg:grid-cols-4 xl:gap-x-8 ">

              {tshirtData.map((hoodie) => (
                <>
                  <div key={hoodie.id} className=" border shadow-xl rounded-xl ">
                    <div className="">
                      <Image width={500} height={500} 
                        src={hoodie.imageUrl} className="w-full hover:opacity-75 h-full object-contain rounded-t-xl " alt="" /> 
                    </div>
                    <div className="flex justify-between p-5">
                      <div>
                      <h2>{hoodie.name}</h2>
                      
                      <p className="truncate">{hoodie.colors}</p>
                      <p>{hoodie.sizes}</p>
                      </div>
                      <p>₹{hoodie.price}</p>
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