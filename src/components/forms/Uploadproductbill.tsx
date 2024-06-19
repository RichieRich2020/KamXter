import {
  TextField,
  Button,
  Grid,
  Typography,
  Container,
  Paper,
  Box,
  FormControl,
  OutlinedInput,
  useMediaQuery,
  useTheme,
} from "@mui/material"
import UploadFileIcon from "@mui/icons-material/UploadFile"
import { useRef, useState } from "react"

const style = {
  position: "absolute" as "absolute",
  top: "50%",
  left: "50%",
  transform: "translate(-50%, -50%)",
  width: "50%",
  bgcolor: "background.paper",
  border: "2px solid #000",
  boxShadow: 24,
  p: 4,
}

const Uploadproductbill = ({ handleChange, formData }: any) => {
  const fileBillInputRef: any = useRef(null)
  return (
    <Box
      sx={{
        width: "100%",
      }}
    >
      <Typography variant="h6" fontWeight="bold" mb={2}>
        Bill Img
      </Typography>
      <Box
        sx={{
          display: "block",

          margin: "auto",
        }}
      >
        <Paper
          sx={{
            border: "5px dashed #84a2b3",
            width: "260px",
            height: "270px",
            margin: "auto",
            textAlign: "center",
            p: 2,
          }}
          onClick={() => {
            fileBillInputRef.current.click()
          }}
        >
          {" "}
          <input
            name="billimage"
            type="file"
            ref={fileBillInputRef}
            onChange={handleChange}
            style={{ display: "none", width: "100px", height: "100px" }}
          />
          <UploadFileIcon />
          <img
            src={formData.billimage.url}
            alt=""
            style={{ width: "90%", height: "90%", margin: "auto" }}
          />
        </Paper>
      </Box>
    </Box>
  )
}

export default Uploadproductbill
