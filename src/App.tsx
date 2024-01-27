import Navbar from "@/scenes/navbar";
import { useState } from "react";
import { SelectedPage } from "@/shared/types";
import Home from "./scenes/home";
import Benefits from "./scenes/benefits";

function App() {
  const [selectedPage, setSelectedPage] = useState<SelectedPage>(
    SelectedPage.Home
  );
  return (
    <>
      <Navbar
        selectedPage={selectedPage}
        setSelectedPage={setSelectedPage}></Navbar>
      <Home setSelectedPage={setSelectedPage}></Home>
      <Benefits setSelectedPage={setSelectedPage}></Benefits>
    </>
  );
}

export default App;
