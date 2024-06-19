import { useContext } from "react"
import { AuthContext } from "../context/AuthContext"

// NOTE: optimally move this into a separate file
export interface User {
  id: string
  name: string
  email: string
  authToken?: string
}

export const useUser = () => {
  const { user, setUser } = useContext(AuthContext)

  const addUser = (user: User) => {
    setUser(user)
    localStorage.setItem("user", JSON.stringify(user))
  }

  const removeUser = () => {
    setUser(null)
    localStorage.setItem("user", "")
  }

  return { user, addUser, removeUser, setUser }
}
