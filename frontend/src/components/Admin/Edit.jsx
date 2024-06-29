import React, { useState, useEffect } from "react";
import Swal from "sweetalert2";
import { useParams } from "react-router-dom";

const Edit = () => {
  const { uuid } = useParams();
 

  const bookCategory = [
    "Fiction", "Non-Fiction", "Mystery", "Programming", "Science Fiction", 
    "Fantasy", "Horror", "Bibliography", "Autobiography", "History", 
    "Self-help", "Memoir", "Business", "Children Books", "Travel", 
    "Religion", "Art and Design"
  ];

  const initialFormData = {
    title: "",
    author: "",
    coverImage: "",
    genre: bookCategory[0],
    description: "",
    pdfUrl: "",
    price: ""
  };

  const [formData, setFormData] = useState(initialFormData);

  useEffect(() => {
    fetch(`http://localhost:8080/api/admin/getbook/${uuid}`)
      .then((res) => res.json())
      .then((data) => {
        setFormData({
          title: data.title,
          author: data.author,
          coverImage: data.coverImage,
          genre: data.genre,
          description: data.description,
          pdfUrl: data.pdfUrl,
          price: data.price
        });
      })
      .catch((error) => {
        console.error("Error fetching book data:", error);
        Swal.fire("Error", "Failed to fetch book data. Please try again later.", "error");
      });
  }, [uuid]);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value
    });
  };

  const handleUpdate = async (e) => {
    e.preventDefault();

    try {
      const response = await fetch(`http://localhost:8080/api/admin/updatebook/${uuid}`, {
        method: "PUT",
        headers: {
          "Content-Type": "application/json"
        },
        body: JSON.stringify(formData)
      });

      if (!response.ok) {
        throw new Error(`HTTP error! Status: ${response.status}`);
      }

      const data = await response.json();

      if (data.success) {
        Swal.fire("Book Updated Successfully!!!");
        // Optionally reset form or update state
      } else {
        Swal.fire("Error Updating Book", data.message, "error");
        // Handle other error scenarios if needed
      }
    } catch (error) {
      console.error("Error:", error);
      Swal.fire("Error", "Failed to update book. Please try again later.", "error");
    }
  };

  return (
    <div className="flex w-full space-x-0 px-6">
      <div className="flex flex-col w-full">
        <div className="flex text-3xl font-bold ml-6 mt-6">
          <h2>Edit the Book!</h2>
        </div>
        <form onSubmit={handleUpdate} className="mt-6 ml-6">
          <div className="flex md:w-full mt-6 gap-5 flex-col md:flex-row w-full">
            <div className="flex flex-col md:w-1/2">
              <label className="text-xl font-medium mb-2" htmlFor="title">
                Book Title
              </label>
              <input
                className="w-full px-2 py-1.5 border-2 border-gray-700 rounded-xl"
                placeholder="Book Name"
                type="text"
                id="title"
                name="title"
                value={formData.title}
                onChange={handleChange}
                required
              />
            </div>
            <div className="flex flex-col md:w-1/2">
              <label className="text-xl font-medium mb-2" htmlFor="author">
                Author Name
              </label>
              <input
                className="w-full px-2 py-1.5 border-2 border-gray-700 rounded-xl"
                placeholder="Author Name"
                type="text"
                id="author"
                name="author"
                value={formData.author}
                onChange={handleChange}
                required
              />
            </div>
          </div>
          <div className="flex md:w-full md:gap-5 mt-7 flex-col md:flex-row w-full">
            <div className="flex flex-col md:w-1/2">
              <label className="text-xl font-medium mb-2" htmlFor="coverImage">
                Book Image URL
              </label>
              <input
                className="w-full px-2 py-1.5 border-2 border-gray-700 rounded-xl"
                placeholder="Image URL"
                type="text"
                id="coverImage"
                name="coverImage"
                value={formData.coverImage}
                onChange={handleChange}
                required
              />
            </div>
            <div className="flex flex-col md:w-1/2">
              <label className="text-xl font-medium mb-2" htmlFor="genre">
                Book Category
              </label>
              <select
                className="w-full rounded-xl px-2 py-1.5 border-2 border-gray-700"
                id="genre"
                name="genre"
                value={formData.genre}
                onChange={handleChange}
              >
                {bookCategory.map((option) => (
                  <option key={option} value={option}>
                    {option}
                  </option>
                ))}
              </select>
            </div>
          </div>
          <div className="flex md:w-full mt-6 gap-5 flex-col md:flex-row w-full">
            <div className="flex flex-col md:w-1/2">
              <label className="text-xl font-medium mb-2" htmlFor="pdfUrl">
                Book PDF Link
              </label>
              <input
                className="w-full px-2 py-1.5 border-2 border-gray-700 rounded-xl"
                placeholder="Paste Book PDF URL here"
                type="text"
                id="pdfUrl"
                name="pdfUrl"
                value={formData.pdfUrl}
                onChange={handleChange}
                required
              />
            </div>
            <div className="flex flex-col md:w-1/2">
              <label className="text-xl font-medium mb-2" htmlFor="price">
                Price
              </label>
              <input
                className="w-full px-2 py-1.5 border-2 border-gray-700 rounded-xl"
                placeholder="Price"
                type="number"
                id="price"
                name="price"
                value={formData.price}
                onChange={handleChange}
                required
              />
            </div>
          </div>
          <div className="flex md:w-full flex-col md:flex-row mt-7 w-[450px]">
            <div className="flex flex-col w-full">
              <label className="text-xl font-medium mb-2" htmlFor="description">
                Book Description
              </label>
              <textarea
                className="w-full px-2 py-1.5 border-2 border-gray-700 rounded-xl"
                placeholder="Book Description"
                id="description"
                name="description"
                value={formData.description}
                onChange={handleChange}
                required
                rows="6"
              ></textarea>
            </div>
          </div>
          <div className="flex md:w-full mt-7 w-[450px] mb-5">
            <div className="flex md:w-full w-[900px]">
              <button className="bg-gray-900 text-white rounded-lg w-full py-3 hover:opacity-90">
                Edit Book
              </button>
            </div>
          </div>
        </form>
      </div>
    </div>
  );
};

export default Edit;
