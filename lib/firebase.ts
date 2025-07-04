// Firebase configuration and lazy initialization
const firebaseConfig = {
  apiKey: process.env.NEXT_PUBLIC_FIREBASE_API_KEY,
  authDomain: process.env.NEXT_PUBLIC_FIREBASE_AUTH_DOMAIN,
  projectId: process.env.NEXT_PUBLIC_FIREBASE_PROJECT_ID,
  storageBucket: process.env.NEXT_PUBLIC_FIREBASE_STORAGE_BUCKET,
  messagingSenderId: process.env.NEXT_PUBLIC_FIREBASE_MESSAGING_SENDER_ID,
  appId: process.env.NEXT_PUBLIC_FIREBASE_APP_ID,
  clientEmail: process.env.NEXT_PUBLIC_FIREBASE_CLIENT_EMAIL
}

// Check if we're in a preview/demo environment
export const isPreviewMode =
  !process.env.NEXT_PUBLIC_FIREBASE_API_KEY ||
  process.env.NEXT_PUBLIC_FIREBASE_API_KEY === "demo-key" ||
  process.env.NEXT_PUBLIC_FIREBASE_API_KEY === ""

console.log("FIREBASE CONFIG", firebaseConfig);

console.log("IS PREVIEW MODE ", isPreviewMode);

let firebaseApp: any = null
let firestoreDb: any = null
let initializationAttempted = false

// Lazy initialization function
export async function initializeFirebase() {
  // Return early if we're in preview mode or on server
  if (isPreviewMode) {
    console.log("Skipping Firebase initialization - preview mode or server-side")
    return { app: null, db: null }
  }

  // Return existing instances if already initialized
  if (initializationAttempted && firebaseApp && firestoreDb) {
    return { app: firebaseApp, db: firestoreDb }
  }

  // Mark that we've attempted initialization
  initializationAttempted = true

  try {
    // Validate required config
    const requiredFields = ["apiKey", "projectId", "authDomain", "appId"]
    const missingFields = requiredFields.filter((field) => !firebaseConfig[field as keyof typeof firebaseConfig])

    if (missingFields.length > 0) {
      console.warn("Missing Firebase config fields:", missingFields)
      throw new Error(`Missing Firebase configuration: ${missingFields.join(", ")}`)
    }

    console.log("Initializing Firebase...")

    // Dynamic imports to avoid SSR issues
    const { initializeApp, getApps, getApp } = await import("firebase/app")
    const { getFirestore, connectFirestoreEmulator } = await import("firebase/firestore")

    // Initialize Firebase app
    if (getApps().length === 0) {
      firebaseApp = initializeApp(firebaseConfig)
      console.log("Firebase app initialized")
    } else {
      firebaseApp = getApp()
      console.log("Using existing Firebase app")
    }

    // Initialize Firestore
    if (firebaseApp) {
      firestoreDb = getFirestore(firebaseApp)
      console.log("Firestore initialized successfully")
    }

    return { app: firebaseApp, db: firestoreDb }
  } catch (error) {
    console.error("Firebase initialization failed:", error)
    firebaseApp = null
    firestoreDb = null
    return { app: null, db: null }
  }
}

// Export getter functions instead of direct instances
export async function getFirebaseApp() {
  const { app } = await initializeFirebase()
  return app
}

export async function getFirestoreDb() {
  const { db } = await initializeFirebase()
  return db
}

// Legacy exports for backward compatibility
export const db = null // Will be replaced by getFirestoreDb()
export default null // Will be replaced by getFirebaseApp()
