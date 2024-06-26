import Login from "./components/Login";
import UserContextProvider from "./context/UserContextProvider";
import Profile from "./components/Profile";

export default function App() {
  return (
    <UserContextProvider>
      <h1 className="">
        Hello world!
      </h1>
      <Login />
      <Profile />
    </UserContextProvider>
  )
}