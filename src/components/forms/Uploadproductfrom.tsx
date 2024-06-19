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

const Uploadproductfrom = ({ handleChange }: any) => {
  const theme = useTheme()
  const isSmallScreen = useMediaQuery(theme.breakpoints.down("sm"))

  return (
    <>
      <Grid item xs={12} md={12}>
        <Typography variant="h6" fontWeight="bold" mb={2}>
          General Product
        </Typography>
        <FormControl fullWidth sx={{ mb: 2 }}>
          <OutlinedInput
            placeholder="Title"
            name="title"
            onChange={handleChange}
          />
        </FormControl>
        <FormControl fullWidth sx={{ mb: 2 }}>
          <OutlinedInput
            placeholder="Description"
            multiline
            name="content"
            rows={isSmallScreen ? 3 : 5}
            onChange={handleChange}
          />
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
            </FormControl>
          </Grid>
          <Grid item xs={12} sm={6}>
            <FormControl fullWidth sx={{ mb: 2 }}>
              <TextField
                name="usage"
                type="date"
                InputLabelProps={{ shrink: true }}
                inputProps={{
                  max: new Date().toISOString().split("T")[0],
                }}
                onChange={handleChange}
              />
            </FormControl>
          </Grid>
        </Grid>
      </Grid>
    </>
  )
}

export default Uploadproductfrom
