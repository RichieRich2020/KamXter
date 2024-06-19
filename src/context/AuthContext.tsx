import { createContext, useState, ReactNode, useMemo } from "react"
import { User } from "../customHooks/useUser"

interface AuthContextProps {
  user: User | null
  setUser: (user: User | null) => void
  openModal: boolean
  setOpenModal: (open: boolean) => void
}

export const AuthContext = createContext<AuthContextProps>({
  user: null,
  setUser: () => {},
  openModal: true,
  setOpenModal: () => {},
})

export const AuthProvider = ({ children }: { children: ReactNode }) => {
  const [user, setUser] = useState<User | null>(null)
  const [openModal, setOpenModal] = useState<boolean>(true)

  const value = useMemo(
    () => ({ user, setUser, openModal, setOpenModal }),
    [user, openModal]
  )

  return <AuthContext.Provider value={value}>{children}</AuthContext.Provider>
}
