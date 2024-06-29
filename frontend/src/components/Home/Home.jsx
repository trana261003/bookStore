import React from "react";
import home from "../home.png"
import { Link } from "react-router-dom";

function Home(){
return(
    <div className="px-20">
       <div className="flex flex-wrap flex-col md:flex-row max-w-screen h-full py-24 items-center ">
        <div className="flex flex-wrap flex-col justify-center items-start h-auto md:w-6/12 w-full mb-8 ">
            <p className="text-black text-4xl text-left font-semibold h-36 md:h-32  ">Hello ,welcome to BookPavilian read something <span className="bg-gradient-to-r from-[#FF00D3] to-[#76E6FF] text-transparent bg-clip-text">new everyday !!</span></p>
            <p className="text-lg text-black font-sans font-medium text-left mb-10 "> Reading books enriches your mind,reduces stress,improves focus and language skills and opens door to endless knowlegde and imagination.</p>
            <div>
            <Link to="/register">
            <button className="bg-gradient-to-r from-[#FF00D3] to-[#76E6FF] px-6 py-[9px] rounded-[10px] text-white text-md font-bold float-start hover:opacity-75">Get Started</button>
            </Link>
        </div>
        </div>
        <div className="flex flex-wrap h-auto w-full md:w-5/12 md:ml-20">
            <img src={home} alt="image1" className="w-full"></img>
        </div>
        {/* <div>
            <button className="bg-gradient-to-r from-[#FF00D3] to-[#76E6FF] px-6 py-[9px] rounded-[10px] text-white text-md font-bold">Get Started</button>
        </div> */}
       </div>
       
    </div>
)
}
export default Home;