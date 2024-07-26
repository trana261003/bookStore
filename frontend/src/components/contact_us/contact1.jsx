// import React from "react";
// import { MdLocationPin } from "react-icons/md";
// import { IoCall } from "react-icons/io5";
// import { MdEmail } from "react-icons/md";
// import Header1 from "../Header/Header1";
// import Footer1 from "../Footer/Footer1";
// const Contact1=()=>{
//     return(
//         <>
//         <Header1/>
//         <div className="flex w-full flex-col flex-wrap px-20 mb-8">
//             <h1 className="text-3xl font-semibold text-center mb-8">Contact Us</h1>
//             <div className="flex lg:flex-row flex-wrap w-full ">
//             <div className="flex flex-col flex-wrap lg:w-1/3 w-full mt-16 lg:px-10 p-3">
//             <div className="flex-col items-center">
//                 <div className="flex ">
//                     <div className="p-2">
//                 <MdLocationPin />
//                 </div>
//                 <div className="font-semibold">
//                    <h1 className="text-xl bg-gradient-to-r from-[#FF00D3] to-[#76E6FF] inline-block text-transparent bg-clip-text "> Address</h1>
//                 </div>
//                 </div>
//                <div className="flex">
//                 <h5 className="ml-7">Vadodara</h5>
//                </div>
//                 </div>

//                 <div className="flex-col justify-center mt-7">
//                 <div className="flex ">
//                     <div className="p-2">
//                     <IoCall />
//                 </div>
//                 <div className="font-semibold">
//                    <h1 className="text-xl bg-gradient-to-r from-[#FF00D3] to-[#76E6FF] inline-block text-transparent bg-clip-text"> Phone</h1>
//                 </div>
//                 </div>
//                <div className="flex ">
//                 <h5 className="ml-10">7992347998</h5>
//                </div>
//                 </div>

//                 <div className="flex-col justify-center mt-7">
//                 <div className="flex ">
//                     <div className="p-2">
//                     <MdEmail />
//                 </div>
//                 <div className="font-semibold">
//                    <h1 className="text-xl bg-gradient-to-r from-[#FF00D3] to-[#76E6FF] inline-block text-transparent bg-clip-text"> Email</h1>
//                 </div>
//                 </div>
//                <div className="flex ">
//                 <h5 className="ml-8">webwizards@gmail.com</h5>
//                </div>
//                 </div>
//             </div>
//             <div className="flex flex-col flex-wrap lg:w-1/2 w-full mt-8 lg:ml-24">
//             <div className="flex flex-wrap flex-col shadow-lg h-auto  items-start  px-12 py-6">
//           <div className="flex flex-wrap flex-col w-full mb-6">
//             <h1 className="text-black text-xl mb-1 font-semibold inline-block">
//               Send Message
//             </h1>
//             <form>
//                 <div className="mb-4 w-full mt-6">
//                     <input 
//                     type="text"
//                     placeholder="Full Name"
//                     name="fullname"
//                     className="text-black p-2 placeholder-black placeholder-opacity-100 cursor-pointer hover:opacity-75 text-base font-medium border-b-2 border-slate-400 w-96 outline-none rounded-xl"
//                     />
//                 </div>
//                 <div className="mb-4 w-full mt-6">
//                     <input 
//                     type="text"
//                     placeholder="Email"
//                     name="email"
//                     className="text-black p-2 placeholder-black placeholder-opacity-100 cursor-pointer hover:opacity-75 text-base font-medium border-b-2 border-slate-400 w-96 outline-none rounded-xl"
//                     />
//                 </div>
//                 <div className="mb-4 w-full mt-6">
//                     <textarea 
//                     type="text"
//                     placeholder="Type a message"
//                     className="text-black p-2 placeholder-black placeholder-opacity-100 cursor-pointer hover:opacity-75 text-base font-medium border-b-2 border-slate-400 w-96 outline-none rounded-xl"
//                     />
//                 </div>
//                 <div className="mb-4 w-full mt-6">
//                     <button className=" px-5 py-2 rounded-lg font-bold text-white bg-gradient-to-r from-[#FF00D3] to-[#76E6FF] hover:opacity-75" type="submit">Send Message</button>
//                 </div>
//             </form>
//             </div>
                
//             </div>
//             </div>

           
//         </div>
//         </div>
//         <Footer1/>
//         </>
//     )
// }
// export default Contact1;



// import React from "react";
// import { MdLocationPin } from "react-icons/md";
// import { IoCall } from "react-icons/io5";
// import { MdEmail } from "react-icons/md";
// import Header1 from "../Header/Header1";
// import Footer1 from "../Footer/Footer1";

