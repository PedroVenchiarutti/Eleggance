import axios from "axios";
import { createContext, useEffect, useState } from "react";
import Api from "../api/api";
import { useFetch } from "../hooks/useFetch";

const initialState = {
    code: '',
    minValue: '',
    discount: '',
    initialDate: new Date(),
    dt_limit: '',
    availableQuantity: ''
}

export const CouponContext = createContext();
export const CouponProvider = ({ children }) => {
    let { data } = useFetch('api/protected/dicount/');

    const [coupon, setCoupon] = useState({ ...initialState });
    const updateState = (fieldName, value) => setCoupon({ ...Object.assign(coupon, { [fieldName]: value }) });

    const [coupons, setCoupons] = useState(data);
    useEffect(() => setCoupons(data), [data]);

    const onFormSubmit = async event => {
        event.preventDefault();
        console.log(coupon)
        await Api.post('http://localhost:3333/api/protected/dicount', coupon);
    }

    const [modalVisibility, setModalVisibility] = useState(false);
    const toggleModalVisibility = () => setModalVisibility(!modalVisibility);

    const state = {
        coupon,
        coupons,
        modalVisibility,
        toggleModalVisibility,
        updateState,
        onFormSubmit
    }

    return <CouponContext.Provider value={state}>{children}</CouponContext.Provider>
}