import Navbar from "@/scenes/navbar";
import { useState } from "react";

function App() {
  const [selectedPage, setSelectedPage] = useState<string>("home");
  return (
    <>
      <div className=" bg-gray-20">app</div>
      <Navbar
        selectedPage={selectedPage}
        setSelectedPage={setSelectedPage}></Navbar>
    </>
  );
}

export default App;
