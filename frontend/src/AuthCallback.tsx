import { useEffect } from "react";
import { exchangeCode } from "./Services/Auth";

export const AuthCallback = () => {
  useEffect(() => {
    exchangeCode();
  }, []);
  return <div>This is the callback</div>;
};
