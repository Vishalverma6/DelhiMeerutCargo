import { data } from "react-router-dom";
import { podEndpoints } from "../apis";
import { apiConnector } from "../apiConnector";
import toast from "react-hot-toast";


const {
    UPLOAD_POD_API,
    GET_ALL_POD_API,
    GET_POD_BY_LRNUMBER_API,
    DELETE_POD_API

} = podEndpoints;


//  upload POD
export const uploadPOD = async (data, token, navigate) => {
    let result = null;
    const toastId = toast.loading("Loading...");
    try {
        const response = await apiConnector("POST", UPLOAD_POD_API, data, {
            "Content-Type": "multipart/form-data",
            Authorization: `Bearer ${token}`,
        })

        console.log("UPLOAD_POD_API...RESPONSE..", response);
        if (!response?.data?.success) {
            throw new Error("Could not Uplaod POD")
        }

        toast.success(response?.data?.message || "POD Uploaded Succesfully")
        result = response?.data;
        // console.log("result", result);

        // navigate("/report-submitted");

    } catch (error) {
        console.log("UPLOAD_POD_API API ERROR...", error);
        toast.error(error?.response?.data?.message)
    }
    toast.dismiss(toastId);
    return result
}

// get All POD 

export const getAllPOD = async () => {
    const toastId = toast.loading("Loading...")
    let result = []
    try {
        const response = await apiConnector("GET", GET_ALL_POD_API)

        console.log("GET_ALL_POD_API...RESPONSE..", response)
        if (!response.data.success) {
            throw new Error(response?.data?.message || "Could not fetch all POD")
        }
        result = response?.data?.data
        toast.success(response?.data?.message || "Successfully fetched the POD")
    }
    catch (error) {
        console.log("GET_ALL_POD_API API ERROR .....", error);
        toast.error(error.message);
    }
    toast.dismiss(toastId)
    return result
};


// get the POD by LR Number
export const getPODByLrNumber = async (lrNumber) => {
    const toastId = toast.loading("Searching...");

    let result = null;

    try {
        const response = await apiConnector(
            "POST",
            GET_POD_BY_LRNUMBER_API,
            { lrNumber }
        );

        if (!response.data.success) {
            throw new Error(response.data.message);
        }

        result = response.data.data;
    } catch (error) {
        result = null;

        toast.error(
            error?.response?.data?.message || "POD not found."
        );
    }

    toast.dismiss(toastId);
    return result;
};


// delete POD
export const deletePOD = async (lrNumber, token) => {
    let result = null;

    const toastId = toast.loading("Deleting POD...");

    try {
        const response = await apiConnector(
            "DELETE",
            DELETE_POD_API,
            {
                lrNumber,
            },
            {
                Authorization: `Bearer ${token}`,
            }
        );

        console.log("DELETE_POD_API RESPONSE...", response);

        if (!response?.data?.success) {
            throw new Error("Could not delete POD");
        }

        toast.success(response?.data?.message || "POD deleted successfully");

        result = response?.data?.data;
    } catch (error) {
        console.log("DELETE_POD_API ERROR...", error);

        toast.error(
            error?.response?.data?.message || "Failed to delete POD"
        );
    }

    toast.dismiss(toastId);

    return result;
};