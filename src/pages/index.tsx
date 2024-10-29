import Image from "next/image";
import Registration from "./registration/index";
import OtpVerification from "./registration/otpVerification";
import Regist from "./registration/regist";
import CreatePIN from "./registration/CreatePIN";
import ConfirmPIN from "./registration/ConfirmPIN";


export default function Home() {
  return (
    <>
      <Registration />
      {/* <OtpVerification /> */}
      {/* <Regist /> */}
      {/* <CreatePIN /> */}
      {/* <ConfirmPIN /> */}
    </>
  );
}
