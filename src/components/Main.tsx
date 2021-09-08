import axios from "axios";

// hooks
import { useEffect, useState } from "react";

// components
import Menu from "./Menu";
import Results from "./Results";

// mui
import { makeStyles, Typography } from "@material-ui/core";
import { LatitudeAndLongitude, Result } from "types/LatitudeAndLongitude";

const API_KEY = process.env.REACT_APP_API_KEY;

const useStyles = makeStyles((theme) => ({
  container: {
    margin: "0px auto",
    paddingTop: "16px",
    [theme.breakpoints.up("sm")]: {
      maxWidth: "70%",
    },
    [theme.breakpoints.up("md")]: {
      maxWidth: "50%",
    },
  },
}));

const Main = () => {
  const classes = useStyles();
  const [locations, setLocations] = useState<LatitudeAndLongitude[]>([]);
  const [results, setResults] = useState<Result[]>([]);

  useEffect(() => {
    const getData = async (location: LatitudeAndLongitude) => {
      const response = await axios.get(
        `https://api.ipgeolocation.io/astronomy?apiKey=${API_KEY}&lat=${location.latitude}&long=${location.longitude}`
      );

      setResults((results: Result[]) => [
        ...results,
        {
          latitude: response.data.location.latitude,
          longitude: response.data.location.longitude,
          sunrise: response.data.sunrise,
          sunset: response.data.sunset,
        },
      ]);
    };

    if (locations.length) {
      setResults([]);
      locations.forEach((location: LatitudeAndLongitude) => {
        if (location.latitude && location.longitude) {
          getData(location);
        }
      });
    }
  }, [locations]);

  return (
    <div className={classes.container}>
      <Typography gutterBottom variant="h4">
        Sunset/Sunrise Calculator
      </Typography>

      <Typography variant="caption">
        This calculator can be used to calculate sunrise and sunset for any
        place on Earth by entering Latitude and Longitude either in decimal
        degrees (ie: 61.575590) or degrees/minutes/seconds (ie: 61:34:32).
      </Typography>

      <Menu setLocations={setLocations} />
      <Results results={results} />
    </div>
  );
};

export default Main;
