// import React, { useState, useEffect } from "react";
// import Slider from "react-slick";
// import { Link } from "react-router-dom";

// // Slick slider settings
// const sliderSettings = {
//   dots: true,
//   infinite: true,
//   speed: 500,
//   slidesToShow: 3,
//   slidesToScroll: 1,
//   responsive: [
//     {
//       breakpoint: 1024,
//       settings: {
//         slidesToShow: 2,
//         slidesToScroll: 1,
//       },
//     },
//     {
//       breakpoint: 600,
//       settings: {
//         slidesToShow: 2,
//         slidesToScroll: 1,
//       },
//     },
//   ],
// };

// function Card() {
//   const [books, setBooks] = useState([]);

//   useEffect(() => {
//     // Replace with your API endpoint
//     fetch("http://localhost:8080/api/admin/getbook")
//       .then(response => response.json())
//       .then(data => {
//         // Slice the last ten books
//         setBooks(data.slice(-10));
//       })
//       .catch(error => console.error("Error fetching books:", error));
//   }, []);

//   return (
//     <div className="px-4 lg:px-20 py-12">
//       <div className="text-center mb-8">
//         <h1 className="text-4xl font-bold text-gray-800">Recently Uploaded Books</h1>
//       </div>
//       <Slider {...sliderSettings}>
//         {books.map(book => (
//           <div
//             key={book.uuid} // Replace with the unique identifier from your API
//             className="flex flex-col bg-white border border-gray-300 shadow-lg rounded-lg overflow-hidden mb-6 mx-2"
//           >
//             <div className="p-4">
//               <img
//                 src={book.coverImage}
//                 alt={book.title}
//                 className="w-full h-auto object-cover rounded-lg"
//               />
//             </div>
//             <div className="p-4">
//               <h1 className="text-xl font-semibold text-gray-800 mb-2">{book.title}</h1>
//               <h3 className="text-base font-medium text-gray-600 mb-1">
//                 By <span className="text-pink-600">{book.author}</span>
//               </h3>
//               <h3 className="text-base font-medium text-gray-600 mb-2">
//                 {book.publishDate}
//               </h3>
//               <div className="flex items-center justify-between mt-4">
//                 <span className="text-lg font-bold text-gray-800">
//                   ₹ {book.price}
//                 </span>
//                 <Link to={`/book/${book.uuid}`}>
//                   <button className="bg-gradient-to-r from-[#FF00D3] to-[#76E6FF] text-white px-4 py-2 rounded-lg font-bold hover:bg-opacity-80">
//                     Buy Now
//                   </button>
//                 </Link>
//               </div>
//             </div>
//           </div>
//         ))}
//       </Slider>
//     </div>
//   );
// }

// export default Card;




// import React, { useState, useEffect } from "react";
// import Slider from "react-slick";
// import { Link } from "react-router-dom";

// // Slick slider settings
// const sliderSettings = {
//   dots: true,
//   infinite: true,
//   speed: 500,
//   slidesToShow: 5,
//   slidesToScroll: 1,
//   responsive: [
//     {
//       breakpoint: 1024,
//       settings: {
//         slidesToShow: 2,
//         slidesToScroll: 1,
//       },
//     },
//     {
//       breakpoint: 600,
//       settings: {
//         slidesToShow: 1,
//         slidesToScroll: 1,
//       },
//     },
//   ],
// };

// function Card() {
//   const [books, setBooks] = useState([]);

//   useEffect(() => {
//     // Replace with your API endpoint
//     fetch("http://localhost:8080/api/admin/getbook")
//       .then(response => response.json())
//       .then(data => {
//         // Slice the last ten books
//         setBooks(data.slice(-10));
//       })
//       .catch(error => console.error("Error fetching books:", error));
//   }, []);

