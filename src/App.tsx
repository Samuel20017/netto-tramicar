import "./App.css";
import { Route, Routes, useLocation } from "react-router-dom";

import { Home } from "@pages/home";
import { AppRoutes } from "@config/appRoutes";

function App() {
  const location = useLocation();
  return (
    <>
      {/* Main Section of Routes */}
      <Routes location={location}>
        <Route path={AppRoutes.home} element={<Home />} />
      </Routes>
    </>
  );
}

export default App;
