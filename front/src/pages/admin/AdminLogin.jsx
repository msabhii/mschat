import { useInputValidation } from "6pp";
import { Button, Container, Paper, TextField, Typography } from "@mui/material";
import { Navigate } from "react-router-dom";
import Footer from "../Footer";

//! ---------------------Import Statments------------------------------------

const AdminLogin = () => {
  const secretKey = useInputValidation();
  const submitHandler = (e) => {
    e.preventDefault();
    console.log("submit");
  };

  const isAdmin = true;
  if (isAdmin) return <Navigate to="/admin/dashboard" />;
  return (
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
          <>
            <div className=" text-center bg-gradient-to-br from-purple-900 to-gray-900 rounded-sm p-6 shadow-lg">
              <Typography variant="h5">
                <span className="text-white">Admin Login</span>
              </Typography>
              <div className=" mt-8 text-white">
                <form
                  style={{
                    width: "100%",
                  }}
                  onSubmit={submitHandler}
                >
                  <TextField
                    required
                    margin="normal"
                    variant="outlined"
                    type="password"
                    fullWidth
                    label="Secret Key"
                    value={secretKey.value}
                    onChange={secretKey.change}
                    placeholder="Enter Key"
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
                </form>
              </div>
              <Footer />
            </div>
          </>
        </Paper>
      </Container>
    </>
  );
};

export default AdminLogin;
