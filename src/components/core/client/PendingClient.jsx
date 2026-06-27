import React, { useEffect, useState } from "react";
import toast from "react-hot-toast";
import { useSelector } from "react-redux";
import {
  approveUser,
  getPendingClient,
} from "../../../services/operation/adminAPI";

const PendingClient = () => {
  const { token } = useSelector((state) => state.auth);

  const [loading, setLoading] = useState(true);
  const [clients, setClients] = useState([]);

  useEffect(() => {
    fetchPendingClients();
  }, []);

  const fetchPendingClients = async () => {
    try {
      setLoading(true);

      const response = await getPendingClient(token);

      if (response) {
        setClients(response);
      }
    } catch (error) {
      console.log(error);
      toast.error("Unable to fetch pending clients");
    }

    setLoading(false);
  };

  const handleApprove = async (userId) => {
    try {
      const response = await approveUser(userId, token);

      if (response) {
        toast.success("Client approved successfully");

        // Remove approved client from UI
        setClients((prev) =>
          prev.filter((client) => client._id !== clientId)
        );
      }
    } catch (error) {
      console.log(error);
      toast.error("Failed to approve client");
    }
  };

  if (loading) {
    return (
      <div className="flex justify-center items-center h-[70vh]">
        <div className="spinner"></div>
      </div>
    );
  }

  return (
    <div className="max-w-7xl mx-auto p-6">
      <div className="bg-white rounded-xl shadow-lg p-6">
        <h1 className="text-3xl font-bold text-blue-800 text-center mb-6">
          Pending Clients
        </h1>

        {clients.length === 0 ? (
          <div className="text-center text-gray-500 text-lg py-10">
            No Pending Client Found
          </div>
        ) : (
          <div className="overflow-x-auto">
            <table className="min-w-full border border-gray-300">
              <thead className="bg-blue-700 text-white">
                <tr>
                  <th className="px-4 py-3 border">S.No.</th>
                  <th className="px-4 py-3 border">Name</th>
                  <th className="px-4 py-3 border">Email</th>
                  <th className="px-4 py-3 border">Phone</th>
                  <th className="px-4 py-3 border">Company</th>
                  <th className="px-4 py-3 border">Status</th>
                  <th className="px-4 py-3 border">Action</th>
                </tr>
              </thead>

              <tbody>
                {clients.map((client, index) => (
                  <tr
                    key={client._id}
                    className="hover:bg-gray-100 transition"
                  >
                    <td className="border px-4 py-3 text-center">
                      {index + 1}
                    </td>

                    <td className="border px-4 py-3">
                      {client.firstName} {client.lastName}
                    </td>

                    <td className="border px-4 py-3">
                      {client.email}
                    </td>

                    <td className="border px-4 py-3">
                      {client.contactNumber}
                    </td>

                    <td className="border px-4 py-3">
                      {client.companyName || "N/A"}
                    </td>

                    <td className="border px-4 py-3 text-center">
                      <span className="bg-yellow-100 text-yellow-700 px-3 py-1 rounded-full text-sm font-semibold">
                        Pending
                      </span>
                    </td>

                    <td className="border px-4 py-3 text-center">
                      <button
                        onClick={() => handleApprove(client._id)}
                        className="bg-green-600 hover:bg-green-700 text-white px-4 py-2 rounded-lg transition cursor-pointer"
                      >
                        Approve
                      </button>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        )}
      </div>
    </div>
  );
};

export default PendingClient;