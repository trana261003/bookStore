// import React, { useState } from "react";
// import { Link, NavLink } from "react-router-dom";

// const Admin = () => {
//   const [open, setOpen] = useState(true);

//   // Sample data for stats and tasks
//   const [stats, setStats] = useState({
//     welcomeMessage: "Welcome Admin",
//     tasksFinished: 20,
//     trackedHours: 5.5,
//     dailyPlan: "5 of 8 Completed",
//   });

//   const [tasks, setTasks] = useState([
//     {
//       id: 1,
//       number: 10,
//       title: "Blog and social posts",
//       duration: "4h",
//       deadline: "Deadline is today",
//     },
//     {
//       id: 2,
//       number: 9,
//       title: "New campaign review",
//       duration: "7d",
//       deadline: "New Feedback",
//     },
//     {
//       id: 3,
//       number: "Team Webwizards App",
//       title: "Cross Platform and Questionnaire",
//       duration: null,
//       deadline: null,
//     },
//   ]);

//   return (
//     <div className="flex w-full space-x-0 px-4">
//       <div className="flex flex-col w-full">
//         <div className="flex text-3xl font-bold ml-6 mt-6">
//           <h1> Admin Dashboard for Managing Book Inventory</h1>
//         </div>
//         <div className="flex flex-col md:flex-row w-full">
//           <div className="ml-6 mt-6 w-full md:w-4/12">
//             <div>
//               <h1 className="text-black text-3xl font-bold">Stats</h1>
//             </div>
//             <div className="mt-4">
//               <div className="bg-green-300 h-32 w-96 rounded-xl">
//                 <div className="text-2xl py-3 font-semibold ml-4">
//                   {stats.welcomeMessage},
//                 </div>
//                 <div className="px-7">
//                   <button className="bg-white px-5 rounded-md font-semibold py-1">
//                     Start Tracking
//                   </button>
//                 </div>
//               </div>
//             </div>
//             <div className="mt-4 flex">
//               <div className="bg-yellow-200 h-32 w-44 rounded-xl">
//                 <div className="mx-auto flex items-center justify-center text-4xl font-semibold mt-8">
//                   {stats.tasksFinished}
//                 </div>
//                 <div className="flex justify-center mt-2 font-medium text-lg">
//                   Tasks Finished
//                 </div>
//               </div>
//               <div className="bg-yellow-200 h-32 w-44 rounded-xl ml-8">
//                 <div className="mx-auto flex items-center justify-center text-4xl font-semibold mt-8">
//                   {stats.trackedHours}
//                 </div>
//                 <div className="flex justify-center mt-2 font-medium text-lg">
//                   Tracked Hours
//                 </div>
//               </div>
//             </div>
//             <div className="mt-4">
//               <div className="bg-purple-400 h-32 w-96 rounded-xl">
//                 <div className="text-2xl flex ml-4 py-2 font-semibold">
//                   Your daily plan
//                 </div>
//                 <div className="mt-3 ml-4 font-semibold text-lg">
//                   {stats.dailyPlan}
//                 </div>
//               </div>
//             </div>
//           </div>
//           <div className="flex flex-col w-full md:w-7/12 mt-6 ml-6 md:ml-20">
//             <div>
//               <h1 className="text-black text-3xl font-bold">Your task today</h1>
//             </div>
//             {tasks.map((task) => (
//               <div
//                 key={task.id}
//                 className="w-[550px] h-auto border-2 mt-4 rounded-xl flex flex-col border-gray-400"
//               >
//                 <div className="flex items-center px-6 mt-2 justify-between">
//                   <div className="text-base text-gray-500">Number {task.number}</div>
//                   {task.duration && (
//                     <div className="text-base text-gray-500">{task.duration}</div>
//                   )}
//                 </div>
//                 <div className="px-5 text-2xl font-bold mt-2">{task.title}</div>
//                 {task.deadline && (
//                   <div className="flex mb-3">
//                     <svg
//                       xmlns="http://www.w3.org/2000/svg"
//                       fill="black"
//                       viewBox="0 0 24 24"
//                       strokeWidth="1.5"
//                       stroke="currentColor"
//                       className="size-5 mt-3.5 ml-4 text-white"
//                     >
//                       <path
//                         strokeLinecap="round"
//                         strokeLinejoin="round"
//                         d="M12 9v3.75m9-.75a9 9 0 1 1-18 0 9 9 0 0 1 18 0Zm-9 3.75h.008v.008H12v-.008Z"
//                       />
//                     </svg>
//                     <h3 className="mt-3 ml-1 text-gray-500">{task.deadline}</h3>
//                   </div>
//                 )}
//               </div>
//             ))}
//           </div>
//         </div>
//       </div>
//     </div>
//   );
// };

// export default Admin;







