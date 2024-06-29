import React, { useEffect, useState } from "react";
import { Table } from "flowbite-react";
import { Link } from "react-router-dom";
import Swal from "sweetalert2";

const Manage = () => {
    const [allBooks, setBooks] = useState([]);

    useEffect(() => {
        fetch("http://localhost:8080/api/admin/getbook")
            .then(res => res.json())
            .then(data => setBooks(data));
    }, []);

    const handleDelete = (uuid) => {
        fetch(`http://localhost:8080/api/admin/deletebook/${uuid}`, {
            method: "DELETE",
        })
        .then(res => res.json())
        .then(data => {
            if (data.success) {
                Swal.fire("Book Deleted Successfully!!!");
                setBooks(prevBooks => prevBooks.filter(book => book.uuid !== uuid));
            } else {
                Swal.fire("Failed to delete the book. Please try again.");
            }
        });
    };

    return (
        <div className="flex w-full space-x-0 px-6 h-screen">
            <div className="flex flex-col w-full">
                <div className="flex text-3xl font-bold ml-6 mt-6">
                    <h2>Manage Your Books!</h2>
                </div>
                <div className="mt-6">
                    <Table className="">
                        <Table.Head className="bg-gray-50 border-2 rounded-lg">
                            <Table.HeadCell>Sr. No</Table.HeadCell>
                            <Table.HeadCell>Book Name</Table.HeadCell>
                            <Table.HeadCell>Author Name</Table.HeadCell>
                            <Table.HeadCell>Category</Table.HeadCell>
                            <Table.HeadCell>Price</Table.HeadCell>
                            <Table.HeadCell>Actions</Table.HeadCell>
                        </Table.Head>
                        {allBooks.map((book, index) => (
                            <Table.Body className="divide-y" key={book.uuid}>
                                <Table.Row className="bg-white dark:border-gray-700 dark:bg-gray-800">
                                    <Table.Cell className="whitespace-nowrap font-medium text-gray-900 dark:text-white">
                                        {index + 1}
                                    </Table.Cell>
                                    <Table.Cell className="whitespace-nowrap font-medium text-gray-900 dark:text-white">
                                        {book.title}
                                    </Table.Cell>
                                    <Table.Cell>
                                        {book.author}
                                    </Table.Cell>
                                    <Table.Cell>
                                        {book.genre}
                                    </Table.Cell>
                                    <Table.Cell>
                                        {book.price}
                                    </Table.Cell>
                                    <Table.Cell>
                                        <Link to={`/admin/edit/${book.uuid}`} className="font-medium text-cyan-600 hover:underline dark:text-cyan-500 mr-5">
                                            Edit
                                        </Link>
                                        <button className="text-cyan-600 px-4 py-1 font-medium hover:underline dark:text-cyan-500 outline-none" 
                                            onClick={() => handleDelete(book.uuid)}>
                                            Delete
                                        </button>
                                    </Table.Cell>
                                </Table.Row>
                            </Table.Body>
                        ))}
                    </Table>
                </div>
            </div>
        </div>
    );
};

export default Manage;