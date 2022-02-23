import React from "react";
import moment from "moment";
import Card from "../Card/Card";
import { CardGroupWrapper } from "./styles/raceCardGroup";

const RaceCardGroup = ({ data }) => {
  return (
    <CardGroupWrapper>
      {data.slice(0, 5).map((item) => {
        // map each item in the data list and format the Start time
        const formattedStartTime = moment(item.Race1.AdvertisedStartTime)
          .toDate()
          .toLocaleTimeString()
          .slice(0, 5);
          
        return (
          <Card
            key={item.VenueId}
            venueName={item.Venue}
            raceNumber={item.Race1.RaceNumber}
            startTime={formattedStartTime}
          />
        );
      })}
    </CardGroupWrapper>
  );
};

export default RaceCardGroup;
