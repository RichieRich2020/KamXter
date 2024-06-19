import { useEffect } from "react"
import { useUser, User } from "./useUser"

export const useAuth = () => {
  // we can re export the user methods or object from this hook
  const { user, addUser, removeUser, setUser } = useUser()

  useEffect(() => {
    const user = localStorage.getItem("user")
    if (user) {
      addUser(JSON.parse(user))
    }
  }, [])

  const login = (user: User) => {
    addUser(user)
  }

  const logout = () => {
    removeUser()
  }

  return { user, login, logout, setUser }
}
