import axios from "axios"

const baseURL = process.env.REACT_APP_BASE_URL

// Function to get a cookie value by name
// function getCookie(name: any) {
//   const cookieArr = document.cookie.split(";")
//   console.log("Document Cookie:", document.cookie)
//   for (let i = 0; i < cookieArr.length; i++) {
//     const cookiePair = cookieArr[i].split("=")
//     if (name === cookiePair[0].trim()) {
//       return decodeURIComponent(cookiePair[1])
//     }
//   }
//   return null
// }

// Create an Axios instance
const axiosInstance = axios.create({
  baseURL: baseURL,
  withCredentials: true, // This ensures cookies are included in requests
})

// Add a request interceptor to include the token in headers and log the headers
// axiosInstance.interceptors.request.use(
//   (config) => {
//     const token = getCookie("testCookie")
//     console.log(token)
//     if (token) {
//       config.headers["Authorization"] = `Bearer ${token}`
//     }
//     console.log("Request Headers:", config.headers)
//     return config
//   },
//   (error) => {
//     return Promise.reject(error)
//   }
// )

// Updated functions using axiosInstance

const fetchUsers = async () => {
  const { data } = await axiosInstance.get("/api/buy/cart")
  return data
}

const registerUser = async (userData: any) => {
  const response = await axiosInstance.post("/api/user/register", userData)
  console.log(response, "weeweew")
  return response.data
}

const addproduct = async (userData: any) => {
  const response = await axiosInstance.post("api/create/products", userData)
  return response.data
}
const loginFunction = async (userData: any) => {
  const response = await axiosInstance.post("/api/user/login", userData)
  return response
}

export { fetchUsers, registerUser, loginFunction, addproduct }
