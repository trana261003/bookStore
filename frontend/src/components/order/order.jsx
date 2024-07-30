// import React, { useState, useEffect } from 'react';

// const OrderHistory = () => {
//   const [orders, setOrders] = useState([]);
//   const [loading, setLoading] = useState(true);
//   const [error, setError] = useState('');
//   const [userUuid, setuserUuid] = useState('');

//   useEffect(() => {
//     const fetchUserData = async () => {
//       try {
//         const token = localStorage.getItem('token');
//         if (!token) {
//           throw new Error('No token found');
//         }

//         const response = await fetch('http://localhost:8080/api/users/userinfo', {
//           headers: {
//             Authorization: `Bearer ${token}`,
//           },
//         });

//         if (!response.ok) {
//           throw new Error('Error fetching user details');
//         }

//         const user = await response.json();
//         setuserUuid(user.data.uuid); // Set userUUID
//       } catch (err) {
//         setError(err.message);
//       }
//     };

//     fetchUserData(); // Fetch user data when component mounts
//   }, []);

//   useEffect(() => {
//     const fetchOrders = async () => {
//       if (!userUuid) return; // Avoid fetching if userUUID is not available

//       try {
//         const token = localStorage.getItem('token');
//         const response = await fetch(`http://localhost:8080/api/getorders`, {
//           method: 'GET',
//           headers: {
//             Authorization: `Bearer ${token}`,
//           },
//         });

//         if (!response.ok) {
//           throw new Error('Error fetching orders');
//         }

//         const data = await response.json();
//         setOrders(data);
//       } catch (err) {
//         setError(err.message);
//       } finally {
//         setLoading(false);
//       }
//     };

//     fetchOrders(); // Fetch orders when userUUID changes
//   }, [userUuid]);

//   if (loading) return <div className="text-center py-4">Loading...</div>;
//   if (error) return <div className="text-center py-4 text-red-500">{error}</div>;

//   return (
//     <div className="max-w-6xl mx-auto py-8">
//       <h2 className="text-3xl font-semibold mb-6">Order History</h2>
//       {orders.length === 0 ? (
//         <div className="text-center py-4">No orders found.</div>
//       ) : (
//         <div className="overflow-x-auto">
//           <table className="min-w-full bg-white border border-gray-200">
//             <thead>
//               <tr>
//                 <th className="px-6 py-3 border-b-2 border-gray-200 bg-gray-100 text-left text-xs font-semibold text-gray-600 uppercase tracking-wider">
//                   Order ID
//                 </th>
//                 <th className="px-6 py-3 border-b-2 border-gray-200 bg-gray-100 text-left text-xs font-semibold text-gray-600 uppercase tracking-wider">
//                   Items
//                 </th>
//                 <th className="px-6 py-3 border-b-2 border-gray-200 bg-gray-100 text-left text-xs font-semibold text-gray-600 uppercase tracking-wider">
//                   Quantity
//                 </th>
//                 <th className="px-6 py-3 border-b-2 border-gray-200 bg-gray-100 text-left text-xs font-semibold text-gray-600 uppercase tracking-wider">
//                   Total Price
//                 </th>
//                 <th className="px-6 py-3 border-b-2 border-gray-200 bg-gray-100 text-left text-xs font-semibold text-gray-600 uppercase tracking-wider">
//                   Order Status
//                 </th>
//                 <th className="px-6 py-3 border-b-2 border-gray-200 bg-gray-100 text-left text-xs font-semibold text-gray-600 uppercase tracking-wider">
//                   Payment Status
//                 </th>
//               </tr>
//             </thead>
//             <tbody>
//               {orders.map((order) => (
//                 <tr key={order.uuid}>
//                   <td className="px-6 py-4 border-b border-gray-200">{order.uuid}</td>
//                   <td className="px-6 py-4 border-b border-gray-200">
//                     {order.orderItems.map((item) => (
//                       <div key={item.bookUuid} className="flex items-center space-x-2 mb-2">
//                         <img src={item.coverImage} alt={item.title} className="w-14 h-20 object-cover" />
//                         <span>{item.title}</span>
//                       </div>
//                     ))}
//                   </td>
//                   <td className="px-6 py-4 border-b border-gray-200">
//                     {order.orderItems.map((item) => (
//                       <div key={item.bookUuid} className="mb-2">
//                         <span>{item.quantity}</span>
//                       </div>
//                     ))}
//                   </td>
//                   <td className="px-6 py-4 border-b border-gray-200">₹{order.totalPrice.toFixed(2)}</td>
//                   <td className="px-6 py-4 border-b text-yellow-400 border-gray-200">{order.orderStatus}</td>
//                   <td className="px-6 py-4 border-b text-red-600 border-gray-200">{order.paymentStatus}</td>
//                 </tr>
//               ))}
//             </tbody>
//           </table>
//         </div>
//       )}
//     </div>
//   );
// };

