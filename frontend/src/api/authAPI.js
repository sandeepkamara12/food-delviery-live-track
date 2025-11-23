import axios from "axios";

export const registerUser = async (userData) => {
    try {
        const response = await axios.post(`${import.meta.env.VITE_BA_URL}/api/register`, userData)
        return response.data;
    } catch (error) {
        return error.response.data;
    }
};
export const forgotPassword = async (userEmail) => {
    try {
        const response = await axios.post(`${import.meta.env.VITE_BA_URL}/api/forgot-password`, userEmail);
        return response.data;
    } catch (error) {
        return error.response.data;
    }
}
export const verifyForgotPasswordOtp = async (data) => {
    try {
        const response = await axios.post(`${import.meta.env.VITE_BA_URL}/api/verify-otp`, data);
        return response.data;
    } catch (error) {
        return error.response.data;
    }
}
export const resetPassword = async (data) => {
    try {
        const response = await axios.post(`${import.meta.env.VITE_BA_URL}/api/reset-password`, data);
        return response.data;
    } catch (error) {
        return error.response.data;
    }
}
export const googleRegister = async (data) => {
    const user = {
        name:data?.displayName,
        email:data?.email,
        is_verified:data?.emailVerified,
        mobile:data?.phoneNumber,
        image:data?.photoURL,
        role:"user"
    }
    try {
        const response = await axios.post(`${import.meta.env.VITE_BA_URL}/api/google-auth`, user);
        return response.data;
    } catch (error) {
        return error.response.data;
    }
}