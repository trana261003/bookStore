import React from "react";
import { MdLocationPin } from "react-icons/md";
import { IoCall } from "react-icons/io5";
import { MdEmail } from "react-icons/md";
const Contact=()=>{
    return(
        <>
        <div className="flex w-full flex-col flex-wrap px-20 mb-8">
            <h1 className="text-3xl font-semibold text-center mb-8">Contact Us</h1>
            <div className="flex lg:flex-row flex-wrap w-full ">
            <div className="flex flex-col flex-wrap lg:w-1/3 w-full mt-16 lg:px-10 p-3">
            <div className="flex-col items-center">
                <div className="flex ">
                    <div className="p-2">
                <MdLocationPin />
                </div>
                <div className="font-semibold">
                   <h1 className="text-xl bg-gradient-to-r from-[#FF00D3] to-[#76E6FF] inline-block text-transparent bg-clip-text"> Address</h1>
                </div>
                </div>
               <div className="flex">
                <h5 className="ml-7">Vadodara</h5>
               </div>
                </div>

                <div className="flex-col justify-center mt-7">
                <div className="flex ">
                    <div className="p-2">
                    <IoCall />
                </div>
                <div className="font-semibold">
                   <h1 className="text-xl bg-gradient-to-r from-[#FF00D3] to-[#76E6FF] inline-block text-transparent bg-clip-text"> Phone</h1>
                </div>
                </div>
               <div className="flex ">
                <h5 className="ml-10">7992347998</h5>
               </div>
                </div>

                <div className="flex-col justify-center mt-7">
                <div className="flex ">
                    <div className="p-2">
                    <MdEmail />
                </div>
                <div className="font-semibold">
                   <h1 className="text-xl bg-gradient-to-r from-[#FF00D3] to-[#76E6FF] inline-block text-transparent bg-clip-text"> Email</h1>
                </div>
                </div>
               <div className="flex ">
                <h5 className="ml-8">webwizards@gmail.com</h5>
               </div>
                </div>
            </div>
            <div className="flex flex-col flex-wrap lg:w-1/2 w-full mt-8 lg:ml-24">
            <div className="flex flex-wrap flex-col shadow-lg h-auto  items-start  px-12 py-6">
          <div className="flex flex-wrap flex-col w-full mb-6">
            <h1 className="text-black text-xl mb-1 font-semibold inline-block">
              Send Message
            </h1>
            <form>
                <div className="mb-4 w-full mt-6">
                    <input 
                    type="text"
                    placeholder="Full Name"
                    name="fullname"
                    className="text-black p-2 placeholder-black placeholder-opacity-100 cursor-pointer hover:opacity-75 text-base font-medium border-b-2 border-slate-400 w-96 outline-none rounded-xl"
                    />
                </div>
                <div className="mb-4 w-full mt-6">
                    <input 
                    type="text"
                    placeholder="Email"
                    name="email"
                    className="text-black p-2 placeholder-black placeholder-opacity-100 cursor-pointer hover:opacity-75 text-base font-medium border-b-2 border-slate-400 w-96 outline-none rounded-xl"
                    />
                </div>
                <div className="mb-4 w-full mt-6">
                    <textarea 
                    type="text"
                    placeholder="Type a message"
                    className="text-black p-2 placeholder-black placeholder-opacity-100 cursor-pointer hover:opacity-75 text-base font-medium border-b-2 border-slate-400 w-96 outline-none rounded-xl"
                    />
                </div>
                <div className="mb-4 w-full mt-6">
                    <button className=" px-5 py-2 rounded-lg font-bold text-white bg-gradient-to-r from-[#FF00D3] to-[#76E6FF] hover:opacity-75" type="submit"
                    >Send Message</button>
                </div>
            </form>
            </div>
                
            </div>
            </div>

           
        </div>
        </div>
        </>
    )
}
export default Contact;