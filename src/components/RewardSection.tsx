import React, { useContext } from "react"
import { Box, useMediaQuery } from "@mui/material"
import RewardCard from "./RewardCard"
const RewardSection = () => {
  const isSmallScreen = useMediaQuery("(max-width: 1370px)")
  return (
    <Box
      sx={{
        display: isSmallScreen ? "none" : "block",
        // boxShadow: 'rgba(0, 0, 0, 0.35) 0px 5px 15px',
        width: "25%",
        p: 2,
        m: "auto",
        height: "100vh",
        zIndex: 9,

        // backgroundColor: '#ffff',
        position: "fixed", // Fixed position
        top: 66, // Start from the top
        right: 0, // Align to the left side of the screen
        overflowY: "auto", // Enable scrolling if content overflows
      }}
    >
      {[1, 2, 2, 2, 11].map((ele) => {
        return <RewardCard />
      })}
    </Box>
  )
}

export default RewardSection
