import { createContext, useEffect, useState } from "react";

const initialState = {
    id: '',
    minValue: '',
    discountValue: '',
    initialDate: new Date().toLocaleDateString(),
    expirationDate: '',
    availableQuantity: ''
}

export const CouponContext = createContext();
export const CouponProvider = ({ children }) => {
    const couponsFromStorage = sessionStorage.getItem('coupons');

    const [coupon, setCoupon] = useState({ ...initialState });
    const updateState = (fieldName, value) => setCoupon({ ...Object.assign(coupon, { [fieldName]: value }) });

    const [coupons, setCoupons] = useState(couponsFromStorage ? JSON.parse(couponsFromStorage) : []);

    const onFormSubmit = event => {
        event.preventDefault();
        restartState();
    }

    const [modalVisibility, setModalVisibility] = useState(false);
    const toggleModalVisibility = () => setModalVisibility(!modalVisibility);

    const restartState = () => {
        setCoupons([...coupons, coupon]);
        setCoupon({ ...initialState });
        toggleModalVisibility();
    }

    useEffect(() => sessionStorage.setItem('coupons', JSON.stringify(coupons)), [coupons]);

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