// export default OrderHistory;





import React, { useState, useEffect } from 'react';

const OrderHistory = () => {
  const [orders, setOrders] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState('');
  const [userUuid, setUserUuid] = useState('');

  useEffect(() => {
    const fetchUserData = async () => {
      try {
        const token = localStorage.getItem('token');
        if (!token) {
          throw new Error('No token found');
        }

        const response = await fetch('http://localhost:8080/api/users/userinfo', {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        });

        if (!response.ok) {
          throw new Error('Error fetching user details');
        }

        const user = await response.json();
        setUserUuid(user.data.uuid); // Set userUuid
      } catch (err) {
        setError(err.message);
      }
    };

    fetchUserData(); // Fetch user data when component mounts
  }, []);

  useEffect(() => {
    const fetchOrders = async () => {
      if (!userUuid) return; // Avoid fetching if userUuid is not available

      try {
        const token = localStorage.getItem('token');
        const response = await fetch('http://localhost:8080/api/getorder', {
          method: 'GET',
          headers: {
            Authorization: `Bearer ${token}`,
          },
        });

        if (!response.ok) {
          throw new Error('Error fetching orders');
        }

        const data = await response.json();
        console.log('Fetched orders:', data); // Log the fetched data for debugging

        // Check if the fetched data is an array
        if (data.order && Array.isArray(data.order)) {
          setOrders(data.order);
        } else {
          throw new Error('Unexpected data format');
        }
      } catch (err) {
        setError(err.message);
      } finally {
        setLoading(false);
      }
    };

    fetchOrders(); // Fetch orders when userUuid changes
  }, [userUuid]);

  if (loading) return <div className="text-center py-4">Loading...</div>;
  if (error) return <div className="text-center py-4 text-red-500">{error}</div>;

  return (
    <div className="max-w-6xl mx-auto py-8">
      <h2 className="text-3xl font-semibold mb-6">Order History</h2>
      {orders.length === 0 ? (
        <div className="text-center py-4">No orders found.</div>
      ) : (
        <div className="overflow-x-auto">
          <table className="min-w-full bg-white border border-gray-200">
            <thead>
              <tr>
                <th className="px-6 py-3 border-b-2 border-gray-200 bg-gray-100 text-left text-xs font-semibold text-gray-600 uppercase tracking-wider">
                  Order ID
                </th>
                <th className="px-6 py-3 border-b-2 border-gray-200 bg-gray-100 text-left text-xs font-semibold text-gray-600 uppercase tracking-wider">
                  Items
                </th>
                <th className="px-6 py-3 border-b-2 border-gray-200 bg-gray-100 text-left text-xs font-semibold text-gray-600 uppercase tracking-wider">
                  Quantity
                </th>
                <th className="px-6 py-3 border-b-2 border-gray-200 bg-gray-100 text-left text-xs font-semibold text-gray-600 uppercase tracking-wider">
                  Total Price
                </th>
                <th className="px-6 py-3 border-b-2 border-gray-200 bg-gray-100 text-left text-xs font-semibold text-gray-600 uppercase tracking-wider">
                  Order Status
                </th>
                <th className="px-6 py-3 border-b-2 border-gray-200 bg-gray-100 text-left text-xs font-semibold text-gray-600 uppercase tracking-wider">
                  Payment Status
                </th>
              </tr>
            </thead>
            <tbody>
              {orders.map((order) => (
                <tr key={order.uuid}>
                  <td className="px-6 py-4 border-b border-gray-200">{order.uuid}</td>
                  <td className="px-6 py-4 border-b border-gray-200">
                    {order.orderItems.map((item) => (
                      <div key={item.bookUuid} className="flex items-center space-x-2 mb-2">
                        <img src={item.coverImage} alt={item.title} className="w-14 h-20 object-cover" />
                        <span>{item.title}</span>
                      </div>
                    ))}
                  </td>
                  <td className="px-6 py-4 border-b border-gray-200">
                    {order.orderItems.map((item) => (
                      <div key={item.bookUuid} className="mb-2">
                        <span>{item.quantity}</span>
                      </div>
                    ))}
                  </td>
                  <td className="px-6 py-4 border-b border-gray-200">₹{order.totalPrice.toFixed(2)}</td>
                  <td className="px-6 py-4 border-b text-yellow-400 border-gray-200">{order.orderStatus}</td>
                  <td className="px-6 py-4 border-b text-red-600 border-gray-200">{order.paymentStatus}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      )}
    </div>
  );
};

export default OrderHistory;