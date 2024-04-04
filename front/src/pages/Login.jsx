import {
  Avatar,
  Button,
  Container,
  IconButton,
  Paper,
  Stack,
  TextField,
  Typography,
} from "@mui/material";
import { useState } from "react";
import CameraAltIcon from "@mui/icons-material/CameraAlt";
import { VisuallyHiddenInput } from "../Components/Styles/StyleComponents";
import Footer from "./Footer";
import { useFileHandler, useInputValidation } from "6pp";
import { usernameValidator } from "../utils/validators";
//!---------------------Import Statements-------------------------------------

export default function Login() {
  const [isLogin, setIsLogin] = useState(true);
  const toggleLogin = () => {
    //* Function to toggle login and register forms.
    setIsLogin(!isLogin);
  };
  const name = useInputValidation(""); //* From 6pp package at the place of useState.
  const bio = useInputValidation("");
  const password = useInputValidation("");
  const username = useInputValidation("", usernameValidator);
  const avatar = useFileHandler("single"); //* From 6pp package, to select file (image) from the user and preview it in avatar tag.

  const handleLogin = (e) => {
    e.preventDefault();
  };

  const handleSignUp = (e) => {
    e.preventDefault();
  };

  return (
    //? -----------Container Tag------------------------
    // The container tag is needed to wrap the whole page or components in the same container just like a div.
    <>
      <Container
        component={"main"}
        maxWidth="xs"
        sx={{
          height: "100vh",
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
        }}
      >
        <Paper
          elevation={3}
          sx={{
            //?---------------SX attribute-------------
            //* The sx is use to defining the custome CSS (Inline) directly to the component
            padding: 0,
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
          }}
        >
          {isLogin ? (
            <>
              <div className=" text-center bg-gradient-to-br from-purple-900 to-gray-900 rounded-sm p-6 shadow-lg">
                <Typography variant="h5">
                  <span className="text-white">Login</span>
                </Typography>
                <div className=" mt-8 text-white">
                  <form
                    style={{
                      width: "100%",
                    }}
                    onSubmit={handleLogin}
                  >
                    <TextField
                      required
                      margin="normal"
                      variant="outlined"
                      fullWidth
                      label="UserName"
                      value={username.value}
                      onChange={username.changeHandler}
                      placeholder="Enter User Name"
                      sx={{
                        input: {
                          color: "white",
                          borderColor: "white",
                        },
                        "& .MuiOutlinedInput-root": {
                          "& fieldset": {
                            borderColor: "#8C49A3",
                          },
                        },
                        "& .MuiOutlinedInput-root:hover fieldset": {
                          borderColor: "white",
                          color: "white",
                        },
                        "& .MuiOutlinedInput-root.Mui-focused fieldset": {
                          borderColor: "white",
                        },
                        "& .MuiInputLabel-root, & .MuiInputBase-input::placeholder":
                          {
                            color: "white",
                          },
                      }}
                    ></TextField>

                    <TextField
                      required
                      margin="normal"
                      variant="outlined"
                      type="password"
                      fullWidth
                      label="Password"
                      value={password.value}
                      onChange={password.change}
                      placeholder="Enter Password"
                      sx={{
                        input: {
                          color: "white",
                          borderColor: "white",
                        },
                        "& .MuiOutlinedInput-root": {
                          "& fieldset": {
                            borderColor: "#8C49A3",
                          },
                        },
                        "& .MuiOutlinedInput-root:hover fieldset": {
                          borderColor: "white",
                          color: "white",
                        },
                        "& .MuiOutlinedInput-root.Mui-focused fieldset": {
                          borderColor: "white",
                        },
                        "& .MuiInputLabel-root, & .MuiInputBase-input::placeholder":
                          {
                            color: "white",
                          },
                      }}
                      s
                    ></TextField>

                    <Button //*Login button
                      sx={{
                        marginTop: "1rem",
                      }}
                      variant="contained"
                      type="submit"
                      fullWidth
                    >
                      Login
                    </Button>
                    <Typography
                      variant="h5"
                      sx={{
                        marginTop: "1rem",
                      }}
                    >
                      OR
                    </Typography>

                    <Button //* Register Button
                      variant="text"
                      fullWidth
                      type="submit"
                      onClick={toggleLogin}
                    >
                      Sign up insted
                    </Button>
                  </form>
                </div>
                <Footer />
              </div>
            </>
          ) : (
            <>
              <div className=" text-center bg-gradient-to-br from-purple-900 to-gray-900 rounded-sm p-6 shadow-lg">
                <Typography variant="h5">
                  <span className="text-white">SignUp</span>
                </Typography>
                <div className=" mt-8 text-white">
                  <form
                    style={{
                      width: "100%",
                      marginTop: "1rem",
                    }}
                    onSubmit={handleSignUp}
                  >
                    <Stack
                      sx={{
                        position: "relative",
                        width: "10rem",
                        margin: "auto",
                      }}
                    >
                      <Avatar
                        sx={{
                          width: "10rem",
                          height: "10rem",
                          objectFit: "contain",
                        }}
                        src={avatar.preview} //* To make the selected file visible
                      />
                      <IconButton
                        sx={{
                          position: "absolute",
                          bottom: "0",
                          right: "0",
                          bgcolor: "rgba(255,255,255,0.5)",
                          "&:hover": {
                            color: "white", // Darken background color on hover
                          },
                        }}
                        s
                        component="label"
                      >
                        {/* To Create Buttons which contains only an icons */}
                        <>
                          <CameraAltIcon />
                          <VisuallyHiddenInput
                            type="file"
                            onChange={avatar.changeHandler}
                          />
                        </>
                      </IconButton>
                    </Stack>
                    {avatar.error && <Typography>{avatar.error}</Typography>}

                    <TextField
                      required
                      margin="normal"
                      variant="outlined"
                      fullWidth
                      label="UserName"
                      value={username.value}
                      onChange={username.changeHandler}
                      placeholder="Enter User Name"
                      sx={{
                        "& .MuiInputLabel-root, & .MuiInputBase-input::placeholder":
                          {
                            color: "white",
                          },
                      }}
                    ></TextField>

                    {username.error && (
                      <Typography variant="caption" color="error">
                        {username.error}
                      </Typography>
                    )}

                    <TextField
                      required
                      margin="normal"
                      variant="outlined"
                      fullWidth
                      label="Name"
                      value={name.value}
                      onChange={name.changeHandler}
                      placeholder="Enter Your Name"
                      sx={{
                        "& .MuiInputLabel-root, & .MuiInputBase-input::placeholder":
                          {
                            color: "white",
                          },
                      }}
                    ></TextField>
                    <TextField
                      required
                      margin="normal"
                      variant="outlined"
                      fullWidth
                      label="Bio"
                      value={bio.value}
                      onChange={bio.changeHandler}
                      placeholder="Enter Your Bio"
                      sx={{
                        "& .MuiInputLabel-root, & .MuiInputBase-input::placeholder":
                          {
                            color: "white",
                          },
                      }}
                    ></TextField>
                    <TextField
                      required
                      margin="normal"
                      variant="outlined"
                      type="password"
                      fullWidth
                      label="Password"
                      value={password.value}
                      onChange={password.changeHandler}
                      placeholder="Enter Password"
                      sx={{
                        "& .MuiInputLabel-root, & .MuiInputBase-input::placeholder":
                          {
                            color: "white",
                          },
                      }}
                    ></TextField>

                    <Button //*Login button
                      sx={{
                        marginTop: "1rem",
                      }}
                      variant="contained"
                      type="submit"
                      fullWidth
                    >
                      SignUp
                    </Button>
                    {
                      <Typography
                        variant="h5"
                        sx={{
                          marginTop: "1rem",
                        }}
                      >
                        OR
                      </Typography>
                    }
                    {
                      <Button //* Register Button
                        variant="text"
                        fullWidth
                        type="submit"
                        onClick={toggleLogin}
                      >
                        Login insted
                      </Button>
                    }
                  </form>
                </div>
                <Footer />
              </div>
            </>
          )}
        </Paper>
      </Container>
    </>
  );
}
