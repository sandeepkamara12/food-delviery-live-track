import { useEffect, useState } from "react";
import axios from "axios";

const useGetCity = () => {
    const [city, setCity] = useState("");
    const [state, setState] = useState("");
    const [address, setAddress] = useState("");
    useEffect(()=>{
        navigator.geolocation.getCurrentPosition(async (position) => {
            const latitude = position.coords.latitude;
            const longitude = position.coords.longitude;
            const response = await axios.get(`https://api.geoapify.com/v1/geocode/reverse?lat=${latitude}&lon=${longitude}&format=json&apiKey=${import.meta.env.VITE_GEO_API_KEY}`);
            console.log(response?.data?.results?.[0]?.city, 'response?.data?.results?.[0]?.city');
            setCity(response?.data?.results?.[0]?.city);
            setState(response?.data?.results?.[0]?.state);
            setAddress(`${response?.data?.results?.[0]?.street} ${response?.data?.results?.[0]?.address_line1} ${response?.data?.results?.[0]?.address_line2}`);
        })
    },[]);
    return {city, state, address};
}
export default useGetCity;