// import React, { useEffect, useState } from 'react';
// import { Pie } from 'react-chartjs-2';
// import { Chart as ChartJS, ArcElement, Tooltip, Legend } from 'chart.js';

// ChartJS.register(ArcElement, Tooltip, Legend);

// const UserPieChart = () => {
//     const [chartData, setChartData] = useState({
//         labels: [],
//         datasets: []
//     });

//     useEffect(() => {
//         const fetchData = async () => {
//             try {
//                 const response = await fetch('http://localhost:8080/api/admin/getusers');
//                 const result = await response.json();

//                 if (result.error) {
//                     console.error(result.message);
//                     return;
//                 }

//                 const users = result.users;
//                 const activeUsers = users.filter(user => user.isActive).length;
//                 const inactiveUsers = users.length - activeUsers;

//                 setChartData({
//                     labels: ['Active Users', 'Inactive Users'],
//                     datasets: [
//                         {
//                             label: 'User Status',
//                             data: [activeUsers, inactiveUsers],
//                             backgroundColor: ['#36A2EB', '#FF6384'],
//                             hoverBackgroundColor: ['#36A2EB', '#FF6384']
//                         }
//                     ]
//                 });
//             } catch (error) {
//                 console.error('Error fetching user data:', error);
//             }
//         };

//         fetchData();
//     }, []);

//     return (
//         <div style={{ width: '350px', height: '350px', margin: '0 0' }}>
//             <h2>Active User Status</h2>
//             <Pie data={chartData} options={{ maintainAspectRatio: false }} />
//         </div>
//     );
// };

// export default UserPieChart;






// import React, { useEffect, useState } from 'react';
// import { Pie, Bar, Line } from 'react-chartjs-2';
// import { Chart as ChartJS, ArcElement, Tooltip, Legend, CategoryScale, LinearScale, BarElement, LineElement, PointElement } from 'chart.js';

// ChartJS.register(ArcElement, Tooltip, Legend, CategoryScale, LinearScale, BarElement, LineElement, PointElement);

// const AdminDashboard = () => {
//     const [userChartData, setUserChartData] = useState(null);
//     const [bookChartData, setBookChartData] = useState(null);
//     const [ordersData, setOrdersData] = useState(null);
//     const [reviewVolumeData, setReviewVolumeData] = useState(null);

//     useEffect(() => {
//         const fetchData = async (url, setData, processData) => {
//             try {
//                 const response = await fetch(url);
//                 const result = await response.json();

//                 if (result.error) {
//                     throw new Error(result.message);
//                 }

//                 setData(processData(result));
//             } catch (error) {
//                 console.error(`Error fetching data from ${url}:`, error);
//             }
//         };

//         fetchData(
//             'http://localhost:8080/api/admin/getusers',
//             setUserChartData,
//             (data) => {
//                 const activeUsers = data.users.filter(user => user.isActive).length;
//                 const inactiveUsers = data.users.length - activeUsers;
//                 return {
//                     labels: ['Active Users', 'Inactive Users'],
//                     datasets: [{
//                         label: 'User Status',
//                         data: [activeUsers, inactiveUsers],
//                         backgroundColor: ['#36A2EB', '#FF6384'],
//                         hoverBackgroundColor: ['#36A2EB', '#FF6384']
//                     }]
//                 };
//             }
//         );

//         fetchData(
//             'http://localhost:8080/api/admin/getbook',
//             setBookChartData,
//             (data) => ({
//                 labels: ['Uploaded Books'],
//                 datasets: [{
//                     label: 'Books Uploaded',
//                     data: [data.length],
//                     backgroundColor: ['#FFCE56'],
//                     hoverBackgroundColor: ['#FFCE56']
//                 }]
//             })
//         );

//         fetchData(
//             'http://localhost:8080/api/getorders',
//             setOrdersData,
//             (data) => {
//                 const orderCounts = data.reduce((acc, order) => {
//                     const month = new Date(order.createdAt).toLocaleString('default', { month: 'short' });
//                     acc[month] = (acc[month] || 0) + 1;
//                     return acc;
//                 }, {});
//                 return {
//                     labels: Object.keys(orderCounts),
//                     datasets: [{
//                         label: 'Orders Volume',
//                         data: Object.values(orderCounts),
//                         backgroundColor: '#42A5F5',
//                         borderColor: '#1E88E5',
//                         borderWidth: 2,
//                         fill: true,
//                     }]
//                 };
//             }
//         );

//         fetchData(
//             'http://localhost:8080/api/admin/getthereview',
//             setReviewVolumeData,
//             (data) => {
//                 const labels = data.reviews.map(review => review.bookuuid); // Replace bookuuid with actual book names if available
//                 const starCounts = data.reviews.map(review => review.rating); // Assuming `rating` is the rating field
//                 return {
//                     labels,
//                     datasets: [{
//                         label: 'Star Ratings by Book',
//                         data: starCounts,
//                         borderColor: 'black',
//                         backgroundColor: 'yellow',
//                         borderWidth: 2,
//                         fill: false,
//                     }]
//                 };
//             }
//         );
//     }, []);

