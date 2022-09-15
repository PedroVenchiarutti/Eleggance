import { createContext, useState } from "react";
import { useFetch, usePost } from "../hooks/useFetch";

const initialState = {
  code: "",
  minValue: "R$ ",
  discount: 0,
  initialDate: new Date(),
  dt_limit: "",
  availableQuantity: 0,
};

export const CouponContext = createContext();
export const CouponProvider = ({ children }) => {
  const [coupon, setCoupon] = useState({ ...initialState });
  const updateState = (fieldName, value) =>
    setCoupon({ ...Object.assign(coupon, { [fieldName]: value }) });

  const onFormSubmit = () =>
    usePost('api/protected/dicount', {
      code: coupon.code,
      dt_limit: coupon.dt_limit,
      discount: coupon.discount,
    }, () => window.location.reload(), () => alert('Ocorreu um erro ao cadastrar o cupom'));

  const [modalVisibility, setModalVisibility] = useState(false);
  const toggleModalVisibility = () => setModalVisibility(!modalVisibility);

  let { data } = useFetch("api/protected/dicount/");
  const state = {
    coupon,
    coupons: data,
    modalVisibility,
    toggleModalVisibility,
    updateState,
    onFormSubmit,
  };

  return (
    <CouponContext.Provider value={state}>{children}</CouponContext.Provider>
  );
};
