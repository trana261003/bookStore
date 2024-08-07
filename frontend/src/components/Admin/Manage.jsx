// import React, { useEffect, useState } from "react";
// import { Table } from "flowbite-react";
// import { Link } from "react-router-dom";
// import Swal from "sweetalert2";

// const Manage = () => {
//     const [allBooks, setBooks] = useState([]);
//     const [loading, setLoading] = useState(true);
//     const [error, setError] = useState(null);
//     const [currentPage, setCurrentPage] = useState(1);
//     const booksPerPage = 5;

//     useEffect(() => {
//         fetch("http://localhost:8080/api/admin/getbook")
//             .then((res) => res.json())
//             .then(
//                 (data) => {
//                     setBooks(data);
//                     setLoading(false);
//                 },
//                 (error) => {
//                     setError(error);
//                     setLoading(false);
//                 }
//             );
//     }, []);

//     const handleDelete = (uuid) => {
//         fetch(`http://localhost:8080/api/admin/deletebook/${uuid}`, {
//             method: "DELETE",
//         })
//             .then((res) => res.json())
//             .then((data) => {
//                 if (data.success) {
//                     Swal.fire("Book Deleted Successfully!!!");
//                     setBooks((prevBooks) => prevBooks.filter((book) => book.uuid !== uuid));
//                 } else {
//                     Swal.fire("Failed to delete the book. Please try again.");
//                 }
//             });
//     };

//     // Logic to paginate books
//     const indexOfLastBook = currentPage * booksPerPage;
//     const indexOfFirstBook = indexOfLastBook - booksPerPage;
//     const currentBooks = allBooks.slice(indexOfFirstBook, indexOfLastBook);

//     const paginate = (pageNumber) => setCurrentPage(pageNumber);

//     if (loading) {
//         return <div className="flex justify-center items-center h-screen">Loading...</div>;
//     }

//     if (error) {
//         return <div className="flex justify-center items-center h-screen">Error: {error.message}</div>;
//     }

//     return (
//         <div className="flex w-full h-screen px-6 bg-gray-100">
//             <div className="flex flex-col w-full bg-white shadow-md rounded-lg p-6">
//                 <div className="text-3xl font-bold mb-6">
//                     <h2>Manage Your Books!</h2>
//                 </div>
//                 <div className="overflow-x-auto">
//                     <table className="min-w-full divide-y divide-gray-200">
//                         <thead className="bg-gray-50">
//                             <tr>
//                                 <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Sr. No</th>
//                                 <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Image</th>
//                                 <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Book Name</th>
//                                 <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Author Name</th>
//                                 <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Category</th>
//                                 <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Quantity</th>
//                                 <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Price</th>
//                                 <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Actions</th>
//                             </tr>
//                         </thead>
//                         <tbody className="bg-white divide-y divide-gray-200">
//                             {currentBooks.map((book, index) => (
//                                 <tr key={book.uuid}>
//                                     <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900">
//                                         {index + 1 + (currentPage - 1) * booksPerPage}
//                                     </td>
//                                     <td className="px-6 py-4 whitespace-nowrap">
//                                         <img src={book.coverImage} alt={book.title} className="h-16 w-10 object-cover" />
//                                     </td>
//                                     <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-900">{book.title}</td>
//                                     <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">{book.author}</td>
//                                     <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">{book.genre}</td>
//                                     <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">{book.quantity}</td>
//                                     <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">{book.price}</td>
//                                     <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
//                                         <Link
//                                             to={`/admin/edit/${book.uuid}`}
//                                             className="font-medium text-cyan-600 hover:underline mr-5"
//                                         >
//                                             Edit
//                                         </Link>
//                                         <button
//                                             className="text-cyan-600 font-medium hover:underline"
//                                             onClick={() => handleDelete(book.uuid)}
//                                         >
//                                             Delete
//                                         </button>
//                                     </td>
//                                 </tr>
//                             ))}
//                         </tbody>
//                     </table>
//                 </div>
//                 {/* Pagination buttons */}
//                 <div className="flex justify-center mt-4">
//                     {[...Array(Math.ceil(allBooks.length / booksPerPage)).keys()].map((number) => (
//                         <button
//                             key={number + 1}
//                             className={`mx-1 px-4 py-2 border border-gray-300 rounded-md ${
//                                 currentPage === number + 1 ? "bg-blue-500 text-white" : "bg-white text-gray-700 hover:bg-gray-200"
//                             }`}
//                             onClick={() => paginate(number + 1)}
//                         >
//                             {number + 1}
//                         </button>
//                     ))}
//                 </div>
//             </div>
//         </div>
//     );
// };