//     const chartOptions = {
//         maintainAspectRatio: false,
//         responsive: true,
//         plugins: {
//             legend: {
//                 display: true,
//                 position: 'top',
//                 labels: {
//                     font: {
//                         size: 14,
//                     },
//                 },
//             },
//             tooltip: {
//                 callbacks: {
//                     label: (tooltipItem) => `${tooltipItem.label}: ${tooltipItem.raw}`,
//                 },
//             },
//         },
//         scales: {
//             x: {
//                 grid: {
//                     display: false,
//                 },
//                 ticks: {
//                     font: {
//                         size: 12,
//                     },
//                 },
//             },
//             y: {
//                 grid: {
//                     display: false,
//                 },
//                 beginAtZero: true,
//                 ticks: {
//                     font: {
//                         size: 12,
//                     },
//                 },
//             },
//         },
//     };

//     return (
//         <div className="min-h-screen bg-gray-100 p-6">
//             <h2 className="text-3xl font-bold mb-8 text-center text-gray-800">Admin Dashboard</h2>
//             <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
//                 {userChartData && (
//                     <div className="bg-white shadow-md rounded-lg p-6 h-80 flex flex-col items-center justify-center">
//                         <h3 className="text-xl font-semibold mb-4 text-gray-700">User Status</h3>
//                         <div className="w-full h-full">
//                             <Pie data={userChartData} options={chartOptions} />
//                         </div>
//                     </div>
//                 )}
//                 {bookChartData && (
//                     <div className="bg-white shadow-md rounded-lg p-6 h-80 flex flex-col items-center justify-center">
//                         <h3 className="text-xl font-semibold mb-4 text-gray-700">Books Uploaded</h3>
//                         <div className="w-full h-full">
//                             <Pie data={bookChartData} options={chartOptions} />
//                         </div>
//                     </div>
//                 )}
//                 {ordersData && (
//                     <div className="bg-white shadow-md rounded-lg p-6 w-full h-80 flex flex-col items-center justify-center">
//                         <h3 className="text-xl font-semibold mb-4 text-gray-700">Orders Volume</h3>
//                         <div className="w-full h-full">
//                             <Bar data={ordersData} options={chartOptions} />
//                         </div>
//                     </div>
//                 )}
//                 {reviewVolumeData && (
//                     <div className="bg-white shadow-md rounded-lg p-6 w-full h-80 flex flex-col items-center justify-center">
//                         <h3 className="text-xl font-semibold mb-4 text-gray-700">Review Volume</h3>
//                         <div className="w-full h-full">
//                             <Line data={reviewVolumeData} options={chartOptions} />
//                         </div>
//                     </div>
//                 )}
//             </div>
//         </div>
//     );
// };

// export default AdminDashboard;








// import React, { useEffect, useState } from 'react';
// import { Pie, Bar, Line } from 'react-chartjs-2';
// import { Chart as ChartJS, ArcElement, Tooltip, Legend, CategoryScale, LinearScale, BarElement, LineElement, PointElement } from 'chart.js';

// ChartJS.register(ArcElement, Tooltip, Legend, CategoryScale, LinearScale, BarElement, LineElement, PointElement);

// const AdminDashboard = () => {
//     const [userChartData, setUserChartData] = useState(null);
//     const [bookChartData, setBookChartData] = useState(null);
//     const [ordersData, setOrdersData] = useState(null);
//     const [reviewVolumeData, setReviewVolumeData] = useState(null);

//     useEffect(() => {
//         const fetchData = async (url, setData, processData) => {
//             try {
//                 const response = await fetch(url);
//                 const result = await response.json();

//                 if (result.error) {
//                     throw new Error(result.message);
//                 }

//                 setData(processData(result));
//             } catch (error) {
//                 console.error(`Error fetching data from ${url}:`, error);
//             }
//         };

//         fetchData(
//             'http://localhost:8080/api/admin/getusers',
//             setUserChartData,
//             (data) => {
//                 const activeUsers = data.users.filter(user => user.isActive).length;
//                 const inactiveUsers = data.users.length - activeUsers;
//                 return {
//                     labels: ['Active Users', 'Inactive Users'],
//                     datasets: [{
//                         label: 'User Status',
//                         data: [activeUsers, inactiveUsers],
//                         backgroundColor: ['#36A2EB', '#FF6384'],
//                         hoverBackgroundColor: ['#36A2EB', '#FF6384']
//                     }]
//                 };
//             }
//         );

