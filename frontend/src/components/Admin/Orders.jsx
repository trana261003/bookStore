// import React, { useState, useEffect } from 'react';

// const AdminOrderHistory = () => {
//   const [orders, setOrders] = useState([]);
//   const [loading, setLoading] = useState(true);
//   const [error, setError] = useState('');
//   const [userUuid, setUserUuid] = useState('');
//   const [editingOrder, setEditingOrder] = useState(null);
//   const [statusOptions] = useState({
//     orderStatus: ['pending', 'shipped', 'delivered', 'cancelled'],
//     paymentStatus: ['paid', 'unpaid']
//   });

//   useEffect(() => {
//     const fetchUserData = async () => {
//       try {
//         const token = localStorage.getItem('token');
//         if (!token) {
//           throw new Error('No token found');
//         }

//         const response = await fetch(`http://localhost:8080/api/users/userinfo`, {
//           headers: {
//             Authorization: `Bearer ${token}`,
//           },
//         });

//         if (!response.ok) {
//           throw new Error('Error fetching user details');
//         }

//         const user = await response.json();
//         setUserUuid(user.data.uuid); // Set userUUID
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

//   const updateOrderStatus = async (orderId, status) => {
//     try {
//       const token = localStorage.getItem('token');
//       const response = await fetch(`http://localhost:8080/api/admin/updateorderstatus`, {
//         method: 'PATCH',
//         headers: {
//           Authorization: `Bearer ${token}`,
//           'Content-Type': 'application/json',
//         },
//         body: JSON.stringify({ orderStatus: status, uuid: orderId }),
//       });

//       if (!response.ok) {
//         throw new Error('Error updating order status');
//       }

//       const updatedOrder = await response.json();
//       setOrders(orders.map(order => order.uuid === updatedOrder.uuid ? updatedOrder : order));
//       setEditingOrder(null);
//     } catch (err) {
//       setError(err.message);
//     }
//   };

//   const updatePaymentStatus = async (orderId, status) => {
//     try {
//       const token = localStorage.getItem('token');
//       const response = await fetch(`http://localhost:8080/api/admin/uploadpaymentstatus`, {
//         method: 'PATCH',
//         headers: {
//           Authorization: `Bearer ${token}`,
//           'Content-Type': 'application/json',
//         },
//         body: JSON.stringify({ paymentStatus: status, uuid: orderId }),
//       });

//       if (!response.ok) {
//         throw new Error('Error updating payment status');
//       }

//       const updatedOrder = await response.json();
//       setOrders(orders.map(order => order.uuid === updatedOrder.uuid ? updatedOrder : order));
//       setEditingOrder(null);
//     } catch (err) {
//       setError(err.message);
//     }
//   };

//   const handleStatusClick = (orderId) => {
//     setEditingOrder(editingOrder === orderId ? null : orderId);
//   };

//   const handleStatusChange = (orderId, status) => {
//     updateOrderStatus(orderId, status);
//   };

//   const handlePaymentChange = (orderId, status) => {
//     updatePaymentStatus(orderId, status);
//   };

//   const getStatusColor = (status) => {
//     switch (status) {
//       case 'pending':
//         return 'bg-yellow-500 text-white';
//       case 'shipped':
//         return 'bg-blue-500 text-white';
//       case 'delivered':
//         return 'bg-green-500 text-white';
//       case 'cancelled':
//         return 'bg-red-500 text-white';
//       default:
//         return 'bg-gray-500 text-white';
//     }
//   };

