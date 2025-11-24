import axios from "axios";
import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { toast } from "react-toastify";
import axiosInstance from '../axiosInstance';
import {useLocalStorage} from '../hooks/useLocalStorage';

export const useAuth = () => {
  const navigate = useNavigate();
  const [accessToken, setAccessToken] = useLocalStorage('access_token', null);
  const [refreshToken, setRefreshToken] = useLocalStorage('refresh_token', null);
  const [loading, setLoading] = useState(false);
  const [user, setUser] = useState(null);
  const [authLoading, setAuthLoading] = useState(true);

  const login = async (userCredentials) => {
    setLoading(true);
    try {
      const response = await axios.post(`${import.meta.env.VITE_BA_URL}/api/login`, userCredentials);
      setAccessToken(response.data.access_token);
      setRefreshToken(response.data.refresh_token);
      setUser(response?.data?.user);
      return response.data;
    } catch (error) {
      setAccessToken(null);
      setRefreshToken(null);
      return error?.response?.data || {error: true};
    }
    finally {
      setLoading(false);
    }
  };

  const logout = async () => {
    try {
      const output = await axiosInstance.get(`${import.meta.env.VITE_BA_URL}/api/logout`);

      if (output.data.success) {
        toast.success(output.data.message);
        setAccessToken(null);
        setRefreshToken(null);
        navigate("/login");
      } else {
        toast.error(output.data.message);
      }
    } catch (error) {
      toast.error(error?.response?.data?.message || "Logout failed");
    }
  };

  useEffect(() => {
    const controller = new AbortController();

    const userProfile = async () => {
      if (!accessToken) {
        setAuthLoading(false);
        return;
      }

      try {
        console.log(user, 'new user');
        const response = await axiosInstance.post(
          `${import.meta.env.VITE_BA_URL}/api/profile`,
          {},
          { signal: controller.signal }
        );
        setUser(response.data.user);
      } catch (error) {
        if (!axios.isCancel(error)) console.log("Profile fetch failed:", error);
      } finally {
        setAuthLoading(false);
      }
    };

    userProfile();

    return () => controller.abort();
  }, [accessToken]);

  return {
    loading,
    authLoading,
    accessToken,
    refreshToken,
    user,
    login,
    logout,
    isAuthenticated: !!accessToken
  };
};
