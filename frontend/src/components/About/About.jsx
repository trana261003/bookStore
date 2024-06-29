import React from "react";

function About(){
    return(
        <>
        <div className="px-20">
        <div className="flex flex-wrap flex-col md:flex-row w-full h-auto  items-center py-2">
            <div className="flex w-72 border-2 h-96 rounded-lg items-center border-s-pink-300 border-b-pink-300 shadow-xl shadow-pink-200 border-t-[#76E6FF] border-e-[#76E6FF] ">
                <span className="text-8xl bg-gradient-to-r from-[#FF00D3] to-[#76E6FF] inline-block text-transparent bg-clip-text ml-14 text-left mt-20 ">About Us</span>
            </div>
        <div className=" flex flex-col h-auto mt-10  md:ml-32 items-start md:w-7/12 w-full justify-start">
            <div className="flex">
            <h1 className="text-4xl font-semibold"> Welcome To <span className="bg-gradient-to-r from-[#FF00D3] to-[#76E6FF] text-transparent bg-clip-text">Book Pavilian !!</span></h1>
            </div>
            <div className="flex flex-col items-start">
                <h1 className="text-3xl mt-4 font-semibold">
                <span className="bg-gradient-to-r from-[#FF00D3] to-[#76E6FF] text-transparent bg-clip-text ">Our Mission</span>
                </h1>
                <div className="flex mt-4 items-start text-left">
                <span className="font-medium text-xl "> At BookPavilian, we beleive in the power of stories to inspire, educate and connect us all. Our mission is to Provide a diverse selection of books that cater to every reader's taste while offering an exceptional online shopping experience.</span>
                </div>
            </div>
            <div className="flex flex-col items-start">
                <h1 className="text-3xl mt-4 font-semibold">
                <span className="bg-gradient-to-r from-[#FF00D3] to-[#76E6FF] text-transparent bg-clip-text ">Our Community</span>
                </h1>
                <div className="flex mt-4 items-start text-left">
                <span className="font-medium text-xl ">We are more that just a bookstore; we are a community hub for book lovers.From hosting monthly book clubs to organizing author meet-and-greets, we love brigining people throug the joy of reading.</span>
                </div>
            </div>
            <div className="flex flex-col items-start mb-20">
                <h1 className="text-3xl mt-9 font-semibold">
                <span className="bg-gradient-to-r from-[#FF00D3] to-[#76E6FF] text-transparent bg-clip-text ">What Our Customers Say</span>
                </h1>
                <div className="flex mt-4 items-start text-left">
                <span className="font-medium text-xl ">"Absolutely love BookPavilian! The selection is fantastic and the customer service is top-notch."</span>
                </div>
            </div>
        </div>
        </div>
        </div>
        </>
    )
}

export default About;