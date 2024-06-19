import React, { useContext, useEffect } from "react"
import { Box, Text, Input, Image, useColorMode, Button } from "@chakra-ui/react"
import Reward from "./Reward"
import { styled } from "@mui/system"
import ThoughtBox from "./ThoughtBox"
import { Stack, useMediaQuery } from "@mui/material"
import Cardd from "./Card"
const Feed = () => {
  const isSmallScreen = useMediaQuery("(max-width: 1370px)")

  const MyComponent = styled("div")({
    position: "relative",

    margin: isSmallScreen ? "0 auto 0 23%" : "0 auto 0 17%",
    // ml: isSmallScreen ? '50px' : 'auto',

    overflowY: "scroll",
    width: isSmallScreen ? "75%" : "60%", // Default width//
    zIndex: "9",
    top: 65,

    "@media (max-width: 852px)": {
      margin: "auto",
      width: "95%", // Width on screens wider than 600px
      // mt: '800px',
    },
  })

  return (
    <MyComponent>
      {/* <Reward /> */}
      {/* <Box
        sx={{
          height: '60px',
        }}></Box> */}
      <Box
        sx={{
          display: "flex",
          justifyContent: "center",
          gap: "20px",
          borderRadius: "20px",
          py: 5,
          px: 2,
          // border: '2px solid black',
          margin: "auto",
          border:
            "2px solid linear-gradient(45deg, #f09433 0%, #e6683c 25%, #dc2743 50%, #cc2366 75%, #bc1888 100%)",
        }}
      >
        <Stack
          sx={{
            // border: '2px solid black',
            // my: 2,
            width: "100%",
          }}
          direction={{ xs: "column", sm: "column", md: "column", lg: "row" }}
          spacing={{ xs: 1, sm: 1, md: 4 }}
        >
          {/* <ThoughtBox /> */}
          {/* <ThoughtBox /> */}
        </Stack>
      </Box>
      <Box
        sx={{
          width: "100%",

          // border: '2px solid black',
          margin: "auto",
          // my: 2,
        }}
      >
        {[12, 3, 4, 5, 56, 4].map(() => {
          return <Cardd />
        })}
      </Box>
    </MyComponent>
  )
}

export default Feed
