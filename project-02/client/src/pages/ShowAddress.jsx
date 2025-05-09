import React, { useState } from "react";
import axios from "axios";
import { useDispatch, useSelector } from "react-redux";
import { removeAddress } from "../store/addrssSlice.js";
import toast from "react-hot-toast";

const ShowAddress = ({ fetchData, setRefresh }) => {
  const userAddress = useSelector((state) => state.address.userAddress);

  const dispatch = useDispatch();
  const [editMode, setEditMode] = useState(false);
  const [currentAddress, setCurrentAddress] = useState(null);
  const [newAddress, setNewAddress] = useState({
    streetAddress: "",
    city: "",
    postalCode: "",
    state: "",
    country: "",
  });

  const handleEdit = (address) => {
    setEditMode(true);
    setCurrentAddress(address);
    setNewAddress({ ...address });
  };

  const handleSave = async () => {
    try {
      await axios.put(
        `http://localhost:8000/user/update-address/${currentAddress._id}`,
        {
          addressId: currentAddress._id,
          ...newAddress,
        }
      );
      toast.success("Address Update successfully");
      await fetchData(); // Refresh after update
      setEditMode(false);
      setCurrentAddress(null);
      setNewAddress({
        streetAddress: "",
        city: "",
        postalCode: "",
        state: "",
        country: "",
      });
      setRefresh((prev) => !prev);
    } catch (error) {
      console.error("Error updating address:", error);
    }
  };

  const handleDelete = async (id) => {
    try {
      await axios.delete(`http://localhost:8000/user/delete-address/${id}`);
      dispatch(removeAddress({ id }));
      toast.success("Address delete successfully");
      await fetchData();
    } catch (error) {
      console.error("Error deleting address:", error);
    }
  };

  return (
    <section className="pt-10">
      <div>
        {userAddress.length === 0 ? (
          <p className="text-gray-600">No addresses found.</p>
        ) : (
          <div className="grid gap-4 md:grid-cols-2">
            {userAddress.map((add) => (
              <div
                key={add._id}
                className="bg-white shadow p-4 rounded border-l-4 border-blue-500"
              >
                <p className="text-gray-800 font-semibold">
                  {add.streetAddress}
                </p>
                <p className="text-gray-600">
                  {add.city}, {add.postalCode}
                </p>
                <p className="text-gray-600">{add.state}</p>
                <p className="text-gray-600">{add.country}</p>
                <div className="flex justify-between items-center w-full gap-3">
                  <button
                    onClick={() => handleEdit(add)}
                    className="bg-orange-400 px-2 py-1 rounded mt-2 cursor-pointer w-full hover:bg-orange-500 transition duration-300 text-white font-bold"
                  >
                    Edit
                  </button>
                  <button
                    onClick={() => handleDelete(add._id)}
                    className="bg-red-400 px-2 py-1 rounded mt-2 cursor-pointer hover:bg-red-500 transition duration-300 w-full text-white font-bold"
                  >
                    Delete
                  </button>
                </div>
              </div>
            ))}
          </div>
        )}
      </div>

      {/* update the delivery address  */}
      {editMode && (
        <div className="bg-neutral-900/60 absolute top-0 left-0 right-0 bottom-0 w-full  flex justify-center items-center">
          <div className="mt-6 bg-white min-w-2xl py-5 px-8 rounded shadow-lg">
            <h2 className="font-semibold text-center  text-lg mb-4">
              Edit Address
            </h2>
            {["streetAddress", "city", "postalCode", "state", "country"].map(
              (field) => (
                <div className="mb-4" key={field}>
                  <label className="block text-sm text-gray-600 capitalize">
                    {field}
                  </label>
                  <input
                    type="text"
                    className="w-full border p-2 rounded"
                    value={newAddress[field]}
                    onChange={(e) =>
                      setNewAddress({
                        ...newAddress,
                        [field]: e.target.value,
                      })
                    }
                  />
                </div>
              )
            )}

            <div className="flex gap-4">
              <button
                onClick={handleSave}
                className="bg-blue-500 text-white p-2 rounded w-full hover:bg-blue-600"
              >
                Save
              </button>
              <button
                onClick={() => setEditMode(false)}
                className="bg-gray-400 text-white p-2 rounded w-full hover:bg-gray-500"
              >
                Cancel
              </button>
            </div>
          </div>
        </div>
      )}
    </section>
  );
};

export default ShowAddress;
