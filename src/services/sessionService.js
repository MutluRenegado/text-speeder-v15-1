// src/services/sessionService.js

import {
  collection,
  doc,
  addDoc,
  getDoc,
  getDocs,
  updateDoc,
  deleteDoc,
  query,
  orderBy,
  where,
} from "firebase/firestore";
import { db } from "../firebase/firebaseConfig";

/**
 * Create a new reading session for a user
 * @param {string} userId
 * @param {Object} sessionData - { textId, startTime, endTime, wpm, comprehensionScore, device }
 * @returns {string} sessionId
 */
export async function createSession(userId, sessionData) {
  try {
    const sessionsRef = collection(db, "users", userId, "readingSessions");
    const newSessionRef = await addDoc(sessionsRef, {
      ...sessionData,
      createdAt: new Date(),
    });
    console.log(`✅ Created new session for user ${userId}`);
    return newSessionRef.id;
  } catch (error) {
    console.error("❌ Error creating reading session:", error);
    throw error;
  }
}

/**
 * Get a single reading session
 * @param {string} userId
 * @param {string} sessionId
 */
export async function getSession(userId, sessionId) {
  try {
    const sessionRef = doc(db, "users", userId, "readingSessions", sessionId);
    const sessionSnap = await getDoc(sessionRef);
    if (sessionSnap.exists()) {
      return { id: sessionSnap.id, ...sessionSnap.data() };
    } else {
      console.warn(`⚠️ Session not found: ${sessionId}`);
      return null;
    }
  } catch (error) {
    console.error("❌ Error fetching reading session:", error);
    throw error;
  }
}

/**
 * Get all reading sessions for a user
 * @param {string} userId
 * @param {Object} filters (optional)
 *        Example: { textId: "abc123", order: "desc" }
 */
export async function getAllSessions(userId, filters = {}) {
  try {
    const sessionsRef = collection(db, "users", userId, "readingSessions");

    const constraints = [];
    if (filters.textId) {
      constraints.push(where("textId", "==", filters.textId));
    }

    const orderDirection = filters.order === "asc" ? "asc" : "desc";
    constraints.push(orderBy("createdAt", orderDirection));

    const q = query(sessionsRef, ...constraints);
    const querySnapshot = await getDocs(q);

    return querySnapshot.docs.map((docSnap) => ({
      id: docSnap.id,
      ...docSnap.data(),
    }));
  } catch (error) {
    console.error("❌ Error fetching reading sessions:", error);
    throw error;
  }
}

/**
 * Update a reading session
 * @param {string} userId
 * @param {string} sessionId
 * @param {Object} updates
 */
export async function updateSession(userId, sessionId, updates) {
  try {
    const sessionRef = doc(db, "users", userId, "readingSessions", sessionId);
    await updateDoc(sessionRef, updates);
    console.log(`✅ Updated session ${sessionId} for user ${userId}`);
  } catch (error) {
    console.error("❌ Error updating reading session:", error);
    throw error;
  }
}

/**
 * Delete a reading session
 * @param {string} userId
 * @param {string} sessionId
 */
export async function deleteSession(userId, sessionId) {
  try {
    const sessionRef = doc(db, "users", userId, "readingSessions", sessionId);
    await deleteDoc(sessionRef);
    console.log(`🗑️ Deleted session ${sessionId} for user ${userId}`);
  } catch (error) {
    console.error("❌ Error deleting reading session:", error);
    throw error;
  }
}

