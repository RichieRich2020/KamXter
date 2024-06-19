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
import CloseIcon from "@mui/icons-material/Close"
import AddIcon from "@mui/icons-material/Add"

const Uploadproductimg = ({
  handleChange,
  formData,
  mainImg = "",
  setMainImg,
}: any) => {
  const fileInputRef: any = useRef(null)

  const handleDeleteImage = (index: any) => {
    const updatedImages = formData.imageUrl.filter(
      (_: any, i: any) => i !== index
    )
    // Update the formData with the new array of images
    handleChange({ target: { name: "imageUrl", value: updatedImages } })
    // Reset the main image if it was the deleted one
    if (mainImg === formData.imageUrl[index].url) {
      setMainImg(updatedImages.length > 0 ? updatedImages[0].url : null)
    }
  }

  return (
    <>
      <Typography variant="h6" fontWeight="bold" mb={2}>
        Upload Img
      </Typography>
      <Grid
        sx={{
          display: "block",
          //  border: "2px solid blue",
        }}
        xs={12}
        // md={6}
        container
      >
        <Grid
          item
          xs={12}
          sx={
            {
              // border: "2px solid black",
            }
          }
        >
          {" "}
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
              fileInputRef.current.click()
            }}
          >
            {!formData.imageUrl.length && <button>Upload File</button>}
            <input
              name="imageUrl"
              type="file"
              ref={fileInputRef}
              // style={{ display: "none" }}
              multiple
              onChange={handleChange}
              style={{ display: "none", width: "100px", height: "100px" }}
            />
            {!mainImg && <UploadFileIcon />}

            <img
              src={mainImg}
              alt=""
              style={{ width: "90%", height: "90%", margin: "auto" }}
            />
          </Paper>
        </Grid>
        <Grid item xs={12} md={6}>
          {" "}
          <Box>
            <Box
              sx={{
                display: { xs: "flex", sm: "flex" },
                justifyContent: "center",
                mt: 2,
              }}
            >
              {formData.imageUrl.map((img: any, i: any) => (
                <Box key={i} sx={{ position: "relative" }}>
                  <Paper
                    sx={{
                      width: "50px",
                      height: "50px",
                      m: 1,
                      cursor: "pointer",
                    }}
                    onClick={() => {
                      setMainImg(img.url)
                    }}
                  >
                    <img src={img.url} alt="" width={"100%"} height={"100%"} />
                  </Paper>
                  <CloseIcon
                    onClick={() => handleDeleteImage(i)}
                    sx={{
                      position: "absolute",
                      top: 10,
                      right: 10,
                      cursor: "pointer",
                      backgroundColor: "red",
                      fontSize: "12px",
                    }}
                  />
                </Box>
              ))}
              {formData.imageUrl.length < 4 && (
                <Paper
                  sx={{
                    width: "50px",
                    height: "50px",
                    m: 1,
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                    cursor: "pointer",
                  }}
                  onClick={() => {
                    if (fileInputRef.current) {
                      fileInputRef.current.click()
                    }
                  }}
                >
                  <AddIcon />
                </Paper>
              )}
            </Box>
          </Box>
        </Grid>
      </Grid>
    </>
  )
}

export default Uploadproductimg
