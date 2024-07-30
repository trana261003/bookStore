import React from 'react';

const CartTotal = ({ cartItems }) => {
  const calculateTotal = () => {
    return cartItems.reduce((total, item) => total + item.price * item.quantity, 0);
  };

  return (
    <div className="bg-white p-4 rounded-md shadow-md mt-8 text-right">
      <h2 className="text-2xl font-semibold">Total: ₹{calculateTotal()}</h2>
    </div>
  );
};

export default CartTotal;