// export default Manage;



// import React, { useEffect, useState } from "react";
// import { Link } from "react-router-dom";
// import Swal from "sweetalert2";

// const Manage = () => {
//     const [allBooks, setBooks] = useState([]);
//     const [loading, setLoading] = useState(true);
//     const [error, setError] = useState(null);
//     const [currentPage, setCurrentPage] = useState(1);
//     const booksPerPage = 5;

//     useEffect(() => {
//         fetch("http://localhost:8080/api/admin/getbook")
//             .then((res) => res.json())
//             .then(
//                 (data) => {
//                     setBooks(data);
//                     setLoading(false);
//                 },
//                 (error) => {
//                     setError(error);
//                     setLoading(false);
//                 }
//             );
//     }, []);

//     const handleDelete = (uuid) => {
//         fetch(`http://localhost:8080/api/admin/deletebook/${uuid}`, {
//             method: "DELETE",
//         })
//             .then((res) => res.json())
//             .then((data) => {
//                 if (data.success) {
//                     Swal.fire("Book Deleted Successfully!!!");
//                     setBooks((prevBooks) => prevBooks.filter((book) => book.uuid !== uuid));
//                 } else {
//                     Swal.fire("Failed to delete the book. Please try again.");
//                 }
//             });
//     };

//     const handleBookDetails = (book) => {
//         Swal.fire({
//             title: book.title,
//             html: `
//             <div class="relative flex flex-col sm:flex-row items-center sm:items-start">
//               <img src="${book.coverImage}" alt="${book.title}" class="w-24 sm:w-1/4 h-auto mb-4 sm:mb-0 sm:mr-4"/>
//               <div class="flex flex-col text-left w-full sm:w-2/3">
//                 <p><strong>Genre:</strong> ${book.genre}</p>
//                 <p><strong>Author:</strong> ${book.author}</p>
//                 <p><strong>Price:</strong> ₹${book.price}</p>
//                 <p class="mt-4 text-justify w-auto">
//                   <strong>Description:</strong> ${book.description}
//                 </p>
//               </div>
//             </div>
//           `,
//             showCloseButton: true,
//             focusConfirm: false,
//             confirmButtonText: 'Close',
//             width: '80%', // Set the width to 80% of the page
//             customClass: {
//                 popup: 'w-full', // Ensure full width
//                 confirmButton: 'bg-blue-700 text-white py-1 px-5 rounded-lg font-semibold'
//             },
//             backdrop: true,
//             position: 'center'
//         });
//     };


//     // Logic to paginate books
//     const indexOfLastBook = currentPage * booksPerPage;
//     const indexOfFirstBook = indexOfLastBook - booksPerPage;
//     const currentBooks = allBooks.slice(indexOfFirstBook, indexOfLastBook);

//     const paginate = (pageNumber) => setCurrentPage(pageNumber);

//     if (loading) {
//         return <div className="flex justify-center items-center h-screen">Loading...</div>;
//     }

//     if (error) {
//         return <div className="flex justify-center items-center h-screen">Error: {error.message}</div>;
//     }

