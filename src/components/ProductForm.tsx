import React, { useState } from "react"
import { useRef } from "react"
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
import PrecisionManufacturingIcon from "@mui/icons-material/PrecisionManufacturing"
import FormHelperText from "@mui/material/FormHelperText"
import UploadFileIcon from "@mui/icons-material/UploadFile"
import { useQuery, useMutation } from "@tanstack/react-query"
import { addproduct } from "../axiosfile/datafetchfile"

function MyFormHelperText() {
  const helperText = "Helper text" // Default helper text, adjust as needed

  return <FormHelperText>{helperText}</FormHelperText>
}

const ProductForm = () => {
  const theme = useTheme()
  const isSmallScreen = useMediaQuery(theme.breakpoints.down("sm"))
  const fileInputRef: any = useRef(null)
  const fileBillInputRef: any = useRef(null)

  const [formData, setFormData]: any = useState({
    title: "",
    content: "",
    price: 0,
    seller: "",
    address: "",
    usage: "",
    original_price: 0,
    brand: "",
    imageUrl: [],
    billimage: "",
  })
  const [images, setImages]: any = useState([])
  const [mainImg, setMainImg]: any = useState([])

  const handleChange = (event: any) => {
    const fileValidation = [".jpg", ".png", ".jpeg", ".pdf"]
    const { name, value, type, files } = event.target

    if (type === "file") {
      if (name == "imageUrl") {
        const newImages: any = []

        for (let i = 0; i < files.length; i++) {
          if (files[i].type.split("/")[0] !== "image") continue

          const isDuplicate = formData.imageUrl.some(
            (e: any) => e.name === files[i].name
          )
          if (!isDuplicate) {
            newImages.push({
              name: files[i].name,
              url: URL.createObjectURL(files[i]),
            })
          }
        }

        setFormData((prevState: any) => {
          const totalImages = prevState.imageUrl.length + newImages.length
          if (totalImages > 4) {
            alert(`You can only upload up to ${4} images.`)
            return prevState
          }
          return {
            ...prevState,
            imageUrl: [...prevState.imageUrl, ...newImages],
          }
        })

        setMainImg(newImages[0].url)
      } else {
        setFormData({
          ...formData,
          billimage: {
            name: files[0].name,
            url: URL.createObjectURL(files[0]),
          },
        })
      }
    } else {
      setFormData((prevState: any) => ({
        ...prevState,
        [name]: value,
      }))
    }
  }

  // const handleFileChange = (event: any) => {
  //   const { name, value } = event.target
  //   const files = event.target.files
  //   if (files.length === 0) return
  //   console.log(files)

  //   if (name == "imageUrl") {
  //     const newImages: any = []

  //     for (let i = 0; i < files.length; i++) {
  //       if (files[i].type.split("/")[0] !== "image") continue

  //       const isDuplicate = images.some((e: any) => e.name === files[i].name)
  //       if (!isDuplicate) {
  //         newImages.push({
  //           name: files[i].name,
  //           url: URL.createObjectURL(files[i]),
  //         })
  //       }
  //     }

  //     setImages((prevImages: any) => {
  //       const totalImages = prevImages.length + newImages.length
  //       if (totalImages > 4) {
  //         alert(`You can only upload up to ${4} images.`)
  //         return prevImages
  //       }
  //       return [...prevImages, ...newImages]
  //     })

  //     setMainImg(newImages[0].url)
  //   }

  //   if (name == "billimage") {
  //     setFormData({
  //       ...formData,
  //       billimage: {
  //         name: files[0].name,
  //         url: URL.createObjectURL(files[0]),
  //       },
  //     })
  //   }
  // }
  const { mutate, isError, status } = useMutation({ mutationFn: addproduct })

  // const handleSubmit = (event: any) => {
  //   event.preventDefault();

  //   mutate(formData);
  // };
  const handleSubmit = async (e: any) => {
    e.preventDefault()
    const formDataToSend = new FormData()

    // Append simple fields
    Object.keys(formData).forEach((key) => {
      if (key !== "imageUrl" && key !== "billimage") {
        formDataToSend.append(key, formData[key])
      }
    })

    // Append imageUrl files
    formData.imageUrl.forEach((image: any) => {
      formDataToSend.append("imageUrl", image.name)
    })

    // Append billimage file
    if (formData.billimage) {
      formDataToSend.append("billimage", formData.billimage.name)
    }

    // Logging for debugging purposes
    // for (let pair of formDataToSend.entries()) {
    //   console.log(pair[0], pair[1])
    // }

    // Assuming mutate is a function that handles the form submission
    mutate(formDataToSend)
  }
  console.log(formData)
  return (
    <Container>
      <Paper elevation={3} component={Box} p={4}>
        <Box
          sx={{
            display: "flex",
            alignItems: "center",
            mb: 2,
          }}
        >
          <PrecisionManufacturingIcon sx={{ fontSize: "35px", mr: 1 }} />
          <Typography variant="h5" fontWeight="bold">
            Add New Product
          </Typography>
        </Box>
        <form onSubmit={handleSubmit}>
          <Grid container spacing={2}>
            <Grid item xs={12} md={6}>
              <Paper elevation={3} sx={{ p: 2, borderRadius: "25px" }}>
                <Typography variant="h6" fontWeight="bold" mb={2}>
                  General Product
                </Typography>
                <FormControl fullWidth sx={{ mb: 2 }}>
                  <OutlinedInput
                    placeholder="Title"
                    name="title"
                    onChange={handleChange}
                  />
                  <MyFormHelperText />
                </FormControl>
                <FormControl fullWidth sx={{ mb: 2 }}>
                  <OutlinedInput
                    placeholder="Description"
                    multiline
                    name="content"
                    rows={isSmallScreen ? 3 : 5}
                    onChange={handleChange}
                  />
                  <MyFormHelperText />
                </FormControl>

                <Typography variant="h6" fontWeight="bold" mb={2}>
                  Purchasing Information
                </Typography>
                <Grid container spacing={2}>
                  <Grid item xs={12} sm={6}>
                    <FormControl fullWidth sx={{ mb: 2 }}>
                      <OutlinedInput
                        placeholder="Brand"
                        name="brand"
                        onChange={handleChange}
                      />
                      <MyFormHelperText />
                    </FormControl>
                  </Grid>
                  <Grid item xs={12} sm={6}>
                    <FormControl fullWidth sx={{ mb: 2 }}>
                      <OutlinedInput
                        placeholder="Price"
                        type="number"
                        name="price"
                        onChange={handleChange}
                      />
                      <MyFormHelperText />
                    </FormControl>
                  </Grid>
                  <Grid item xs={12} sm={6}>
                    <FormControl fullWidth sx={{ mb: 2 }}>
                      <OutlinedInput
                        placeholder="Original Price"
                        type="number"
                        name="original_price"
                        onChange={handleChange}
                      />
                      <MyFormHelperText />
                    </FormControl>
                  </Grid>
                  <Grid item xs={12} sm={6}>
                    <FormControl fullWidth sx={{ mb: 2 }}>
                      <TextField
                        type="date"
                        InputLabelProps={{ shrink: true }}
                      />
                      <MyFormHelperText />
                    </FormControl>
                  </Grid>
                </Grid>
              </Paper>
            </Grid>
            <Grid item xs={12} md={6}>
              <Paper elevation={3} sx={{ p: 2, borderRadius: "25px" }}>
                <Typography variant="h6" fontWeight="bold" mb={2}>
                  Upload Img
                </Typography>
                <Grid
                  sx={{
                    display: "flex",

                    // border: "2px solid blue",
                  }}
                  xs={12}
                  // md={6}
                  container
                >
                  <Grid item xs={12} md={6}>
                    {" "}
                    <Paper
                      sx={{
                        // border: "2px solid red",
                        width: "260px",
                        height: "270px",
                      }}
                      onClick={() => {
                        fileInputRef.current.click()
                      }}
                    >
                      <button>Upload File</button>
                      <input
                        name="imageUrl"
                        type="file"
                        ref={fileInputRef}
                        // style={{ display: "none" }}
                        multiple
                        onChange={handleChange}
                        style={file}
                      />
                      <UploadFileIcon />
                      <img
                        src={mainImg}
                        alt=""
                        style={{ width: "100%", height: "100%" }}
                        // width={"100%"}
                        // height={"100%"}
                      />
                    </Paper>
                  </Grid>
                  <Grid item xs={12} md={6}>
                    {" "}
                    <Box
                      sx={{
                        // border: "2px solid yellow",

                        margin: "auto",
                        justifyItems: "center",
                      }}
                    >
                      <Box
                        sx={{
                          display: { xs: "flex", sm: "flex", md: "block" },
                          justifyContent: "center",

                          ml: { xs: 0, sm: 0, md: 4 },
                          mt: { xs: 2, sm: 2, md: 4 },
                        }}
                      >
                        {formData.imageUrl.map((img: any, i: any) => {
                          return (
                            <>
                              <Paper
                                sx={{
                                  width: "50px",
                                  height: "50px",
                                  m: 1,
                                }}
                                key={i}
                                onClick={() => {
                                  setMainImg(img.url)
                                }}
                              >
                                <img
                                  src={img.url}
                                  alt=""
                                  width={"100%"}
                                  height={"100%"}
                                />
                              </Paper>
                            </>
                          )
                        })}
                      </Box>
                    </Box>
                  </Grid>
                </Grid>
                <Typography variant="h6" fontWeight="bold" mb={2}>
                  Bill Img
                </Typography>
                <Box
                  sx={{
                    display: "flex",
                    justifyContent: "center",
                  }}
                >
                  <Paper
                    sx={{
                      width: "260px",
                      height: "250px",
                      border: "2px solid black",
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
                      style={file}
                    />
                    <UploadFileIcon />
                    <img src={formData.billimage.url} alt="" />
                  </Paper>
                </Box>
              </Paper>
            </Grid>
          </Grid>
          <input type="submit"></input>
        </form>
      </Paper>
    </Container>
  )
}

const file = {
  display: "none",
  width: "100px",
  height: "100px",
}
export default ProductForm
