import React, { useEffect, useState } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./pages/Home/Home";
import Harness from "./pages/Harness/Harness";
import Greyhound from "./pages/Greyhound/Greyhound";
import Thoroughbred from "./pages/Thoroughbred/Thoroughbred";
import { fetchUpcomingRacing } from "./api";

function App() {
  // Use useState to set default value of GreyhoundData, HarnessData and ThoroughbredData with empty array
  const [greyHoundData, setGreyHoundData] = useState([]);
  const [harnessData, setHarnessData] = useState([]);
  const [thoroughbredData, setThoroughbredData] = useState([]);

  useEffect(() => {
    // Use useEffect to fetch data from API when the first time rendering (Equal to Component Didmount)
    fetchUpcomingRacing()
      .then((res) => {
        setGreyHoundData(res.data.Greyhound);
        setHarnessData(res.data.Harness);
        setThoroughbredData(res.data.Throughbred);
      })
      .catch((error) => {
        console.log(error);
      });
  }, []);

  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/greyhound" element={<Greyhound data={greyHoundData} />} />
        <Route path="/harness" element={<Harness data={harnessData} />} />
        <Route
          path="/thoroughbred"
          element={<Thoroughbred data={thoroughbredData} />}
        />
      </Routes>
    </Router>
  );
}

export default App;
