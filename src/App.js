import React from "react";
import Home from './Pages/Home';
import { Route, Routes } from "react-router-dom";
import Login from './Pages/Login'
import Signup from './Pages/Signup'
import { useEffect,useContext } from "react";
import { AuthContext } from "./store/Context";
import { Firebase } from "./firebase/config";
import { onAuthStateChanged } from "firebase/auth";
import { Auth } from "./firebase/config";
import Create from "./Pages/Create"
import ViewPosts from "./Pages/ViewPost"
import Post from "./store/PostContext";


function App() {
  const {users,setuser}=useContext(AuthContext)
  useEffect(() => {
    const unsubscribe = onAuthStateChanged(Auth, (user) => {
      if (user) {
        // User is signed in.
        console.log("User is signed in:", user.displayName);
        setuser(user)

      } else {
        // User is signed out.
        console.log("User is signed out");
      }
    });

    // Cleanup the listener when the component unmounts.
    return () => unsubscribe();
  }, []);
  
    


  return (
    <div>
      <Post>
      <Routes>
        <Route path="/signup" element={<Signup></Signup>}></Route>
        <Route path="/" element={<Home></Home>}></Route>
        <Route path="/login" element={<Login></Login>}></Route>
        <Route path="/create" element={<Create></Create>}></Route>
        <Route path="/viewpost" element={<ViewPosts></ViewPosts>}></Route>




      </Routes>
      </Post>
    </div>
  );
}

export default App;