//     return (
//         <div className="flex w-full h-screen px-6 bg-gray-100">
//             <div className="flex flex-col w-full bg-white shadow-md rounded-lg p-6">
//                 <div className="text-3xl font-bold mb-6">
//                     <h2>Manage Your Books!</h2>
//                 </div>
//                 <div className="overflow-x-auto">
//                     <table className="min-w-full divide-y divide-gray-200">
//                         <thead className="bg-gray-50">
//                             <tr>
//                                 <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Sr. No</th>
//                                 <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Image</th>
//                                 <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Book Name</th>
//                                 <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Author Name</th>
//                                 <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Category</th>
//                                 <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Quantity</th>
//                                 <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Price</th>
//                                 <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Actions</th>
//                             </tr>
//                         </thead>
//                         <tbody className="bg-white divide-y divide-gray-200">
//                             {currentBooks.map((book, index) => (
//                                 <tr key={book.uuid}>
//                                     <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900">
//                                         {index + 1 + (currentPage - 1) * booksPerPage}
//                                     </td>
//                                     <td className="px-6 py-4 whitespace-nowrap">
//                                         <img src={book.coverImage} alt={book.title} className="h-16 w-10 object-cover" />
//                                     </td>
//                                     <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-900 cursor-pointer hover:underline" onClick={() => handleBookDetails(book)}>
//                                         {book.title}
//                                     </td>
//                                     <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">{book.author}</td>
//                                     <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">{book.genre}</td>
//                                     <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">{book.quantity}</td>
//                                     <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">{book.price}</td>
//                                     <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
//                                         <Link
//                                             to={`/admin/edit/${book.uuid}`}
//                                             className="font-medium text-cyan-600 hover:underline mr-5"
//                                         >
//                                             Edit
//                                         </Link>
//                                         <button
//                                             className="text-cyan-600 font-medium hover:underline"
//                                             onClick={() => handleDelete(book.uuid)}
//                                         >
//                                             Delete
//                                         </button>
//                                     </td>
//                                 </tr>
//                             ))}
//                         </tbody>
//                     </table>
//                 </div>
//                 {/* Pagination buttons */}
//                 <div className="flex justify-center mt-4">
//                     {[...Array(Math.ceil(allBooks.length / booksPerPage)).keys()].map((number) => (
//                         <button
//                             key={number + 1}
//                             className={`mx-1 px-4 py-2 border border-gray-300 rounded-md ${currentPage === number + 1 ? "bg-blue-500 text-white" : "bg-white text-gray-700 hover:bg-gray-200"
//                                 }`}
//                             onClick={() => paginate(number + 1)}
//                         >
//                             {number + 1}
//                         </button>
//                     ))}
//                 </div>
//             </div>
//         </div>
//     );
// };

// export default Manage;




import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import Swal from "sweetalert2";