//   return (
//     <div className="px-4 lg:px-20 py-12">
//       <div className="text-center mb-8">
//         <h1 className="text-4xl font-bold text-gray-800">Recently Uploaded Books</h1>
//       </div>
//       <Slider {...sliderSettings}>
//         {books.map(book => (
//           <div
//             key={book.uuid} // Replace with the unique identifier from your API
//             className="flex flex-col bg-white border border-gray-300 shadow-lg rounded-lg overflow-hidden mb-6 mx-2"
//             style={{ width: "250px", height: "400px" }} // Set fixed size for the card
//           >
//             <div className="p-4 flex items-center justify-center h-1/2">
//               <img
//                 src={book.coverImage}
//                 alt={book.title}
//                 className="w-full h-auto object-cover rounded-lg"
//                 style={{ objectFit: "cover" }}
//               />
//             </div>
//             <div className="p-4 flex flex-col justify-between h-1/2">
//               <div className="flex flex-col h-full">
//                 <h1 className="text-xl font-semibold text-gray-800 mb-2 truncate" style={{ overflow: "hidden", textOverflow: "ellipsis", whiteSpace: "nowrap" }}>
//                   {book.title}
//                 </h1>
//                 <h3 className="text-base font-medium text-gray-600 mb-1 truncate" style={{ overflow: "hidden", textOverflow: "ellipsis", whiteSpace: "nowrap" }}>
//                   By <span className="text-pink-600">{book.author}</span>
//                 </h3>
//                 <h3 className="text-base font-medium text-gray-600 mb-2 truncate" style={{ overflow: "hidden", textOverflow: "ellipsis", whiteSpace: "nowrap" }}>
//                   {book.publishDate}
//                 </h3>
//               </div>
//               <div className="flex items-center justify-between mt-4">
//                 <span className="text-lg font-bold text-gray-800">
//                   ₹ {book.price}
//                 </span>
//                 <Link to={`/book/${book.uuid}`}>
//                   <button className="bg-gradient-to-r from-[#FF00D3] to-[#76E6FF] text-white px-4 py-2 rounded-lg font-bold hover:bg-opacity-80">
//                     Buy Now
//                   </button>
//                 </Link>
//               </div>
//             </div>
//           </div>
//         ))}
//       </Slider>
//     </div>
//   );
// }

// export default Card;





// import React, { useState, useEffect } from "react";
// import Slider from "react-slick";
// import { Link } from "react-router-dom";

// // Slick slider settings
// const sliderSettings = {
//   dots: true,
//   infinite: true,
//   speed: 500,
//   slidesToShow: 5,
//   slidesToScroll: 1,
//   responsive: [
//     {
//       breakpoint: 1024,
//       settings: {
//         slidesToShow: 3,
//         slidesToScroll: 1,
//       },
//     },
//     {
//       breakpoint: 600,
//       settings: {
//         slidesToShow: 1,
//         slidesToScroll: 1,
//       },
//     },
//   ],
// };

// function Card() {
//   const [books, setBooks] = useState([]);

//   const handleBuyNow = (book) => {
//     navigate(`/books/bookinfo/${book.uuid}`, { state: { book } });
//   };

//   useEffect(() => {
//     // Replace with your API endpoint
//     fetch("http://localhost:8080/api/admin/getbook")
//       .then(response => response.json())
//       .then(data => {
//         // Slice the last ten books
//         setBooks(data.slice(-14));
//       })
//       .catch(error => console.error("Error fetching books:", error));
//   }, []);

//   return (
//     <div className="px-4 lg:px-20 py-12">
//       <div className="text-center mb-8">
//         <h1 className="text-4xl font-bold text-gray-800">Recently Uploaded Books</h1>
//       </div>
//       <Slider {...sliderSettings}>
//         {books.map(book => (
//           <div
//             key={book.uuid} // Replace with the unique identifier from your API
//             className="flex flex-col bg-white border border-gray-300 shadow-lg rounded-lg overflow-hidden mb-6 mx-2 transition-transform transform hover:scale-105 hover:shadow-xl hover:border-gray-400"
//             style={{ width: "250px", height: "400px" }} // Set fixed size for the card
//           >
//             <div className="p-4 flex items-center justify-center h-1/2">
//               <img
//                 src={book.coverImage}
//                 alt={book.title}
//                 className="w-48 h-72 object-cover rounded-lg"
//                 style={{ objectFit: "cover" }}
//               />
//             </div>
//             <div className="p-4 flex flex-col justify-between h-1/2">
//               <div className="flex flex-col h-full">
//                 <h1 className="text-xl font-semibold text-gray-800 mb-2 truncate" style={{ overflow: "hidden", textOverflow: "ellipsis", whiteSpace: "nowrap" }}>
//                   {book.title}
//                 </h1>
//                 <h3 className="text-base font-medium text-gray-600 mb-1 truncate" style={{ overflow: "hidden", textOverflow: "ellipsis", whiteSpace: "nowrap" }}>
//                   By <span className="text-pink-600">{book.author}</span>
//                 </h3>
//                 {/* <h3 className="text-base font-medium text-gray-600 mb-2 truncate" style={{ overflow: "hidden", textOverflow: "ellipsis", whiteSpace: "nowrap" }}>
//                   {book.publishDate}
//                 </h3> */}
//               </div>
//               <div className="flex items-center justify-between mt-4">
//                 <span className="text-lg font-bold text-gray-800">
//                   ₹ {book.price}
//                 </span>
//                 {/* <Link to={`/books/${book.uuid}`}>
                  