//   const getPaymentColor = (status) => {
//     switch (status) {
//       case 'paid':
//         return 'bg-green-500 text-white';
//       case 'unpaid':
//         return 'bg-red-500 text-white';
//       default:
//         return 'bg-gray-500 text-white';
//     }
//   };

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
//                   <td className="px-6 py-4 border-b border-gray-200">
//                     {editingOrder === order.uuid ? (
//                       <select
//                         value={order.orderStatus}
//                         onChange={(e) => handleStatusChange(order.uuid, e.target.value)}
//                         className="border rounded-md px-2 py-1"
//                         onBlur={() => setEditingOrder(null)} // Close the dropdown when it loses focus
//                       >
//                         {statusOptions.orderStatus.map((status) => (
//                           <option key={status} value={status}>
//                             {status.charAt(0).toUpperCase() + status.slice(1)}
//                           </option>
//                         ))}
//                       </select>
//                     ) : (
//                       <span
//                         onClick={() => handleStatusClick(order.uuid)}
//                         className={`cursor-pointer ${getStatusColor(order.orderStatus)} px-2 py-1 rounded-md`}
//                       >
//                         {order.orderStatus.charAt(0).toUpperCase() + order.orderStatus.slice(1)}
//                       </span>
//                     )}
//                   </td>
//                   <td className="px-6 py-4 border-b border-gray-200">
//                     {editingOrder === order.uuid ? (
//                       <select
//                         value={order.paymentStatus}
//                         onChange={(e) => handlePaymentChange(order.uuid, e.target.value)}
//                         className="border rounded-md px-2 py-1"
//                         onBlur={() => setEditingOrder(null)} // Close the dropdown when it loses focus
//                       >
//                         {statusOptions.paymentStatus.map((status) => (
//                           <option key={status} value={status}>
//                             {status.charAt(0).toUpperCase() + status.slice(1)}
//                           </option>
//                         ))}
//                       </select>
//                     ) : (
//                       <span
//                         onClick={() => handleStatusClick(order.uuid)}
//                         className={`cursor-pointer ${getPaymentColor(order.paymentStatus)} px-2 py-1 rounded-md`}
//                       >
//                         {order.paymentStatus.charAt(0).toUpperCase() + order.paymentStatus.slice(1)}
//                       </span>
//               )}
//             </td>
//           </tr>
//               ))}
//         </tbody>
//           </table>
//         </div >
//       )}
//     </div >
//   );
// };

// export default AdminOrderHistory;






import React, { useState, useEffect } from 'react';

