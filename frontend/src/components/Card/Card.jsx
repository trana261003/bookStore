import React from "react";
import img1 from "../th3.jpg";
import img2 from "../th1.jpg";
import img3 from "../th4.jpg";

function Card() {
  return (
    <>
      <div className="px-20">
        <div className="flex flex-col flex-wrap max-w-screen p-2">
          <div className="flex w-full  items-center justify-center mb-6">
            <h1 className="text-4xl font-semibold">Best Sellers Books</h1>
          </div>

          <div className="flex flex-col lg:flex-row w-full items-center lg:justify-between">
            <div className="flex flex-col flex-wrap justify-center items-center lg:w-80 border-2  border-[#de61c9] shadow-md shadow-pink-300 rounded-xl mb-6">
              <div className="mt-6  p-5 ">
                <img src={img2} alt="imag1" className=" w-96 "></img>
              </div>
              <div className="flex flex-col w-full items-start px-6 ">
                <h1 className="text-2xl font-bold">The Calculating Stars</h1>
                <h3 className="text-base font-medium mt-1">
                  {" "}
                  By <span className="text-pink-500">Mary Robinette Kowal</span>
                </h3>
                <h3 className="text-base font-medium mt-1 mb-2">
                  {" "}
                  July 3, 2018{" "}
                </h3>
              </div>
              <div className="flex w-full px-4 mb-3 mt-2">
                <div className="  p-1 rounded-2xl  bg-gradient-to-r from-[#FF00D3] to-[#76E6FF] mr-[170px] lg:mr-[80px]">
                  <div className=" flex h-full w-full bg-white rounded-2xl px-4  font-medium text-base">
                    
                  ₹ 290.90
                  </div>
                </div>

                <div className="p-1 rounded-2xl bg-gradient-to-r from-[#FF00D3] to-[#76E6FF]  ">
                  <div className="h-full w-full bg-white rounded-2xl px-2 font-medium text-base">
                    Buy Now
                  </div>
                </div>
              </div>
            </div>

            <div className="flex flex-col flex-wrap justify-center items-center lg:w-80 border-2  border-[#de61c9] shadow-md shadow-pink-300 rounded-xl mb-6">
              <div className="mt-6  p-5 ">
                <img src={img3} alt="imag1" className=" w-96 "></img>
              </div>
              <div className="flex flex-col w-full items-start px-6 ">
                <h1 className="text-2xl font-bold">The Book Thief</h1>
                <h3 className="text-base font-medium mt-1">
                  {" "}
                  By <span className="text-pink-500">Mary Robinette Kowal</span>
                </h3>
                <h3 className="text-base font-medium mt-1 mb-2">
                  {" "}
                  July 3, 2018{" "}
                </h3>
              </div>
              <div className="flex w-full px-4 mb-3 mt-2">
                <div className="  p-1 rounded-2xl  bg-gradient-to-r from-[#FF00D3] to-[#76E6FF] mr-[170px] lg:mr-[80px]">
                  <div className=" flex h-full w-full bg-white rounded-2xl px-4  font-medium text-base">
                
                  ₹ 290.90
                  </div>
                </div>

                <div className="p-1 rounded-2xl bg-gradient-to-r from-[#FF00D3] to-[#76E6FF]  ">
                  <div className="h-full w-full bg-white rounded-2xl px-2 font-medium text-base">
                    Buy Now
                  </div>
                </div>
              </div>
            </div>
            <div className="flex flex-col flex-wrap justify-center items-center lg:w-80 border-2  border-[#de61c9] shadow-md shadow-pink-300 rounded-xl mb-6">
              <div className="mt-6  p-5 ">
                <img src={img1} alt="imag1" className=" w-96 "></img>
              </div>
              <div className="flex flex-col w-full items-start px-6 ">
                <h1 className="text-2xl font-bold">Ruskin Bond</h1>
                <h3 className="text-base font-medium mt-1">
                  {" "}
                  By <span className="text-pink-500">Mary Robinette Kowal</span>
                </h3>
                <h3 className="text-base font-medium mt-1 mb-2">
                  {" "}
                  July 3, 2018{" "}
                </h3>
              </div>
              <div className="flex w-full px-4 mb-3 mt-4">
                <div className="  p-1 rounded-2xl  bg-gradient-to-r from-[#FF00D3] to-[#76E6FF]  mr-[170px] lg:mr-[80px]">
                  <div className=" flex h-full w-full bg-white rounded-2xl px-4  font-medium text-base">
                    
                  ₹ 290.90
                  </div>
                </div>

                <div className="p-1 rounded-2xl bg-gradient-to-r from-[#FF00D3] to-[#76E6FF]  ">
                  <div className="h-full w-full bg-white rounded-2xl px-2 font-medium text-base">
                    Buy Now
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
export default Card;
