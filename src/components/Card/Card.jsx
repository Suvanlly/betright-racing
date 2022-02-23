import React from "react"
import { CardWrapper, CardContent } from "./styles/card";

const Card = ({venueName, raceNumber, startTime}) => (
    <CardWrapper>
      <CardContent>
        Venue Name: {venueName}
      </CardContent>
      <CardContent>
        Race Number: {raceNumber}
      </CardContent>
      <CardContent>
        Start Time: {startTime}
      </CardContent>
    </CardWrapper>
  )

export default Card;