const Manage = () => {
    const [allBooks, setBooks] = useState([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);
    const [currentPage, setCurrentPage] = useState(1);
    const booksPerPage = 5;

    useEffect(() => {
        fetch("http://localhost:8080/api/admin/getbook")
            .then((res) => res.json())
            .then(
                (data) => {
                    setBooks(data);
                    setLoading(false);
                },
                (error) => {
                    setError(error);
                    setLoading(false);
                }
            );
    }, []);

    const handleDelete = (uuid) => {
        Swal.fire({
            title: 'Are you sure?',
            text: "You want to delete this book...",
            icon: 'warning',
            showCancelButton: true,
            confirmButtonColor: '#3085d6',
            cancelButtonColor: '#d33',
            confirmButtonText: 'Yes, delete it!'
        }).then((result) => {
            if (result.isConfirmed) {
                fetch(`http://localhost:8080/api/admin/deletebook/${uuid}`, {
                    method: "DELETE",
                })
                    .then((res) => res.json())
                    .then((data) => {
                        if (data.success) {
                            Swal.fire('Deleted!', 'Your book has been deleted.', 'success');
                            setBooks((prevBooks) => prevBooks.filter((book) => book.uuid !== uuid));
                        } else {
                            Swal.fire('Failed!', 'Failed to delete the book. Please try again.', 'error');
                        }
                    });
            }
        });
    };

    const handleBookDetails = (book) => {
        Swal.fire({
            title: book.title,
            html: `
                <div class="relative flex flex-col sm:flex-row items-center sm:items-start">
                    <img src="${book.coverImage}" alt="${book.title}" class="w-24 sm:w-1/4 h-auto mb-4 sm:mb-0 sm:mr-4"/>
                    <div class="flex flex-col text-left w-full sm:w-2/3">
                        <p><strong>Genre:</strong> ${book.genre}</p>
                        <p><strong>Author:</strong> ${book.author}</p>
                        <p><strong>Price:</strong> ₹${book.price}</p>
                        <p class="mt-4 text-justify w-auto">
                            <strong>Description:</strong> ${book.description}
                        </p>
                    </div>
                </div>
            `,
            showCloseButton: true,
            focusConfirm: false,
            confirmButtonText: 'Close',
            width: '80%', 
            customClass: {
                popup: 'w-full', 
                confirmButton: 'bg-blue-700 text-white py-1 px-5 rounded-lg font-semibold'
            },
            backdrop: true,
            position: 'center'
        });
    };

    
    const indexOfLastBook = currentPage * booksPerPage;
    const indexOfFirstBook = indexOfLastBook - booksPerPage;
    const currentBooks = allBooks.slice(indexOfFirstBook, indexOfLastBook);

    const paginate = (pageNumber) => setCurrentPage(pageNumber);

    if (loading) {
        return <div className="flex justify-center items-center h-screen">Loading...</div>;
    }

    if (error) {
        return <div className="flex justify-center items-center h-screen">Error: {error.message}</div>;
    }

    return (
        <div className="flex w-full h-screen px-6 bg-gray-100">
            <div className="flex flex-col w-full bg-white shadow-md rounded-lg p-6">
                <div className="text-3xl font-bold mb-6">
                    <h2>Manage Your Books!</h2>
                </div>
                <div className="overflow-x-auto">
                    <table className="min-w-full divide-y divide-gray-200">
                        <thead className="bg-gray-50">
                            <tr>
                                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Sr. No</th>
                                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Image</th>
                                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Book Name</th>
                                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Author Name</th>
                                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Category</th>
                                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Quantity</th>
                                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Price</th>
                                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Actions</th>
                            </tr>
                        </thead>
                        <tbody className="bg-white divide-y divide-gray-200">
                            {currentBooks.map((book, index) => (
                                <tr key={book.uuid}>
                                    <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900">
                                        {index + 1 + (currentPage - 1) * booksPerPage}
                                    </td>
                                    <td className="px-6 py-4 whitespace-nowrap">
                                        <img src={book.coverImage} alt={book.title} className="h-16 w-10 object-cover" />
                                    </td>
                                    <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-900 cursor-pointer hover:underline" onClick={() => handleBookDetails(book)}>
                                        {book.title}
                                    </td>
                                    <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">{book.author}</td>
                                    <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">{book.genre}</td>
                                    <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">{book.quantity}</td>
                                    <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">{book.price}</td>
                                    <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                                        <Link
                                            to={`/admin/edit/${book.uuid}`}
                                            className="font-medium text-cyan-600 hover:underline mr-5"
                                        >
                                            Edit
                                        </Link>
                                        <button
                                            className="text-cyan-600 font-medium hover:underline"
                                            onClick={() => handleDelete(book.uuid)}
                                        >
                                            Delete
                                        </button>
                                    </td>
                                </tr>
                            ))}
                        </tbody>
                    </table>
                </div>
                {/* Pagination buttons */}
                <div className="flex justify-center mt-4">
                    {[...Array(Math.ceil(allBooks.length / booksPerPage)).keys()].map((number) => (
                        <button
                            key={number + 1}
                            className={`mx-1 px-4 py-2 border border-gray-300 rounded-md ${currentPage === number + 1 ? "bg-blue-500 text-white" : "bg-white text-gray-700 hover:bg-gray-200"
                                }`}
                            onClick={() => paginate(number + 1)}
                        >
                            {number + 1}
                        </button>
                    ))}
                </div>
            </div>
        </div>
    );
};

export default Manage;
