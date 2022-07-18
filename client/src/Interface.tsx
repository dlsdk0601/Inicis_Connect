interface ISelectData {
  mid: string;
  authToken: string;
  timestamp: number;
  signature: string;
  charset: string;
  format: string;
  result: boolean;
  oid: string;
}

export interface ISelectResult {
  result: boolean;
  msg: string | null;
  data: ISelectData | null;
  code: number;
}

export interface IpaymentResponse {
  CARD_Quota: string;
  CARD_ClEvent: string;
  CARD_CorpFlag: string;
  buyerTel: string;
  parentEmail: string;
  applDate: string;
  buyerEmail: string;
  p_Sub: string;
  resultCode: string;
  mid: string;
  CARD_UsePoint: string;
  CARD_Num: string;
  authSignature: string;
  ISP_CardCode: string;
  tid: string;
  EventCode: string;
  goodName: string;
  TotPrice: string;
  payMethod: string;
  CARD_MemberNum: string;
  MOID: string;
  CARD_Point: string;
  currency: string;
  CARD_PurchaseCode: string;
  CARD_PrtcCode: string;
  applTime: string;
  goodsName: string;
  CARD_CheckFlag: string;
  FlgNotiSendChk: string;
  CARD_Code: string;
  CARD_BankCode: string;
  CARD_TerminalNum: string;
  ISP_RetrievalNum: string;
  P_FN_NM: string;
  buyerName: string;
  p_SubCnt: string;
  applNum: string;
  resultMsg: string;
  CARD_Interest: string;
  CARD_SrcCode: string;
  CARD_ApplPrice: string;
  CARD_GWCode: string;
  custEmail: string;
  CARD_PurchaseName: string;
  CARD_PRTC_CODE: string;
  payDevice: string;
}