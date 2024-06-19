import React from "react"
import logo from "./logo.svg"
import "./App.css"
import Sidbar from "./components/Sidbar"

import { ThemeProvider, createTheme, Box } from "@mui/material"
import { ChakraProvider } from "@chakra-ui/react"
import AllRoutes from "./routes/AllRoutes"

function App() {
  // Optional: Create a custom theme if you need custom breakpoints
  const theme = createTheme({
    breakpoints: {
      values: {
        xs: 0,
        sm: 500,
        md: 860,
        lg: 1280,
        xl: 1920,
      },
    },
  })

  return (
    <div>
      <ChakraProvider>
        <ThemeProvider theme={theme}>
          <AllRoutes />
        </ThemeProvider>
      </ChakraProvider>
    </div>
  )
}

export default App