// const Contact1 = () => {
//   return (
//     <>
//       <Header1 />
//       <div className="flex w-full flex-col px-4 py-6 bg-gray-100">
//         <h1 className="text-3xl font-semibold text-center mb-8">Contact Us</h1>
//         <div className="flex flex-col lg:flex-row lg:max-w-screen-lg lg:mx-auto bg-white rounded-lg shadow-lg overflow-hidden">
//           <div className="flex flex-col w-full lg:w-1/3 p-4 lg:p-6 border-b lg:border-r lg:border-gray-200">
//             <div className="flex items-start mb-6">
//               <MdLocationPin className="text-2xl text-gray-700 mr-3" />
//               <div>
//                 <h1 className="text-xl font-semibold text-gradient">Address</h1>
//                 <h5 className="text-gray-700">Vadodara</h5>
//               </div>
//             </div>
//             <div className="flex items-start mb-6">
//               <IoCall className="text-2xl text-gray-700 mr-3" />
//               <div>
//                 <h1 className="text-xl font-semibold text-gradient">Phone</h1>
//                 <h5 className="text-gray-700">7992347998</h5>
//               </div>
//             </div>
//             <div className="flex items-start">
//               <MdEmail className="text-2xl text-gray-700 mr-3" />
//               <div>
//                 <h1 className="text-xl font-semibold text-gradient">Email</h1>
//                 <h5 className="text-gray-700">webwizards@gmail.com</h5>
//               </div>
//             </div>
//           </div>
//           <div className="flex flex-col w-full lg:w-2/3 p-4 lg:p-6">
//             <div className="bg-white shadow-md rounded-lg p-4 lg:p-6">
//               <h1 className="text-xl font-semibold mb-4">Send Message</h1>
//               <form>
//                 <div className="mb-4">
//                   <input
//                     type="text"
//                     placeholder="Full Name"
//                     name="fullname"
//                     className="w-full p-3 border-b-2 border-gray-300 rounded-lg text-base placeholder-gray-500"
//                   />
//                 </div>
//                 <div className="mb-4">
//                   <input
//                     type="text"
//                     placeholder="Email"
//                     name="email"
//                     className="w-full p-3 border-b-2 border-gray-300 rounded-lg text-base placeholder-gray-500"
//                   />
//                 </div>
//                 <div className="mb-4">
//                   <textarea
//                     placeholder="Type a message"
//                     className="w-full p-3 border-b-2 border-gray-300 rounded-lg text-base placeholder-gray-500"
//                   />
//                 </div>
//                 <div className="mb-4">
//                   <button className="w-full py-3 rounded-lg font-bold text-white bg-gradient-to-r from-[#FF00D3] to-[#76E6FF] hover:opacity-75">
//                     Send Message
//                   </button>
//                 </div>
//               </form>
//             </div>
//           </div>
//         </div>
//       </div>
//       <Footer1 />
//     </>
//   );
// };

// export default Contact1;





import React from "react";
import { MdLocationPin } from "react-icons/md";
import { IoCall } from "react-icons/io5";
import { MdEmail } from "react-icons/md";
import Header1 from "../Header/Header1";
import Footer1 from "../Footer/Footer1";

const Contact1 = () => {
  return (
    <>
      <Header1 />
      <div className="flex flex-col w-full px-4 py-6 bg-gray-100">
        <h1 className="text-3xl font-semibold text-center mb-8">Contact Us</h1>
        <div className="flex flex-col lg:flex-row lg:max-w-screen-lg lg:mx-auto bg-white rounded-lg shadow-lg overflow-hidden">
          <div className="flex flex-col w-full lg:w-1/3 p-4 lg:p-6 border-b lg:border-r lg:border-gray-200">
            <div className="flex items-start mb-6">
              <MdLocationPin className="text-2xl text-[#FF00D3] mr-3" />
              <div>
                <h1 className="text-xl font-semibold text-gradient">Address</h1>
                <h5 className="text-gray-700">Vadodara</h5>
              </div>
            </div>
            <div className="flex items-start mb-6">
              <IoCall className="text-2xl text-[#FF00D3] mr-3" />
              <div>
                <h1 className="text-xl font-semibold text-gradient">Phone</h1>
                <h5 className="text-gray-700">7992347998</h5>
              </div>
            </div>
            <div className="flex items-start">
              <MdEmail className="text-2xl text-[#FF00D3] mr-3" />
              <div>
                <h1 className="text-xl font-semibold text-gradient">Email</h1>
                <h5 className="text-gray-700">webwizards@gmail.com</h5>
              </div>
            </div>
          </div>
          <div className="flex flex-col w-full lg:w-2/3 p-4 lg:p-6">
            <div className="bg-white shadow-md rounded-lg p-4 lg:p-6">
              <h1 className="text-xl font-semibold mb-4">Send Message</h1>
              <form>
                <div className="mb-4">
                  <input
                    type="text"
                    placeholder="Full Name"
                    name="fullname"
                    className="w-full p-3 border-b-2 border-slate-400 rounded-lg text-base placeholder-gray-500"
                  />
                </div>
                <div className="mb-4">
                  <input
                    type="text"
                    placeholder="Email"
                    name="email"
                    className="w-full p-3 border-b-2 border-slate-400 rounded-lg text-base placeholder-gray-500"
                  />
                </div>
                <div className="mb-4">
                  <textarea
                    placeholder="Type a message"
                    className="w-full p-3 border-b-2 border-slate-400 rounded-lg text-base placeholder-gray-500"
                  />
                </div>
                <div className="mb-4">
                  <button className="w-full py-3 rounded-lg font-bold text-white bg-gradient-to-r from-[#FF00D3] to-[#76E6FF] hover:opacity-75">
                    Send Message
                  </button>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
      <Footer1 />
    </>
  );
};

export default Contact1;
