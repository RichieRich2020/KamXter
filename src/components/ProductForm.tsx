import React, { useContext, useState, useEffect } from "react"
import { useRef } from "react"
import {
  Button,
  Grid,
  Typography,
  Box,
  useTheme,
  LinearProgress,
} from "@mui/material"
import PrecisionManufacturingIcon from "@mui/icons-material/PrecisionManufacturing"
import { useQuery, useMutation } from "@tanstack/react-query"
import { addproduct } from "../axiosfile/datafetchfile"
import { useAuth } from "../customHooks/useAuth"
import Uploadproductfrom from "./forms/Uploadproductfrom"
import Modal from "@mui/material/Modal"
import Uploadproductimg from "./forms/Uploadproductimg"
import Uploadproductbill from "./forms/Uploadproductbill"
import { AuthContext } from "../context/AuthContext"
const style = {
  position: "absolute" as "absolute",
  top: "50%",
  left: "50%",
  transform: "translate(-50%, -50%)",
  // width: "5",
  bgcolor: "background.paper",
  border: "2px solid #000",
  boxShadow: 24,
  p: 4,
}

const ProductForm = () => {
  const { user }: any = useAuth()

  const { setOpenModal, openModal } = useContext(AuthContext)
  const handleOpen = () => setOpenModal(true)
  const handleClose = () => setOpenModal(false)
  console.log("Userin add product page", user?._id)
  const theme = useTheme()
  const [loading, setLoading] = useState(false)
  const [step, setStep] = useState(1)
  const [formData, setFormData]: any = useState({
    title: "",
    content: "",
    price: 0,
    address: "adfwefw",
    usage: 0,
    original_price: 0,
    brand: "",
    imageUrl: [],
    billimage: "",
  })

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
              file: files[i],
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
            file: files[0],
          },
        })
      }
    } else {
      if (name === "usage") {
        const inputDate = new Date(value)
        const currentDate = new Date()

        const timeDiff = Math.abs(currentDate.getTime() - inputDate.getTime())
        const usageDays = Math.ceil(timeDiff / (1000 * 3600 * 24))
        const years = Math.floor(usageDays / 365)
        const months = Math.floor((usageDays % 365) / 30)
        const days = usageDays % 30

        let usageString = ""
        if (years > 0) usageString += `${years} years `
        if (months > 0) usageString += `${months} months `
        if (days > 0) usageString += `${days} days`

        setFormData((prevState: any) => ({
          ...prevState,
          usage: usageString.trim(),
        }))
      } else {
        setFormData((prevState: any) => ({
          ...prevState,
          [name]: value,
        }))
      }
    }
  }

  const { mutate, isError, status } = useMutation({
    mutationFn: addproduct,
    onSuccess: () => {
      setFormData({
        title: "",
        content: "",
        price: 0,
        address: "adfwefw",
        usage: 0,
        original_price: 0,
        brand: "",
        imageUrl: [],
        billimage: "",
      })
      setStep(1)
      setOpenModal(false)
    },
    onError: () => {
      setLoading(false)
    },
    onMutate: () => {
      setLoading(true)
    },
  })

  const handleSubmit = async (e: any) => {
    e.preventDefault()
    const formDataToSend = new FormData()

    // Append simple fields
    Object.keys(formData).forEach((key) => {
      if (key !== "imageUrl" && key !== "billimage") {
        formDataToSend.append(key, formData[key])
      }
    })
    formDataToSend.append("seller", user._id)
    // Append imageUrl files
    formData.imageUrl.forEach((image: any) => {
      formDataToSend.append("imageUrl", image.file)
    })

    // Append billimage file
    if (formData.billimage) {
      formDataToSend.append("billimage", formData.billimage.file)
    }

    mutate(formDataToSend)
  }
  console.log(formData)
  const handleNext = () => {
    setStep((prevStep) => prevStep + 1)
  }
  const isStepValid = () => {
    const {
      title,
      content,
      brand,
      price,
      original_price,
      usage,
      imageUrl,
      billimage,
    } = formData

    if (step === 1) {
      return title && content && brand && price && original_price && usage
    } else if (step === 2) {
      return imageUrl && imageUrl.length > 0
    } else if (step === 3) {
      return billimage
    }
    return false
  }
  console.log("openmodal:::", openModal)
  return (
    <>
      {/* <Button onClick={handleOpen}>Open modal</Button> */}
      <Modal
        open={openModal}
        onClose={handleClose}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
        sx={{
          p: 3,
        }}
      >
        <Box sx={style}>
          {loading && <LinearProgress />}
          <PrecisionManufacturingIcon sx={{ fontSize: "35px", mr: 1 }} />
          <Typography variant="h5" fontWeight="bold">
            Add New Product
          </Typography>

          <form onSubmit={handleSubmit}>
            <Grid container spacing={2} sx={{ my: 3 }}>
              {step === 1 && <Uploadproductfrom handleChange={handleChange} />}
              {step === 2 && (
                <Uploadproductimg
                  handleChange={handleChange}
                  formData={formData}
                  mainImg={mainImg}
                  setMainImg={setMainImg}
                />
              )}
              {step === 3 && (
                <Uploadproductbill
                  handleChange={handleChange}
                  formData={formData}
                />
              )}
              {step < 3 && (
                <Button
                  onClick={handleNext}
                  disabled={!isStepValid() && !isStepValid()}
                >
                  Next
                </Button>
              )}
            </Grid>
            {step === 3 && (
              <input type="submit" value="Submit" disabled={!isStepValid()} />
            )}
          </form>
        </Box>
      </Modal>
    </>
  )
}

export default ProductForm
