import axios from "axios";

export const fetchUpcomingRacing = () =>
  axios({
    // Use GET method to fetch data
    method: "GET",
    url: "https://www.betright.com.au/api/racing/todaysracing",
  });
