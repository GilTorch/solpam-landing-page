"use server"

import { db, isPreviewMode } from "./firebase"
import { collection, addDoc, query, where, getDocs } from "firebase/firestore"

export interface WaitlistEntry {
  email: string
  timestamp: Date
  source?: string
}

export async function addToWaitlist(email: string): Promise<{ success: boolean; message: string }> {
  try {
    // In preview/demo mode, simulate success without Firebase
    if (isPreviewMode || !db) {
      // Simulate processing time
      await new Promise((resolve) => setTimeout(resolve, 1500))

      // Simulate occasional "already exists" for demo purposes
      if (email.toLowerCase() === "demo@example.com") {
        return {
          success: false,
          message: "Cette adresse email est déjà inscrite à la liste d'attente.",
        }
      }

      return {
        success: true,
        message: "Merci ! Vous avez été ajouté à notre liste d'attente.",
      }
    }

    // Real Firebase implementation
    const waitlistRef = collection(db, "waitlist")
    const q = query(waitlistRef, where("email", "==", email.toLowerCase()))
    const querySnapshot = await getDocs(q)

    if (!querySnapshot.empty) {
      return {
        success: false,
        message: "Cette adresse email est déjà inscrite à la liste d'attente.",
      }
    }

    // Add new email to waitlist
    const docRef = await addDoc(waitlistRef, {
      email: email.toLowerCase(),
      timestamp: new Date(),
      source: "landing-page",
    })

    console.log("Waitlist entry added with ID: ", docRef.id)

    return {
      success: true,
      message: "Merci ! Vous avez été ajouté à notre liste d'attente.",
    }
  } catch (error) {
    console.error("Error adding to waitlist: ", error)

    // Fallback to demo mode if Firebase fails
    await new Promise((resolve) => setTimeout(resolve, 1000))
    return {
      success: true,
      message: "Merci ! Vous avez été ajouté à notre liste d'attente. (Mode démo)",
    }
  }
}
