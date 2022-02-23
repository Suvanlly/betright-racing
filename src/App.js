import React, { useEffect, useState } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./pages/Home/Home";
import Harness from "./pages/Harness/Harness";
import Greyhound from "./pages/Greyhound/Greyhound";
import Thoroughbred from "./pages/Thoroughbred/Thoroughbred";
import { fetchUpcomingRacing } from "./api";

function App() {
  const [greyHoundData, setGreyHoundData] = useState([]);
  const [harnessData, setHarnessData] = useState([]);
  const [thoroughbredData, setThoroughbredData] = useState([]);

  useEffect(() => {
    fetchUpcomingRacing().then((res) => {
      setGreyHoundData(res.data.Greyhound);
      setHarnessData(res.data.Harness);
      setThoroughbredData(res.data.Throughbred);
    });
  }, []);
 
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/greyhound" element={<Greyhound data={greyHoundData} />} />
        <Route path="/harness" element={<Harness data={harnessData} />} />
        <Route path="/thoroughbred" element={<Thoroughbred data={thoroughbredData} />} />
      </Routes>
    </Router>
  );
}

export default App;
