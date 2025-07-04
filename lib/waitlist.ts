"use server"

import { getFirestoreDb, isPreviewMode } from "./firebase"

export interface WaitlistEntry {
  email: string
  timestamp: Date
  source?: string
}

export interface WaitlistResponse {
  success: boolean
  message: string
  count?: number
}

// Function to get waitlist count
export async function getWaitlistCount(): Promise<number> {
  try {
    console.log("Getting waitlist count - Preview mode:", isPreviewMode)

    if (isPreviewMode) {
      console.log("Using demo count")
      return 247
    }

    // Try to get Firestore database
    const db = await getFirestoreDb()


    if (!db) {
      console.log("Firestore not available, using demo count")
      return 247
    }

    // Dynamic import to avoid SSR issues
    const { collection, getDocs } = await import("firebase/firestore")

    const waitlistRef = collection(db, "waitlist")
    const querySnapshot = await getDocs(waitlistRef)
    const count = querySnapshot.size

    console.log("Real waitlist count:", count)
    return count
  } catch (error) {
    console.error("Error getting waitlist count: ", error)
    return 247 // Fallback count
  }
}

export async function addToWaitlist(email: string): Promise<WaitlistResponse> {
  try {
    console.log("Adding to waitlist:", email, "Preview mode:", isPreviewMode)

    // In preview/demo mode, simulate success without Firebase
    if (isPreviewMode) {
      console.log("Using demo mode for waitlist")
      // Simulate processing time
      await new Promise((resolve) => setTimeout(resolve, 1500))

      // Simulate occasional "already exists" for demo purposes
      if (email.toLowerCase() === "demo@example.com") {
        return {
          success: false,
          message: "Cette adresse email est déjà inscrite à la liste d'attente.",
          count: 247,
        }
      }

      return {
        success: true,
        message: "Merci ! Vous avez été ajouté à notre liste d'attente. (Mode démo)",
        count: 248,
      }
    }

    // Try to get Firestore database
    const db = await getFirestoreDb()

    if (!db) {
      console.log("Firestore not available, falling back to demo mode")
      return {
        success: true,
        message: "Merci ! Vous avez été ajouté à notre liste d'attente. (Mode démo - Firebase indisponible)",
        count: 247,
      }
    }

    // Dynamic import to avoid SSR issues
    const { setDoc, doc, getDoc } = await import("firebase/firestore")

    // Real Firebase implementation - use email as document ID
    const docRef = doc(db, "waitlist", email.toLowerCase())
    console.log("Checking if email exists:", email.toLowerCase())

    const docSnapshot = await getDoc(docRef)

    if (docSnapshot.exists()) {
      console.log("Email already exists")
      const count = await getWaitlistCount()
      return {
        success: false,
        message: "Cette adresse email est déjà inscrite à la liste d'attente.",
        count,
      }
    }

    // Add new email to waitlist using setDoc with email as document ID
    console.log("Adding new email to Firestore")
    await setDoc(docRef, {
      email: email.toLowerCase(),
      timestamp: new Date(),
      source: "landing-page",
    })

    console.log("Email added successfully to Firestore")

    // Get updated count
    const count = await getWaitlistCount()

    console.log("Waitlist entry added for email: ", email, "New count:", count)

    return {
      success: true,
      message: "Merci ! Vous avez été ajouté à notre liste d'attente.",
      count,
    }
  } catch (error) {
    console.error("Error adding to waitlist: ", error)

    // Fallback to demo mode if Firebase fails
    console.log("Falling back to demo mode due to error")
    return {
      success: true,
      message: "Merci ! Vous avez été ajouté à notre liste d'attente. (Mode démo - erreur Firebase)",
      count: 247,
    }
  }
}


export async function getWeeklyWaitlistCount(): Promise<number> {
  try {
    if (isPreviewMode) {
      return 12 // Demo count
    }

    const db = await getFirestoreDb()
    if (!db) return 12

    const { collection, getDocs, query, where, Timestamp } = await import("firebase/firestore")

    const now = new Date()
    const startOfWeek = new Date(now)
    startOfWeek.setDate(now.getDate() - now.getDay()) // Sunday

    const waitlistRef = collection(db, "waitlist")
    const q = query(
      waitlistRef,
      where("timestamp", ">=", Timestamp.fromDate(startOfWeek))
    )

    const snapshot = await getDocs(q)
    return snapshot.size
  } catch (error) {
    console.error("Error getting weekly waitlist count:", error)
    return 12
  }
}