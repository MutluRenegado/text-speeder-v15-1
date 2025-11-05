// src/hooks/useUserData.js

import { useState, useEffect } from "react";
import { doc, onSnapshot, updateDoc } from "firebase/firestore";
import { db } from "../firebase/firebaseConfig";
import { useAuth } from "./useAuth";

/**
 * Hook for fetching and updating the current user's Firestore data
 *
 * @returns {object} {
 *   userData,         // Firestore user document
 *   loading,          // boolean
 *   error,            // error message (if any)
 *   updateUserData,   // function to update user fields
 *   refreshUserData   // optional manual refresh
 * }
 */
export function useUserData() {
  const { currentUser } = useAuth();
  const [userData, setUserData] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  // Real-time listener for user document
  useEffect(() => {
    if (!currentUser) {
      setUserData(null);
      setLoading(false);
      return;
    }

    const userRef = doc(db, "users", currentUser.uid);

    const unsubscribe = onSnapshot(
      userRef,
      (docSnap) => {
        if (docSnap.exists()) {
          setUserData({ id: docSnap.id, ...docSnap.data() });
        } else {
          console.warn("⚠️ No user document found in Firestore.");
          setUserData(null);
        }
        setLoading(false);
      },
      (err) => {
        console.error("❌ Error fetching user data:", err);
        setError(err.message);
        setLoading(false);
      }
    );

    return unsubscribe;
  }, [currentUser]);

  /**
   * Update current user's Firestore data
   * @param {object} updates - partial fields to update
   */
  async function updateUserData(updates) {
    if (!currentUser) throw new Error("User not authenticated");
    try {
      const userRef = doc(db, "users", currentUser.uid);
      await updateDoc(userRef, updates);
      console.log("✅ User data updated:", updates);
    } catch (err) {
      console.error("❌ Error updating user data:", err);
      setError(err.message);
    }
  }

  /**
   * Optional: manual refresh (useful if you're not relying on snapshot)
   */
  async function refreshUserData() {
    if (!currentUser) return;
    const userRef = doc(db, "users", currentUser.uid);
    const docSnap = await getDoc(userRef);
    if (docSnap.exists()) setUserData({ id: docSnap.id, ...docSnap.data() });
  }

  return {
    userData,
    loading,
    error,
    updateUserData,
    refreshUserData,
  };
}

