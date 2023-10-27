import { useState } from "react";
import {
   RouterProvider,
   createBrowserRouter,
   createRoutesFromElements,
   Route,
} from "react-router-dom";

import "./App.css";
import Home from "./pages/Home/Home";

function App() {
   const router = createBrowserRouter(
      createRoutesFromElements(
         <>
            <Route path="" element={<Home />} />
         </>
      )
   );
   return <RouterProvider router={router} />;
}

export default App;
