
export const BASE_URL = import.meta.env.VITE_BASE_URL;

// auth endpoints 
export const endpoints = {
    SENDOTP_API: BASE_URL + "/auth/send-otp",
    SIGNUP_API: BASE_URL + "/auth/signup",
    LOGIN_API: BASE_URL + "/auth/login",
    LOGOUT_API:BASE_URL + "/auth/logout",
    RESETPASSWORDTOKEN_API: BASE_URL + "/auth/reset-password-token",
    RESETPASSWORD_API: BASE_URL + "/auth/reset-password",
    CHANGE_PASSWORD_API: BASE_URL + "/auth/change-password",
}

export const podEndpoints = {
    UPLOAD_POD_API : BASE_URL + "/pod/upload-pod",
    GET_ALL_POD_API : BASE_URL + "/pod/get-all-pod",
    GET_POD_BY_LRNUMBER_API:BASE_URL + "/pod/get-pod-bylr",
    DELETE_POD_API: BASE_URL + "/pod/delete-pod",
}

// staff  endpoints 
export const adminEndpoints = {
    GET_PENDING_STAFF_API : BASE_URL + "/admin/pending-staff",
    GET_PENDING_CLIENT_API: BASE_URL + "/admin/pending-client",
    APPROVE_USER_API : BASE_URL + "/admin/approve-user",

    
}

