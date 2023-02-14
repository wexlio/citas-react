import React from "react";
import {
  Box,
  Button,
  Card,
  CardContent,
  CardMedia,
  FormControl,
  Grid,
  Input,
  InputAdornment,
  InputLabel,
  MenuItem,
  Stack,
  TextField,
  Typography,
} from "@mui/material";
import WhatsAppIcon from "@mui/icons-material/WhatsApp";
import VisibilityIcon from "@mui/icons-material/Visibility";

export default function Login() {
  return (
    <Box>
      <Stack
        style={{
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          height: "100vh",
          overflow: "hidden",
        }}
        direction="row"
        spacing={2}
      >
        <Box sx={{ maxWidth: "700px" }}>
          <Card>
            <CardMedia
              component="img"
              height="100%"
              sx={{
                width: "900px",
                objectFit: "cover",
                textAling: "center",
                objectPosition: "bottom",
              }}
              image="http://citasvesalio.com.pe/static/images/img/imagen1.jpg"
              alt="Clinica Vesalio"
            />
          </Card>
        </Box>
        <Stack
          spacing={3}
          style={{
            width: "100%",
            display: "flex",
            flexDirection: "column",
            justifyContent: "center",
            alignItems: "center",
            position: "relative",
            zIndex: "11",
          }}
        >
          <Card
            style={{ width: "80vh", borderRadius: "16px", padding: "20px" }}
          >
            <CardContent>
              <Box
                sx={{
                  display: "flex",
                  alignItems: "center",
                  flexDirection: "column",
                  justifyContent: "center",
                }}
              >
                <CardMedia
                  component="img"
                  height="100%"
                  sx={{
                    width: "300px",
                    objectFit: "cover",
                    textAling: "center",
                  }}
                  image="http://citasvesalio.com.pe/static/images/img/logoLogin.png"
                  alt="Clinica Vesalio"
                />
                <Box
                  sx={{
                    display: "flex",
                    margin: "10px 0 30px 0",
                  }}
                >
                  <Typography>El sitio que conecta</Typography>

                  <Typography
                    style={{
                      marginLeft: "5px",
                      color: "#008000",
                    }}
                  >
                    con tu salud
                  </Typography>
                </Box>
              </Box>
              <Grid container spacing={3}>
                <Grid item xs={4}>
                  <FormControl fullWidth>
                    <TextField
                      id="outlined-select-currency"
                      select
                      label="Tipo de acceso"
                      defaultValue="EUR"
                      sx={{
                        "& label": { paddingLeft: (theme) => theme.spacing(2) },
                        "& input": {
                          paddingLeft: (theme) => theme.spacing(3.5),
                        },
                        "& fieldset": {
                          paddingLeft: (theme) => theme.spacing(2.5),
                          borderRadius: "12px",
                        },
                      }}
                      InputProps={{ sx: { height: 50 } }}
                    >
                      <MenuItem value={<WhatsAppIcon />}>
                        <Box
                          sx={{
                            display: "flex",
                            justifyContent: "center",
                            alignItems: "center",
                          }}
                        >
                          <WhatsAppIcon
                            style={{
                              textAling: "center",
                              color: "#3f6",
                              fontWeight: "500",
                            }}
                            fontSize="medium"
                          />
                          <Typography
                            style={{
                              textAling: "center",
                              color: "#223354",
                              fontWeight: "600",
                              fontSize: "14px",
                              marginLeft: "5px",
                            }}
                          >
                            {" "}
                            Whastapp
                          </Typography>
                        </Box>
                      </MenuItem>
                    </TextField>
                  </FormControl>
                </Grid>
                <Grid item xs={8}>
                  <FormControl fullWidth>
                    <TextField
                      label="Usuario"
                      variant="outlined"
                      InputProps={{ sx: { height: 50 } }}
                      sx={{
                        "& label": { paddingLeft: (theme) => theme.spacing(2) },
                        "& input": {
                          paddingLeft: (theme) => theme.spacing(3.5),
                        },
                        "& fieldset": {
                          paddingLeft: (theme) => theme.spacing(2.5),
                          borderRadius: "12px",
                        },
                      }}
                      size="medium"
                    />
                  </FormControl>
                </Grid>
              </Grid>
            </CardContent>
            <CardContent>
              <FormControl fullWidth>
                  <TextField
                    sx={{
                      "& label": { paddingLeft: (theme) => theme.spacing(2) },
                      "& input": { paddingLeft: (theme) => theme.spacing(3.5) },
                      "& fieldset": {
                        paddingLeft: (theme) => theme.spacing(2.5),
                        borderRadius: "12px",
                      },
                    }}
                    name="password"
                    label="Contraseña"
                    InputProps={{ sx: { height: 50 } }}
                  ></TextField>
                  {/* <VisibilityIcon /> */}
                <Box>
                  <Typography
                    style={{
                      textAling: "center",
                      color: "#5569ff",
                      fontWeight: "500",
                      marginLeft: "65%",
                    }}
                  >
                    Recuperar Contraseña
                  </Typography>
                </Box>
                <Box sx={{ marginTop: "30px" }}>
                  <Button
                    style={{
                      borderRadius: 10,
                      backgroundColor: "#5569ff",
                      padding: "11px",
                    }}
                    variant="contained"
                    fullWidth
                  >
                    Ingresar
                  </Button>
                </Box>
                <Box sx={{ marginTop: "20px", display: "flex" }}>
                  <Typography
                    style={{
                      color: "#223354",
                      fontWeight: "500",
                    }}
                  >
                    ¿Todavía no tienes una cuenta?
                  </Typography>
                  <Typography
                    style={{
                      color: "#5569ff",
                      fontWeight: "500",
                      marginLeft: "6px",
                    }}
                  >
                    Registrate
                  </Typography>
                </Box>
              </FormControl>
            </CardContent>
          </Card>
        </Stack>
      </Stack>
    </Box>
  );
}
