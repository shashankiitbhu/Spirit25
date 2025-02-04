// hooks/useReferralVerification.js
import { useState } from "react";
import { collection, query, where, getDocs } from "firebase/firestore";
import { db } from "../firebase";

export const useReferralVerification = () => {
  const [isCodeValid, setIsCodeValid] = useState(false);
  const [checking, setChecking] = useState(false);

  const verifyReferralCode = async (referralCode) => {
    setChecking(true);
    try {
      const q = query(collection(db, "referralCodes"), where("code", "==", referralCode));
      const querySnapshot = await getDocs(q);
      setIsCodeValid(!querySnapshot.empty);
    } catch (error) {
      console.error("Error verifying referral code:", error);
    } finally {
      setChecking(false);
    }
  };

  return { isCodeValid, checking, verifyReferralCode };
};
