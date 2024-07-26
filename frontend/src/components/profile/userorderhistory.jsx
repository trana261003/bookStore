// import React, { useState, useEffect } from 'react';

// const OrderHistory = () => {
//   const [orders, setOrders] = useState([]);

//   useEffect(() => {
//     // Fetch order history from API
//     const fetchOrders = async () => {
//       try {
//         const token = localStorage.getItem('token');
//         const response = await fetch('http://localhost:8080/api/getorders', {
//           method: 'GET',
//           headers: {
//             'Authorization': `Bearer ${token}`
//           }
//         });
//         const data = await response.json();
//         setOrders(data.orders || []);
//       } catch (error) {
//         console.error('An error occurred while fetching order history:', error);
//       }
//     };

//     fetchOrders();
//   }, []);

//   return (
//     <div>
//       <h1 className="text-3xl font-bold mb-4">Order History</h1>
//       <div>
//         {orders.length > 0 ? (
//           orders.map(order => (
//             <div key={order.id} className="bg-white p-4 rounded-md shadow-md mb-4">
//               <h2 className="text-xl font-semibold">Order #{order.id}</h2>
//               <ul>
//                 {order.items.map(item => (
//                   <li key={item.bookUuid} className="mt-2">
//                     {item.title} - ₹{item.price} x {item.quantity}
//                   </li>
//                 ))}
//               </ul>
//               <p className="mt-2 font-bold">Total: ₹{order.total}</p>
//             </div>
//           ))
//         ) : (
//           <p>No orders found.</p>
//         )}
//       </div>
//     </div>
//   );
// };

// export default OrderHistory;



// // import React, { useState, useEffect } from 'react';

// // const OrderHistory = () => {
// //   const [orders, setOrders] = useState([]);

// //   useEffect(() => {
// //     // Fetch order history from API by user UUID
// //     const fetchOrders = async () => {
// //       try {
// //         const token = localStorage.getItem('token');
// //         const userUuid = localStorage.getItem('userUuid'); // Assuming user UUID is stored in local storage

// //         const response = await fetch(`http://localhost:8080/api/getorders/${userUuid}`, {
// //           method: 'GET',
// //           headers: {
// //             'Authorization': `Bearer ${token}`
// //           }
// //         });
// //         const data = await response.json();
// //         setOrders(data.orders || []);
// //       } catch (error) {
// //         console.error('An error occurred while fetching order history:', error);
// //       }
// //     };

// //     fetchOrders();
// //   }, []);

// //   return (
// //     <div className="max-w-screen-lg mx-auto py-10 px-4 sm:px-6 lg:px-8">
// //       <h1 className="text-3xl font-bold mb-4">Order History</h1>
// //       <div>
// //         {orders.length > 0 ? (
// //           orders.map(order => (
// //             <div key={order.id} className="bg-white p-4 rounded-md shadow-md mb-4">
// //               <h2 className="text-xl font-semibold">Order #{order.id}</h2>
// //               <ul>
// //                 {order.items.map(item => (
// //                   <li key={item.bookUuid} className="mt-2">
// //                     {item.title} - ₹{item.price} x {item.quantity}
// //                   </li>
// //                 ))}
// //               </ul>
// //               <p className="mt-2 font-bold">Total: ₹{order.total}</p>
// //             </div>
// //           ))
// //         ) : (
// //           <p>No orders found.</p>
// //         )}
// //       </div>
// //     </div>
// //   );
// // };

// // export default OrderHistory;



// // import React, { useState, useEffect } from 'react';

// // const OrderHistory = () => {
// //   const [orders, setOrders] = useState([]);

// //   useEffect(() => {
// //     // Fetch order history from API by user UUID
// //     const fetchOrders = async () => {
// //       try {
// //         const token = localStorage.getItem('token');
// //         const userUuid = localStorage.getItem('userUuid'); // Assuming user UUID is stored in local storage

// //         const response = await fetch(`http://localhost:8080/api/getorders/${userUuid}`, {
// //           method: 'GET',
// //           headers: {
// //             'Authorization': `Bearer ${token}`
// //           }
// //         });

// //         if (!response.ok) {
// //           throw new Error('Failed to fetch orders');
// //         }

// //         const data = await response.json();
// //         setOrders(data.orders || []);
// //       } catch (error) {
// //         console.error('An error occurred while fetching order history:', error);
// //       }
// //     };

// //     fetchOrders();
// //   }, []);

// //   return (
// //     <div className="max-w-screen-lg mx-auto py-10 px-4 sm:px-6 lg:px-8">
// //       <h1 className="text-3xl font-bold mb-4">Order History</h1>
// //       <div>
// //         {orders.length > 0 ? (
// //           orders.map(order => (
// //             <div key={order.id} className="bg-white p-4 rounded-md shadow-md mb-4">
// //               <h2 className="text-xl font-semibold">Order #{order.id}</h2>
// //               <ul>
// //                 {order.items.map(item => (
// //                   <li key={item.bookUuid} className="mt-2">
// //                     {item.title} - ₹{item.price} x {item.quantity}
// //                   </li>
// //                 ))}
// //               </ul>
// //               <p className="mt-2 font-bold">Total: ₹{order.total}</p>
// //             </div>
// //           ))
// //         ) : (
// //           <p>No orders found.</p>
// //         )}
// //       </div>
// //     </div>
// //   );
// // };

// // export default OrderHistory;