//         fetchData(
//             'http://localhost:8080/api/admin/getbook',
//             setBookChartData,
//             (data) => ({
//                 labels: ['Uploaded Books'],
//                 datasets: [{
//                     label: 'Books Uploaded',
//                     data: [data.length],
//                     backgroundColor: ['#FFCE56'],
//                     hoverBackgroundColor: ['#FFCE56']
//                 }]
//             })
//         );

//         fetchData(
//             'http://localhost:8080/api/getorders',
//             setOrdersData,
//             (data) => {
//                 const orderCounts = data.reduce((acc, order) => {
//                     const month = new Date(order.createdAt).toLocaleString('default', { month: 'short' });
//                     acc[month] = (acc[month] || 0) + 1;
//                     return acc;
//                 }, {});
//                 return {
//                     labels: Object.keys(orderCounts),
//                     datasets: [{
//                         label: 'Orders Volume',
//                         data: Object.values(orderCounts),
//                         backgroundColor: '#42A5F5',
//                         borderColor: '#1E88E5',
//                         borderWidth: 2,
//                         fill: true,
//                     }]
//                 };
//             }
//         );

//         fetchData(
//             'http://localhost:8080/api/admin/getthereview',
//             setReviewVolumeData,
//             (data) => {
//                 const labels = data.reviews.map(review => review.comment); // Replace bookuuid with actual book names if available
//                 const starCounts = data.reviews.map(review => review.rating); // Assuming `rating` is the rating field
//                 return {
//                     labels,
//                     datasets: [{
//                         label: 'Star Ratings by Book',
//                         data: starCounts,
//                         borderColor: 'black',
//                         backgroundColor: 'rgba(255, 255, 0, 0.5)', // Yellow with some transparency
//                         borderWidth: 2,
//                         fill: true,
//                     }]
//                 };
//             }
//         );
//     }, []);

//     const chartOptions = {
//         maintainAspectRatio: false,
//         responsive: true,
//         plugins: {
//             legend: {
//                 display: true,
//                 position: 'top',
//                 labels: {
//                     font: {
//                         size: 14,
//                     },
//                 },
//             },
//             tooltip: {
//                 callbacks: {
//                     label: (tooltipItem) => `${tooltipItem.label}: ${tooltipItem.raw}`,
//                 },
//             },
//         },
//         scales: {
//             x: {
//                 grid: {
//                     display: false,
//                 },
//                 ticks: {
//                     font: {
//                         size: 12,
//                     },
//                 },
//             },
//             y: {
//                 grid: {
//                     display: false,
//                 },
//                 beginAtZero: true,
//                 ticks: {
//                     font: {
//                         size: 12,
//                     },
//                 },
//             },
//         },
//     };

//     return (
//         <div className="min-h-screen bg-gray-100 p-6">
//             <h2 className="text-3xl font-bold mb-8 text-center text-gray-800">Admin Dashboard</h2>
//             <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
//                 {userChartData && (
//                     <div className="bg-white shadow-md rounded-lg p-6 h-80 flex flex-col items-center justify-center">
//                         <h3 className="text-xl font-semibold mb-4 text-gray-700">User Status</h3>
//                         <div className="w-full h-full">
//                             <Pie data={userChartData} options={chartOptions} />
//                         </div>
//                     </div>
//                 )}
//                 {bookChartData && (
//                     <div className="bg-white shadow-md rounded-lg p-6 h-80 flex flex-col items-center justify-center">
//                         <h3 className="text-xl font-semibold mb-4 text-gray-700">Books Uploaded</h3>
//                         <div className="w-full h-full">
//                             <Pie data={bookChartData} options={chartOptions} />
//                         </div>
//                     </div>
//                 )}
//                 {ordersData && (
//                     <div className="bg-white shadow-md rounded-lg p-6 w-full h-80 flex flex-col items-center justify-center">
//                         <h3 className="text-xl font-semibold mb-4 text-gray-700">Orders Volume</h3>
//                         <div className="w-full h-full">
//                             <Bar data={ordersData} options={chartOptions} />
//                         </div>
//                     </div>
//                 )}
//                 {reviewVolumeData && (
//                     <div className="bg-white shadow-md rounded-lg p-6 w-full h-96 flex flex-col items-center justify-center">
//                         <h3 className="text-xl font-semibold mb-4 text-gray-700">Review Volume</h3>
//                         <div className="w-full h-full">
//                             <Line data={reviewVolumeData} options={chartOptions} />
//                             {/* <Line data={reviewVolumeData} options={chartOptions} /> */}
//                         </div>
//                     </div>
//                 )}
//             </div>
//         </div>
//     );
// };

// export default AdminDashboard;







// import React, { useEffect, useState } from 'react';
// import { Pie, Bar, Line } from 'react-chartjs-2';
// import { Chart as ChartJS, ArcElement, Tooltip, Legend, CategoryScale, LinearScale, BarElement, LineElement, PointElement } from 'chart.js';

