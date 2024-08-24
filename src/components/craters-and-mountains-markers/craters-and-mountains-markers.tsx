import { AnimatePresence } from "framer-motion";
import PointOfInterest from "@/components/point-of-interest";
import { useTypedSelector } from "@/lib/hooks/typed-redux-hooks";
import { cratersAndMountainsData } from "@/data";

const CratersAndMountainsMarkers = () => {
  const viewCratersAndMountains = useTypedSelector(
    (state) => state.data.cratersAndMountains,
  );

  return (
    <AnimatePresence>
      {viewCratersAndMountains &&
        cratersAndMountainsData.map((craterOrMountain) => (
          <PointOfInterest key={craterOrMountain.name} {...craterOrMountain} />
        ))}
    </AnimatePresence>
  );
};

export default CratersAndMountainsMarkers;
