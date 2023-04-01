import { Routes, Route } from "react-router-dom"
import SignUpPage from "./Pages/SignUpPage"


function App() {
  return (

    <Routes>
       <Route path="/register" element={<SignUpPage/>} />
    </Routes>
  );
}

export default App;