// ChartJS.register(ArcElement, Tooltip, Legend, CategoryScale, LinearScale, BarElement, LineElement, PointElement);

// const AdminDashboard = () => {
//     const [userChartData, setUserChartData] = useState(null);
//     const [bookChartData, setBookChartData] = useState(null);
//     const [ordersData, setOrdersData] = useState(null);
//     const [reviewVolumeData, setReviewVolumeData] = useState(null);

//     useEffect(() => {
//         const fetchData = async (url, setData, processData) => {
//             try {
//                 const response = await fetch(url);
//                 const result = await response.json();

//                 if (result.error) {
//                     throw new Error(result.message);
//                 }

//                 setData(processData(result));
//             } catch (error) {
//                 console.error(`Error fetching data from ${url}:`, error);
//             }
//         };

//         fetchData(
//             'http://localhost:8080/api/admin/getusers',
//             setUserChartData,
//             (data) => {
//                 const activeUsers = data.users.filter(user => user.isActive).length;
//                 const inactiveUsers = data.users.length - activeUsers;
//                 return {
//                     labels: ['Active Users', 'Inactive Users'],
//                     datasets: [{
//                         label: 'User Status',
//                         data: [activeUsers, inactiveUsers],
//                         backgroundColor: ['purple', 'red'], // Green and Amber
//                         hoverBackgroundColor: ['#388E3C', '#FFA000']
//                     }]
//                 };
//             }
//         );

//         fetchData(
//             'http://localhost:8080/api/admin/getbook',
//             setBookChartData,
//             (data) => ({
//                 labels: ['Uploaded Books'],
//                 datasets: [{
//                     label: 'Books Uploaded',
//                     data: [data.length],
//                     backgroundColor: ['#2196F3'], // Blue
//                     hoverBackgroundColor: ['#1976D2']
//                 }]
//             })
//         );

//         fetchData(
//             'http://localhost:8080/api/getorders',
//             setOrdersData,
//             (data) => {
//                 const orderCounts = data.reduce((acc, order) => {
//                     const month = new Date(order.createdAt).toLocaleString('default', { month: 'short' });
//                     acc[month] = (acc[month] || 0) + 1;
//                     return acc;
//                 }, {});
//                 return {
//                     labels: Object.keys(orderCounts),
//                     datasets: [{
//                         label: 'Orders Volume',
//                         data: Object.values(orderCounts),
//                         backgroundColor: '#64B5F6', // Light Blue
//                         borderColor: '#1E88E5', // Blue
//                         borderWidth: 2,
//                         fill: true,
//                     }]
//                 };
//             }
//         );

//         fetchData(
//             'http://localhost:8080/api/admin/getthereview',
//             setReviewVolumeData,
//             (data) => {
//                 const labels = data.reviews.map(review => review.comment); // Replace with actual book names if available
//                 const starCounts = data.reviews.map(review => review.rating); // Assuming `rating` is the rating field
//                 return {
//                     labels,
//                     datasets: [{
//                         label: 'Star Ratings by Book',
//                         data: starCounts,
//                         borderColor: '#FFC107', // Deep Orange
//                         backgroundColor: '#FFC107', // Transparent Deep Orange
//                         borderWidth: 2,
//                         fill: true,
//                     }]
//                 };
//             }
//         );
//     }, []);

//     const chartOptions = {
//         maintainAspectRatio: false,
//         responsive: true,
//         plugins: {
//             legend: {
//                 display: true,
//                 position: 'top',
//                 labels: {
//                     font: {
//                         size: 14,
//                     },
//                 },
//             },
//             tooltip: {
//                 callbacks: {
//                     label: (tooltipItem) => `${tooltipItem.label}: ${tooltipItem.raw}`,
//                 },
//             },
//         },
//         scales: {
//             x: {
//                 grid: {
//                     display: false,
//                 },
//                 ticks: {
//                     font: {
//                         size: 12,
//                     },
//                 },
//             },
//             y: {
//                 grid: {
//                     display: false,
//                 },
//                 beginAtZero: true,
//                 ticks: {
//                     font: {
//                         size: 12,
//                     },
//                 },
//             },
//         },
//     };