const AdminOrderHistory = () => {
  const [orders, setOrders] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState('');
  const [userUuid, setUserUuid] = useState('');
  const [editingOrder, setEditingOrder] = useState(null);
  const [statusOptions] = useState({
    orderStatus: ['pending', 'shipped', 'delivered', 'cancelled'],
    paymentStatus: ['paid', 'unpaid']
  });

  useEffect(() => {
    const fetchUserData = async () => {
      try {
        const token = localStorage.getItem('token');
        if (!token) {
          throw new Error('No token found');
        }

        const response = await fetch(`http://localhost:8080/api/users/userinfo`, {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        });

        if (!response.ok) {
          throw new Error('Error fetching user details');
        }

        const user = await response.json();
        setUserUuid(user.data.uuid); // Set userUUID
      } catch (err) {
        setError(err.message);
      }
    };

    fetchUserData(); // Fetch user data when component mounts
  }, []);

  useEffect(() => {
    const fetchOrders = async () => {
      if (!userUuid) return; // Avoid fetching if userUUID is not available

      try {
        const token = localStorage.getItem('token');
        const response = await fetch(`http://localhost:8080/api/getorders`, {
          method: 'GET',
          headers: {
            Authorization: `Bearer ${token}`,
          },
        });

        if (!response.ok) {
          throw new Error('Error fetching orders');
        }

        const data = await response.json();
        setOrders(data);
      } catch (err) {
        setError(err.message);
      } finally {
        setLoading(false);
      }
    };

    fetchOrders(); // Fetch orders when userUUID changes
  }, [userUuid]);

  const updateOrderStatus = async (orderId, status) => {
    try {
      const token = localStorage.getItem('token');
      const response = await fetch(`http://localhost:8080/api/admin/updateorderstatus`, {
        method: 'PATCH',
        headers: {
          Authorization: `Bearer ${token}`,
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ orderStatus: status, uuid: orderId }),
      });

      if (!response.ok) {
        throw new Error('Error updating order status');
      }

      const updatedOrder = await response.json();
      setOrders(orders.map(order => order.uuid === updatedOrder.uuid ? updatedOrder : order));
      setEditingOrder(null);
    } catch (err) {
      setError(err.message);
    }
  };

  const updatePaymentStatus = async (orderId, status) => {
    try {
      const token = localStorage.getItem('token');
      const response = await fetch(`http://localhost:8080/api/admin/uploadpaymentstatus`, {
        method: 'PATCH',
        headers: {
          Authorization: `Bearer ${token}`,
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ paymentStatus: status, uuid: orderId }),
      });

      if (!response.ok) {
        throw new Error('Error updating payment status');
      }

      const updatedOrder = await response.json();
      setOrders(orders.map(order => order.uuid === updatedOrder.uuid ? updatedOrder : order));
      setEditingOrder(null);
    } catch (err) {
      setError(err.message);
    }
  };

  const handleStatusClick = (orderId) => {
    setEditingOrder(editingOrder === orderId ? null : orderId);
  };

  const handleStatusChange = (orderId, status) => {
    updateOrderStatus(orderId, status);
  };

  const handlePaymentChange = (orderId, status) => {
    updatePaymentStatus(orderId, status);
  };

  const getStatusColor = (status) => {
    switch (status) {
      case 'pending':
        return 'bg-yellow-500 text-white';
      case 'shipped':
        return 'bg-blue-500 text-white';
      case 'delivered':
        return 'bg-green-500 text-white';
      case 'cancelled':
        return 'bg-red-500 text-white';
      default:
        return 'bg-gray-500 text-white';
    }
  };

  const getPaymentColor = (status) => {
    switch (status) {
      case 'paid':
        return 'bg-green-500 text-white';
      case 'unpaid':
        return 'bg-red-500 text-white';
      default:
        return 'bg-gray-500 text-white';
    }
  };

  if (loading) return <div className="text-center py-4">Loading...</div>;
  if (error) return <div className="text-center py-4 text-red-500">{error}</div>;

  return (
    <div className="min-h-screen bg-gray-100 p-6">
      <h2 className="text-3xl font-bold mb-6 text-center">Order History</h2>
      <div className="bg-white shadow-lg rounded-lg p-6">
        <table className="min-w-full divide-y divide-gray-200">
          <thead className="bg-gray-50">
            <tr>
              <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Order ID</th>
              <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Items</th>
              <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Quantity</th>
              <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Total Price</th>
              <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Order Status</th>
              <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Payment Status</th>
            </tr>
          </thead>
          <tbody className="bg-white divide-y divide-gray-200">
            {orders.map((order) => (
              <tr key={order.uuid}>
                <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">{order.uuid}</td>
                <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                  {order.orderItems.map((item) => (
                    <div key={item.bookUuid} className="flex items-center space-x-2 mb-2">
                      <img src={item.coverImage} alt={item.title} className="w-14 h-20 object-cover" />
                      <span>{item.title}</span>
                    </div>
                  ))}
                </td>
                <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                  {order.orderItems.map((item) => (
                    <div key={item.bookUuid} className="mb-2">
                      <span>{item.quantity}</span>
                    </div>
                  ))}
                </td>
                <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">₹{order.totalPrice.toFixed(2)}</td>
                <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                  {editingOrder === order.uuid ? (
                    <select
                      value={order.orderStatus}
                      onChange={(e) => handleStatusChange(order.uuid, e.target.value)}
                      className="border rounded-md px-2 py-1"
                      onBlur={() => setEditingOrder(null)} // Close the dropdown when it loses focus
                    >
                      {statusOptions.orderStatus.map((status) => (
                        <option key={status} value={status}>
                          {status.charAt(0).toUpperCase() + status.slice(1)}
                        </option>
                      ))}
                    </select>
                  ) : (
                    <span
                      onClick={() => handleStatusClick(order.uuid)}
                      className={`cursor-pointer ${getStatusColor(order.orderStatus)} px-2 py-1 rounded-md`}
                    >
                      {order.orderStatus.charAt(0).toUpperCase() + order.orderStatus.slice(1)}
                    </span>
                  )}
                </td>
                <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                  {editingOrder === order.uuid ? (
                    <select
                      value={order.paymentStatus}
                      onChange={(e) => handlePaymentChange(order.uuid, e.target.value)}
                      className="border rounded-md px-2 py-1"
                      onBlur={() => setEditingOrder(null)} // Close the dropdown when it loses focus
                    >
                      {statusOptions.paymentStatus.map((status) => (
                        <option key={status} value={status}>
                          {status.charAt(0).toUpperCase() + status.slice(1)}
                        </option>
                      ))}
                    </select>
                  ) : (
                    <span
                      onClick={() => handleStatusClick(order.uuid)}
                      className={`cursor-pointer ${getPaymentColor(order.paymentStatus)} px-2 py-1 rounded-md`}
                    >
                      {order.paymentStatus.charAt(0).toUpperCase() + order.paymentStatus.slice(1)}
                    </span>
                  )}
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default AdminOrderHistory;
