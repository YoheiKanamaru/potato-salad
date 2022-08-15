import React, { createContext, useContext, useState, useEffect } from 'react'
import { app } from "./firebase/firebase";
import { getAuth } from "firebase/auth";
import firebase from 'firebase/compat/app';

type AuthContextProps = {
  user: firebase.User | null
}

const AuthContext = createContext<AuthContextProps>({
  user: null,
})

export const AuthProvider = ({ children }: { children: React.ReactNode }) => {
  const [user, setUser] = useState<firebase.User | any>(null)
  const [loading, setLoading] = useState(true)

  const auth = getAuth(app);

  useEffect(() => {
    const unsubscribe = auth.onAuthStateChanged((user) => {
      setUser(user)
      setLoading(false)
    })
    return unsubscribe
  }, [])

  return (
    <AuthContext.Provider value={{ user }}>
      {!loading && children}
    </AuthContext.Provider>
  )
}

export const useAuth = () => {
  return useContext(AuthContext)
}