//     return (
//         <div className="min-h-screen bg-gray-100 p-6">
//             <h2 className="text-3xl font-bold mb-8 text-center text-gray-800">Admin Dashboard</h2>
//             <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
//                 {userChartData && (
//                     <div className="bg-white shadow-md rounded-lg p-6 h-80 flex flex-col items-center justify-center">
//                         <h3 className="text-xl font-semibold mb-4 text-gray-700">User Status</h3>
//                         <div className="w-full h-full">
//                             <Pie data={userChartData} options={chartOptions} />
//                         </div>
//                     </div>
//                 )}
//                 {bookChartData && (
//                     <div className="bg-white shadow-md rounded-lg p-6 h-80 flex flex-col items-center justify-center">
//                         <h3 className="text-xl font-semibold mb-4 text-gray-700">Books Uploaded</h3>
//                         <div className="w-full h-full">
//                             <Pie data={bookChartData} options={chartOptions} />
//                         </div>
//                     </div>
//                 )}
//                 {ordersData && (
//                     <div className="bg-white shadow-md rounded-lg p-6 h-80 flex flex-col items-center justify-center">
//                         <h3 className="text-xl font-semibold mb-4 text-gray-700">Orders Volume</h3>
//                         <div className="w-full h-full">
//                             <Bar data={ordersData} options={chartOptions} />
//                         </div>
//                     </div>
//                 )}
//                 {reviewVolumeData && (
//                     <div className="bg-white shadow-md rounded-lg h-80 p-6 col-span-1 lg:col-span-3 flex flex-col items-center justify-center">
//                         <h3 className="text-xl font-semibold mb-4 text-gray-700">Review Volume</h3>
//                         <div className="w-full h-64">
//                             <Line data={reviewVolumeData} options={chartOptions} />
//                         </div>
//                     </div>
//                 )}
//             </div>
//         </div>
//     );
// };

// export default AdminDashboard;








// import React, { useEffect, useState } from 'react';
// import { Pie, Bar, Line , Doughnut } from 'react-chartjs-2';
// import { Chart as ChartJS, ArcElement, Tooltip, Legend, CategoryScale, LinearScale, BarElement, LineElement, PointElement } from 'chart.js';

// ChartJS.register(ArcElement, Tooltip, Legend, CategoryScale, LinearScale, BarElement, LineElement, PointElement);

// const AdminDashboard = () => {
//     const [userChartData, setUserChartData] = useState(null);
//     const [bookChartData, setBookChartData] = useState(null);
//     const [ordersData, setOrdersData] = useState(null);
//     const [reviewVolumeData, setReviewVolumeData] = useState(null);

//     useEffect(() => {
//         const fetchData = async (url, setData, processData) => {
//             try {
//                 const response = await fetch(url);
//                 const result = await response.json();

//                 if (result.error) {
//                     throw new Error(result.message);
//                 }

//                 setData(processData(result));
//             } catch (error) {
//                 console.error(`Error fetching data from ${url}:`, error);
//             }
//         };

//         fetchData(
//             'http://localhost:8080/api/admin/getusers',
//             setUserChartData,
//             (data) => {
//                 const activeUsers = data.users.filter(user => user.isActive).length;
//                 const inactiveUsers = data.users.length - activeUsers;
//                 return {
//                     labels: ['Active Users', 'Inactive Users'],
//                     datasets: [{
//                         label: 'User Status',
//                         data: [activeUsers, inactiveUsers],
//                         backgroundColor: [
//                             'rgba(54, 162, 235, 0.6)', // Blue gradient
//                             'rgba(255, 99, 132, 0.6)'  // Red gradient
//                         ],
//                         borderColor: [
//                             'rgba(54, 162, 235, 1)',
//                             'rgba(255, 99, 132, 1)'
//                         ],
//                         borderWidth: 1
//                     }]
//                 };
//             }
//         );

//         fetchData(
//             'http://localhost:8080/api/admin/getbook',
//             setBookChartData,
//             (data) => ({
//                 labels: ['Uploaded Books'],
//                 datasets: [{
//                     label: 'Books Uploaded',
//                     data: [data.length],
//                     backgroundColor: 'rgba(255, 206, 86, 0.6)', // Yellow gradient
//                     borderColor: 'rgba(255, 206, 86, 1)',
//                     borderWidth: 1
//                 }]
//             })
//         );

//         fetchData(
//             'http://localhost:8080/api/getorders',
//             setOrdersData,
//             (data) => {
//                 const orderCounts = data.reduce((acc, order) => {
//                     const month = new Date(order.createdAt).toLocaleString('default', { month: 'short' });
//                     acc[month] = (acc[month] || 0) + 1;
//                     return acc;
//                 }, {});
//                 return {
//                     labels: Object.keys(orderCounts),
//                     datasets: [{
//                         label: 'Orders Volume',
//                         data: Object.values(orderCounts),
//                         backgroundColor: 'rgba(100, 181, 246, 0.6)', // Light Blue gradient
//                         borderColor: 'rgba(33, 150, 243, 1)', // Blue
//                         borderWidth: 2,
//                         fill: true,
//                     }]
//                 };
//             }
//         );

