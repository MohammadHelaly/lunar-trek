import { AnimatePresence } from "framer-motion";
import PointOfInterest from "@/components/point-of-interest";
import { useTypedSelector } from "@/lib/hooks/typed-redux-hooks";
import { landingSitesData } from "@/data";

const LandingSitesMarkers = () => {
  const viewLandingSites = useTypedSelector((state) => state.data.landingSites);

  return (
    <AnimatePresence>
      {viewLandingSites &&
        landingSitesData.map((landingSite) => (
          <PointOfInterest key={landingSite.name} {...landingSite} waypoint />
        ))}
    </AnimatePresence>
  );
};

export default LandingSitesMarkers;
