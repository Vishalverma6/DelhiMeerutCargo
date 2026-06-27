import toast from "react-hot-toast";
import { adminEndpoints } from "../apis";
import { apiConnector } from "../apiConnector";

const {
    GET_PENDING_CLIENT_API,
    GET_PENDING_STAFF_API,
    APPROVE_USER_API
} = adminEndpoints;

// get Pending Client
export const getPendingClient = async (token) => {
    let result = [];

    const toastId = toast.loading("Loading...");

    try {
        const response = await apiConnector(
            "GET",
            GET_PENDING_CLIENT_API,
            null,
            {
                Authorization: `Bearer ${token}`,
            }
        );

        if (!response?.data?.success) {
            throw new Error("Unable to fetch pending clients");
        }

        result = response.data.data;
    } catch (error) {
        console.log(error);
        toast.error(
            error?.response?.data?.message || "Failed to fetch pending clients"
        );
    }

    toast.dismiss(toastId);

    return result;
};

// approve user
export const approveUser = async (userId, token) => {
    const toastId = toast.loading("Loading...");
    try {
        const response = await apiConnector("POST", APPROVE_USER_API, { userId }, {
            Authorization: `Bearer ${token}`
        })

        console.log("APPROVE_USER_API API RESPONSE", response)

        if (!response?.data?.success) {
            throw new Error(response.data.message)
        }

        toast.success(response?.data?.message)
    } catch (error) {
        console.log("APPROVE_USER_API API ERROR.....", error)
        toast.error(error.message)
    }
    toast.dismiss(toastId)
}