//         fetchData(
//             'http://localhost:8080/api/admin/getthereview',
//             setReviewVolumeData,
//             (data) => {
//                 const labels = data.reviews.map(review => review.comment); // Replace with actual book names if available
//                 const starCounts = data.reviews.map(review => review.rating); // Assuming `rating` is the rating field
//                 return {
//                     labels,
//                     datasets: [{
//                         label: 'Star Ratings by Book',
//                         data: starCounts,
//                         borderColor: 'rgba(255, 193, 7, 1)', // Deep Orange
//                         backgroundColor: 'rgba(255, 193, 7, 0.5)', // Transparent Deep Orange
//                         borderWidth: 2,
//                         fill: true,
//                     }]
//                 };
//             }
//         );
//     }, []);

//     const chartOptions = {
//         maintainAspectRatio: false,
//         responsive: true,
//         plugins: {
//             legend: {
//                 display: true,
//                 position: 'top',
//                 labels: {
//                     font: {
//                         size: 14,
//                     },
//                 },
//             },
//             tooltip: {
//                 callbacks: {
//                     label: (tooltipItem) => `${tooltipItem.label}: ${tooltipItem.raw}`,
//                 },
//             },
//         },
//         scales: {
//             x: {
//                 grid: {
//                     display: false,
//                 },
//                 ticks: {
//                     font: {
//                         size: 12,
//                     },
//                 },
//             },
//             y: {
//                 grid: {
//                     display: false,
//                 },
//                 beginAtZero: true,
//                 ticks: {
//                     font: {
//                         size: 12,
//                     },
//                 },
//             },
//         },
//     };

//     return (
//         <div className="min-h-screen bg-gray-100 p-6">
//             <h2 className="text-3xl font-bold mb-8 text-center text-gray-800">Admin Dashboard</h2>
//             <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
//                 {userChartData && (
//                     <div className="bg-white shadow-md rounded-lg p-6 h-80 flex flex-col items-center justify-center">
//                         <h3 className="text-xl font-semibold mb-4 text-gray-700">User Status</h3>
//                         <div className="w-full h-full">
//                             <Doughnut data={userChartData} options={chartOptions} />
//                         </div>
//                     </div>
//                 )}
//                 {bookChartData && (
//                     <div className="bg-white shadow-md rounded-lg p-6 h-80 flex flex-col items-center justify-center">
//                         <h3 className="text-xl font-semibold mb-4 text-gray-700">Books Uploaded</h3>
//                         <div className="w-full h-full">
//                             <Doughnut data={bookChartData} options={chartOptions} />
//                         </div>
//                     </div>
//                 )}
//                 {ordersData && (
//                     <div className="bg-white shadow-md rounded-lg p-6 h-80 flex flex-col items-center justify-center">
//                         <h3 className="text-xl font-semibold mb-4 text-gray-700">Orders Volume</h3>
//                         <div className="w-full h-full">
//                             <Bar data={ordersData} options={chartOptions} />
//                         </div>
//                     </div>
//                 )}
//                 {reviewVolumeData && (
//                     <div className="bg-white shadow-md rounded-lg h-80 p-6 col-span-1 lg:col-span-3 flex flex-col items-center justify-center">
//                         <h3 className="text-xl font-semibold mb-4 text-gray-700">Review Volume</h3>
//                         <div className="w-full h-full">
//                             <Line data={reviewVolumeData} options={chartOptions} />
//                         </div>
//                     </div>
//                 )}
//             </div>
//         </div>
//     );
// };

// export default AdminDashboard;








import React, { useEffect, useState } from 'react';
import { Doughnut, Bar, Line } from 'react-chartjs-2';
import {
  Chart as ChartJS,
  ArcElement,
  Tooltip,
  Legend,
  CategoryScale,
  LinearScale,
  BarElement,
  LineElement,
  PointElement,
} from 'chart.js';
import ChartDataLabels from 'chartjs-plugin-datalabels';

