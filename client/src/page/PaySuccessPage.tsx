import React, { useEffect, useState } from "react";
import { useLocation } from "react-router-dom";

export default function PaySuccessPage() {
  const device = navigator.userAgent;
  const isMobile = device.toLowerCase().indexOf("mobile") !== -1;
  const { search } = useLocation();

  const [tid, setTid] = useState("");
  const [oid, setOid] = useState("");
  const [buyerName, setBuyerName] = useState("");
  const [goodName, setGoodName] = useState("");
  const [totPrice, setTotPrice] = useState("");

  useEffect(() => {
    let serchtid;
    let serchoid;
    let serchbuyerName;
    let serchgoodName;
    let serchTotPrice;
    if (isMobile) {
      serchtid = new URLSearchParams(search).get("P_TID");
      serchoid = new URLSearchParams(search).get("P_OID");
      serchbuyerName = new URLSearchParams(search).get("P_UNAME");
      serchgoodName = new URLSearchParams(search).get("goodName");
      serchTotPrice = new URLSearchParams(search).get("P_AMT");
    } else {
      serchtid = new URLSearchParams(search).get("tid");
      serchoid = new URLSearchParams(search).get("MOID");
      serchbuyerName = new URLSearchParams(search).get("buyerName");
      serchgoodName = new URLSearchParams(search).get("goodName");
      serchTotPrice = new URLSearchParams(search).get("TotPrice");
    }
    setTid(serchtid || "");
    setOid(serchoid || "");
    setBuyerName(serchbuyerName || "");
    setGoodName(serchgoodName || "");
    setTotPrice(serchTotPrice || "");
  }, []);

  return (
    <>
      <div>성공</div>
      <p>주문자: {buyerName}</p>
      <p>구매상품: {goodName}</p>
      <p>주문번호: {oid}</p>
      <p>결제 금액: {totPrice}</p>
      <p>tid(거래번호): {tid}</p>
    </>
  );
}
