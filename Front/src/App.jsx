// import { BrowserRouter, Routes, Route } from "react-router-dom";
// import Navbar from "./Componts/Navbar";
// import Footer from "./Componts/Footer";
// import Home from "./pages/Home";
// import Shop from "./pages/Shop";
// import Cart from "./pages/Card";
// import Login from "./pages/Login";
// import Register from "./pages/Register";

// function App() {
//   return (
//     <BrowserRouter>
//       <Navbar />
//       <Routes>
//         <Route path="/" element={<Home />} />
//         <Route path="/shop" element={<Shop />} />
//         <Route path="/cart" element={<Cart />} />
//         <Route path="/login" element={<Login />} />
//         <Route path="/register" element={<Register />} />
//       </Routes>
//        <Footer />
//     </BrowserRouter>
//   );
// }

// export default App;


// import { BrowserRouter, Routes, Route } from "react-router-dom";
// import { useState } from "react";
// import Navbar from "./Componts/Navbar";
// import Home from "./pages/Home";

// export default function App() {
//   const [cart, setCart] = useState([]);
//   const [history, setHistory] = useState([]);

//   return (
//     <BrowserRouter>
//       <Navbar cart={cart} history={history} />

//         <Routes>
//           <Route
//             path="/"
//             element={
//               <Home
//                 cart={cart}
//                 setCart={setCart}
//                 history={history}
//                 setHistory={setHistory}
//               />
//             }
//           />
//         </Routes>
     
//     </BrowserRouter>
//   );
// }


// import { BrowserRouter, Routes, Route } from "react-router-dom";
// import { useState } from "react";
// import Home from "./pages/Home";
// import Cart from "./pages/Cart";
// import Shop from "./pages/Shop";

// function App() {
//   const [cart, setCart] = useState(
//     JSON.parse(localStorage.getItem("cart")) || []
//   );

//   const [history, setHistory] = useState(
//     JSON.parse(localStorage.getItem("history")) || []
//   );

//   return (
//     <BrowserRouter>
//       <Routes>
//         <Route
//           path="/"
//           element={
//             <Home
//               cart={cart}
//               setCart={setCart}
//               history={history}
//               setHistory={setHistory}
//             />
//           }
//         />
//         <Route path="/cart" element={<Cart />} />
  
//   <Route
//   path="/shop"
//   element={<Shop />}
// />
//       </Routes>
      
//     </BrowserRouter>
//   );
// }

// export default App;








// import { BrowserRouter, Routes, Route } from "react-router-dom";
// import { useState } from "react";
// import Home from "./pages/Home";
// import Cart from "./pages/Cart";
// import Shop from "./pages/Shop";
// import Navbar from "./Components/Navbar";

// function App() {
//   const [cart, setCart] = useState(
//     JSON.parse(localStorage.getItem("cart")) || []
//   );

//   const [history, setHistory] = useState(
//     JSON.parse(localStorage.getItem("history")) || []
//   );

//   return (
//     <BrowserRouter>
//       {/* ✅ Navbar always visible */}
//       <Navbar cart={cart} history={history} />

//       <Routes>
//         <Route
//           path="/"
//           element={
//             <Home
//               cart={cart}
//               setCart={setCart}
//               history={history}
//               setHistory={setHistory}
//             />
//           }
//         />

//         <Route
//           path="/shop"
//           element={<Shop cart={cart} setCart={setCart} />}
//         />

//         <Route
//           path="/cart"
//           element={<Cart cart={cart} setCart={setCart} />}
//         />
//       </Routes>
//     </BrowserRouter>
//   );
// }

// export default App;

















// import { useState } from "react";
// import { BrowserRouter, Routes, Route } from "react-router-dom";
// import Home from "./pages/Home";
// import Shop from "./pages/Shop";
// import Navbar from "./Components/Navbar";
// import Cart from "./pages/Cart";

// function App() {
//   const [cart, setCart] = useState(JSON.parse(localStorage.getItem("cart")) || []);
//   const [history, setHistory] = useState(JSON.parse(localStorage.getItem("history")) || []);

// //   const [cart, setCart] = useState([]);
// // const [history, setHistory] = useState([]);
// // const [user, setUser] = useState(null);

//   return (
//     <BrowserRouter>
//       <Navbar cart={cart} history={history} />
//       <Routes>
//         <Route
//           path="/"
//           element={<Home cart={cart} setCart={setCart} history={history} setHistory={setHistory} />}
//         />
//         <Route
//           path="/shop"
//           element={<Shop cart={cart} setCart={setCart} history={history} setHistory={setHistory} />}
//         />
//         <Route
//           path="/cart"
//           element={<Cart cart={cart} setCart={setCart} />}
//         />
//       </Routes>
//     </BrowserRouter>
//   );
// }

// export default App;






















// last version
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { useState } from "react";
import { AuthProvider } from "./Context/AuthContext";

import Navbar from "./Components/Navbar";
import Home from "./pages/Home";
import Shop from "./pages/Shop";
import Cart from "./pages/Cart";
import History from "./pages/History";
import Login from "./pages/Login";
import Register from "./pages/Register";

function App() {
  const [cart, setCart] = useState(
    JSON.parse(localStorage.getItem("cart")) || []
  );

  return (
    <AuthProvider>
      <BrowserRouter>
        <Navbar cart={cart} />
        <Routes>
          <Route path="/" element={<Home cart={cart} setCart={setCart} />} />
          <Route path="/shop" element={<Shop cart={cart} setCart={setCart} />} />
          <Route path="/cart" element={<Cart cart={cart} setCart={setCart} />} />
          <Route path="/History" element={<History />} />
          <Route path="/login" element={<Login />} />
          <Route path="/register" element={<Register />} />
        </Routes>
      </BrowserRouter>
    </AuthProvider>
  );
}

export default App;
