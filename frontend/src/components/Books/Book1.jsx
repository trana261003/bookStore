import React, { useEffect, useState } from "react";
import Header1 from "../Header/Header1";
import Swal from "sweetalert2";
import Footer1 from "../Footer/Footer1";
import { Card } from "flowbite-react";

function Book1(){
    const [books,setaBooks]=useState([]);

    useEffect(()=>{
        fetch("").then(res=>res.json()).then(data => setaBooks(data))
    },[])

    const handleclick=()=>{

        Swal.fire("Books will be Available Shortly");
    }

    return(
        <>
        <Header1/>
        <div className="flex flex-wrap flex-col md:flex-row max-w-screen h-full py-10 px-20">
            <div className="flex w-full justify-center">
                <h1 className="text-3xl font-semibold ">Books</h1>
            </div>
            <div className="grid gap-8 my-12 md:grid-cols-3 sm:grid-cols-2 lg:grid-cols-4 grid-cols-1"
            >{
                books.map(book => <Card
                  >
                    <img src={book.imageURL} alt="" className="h-96"></img>
                    <h5 className="text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
                      {book.bookName}
                    </h5>
                    <p className="font-normal text-gray-700 dark:text-gray-400">
                      {book.bookDescription}
                    </p>
                    <button className="bg-blue-700 font-semibold text-white py-2 rounded-lg">Buy Now</button>
                  </Card>)
            }
            </div>
        {/* <button className="text-2xl font-bold"
        onClick={handleclick}>For Books Please Click Here!!</button> */}
        </div>
        <Footer1/>
        </>
    )
}

export default Book1