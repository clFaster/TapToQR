import { useContext } from "react";
import { QrContext, QrContextType } from "../contexts/QrContextDefinition";

export const useQrContext = (): QrContextType => {
  const context = useContext(QrContext);
  if (!context) {
    throw new Error("useQrContext must be used within a QrProvider");
  }
  return context;
};
