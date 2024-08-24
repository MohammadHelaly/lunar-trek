import ParallelsAndMeridiansMarkers from "@/components/parallels-and-meridians-markers";
import SeasAndOceansMarkers from "@/components/seas-and-oceans-markers";
import CratersAndMountainsMarkers from "@/components/craters-and-mountains-markers";
import LandingSitesMarkers from "@/components/landing-sites-markers";
import SelectedMoonquakeMarker from "@/components/selected-moonquake-marker";
import TimeSeriesMoonquakeMarkers from "@/components/time-series-moonquake-markers";

const ExplorationMarkers = () => {
  return (
    <>
      <ParallelsAndMeridiansMarkers />
      <SeasAndOceansMarkers />
      <CratersAndMountainsMarkers />
      <LandingSitesMarkers />
      <SelectedMoonquakeMarker />
      <TimeSeriesMoonquakeMarkers />
    </>
  );
};

export default ExplorationMarkers;
