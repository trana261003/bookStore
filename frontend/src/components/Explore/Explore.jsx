import React from "react";
import img1 from "../th1.jpg";
import img2 from "../th3.jpg";
import img3 from "../th4.jpg";
import img4 from "../th5.jpg";
import img5 from "../th6.jpg";
import img6 from "../th7.jpg";
import { Link } from "react-router-dom";

function Explore() {
    return (
        <div className="px-20">
            <div className="flex flex-wrap flex-col md:flex-row max-w-screen h-full py-24 items-center">
                <div className="hidden md:flex flex-wrap items-start h-auto md:w-6/12 w-full mb-8 bg-gradient-to-r from-[#FF00D3] to-[#76E6FF] shadow-lg shadow-pink-300 border-2 border-pink-500">

                    <div>
                        <img src={img1} alt="img1" className="mt-5 ml-6 mr-4 w-44" />
                        <img src={img6} alt="img6" className="mt-7 ml-9 mr-4 w-32" />
                    </div>
                    <div className="flex flex-col flex-wrap items-start justify-start">
                        <img src={img4} alt="img4" className="mt-10 w-28 ml-14" />
                        <img src={img3} alt="img3" className="mt-6 w-52 mb-4 border-2" />
                    </div>
                    <div>
                        <img src={img2} alt="img2" className="ml-[16px] mt-4 w-40" />
                        <img src={img5} alt="img5" className="ml-[20px] mt-4 w-36 mb-4" />
                    </div>
                </div>
                <div className="flex flex-wrap h-auto w-full md:w-5/12 md:ml-20">
                    <p className="text-black text-5xl text-left font-semibold h-auto">
                        Find Your Favorite
                    </p>
                    <span className="bg-gradient-to-r from-[#FF00D3] to-[#76E6FF] text-transparent bg-clip-text text-5xl py-2 font-semibold">
                        Book Here !!
                    </span>
                    <p className="text-lg text-black font-sans font-medium text-left py-3">
                        Reading books enriches your mind, reduces stress, improves focus and language skills, and opens doors to endless knowledge and imagination.
                    </p>
                    <div className="flex py-6 w-full">
                        <div className="flex flex-col">
                            <span className="text-3xl font-semibold">800+</span>
                            <span className="text-base font-semibold">Book Listing</span>
                        </div>
                        <div className="flex flex-col md:ml-[100px] ml-0">
                            <span className="text-3xl font-semibold">500+</span>
                            <span className="text-base font-semibold">Registered Users</span>
                        </div>
                    </div>
                    <div className="flex justify-center w-full">
                        <Link to="/books">
                            <button className="bg-gradient-to-r from-[#FF00D3] to-[#76E6FF] px-6 py-[9px] rounded-[10px] text-white text-md font-bold hover:opacity-75 mb-6">
                                Explore Now
                            </button>
                        </Link>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Explore;