ChartJS.register(
  ArcElement,
  Tooltip,
  Legend,
  CategoryScale,
  LinearScale,
  BarElement,
  LineElement,
  PointElement,
  ChartDataLabels
);
const AdminDashboard = () => {
  const [userChartData, setUserChartData] = useState(null);
  const [bookChartData, setBookChartData] = useState(null);
  const [ordersData, setOrdersData] = useState(null);
  const [reviewVolumeData, setReviewVolumeData] = useState(null);

  useEffect(() => {
    const fetchData = async (url, setData, processData) => {
      try {
        const response = await fetch(url);
        const result = await response.json();

        if (result.error) {
          throw new Error(result.message);
        }

        setData(processData(result));
      } catch (error) {
        console.error(`Error fetching data from ${url}:`, error);
      }
    };

    fetchData(
      'http://localhost:8080/api/admin/getusers',
      setUserChartData,
      (data) => {
        const activeUsers = data.users.filter(user => user.isActive).length;
        const inactiveUsers = data.users.length - activeUsers;
        return {
          labels: ['Active Users', 'Inactive Users'],
          datasets: [{
            label: 'User Status',
            data: [activeUsers, inactiveUsers],
            backgroundColor: [
              'cyan', // Blue gradient
              'rgba(255, 99, 132, 0.6)'  // Red gradient
            ],
            borderColor: [
              'rgba(54, 162, 235, 1)',
              'rgba(255, 99, 132, 1)'
            ],
            borderWidth: 1
          }]
        };
      }
    );

    fetchData(
      'http://localhost:8080/api/admin/getbook',
      setBookChartData,
      (data) => ({
        labels: ['Uploaded Books'],
        datasets: [{
          label: 'Books Uploaded',
          data: [data.length],
          backgroundColor: 'orange', // Yellow gradient
          borderColor: 'rgba(255, 206, 86, 1)',
          borderWidth: 1
        }]
      })
    );

    fetchData(
      'http://localhost:8080/api/getorders',
      setOrdersData,
      (data) => {
        const orderCounts = data.reduce((acc, order) => {
          const month = new Date(order.createdAt).toLocaleString('default', { month: 'short' });
          acc[month] = (acc[month] || 0) + 1;
          return acc;
        }, {});
        return {
          labels: Object.keys(orderCounts),
          datasets: [{
            label: 'Orders Volume',
            data: Object.values(orderCounts),
            backgroundColor: 'pink', // Light Blue gradient
            borderColor: 'rgba(33, 150, 243, 1)', // Blue
            borderWidth: 2,
            fill: true,
          }]
        };
      }
    );

    fetchData(
      'http://localhost:8080/api/admin/getthereview',
      setReviewVolumeData,
      (data) => {
        // const labels = data.reviews.map((review, index) => `Book ${index + 1}`); // Replace with actual book names if available
        const labels = data.reviews.map(review => review.comment); // Replace with actual book names if available
        const starCounts = data.reviews.map(review => review.rating); // Assuming `rating` is the rating field
        return {
          labels,
          datasets: [{
            label: 'Star Ratings by Book',
            data: starCounts,
            backgroundColor: [
              'rgba(255, 99, 132, 0.6)',
              'rgba(54, 162, 235, 0.6)',
              'rgba(255, 206, 86, 0.6)',
              'rgba(75, 192, 192, 0.6)',
              'rgba(153, 102, 255, 0.6)',
              'rgba(255, 159, 64, 0.6)',
            ],
            borderColor: '#e1ad01',
            borderWidth: 1,
          }]
        };
      }
    );
  }, []);

  const chartOptions = {
    maintainAspectRatio: false,
    responsive: true,
    plugins: {
      legend: {
        display: true,
        position: 'top',
        labels: {
          font: {
            size: 14,
          },
        },
      },
      tooltip: {
        callbacks: {
          label: (tooltipItem) => `${tooltipItem.label}: ${tooltipItem.raw}`,
        },
      },
      datalabels: {
        color: '#fff',
        font: {
          weight: 'bold',
        },
        formatter: (value) => `${value}%`,
      },
    },
    scales: {
      x: {
        grid: {
          display: false,
        },
        ticks: {
          font: {
            size: 12,
          },
        },
      },
      y: {
        grid: {
          display: false,
        },
        beginAtZero: true,
        ticks: {
          font: {
            size: 12,
          },
        },
      },
    },
  };

  return (
    <div className="min-h-screen bg-gray-100 p-6">
      <h2 className="text-3xl font-bold mb-8 text-center text-gray-800">Admin Dashboard</h2>
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
        {userChartData && (
          <div className="bg-white shadow-md rounded-lg p-6 h-80 flex flex-col items-center justify-center">
            <h3 className="text-xl font-semibold mb-4 text-gray-700">User Status</h3>
            <div className="w-full h-full">
              <Doughnut data={userChartData} options={chartOptions} />
            </div>
          </div>
        )}
        {bookChartData && (
          <div className="bg-white shadow-md rounded-lg p-6 h-80 flex flex-col items-center justify-center">
            <h3 className="text-xl font-semibold mb-4 text-gray-700">Books Uploaded</h3>
            <div className="w-full h-full">
              <Doughnut data={bookChartData} options={chartOptions} />
            </div>
          </div>
        )}
        {ordersData && (
          <div className="bg-white shadow-md rounded-lg p-6 h-80 flex flex-col items-center justify-center">
            <h3 className="text-xl font-semibold mb-4 text-gray-700">Orders Volume</h3>
            <div className="w-full h-full">
              <Bar data={ordersData} options={chartOptions} />
            </div>
          </div>
        )}
        {reviewVolumeData && (
          <div className="bg-white shadow-md rounded-lg h-80 p-6 col-span-1 lg:col-span-3 flex flex-col items-center justify-center">
            <h3 className="text-xl font-semibold mb-4 text-gray-700">Review Volume</h3>
            <div className="w-full h-full">
              <Line data={reviewVolumeData} options={chartOptions} />
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default AdminDashboard;
