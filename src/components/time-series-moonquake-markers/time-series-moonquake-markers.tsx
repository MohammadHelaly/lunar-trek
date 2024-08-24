import { AnimatePresence } from "framer-motion";
import Moonquake from "@/components/moonquake";
import { useTypedSelector } from "@/lib/hooks/typed-redux-hooks";
import { nakamura1979MoonquakeData, lognonne2003MoonquakeData } from "@/data";

const completeMoonquakeData = [
  ...nakamura1979MoonquakeData,
  ...lognonne2003MoonquakeData,
];

const TimeSeriesMoonquakeMarkers = () => {
  const viewTimeSeriesData = useTypedSelector(
    (state) => state.data.timeSeriesData.on,
  );

  return (
    <AnimatePresence>
      {viewTimeSeriesData &&
        completeMoonquakeData.map((moonquake, index) => {
          return (
            <Moonquake
              key={`time-series-${moonquake.type[0].toLowerCase()}-${moonquake.year}-${moonquake.day}-${index}`}
              latitude={moonquake.latitude}
              longitude={moonquake.longitude}
              type={moonquake.type[1]}
            />
          );
        })}
    </AnimatePresence>
  );
};

export default TimeSeriesMoonquakeMarkers;
