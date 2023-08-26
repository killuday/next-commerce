import React from "react";
import Link from "next/link";

const hoodieData = [
  {
    id: 1,
    name: "Classic Hoodie",
    price: 29.99,
    sizes: ["S", "M", "L", "XL"],
    color: "Black",
    imageUrl: "https://lp2.hm.com/hmgoepprod?set=source[/57/11/5711b9dcaebb68cfd81bd965cb38ff1a0d921e52.jpg],origin[dam],category[men_hoodiessweatshirts_hoodies],type[DESCRIPTIVESTILLLIFE],res[y],hmver[2]&call=url[file:/product/main]",
  },
  {
    id: 2,
    name: "Sporty Hoodie",
    price: 34.99,
    sizes: ["S", "M", "L", "XL"],
    color: "Black/White",
    imageUrl: "https://lp2.hm.com/hmgoepprod?set=source[/57/11/5711b9dcaebb68cfd81bd965cb38ff1a0d921e52.jpg],origin[dam],category[men_hoodiessweatshirts_hoodies],type[DESCRIPTIVESTILLLIFE],res[y],hmver[2]&call=url[file:/product/main]",
  },
  {
    id: 3,
    name: "Cozy Hoodie",
    price: 39.99,
    sizes: ["XS", "S", "M", "L", "XL"],
    color: "Pink",
    imageUrl: "https://lp2.hm.com/hmgoepprod?set=source[/57/11/5711b9dcaebb68cfd81bd965cb38ff1a0d921e52.jpg],origin[dam],category[men_hoodiessweatshirts_hoodies],type[DESCRIPTIVESTILLLIFE],res[y],hmver[2]&call=url[file:/product/main]",
  },
  {
    id: 4,
    name: "Urban Hoodie",
    price: 45.99,
    sizes: ["S", "M", "L", "XL"],
    color: "Grey/Black",
    imageUrl: "https://lp2.hm.com/hmgoepprod?set=source[/57/11/5711b9dcaebb68cfd81bd965cb38ff1a0d921e52.jpg],origin[dam],category[men_hoodiessweatshirts_hoodies],type[DESCRIPTIVESTILLLIFE],res[y],hmver[2]&call=url[file:/product/main]",
  },
  {
    id: 5,
    name: "Vintage Hoodie",
    price: 32.99,
    sizes: ["S", "M", "L"],
    color: "Faded Black",
    imageUrl: "https://lp2.hm.com/hmgoepprod?set=source[/57/11/5711b9dcaebb68cfd81bd965cb38ff1a0d921e52.jpg],origin[dam],category[men_hoodiessweatshirts_hoodies],type[DESCRIPTIVESTILLLIFE],res[y],hmver[2]&call=url[file:/product/main]",
  },
  {
    id: 6,
    name: "Graphic Print Hoodie",
    price: 27.99,
    sizes: ["S", "M", "L", "XL"],
    color: "White/Black",
    imageUrl: "https://lp2.hm.com/hmgoepprod?set=source[/57/11/5711b9dcaebb68cfd81bd965cb38ff1a0d921e52.jpg],origin[dam],category[men_hoodiessweatshirts_hoodies],type[DESCRIPTIVESTILLLIFE],res[y],hmver[2]&call=url[file:/product/main]",
  },
  {
    id: 7,
    name: "Athletic Hoodie",
    price: 36.99,
    sizes: ["M", "L", "XL"],
    color: "Blue",
    imageUrl: "https://lp2.hm.com/hmgoepprod?set=source[/57/11/5711b9dcaebb68cfd81bd965cb38ff1a0d921e52.jpg],origin[dam],category[men_hoodiessweatshirts_hoodies],type[DESCRIPTIVESTILLLIFE],res[y],hmver[2]&call=url[file:/product/main]",
  },
  {
    id: 8,
    name: "Knitted Hoodie",
    price: 49.99,
    sizes: ["S", "M", "L"],
    color: "Cream",
    imageUrl: "https://lp2.hm.com/hmgoepprod?set=source[/57/11/5711b9dcaebb68cfd81bd965cb38ff1a0d921e52.jpg],origin[dam],category[men_hoodiessweatshirts_hoodies],type[DESCRIPTIVESTILLLIFE],res[y],hmver[2]&call=url[file:/product/main]",
  },
  // Add more hoodie products here...
];


const Hoodies = () => {
  return (
    <>
      <section className="text-gray-600 body-font">
        <div className="container  px-5 py-24 mx-auto">
          <div className="flex flex-wrap -m-4">
            <Link  href={"/product/relaxed-fit"}>
              <div className="grid grid-cols-1 gap-x-6 gap-y-10 sm:grid-cols-2 m-5 lg:grid-cols-4 xl:gap-x-8 ">

              {hoodieData.map((hoodie) => (
                <>
                  <div key={hoodie.id} className=" border shadow-xl rounded-xl ">
                    <div className="">
                      <img src={hoodie.imageUrl} className="w-full hover:opacity-75 h-full object-contain rounded-t-xl " alt="" /> 
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
    </>
  );
};

export default Hoodies;
