import React, { useRef, useState } from "react";
import axios from "axios";
import toast from "react-hot-toast";
import { useDispatch, useSelector } from "react-redux";
import { uploadPOD } from "../../../services/operation/podAPI";
import { useNavigate } from "react-router-dom";

const UploadPOD = () => {

  const dispatch = useDispatch();
  const navigate = useNavigate();
  const { token } = useSelector((state) => state.auth)
  const fileInputRef = useRef(null);

  const [formData, setFormData] = useState({
    lrNumber: "",
    invoiceNumber: "",
    deliveryDate: "",
  });

  const [podFile, setPodFile] = useState(null);
  const [loading, setLoading] = useState(false);

  const changeHandler = (e) => {
    setFormData((prev) => ({
      ...prev,
      [e.target.name]: e.target.value,
    }));
  };

  const fileChangeHandler = (e) => {
    setPodFile(e.target.files[0]);
  };

  const submitHandler = async (e) => {
    e.preventDefault();

    if (!formData.lrNumber) {
      toast.error("LR Number is required");
      return;
    }
    else if( !podFile){
      toast.error("POD file is required")
      return;
    }

    try {
      setLoading(true);

      const data = new FormData();

      data.append("lrNumber", formData.lrNumber);
      data.append("invoiceNumber", formData.invoiceNumber);
      data.append("deliveryDate", formData.deliveryDate);
      data.append("pod", podFile);

      const response = await uploadPOD(data, token, navigate)

      // console.log("Vishal");

      if (response?.success) {
        setFormData({
          lrNumber: "",
          // invoiceNumber: "",
          deliveryDate: "",
        });

        setPodFile(null);

        if (fileInputRef.current) {
          fileInputRef.current.value = "";
        }
      }

    } catch (error) {
      console.log("error", error);

    }
    setLoading(false)
  };

  return (
    <div className="max-w-3xl mx-auto mt-24 md:mt-4 bg-white  p-8 rounded-xl shadow-md">
      <h1 className="text-3xl font-bold text-center text-blue-800 mb-8">
        Upload POD
      </h1>

      <form onSubmit={submitHandler} className="space-y-5">
        {/* LR Number */}
        <div>
          <label className="block mb-2 font-medium">
            LR Number <sup className="text-red-500">*</sup>
          </label>

          <input
            type="text"
            name="lrNumber"
            value={formData.lrNumber}
            onChange={changeHandler}
            placeholder="Enter LR Number"
            className="w-full border rounded-lg p-3 outline-none"
            required
          />
        </div>

        {/* Invoice Number */}
        <div>
          <label className="block mb-2 font-medium">
            Invoice Number
          </label>

          <input
            type="text"
            name="invoiceNumber"
            value={formData.invoiceNumber}
            onChange={changeHandler}
            placeholder="Enter Invoice Number"
            className="w-full border rounded-lg p-3 outline-none"
          />
        </div>

        {/* Delivery Date */}
        <div>
          <label className="block mb-2 font-medium">
            Delivery Date
          </label>

          <input
            type="date"
            name="deliveryDate"
            value={formData.deliveryDate}
            onChange={changeHandler}
            className="w-full border rounded-lg cursor-pointer p-3 outline-none"
          />
        </div>

        {/* POD Upload */}
        <div>
          <label className="block mb-2 font-medium">
            POD File <sup className="text-red-500">*</sup>
          </label>

          <input
            ref={fileInputRef}
            type="file"
            accept=".pdf,.jpg,.jpeg,.png"
            onChange={fileChangeHandler}
            className="w-full border cursor-pointer rounded-lg p-3"
            required
          />
        </div>

        {/* Submit Button */}
        <button
          type="submit"
          disabled={loading}
          className="w-full cursor-pointer bg-blue-600 text-white py-3 rounded-lg hover:bg-blue-700 transition"
        >
          {loading ? "Uploading..." : "Upload POD"}
        </button>
      </form>
    </div>
  );
};

export default UploadPOD;