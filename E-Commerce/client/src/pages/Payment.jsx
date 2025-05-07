import React, { useState } from "react";

const Payment = () => {
  const [form, setForm] = useState({
    name: "",
    cardNumber: "",
    expiry: "",
    cvv: "",
  });

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handlePayment = (e) => {
    e.preventDefault();
    alert("Payment processed successfully!"); 
  };

  return (
    <section className="min-h-screen bg-gray-100 flex items-center justify-center px-4 pt-20">
      <div className="bg-white shadow-lg rounded-lg p-6 w-full max-w-md">
        <h2 className="text-2xl font-bold mb-4 text-center">Payment</h2>

        <form onSubmit={handlePayment} className="space-y-4">
          <div>
            <label className="block text-gray-700 font-medium mb-1">
              Cardholder Name
            </label>
            <input
              type="text"
              name="name"
              value={form.name}
              onChange={handleChange}
              required
              className="w-full px-3 py-2 border rounded focus:outline-none focus:ring focus:border-blue-300"
            />
          </div>

          <div>
            <label className="block text-gray-700 font-medium mb-1">
              Card Number
            </label>
            <input
              type="text"
              name="cardNumber"
              value={form.cardNumber}
              onChange={handleChange}
              required
              maxLength={16}
              className="w-full px-3 py-2 border rounded focus:outline-none focus:ring focus:border-blue-300"
            />
          </div>

          <div className="flex gap-4">
            <div className="flex-1">
              <label className="block text-gray-700 font-medium mb-1">
                Expiry Date
              </label>
              <input
                type="text"
                name="expiry"
                value={form.expiry}
                onChange={handleChange}
                placeholder="MM/YY"
                required
                className="w-full px-3 py-2 border rounded focus:outline-none focus:ring focus:border-blue-300"
              />
            </div>

            <div className="flex-1">
              <label className="block text-gray-700 font-medium mb-1">CVV</label>
              <input
                type="password"
                name="cvv"
                value={form.cvv}
                onChange={handleChange}
                maxLength={3}
                required
                className="w-full px-3 py-2 border rounded focus:outline-none focus:ring focus:border-blue-300"
              />
            </div>
          </div>

          <div className="mt-6">
            <button
              type="submit"
              className="w-full bg-green-600 text-white py-2 rounded hover:bg-green-700 transition"
            >
              Pay ₹999.00
            </button>
          </div>
        </form>
      </div>
    </section>
  );
};

export default Payment;
