import axios from "axios"

export const fetchUpcomingRacing = () => axios({
  // Set up headers as required
  method: 'GET',
  url: "https://www.betright.com.au/api/racing/todaysracing",
})
