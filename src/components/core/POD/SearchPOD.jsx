import React, { useState } from "react";
import toast from "react-hot-toast";
import { useSelector } from "react-redux";
import ConfirmationalModal from "../../common/ConfirmationalModal";
import {
  getPODByLrNumber,
  deletePOD,
} from "../../../services/operation/podAPI";

const SearchPOD = () => {
  const {user} = useSelector((state) => state.profile)
  const { token } = useSelector((state) => state.auth);

  const [lrNumber, setLrNumber] = useState("");
  const [loading, setLoading] = useState(false);
  const [podData, setPodData] = useState(null);
  const [confirmationModal, setConfirmationModal] = useState(null);

  const handleSearch = async (e) => {
    e.preventDefault();

    if (!lrNumber.trim()) {
      toast.error("Please enter LR Number");
      return;
    }

    try {
      setLoading(true);

      const response = await getPODByLrNumber(lrNumber);

      if (response) {
        setPodData(response);
      } else {
        setPodData(null);
      }
    } catch (error) {
      console.log(error);
      setPodData(null);
    } finally {
      setLoading(false);
    }
  };

  // Check whether POD is PDF
  const isPDF = podData?.podUrl?.toLowerCase().includes(".pdf");

  // Download POD
  const downloadPOD = async () => {
    try {
      const response = await fetch(podData.podUrl);

      const blob = await response.blob();

      const url = window.URL.createObjectURL(blob);

      const extension = podData.podUrl
        .split("?")[0]
        .split(".")
        .pop();

      const link = document.createElement("a");

      link.href = url;
      link.download = `${podData.lrNumber}.${extension}`;

      document.body.appendChild(link);
      link.click();

      document.body.removeChild(link);
      window.URL.revokeObjectURL(url);
    } catch (error) {
      console.log(error);
      toast.error("Unable to download POD");
    }
  };

  // Delete POD using LR Number
  const handleDelete = async () => {
    try {
      const response = await deletePOD(podData.lrNumber, token);

      if (response) {
        toast.success("POD deleted successfully");

        setPodData(null);
        setLrNumber("");
      }
    } catch (error) {
      console.log(error);
      toast.error("Failed to delete POD");
    } finally {
      setConfirmationModal(null);
    }
  };

  return (
    <>
      <div className="max-w-6xl mx-auto mt-20 md:mt-1 p-6">

        {/* Search Card */}
        <div className="bg-white rounded-xl shadow-lg p-6">
          <h1 className="text-3xl font-bold text-center text-blue-800 mb-6">
            Search POD
          </h1>

          <form
            onSubmit={handleSearch}
            className="flex flex-col md:flex-row gap-4"
          >
            <input
              type="text"
              placeholder="Enter LR Number"
              value={lrNumber}
              onChange={(e) => setLrNumber(e.target.value)}
              className="flex-1 border rounded-lg p-3 outline-none focus:ring-2 focus:ring-blue-500"
            />

            <button
              type="submit"
              disabled={loading}
              className="bg-blue-600 text-white px-6 py-3 rounded-lg hover:bg-blue-700 transition cursor-pointer"
            >
              {loading ? "Searching..." : "Search"}
            </button>
          </form>
        </div>

        {/* POD Details */}
        {podData && (
          <div className="bg-white rounded-xl shadow-lg mt-8 p-5">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">

              {/* Left Section */}
              <div>
                <h2 className="text-xl font-bold text-blue-700 mb-5">
                  POD Details
                </h2>

                <div className="space-y-3">

                  <div className="border-b pb-2">
                    <p className="text-sm text-gray-500">LR Number</p>
                    <p className="text-base font-semibold">
                      {podData.lrNumber}
                    </p>
                  </div>

                  <div className="border-b pb-2">
                    <p className="text-sm text-gray-500">Invoice Number</p>
                    <p className="text-base">
                      {podData.invoiceNumber || "N/A"}
                    </p>
                  </div>

                  <div className="border-b pb-2">
                    <p className="text-sm text-gray-500">Delivery Date</p>
                    <p className="text-base">
                      {podData.deliveryDate
                        ? new Date(podData.deliveryDate).toLocaleDateString()
                        : "N/A"}
                    </p>
                  </div>

                  <div className="border-b pb-2">
                    <p className="text-sm text-gray-500">Uploaded Date</p>
                    <p className="text-base">
                      {podData.date
                        ? new Date(podData.date).toLocaleDateString()
                        : "N/A"}
                    </p>
                  </div>

                </div>

                {/* Buttons */}
                <div className="flex flex-wrap gap-3 mt-6">

                  <a
                    href={podData.podUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="bg-blue-600 text-white px-5 py-2 rounded-lg hover:bg-blue-700 transition"
                  >
                    View POD
                  </a>

                  <button
                    onClick={downloadPOD}
                    className="bg-green-600 cursor-pointer text-white px-5 py-2 rounded-lg hover:bg-green-700 transition"
                  >
                    Download POD
                  </button>

                  {(user?.accountType === "Admin" ||
                    user?.accountType === "Staff") && (
                      <button
                        onClick={() =>
                          setConfirmationModal({
                            text1: "Delete POD?",
                            text2: `Are you sure you want to delete POD for LR Number ${podData.lrNumber}?`,
                            btn1Text: "Delete",
                            btn2Text: "Cancel",
                            btn1Handler: handleDelete,
                            btn2Handler: () => setConfirmationModal(null),
                          })
                        }
                        className="bg-red-600 cursor-pointer text-white px-5 py-2 rounded-lg hover:bg-red-700 transition"
                      >
                        Delete POD
                      </button>
                    )}

                </div>
              </div>

              {/* Right Section */}
              <div>

                <h2 className="text-xl font-bold text-blue-700 mb-5">
                  POD Preview
                </h2>

                <div className="border rounded-xl overflow-hidden bg-gray-100 flex justify-center items-center h-[450px]">

                  {isPDF ? (
                    <iframe
                      src={podData.podUrl}
                      title="POD PDF"
                      className="w-full h-full"
                    />
                  ) : (
                    <img
                      src={podData.podUrl}
                      alt="POD"
                      className="w-full h-full object-contain"
                    />
                  )}

                </div>

              </div>

            </div>
          </div>
        )}
      </div>

      {/* Confirmation Modal */}
      {confirmationModal && (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/40">
          <ConfirmationalModal modalData={confirmationModal} />
        </div>
      )}
    </>
  );
};

export default SearchPOD;