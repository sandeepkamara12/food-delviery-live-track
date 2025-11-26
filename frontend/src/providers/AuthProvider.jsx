import { useState } from "react";
import { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { useLocalStorage } from "../hooks/useLocalStorage";
import axios from "axios";
import axiosInstance from "../axiosInstance";
import { toast } from "react-toastify";
import { AuthContext } from "../context/AuthContext";
import { useCallback } from "react";
import { useMemo } from "react";

export const AuthProvider = ({ children }) => {
  const navigate = useNavigate();
  const [user, setUser] = useState(null);

  const [accessToken, setAccessToken] = useLocalStorage("access_token", null);
  const [refreshToken, setRefreshToken] = useLocalStorage("refresh_token", null);

  const [loading, setLoading] = useState(false);
  const [authLoading, setAuthLoading] = useState(true);


  const login = useCallback(async (userCredentials) => {
    setLoading(true);
    try {
      const response = await axios.post(
        `${import.meta.env.VITE_BA_URL}/api/login`,
        userCredentials
      );

      setAccessToken(response.data.access_token);
      setRefreshToken(response.data.refresh_token);
      setUser(response?.data?.user);
      return response.data;
    } catch (error) {
      setAccessToken(null);
      setRefreshToken(null);
      return error?.response?.data || { error: true };
    } finally {
      setLoading(false);
    }
  }, [
    setAccessToken, setRefreshToken, setUser
  ]);

  const logout = useCallback(async () => {
    try {
      const output = await axiosInstance.get(
        `${import.meta.env.VITE_BA_URL}/api/logout`
      );

      if (output.data.success) {
        toast.success(output.data.message);
        setAccessToken(null);
        setRefreshToken(null);
        setUser(null);
        navigate("/login");
      } else {
        toast.error(output.data.message);
      }
    } catch (error) {
      toast.error(error?.response?.data?.message || "Logout failed");
    }
  }, [
    navigate, setAccessToken, setRefreshToken
  ]);

  useEffect(() => {
    const controller = new AbortController();

    const userProfile = async () => {
      if (!accessToken) {
        setAuthLoading(false);
        return;
      }

      try {
        const response = await axiosInstance.post(
          `${import.meta.env.VITE_BA_URL}/api/profile`,
          {},
          { signal: controller.signal }
        );
        setUser(response.data.user);
      } catch (error) {
        if (!axios.isCancel(error)) {
          setAccessToken(null);
          setRefreshToken(null);
          setUser(null);
          navigate("/login");
        }
      } finally {
        setAuthLoading(false);
      }
    };

    userProfile();

    return () => controller.abort();
  }, [accessToken]);

  const value = useMemo(() => ({
    loading,
    authLoading,
    accessToken,
    refreshToken,
    user,
    login,
    logout,
    setUser,
    setAccessToken,
    setRefreshToken,
    isAuthenticated: !!accessToken,
  }), [
    loading,
    authLoading,
    accessToken,
    refreshToken,
    user,
    login,
    logout,
    setUser,
    setAccessToken,
    setRefreshToken
  ]);


  return <AuthContext.Provider
    value={value}
  >
    {children}
  </AuthContext.Provider>
};