//                 </Link> */}
//                 <button onClick={handleBuyNow} className="bg-gradient-to-r from-[#FF00D3] to-[#76E6FF] text-white px-4 py-2 rounded-lg font-bold hover:bg-opacity-80">
//                     Buy Now
//                   </button>
//               </div>
//             </div>
//           </div>
//         ))}
//       </Slider>
//     </div>
//   );
// }

// export default Card;







import React, { useState, useEffect } from "react";
import Slider from "react-slick";
import { Link, useNavigate } from "react-router-dom";

// Slick slider settings
const sliderSettings = {
  dots: true,
  infinite: true,
  speed: 500,
  slidesToShow: 5,
  slidesToScroll: 1,
  responsive: [
    {
      breakpoint: 1024,
      settings: {
        slidesToShow: 3,
        slidesToScroll: 1,
      },
    },
    {
      breakpoint: 600,
      settings: {
        slidesToShow: 2,
        slidesToScroll: 2,
      },
    },
  ],
};

function Card() {
  const [books, setBooks] = useState([]);
  const navigate = useNavigate();

  const handleBuyNow = (book) => {
    navigate(`/books/bookinfo/${book.uuid}`, { state: { book } });
  };

  useEffect(() => {
    // Replace with your API endpoint
    fetch("http://localhost:8080/api/admin/getbook")
      .then(response => response.json())
      .then(data => {
        // Slice the last ten books
        setBooks(data.slice(-14));
      })
      .catch(error => console.error("Error fetching books:", error));
  }, []);

  return (
    <div className="px-4 lg:px-20 py-12">
      <div className="text-center mb-8">
        <h1 className="text-4xl font-bold text-gray-800">Recently Uploaded Books</h1>
      </div>
      <Slider {...sliderSettings}>
        {books.map(book => (
          <div
            key={book.uuid} // Replace with the unique identifier from your API
            className="flex flex-col bg-white border border-gray-300 shadow-lg rounded-lg overflow-hidden mb-6 mx-2 transition-transform transform hover:scale-105 hover:shadow-xl hover:border-gray-400"
            style={{ width: "250px", height: "400px" }} // Set fixed size for the card
          >
            <div className="p-4 flex items-center justify-center h-1/2">
              <img
                src={book.coverImage}
                alt={book.title}
                className="w-48 h-72 object-cover rounded-lg"
                style={{ objectFit: "cover" }}
              />
            </div>
            <div className="p-4 flex flex-col justify-between h-1/2">
              <div className="flex flex-col h-full">
                <h1 className="text-xl font-semibold text-gray-800 mb-2 truncate" style={{ overflow: "hidden", textOverflow: "ellipsis", whiteSpace: "nowrap" }}>
                  {book.title}
                </h1>
                <h3 className="text-base font-medium text-gray-600 mb-1 truncate" style={{ overflow: "hidden", textOverflow: "ellipsis", whiteSpace: "nowrap" }}>
                  By <span className="text-pink-600">{book.author}</span>
                </h3>
                {/* <h3 className="text-base font-medium text-gray-600 mb-2 truncate" style={{ overflow: "hidden", textOverflow: "ellipsis", whiteSpace: "nowrap" }}>
                  {book.publishDate}
                </h3> */}
              </div>
              <div className="flex items-center justify-between mt-4">
                <span className="text-lg font-bold text-gray-800">
                  ₹ {book.price}
                </span>
                <button onClick={() => handleBuyNow(book)} className="bg-gradient-to-r from-[#FF00D3] to-[#76E6FF] text-white px-4 py-2 rounded-lg font-bold hover:bg-opacity-80">
                  Buy Now
                </button>
              </div>
            </div>
          </div>
        ))}
      </Slider>
    </div>
  );
}

export default Card;
