/*This code snippet is a React application that sets up routing using React Router. Here is a
breakdown of what the code is doing: */
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { Suspense, lazy } from "react";
import ProtectRoute from "./Components/Styles/auth/ProtectRout.jsx";
import LayOutLoader from "./Components/LayOut/Loaders.jsx";
const Home = lazy(() => import("./pages/Home"));
//? This called daynemic import for routng as in browser as it get loads it loads up all the routes and file but we want if user is hitting the home route then he will get only the home route.

const Login = lazy(() => import("./pages/Login.jsx"));
const Chat = lazy(() => import("./pages/Chat.jsx"));
const Groups = lazy(() => import("./pages/Groups.jsx"));
const NotFound = lazy(() => import("./pages/NotFound.jsx"));
const AdminLogin = lazy(() => import("./pages/admin/AdminLogin.jsx"));
const DashBoard = lazy(() => import("./pages/admin/DashBoard.jsx"));
const UserManagement = lazy(() => import("./pages/admin/UserManagement.jsx"));
const ChatManagement = lazy(() => import("./pages/admin/ChatManagement.jsx"));
const MessageManagement = lazy(() =>
  import("./pages/admin/MessageManagement.jsx")
);

//! ---------------------Import Statments------------------------------------

let user = true;
function App() {
  return (
    <>
      <BrowserRouter fallback={<LayOutLoader />}>
        <Suspense>
          <Routes>
            {
              //* if user is not logged in he will redirect to the login page otherwise can access to other.
            }
            <Route element={<ProtectRoute user={user} />}>
              <Route path="/" element={<Home />} />
              <Route path="/chat/:chatId" element={<Chat />} />
              <Route path="/groups" element={<Groups />} />
            </Route>

            <Route
              path="/Login"
              element={
                <ProtectRoute user={!user} redirct="/">
                  <Login />
                </ProtectRoute>
              }
            />
            <Route path="/admin" element={<AdminLogin />}></Route>
            <Route path="/admin/dashboard" element={<DashBoard />}></Route>
            <Route path="/admin/user" element={<UserManagement />}></Route>
            <Route
              path="/admin/messages"
              element={<MessageManagement />}
            ></Route>
            <Route path="/admin/chat" element={<ChatManagement />}></Route>
            <Route path="*" element={<NotFound />} />
          </Routes>
        </Suspense>
      </BrowserRouter>
    </>
  );
}

export default App;
//* Using the Suspence tag for the default loading animation
