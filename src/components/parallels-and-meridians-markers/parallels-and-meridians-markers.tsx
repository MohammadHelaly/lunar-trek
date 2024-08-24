import { AnimatePresence } from "framer-motion";
import ParallelsAndMeridians from "@/components/parallels-and-meridians";
import PointOfInterest from "@/components/point-of-interest";
import { useTypedSelector } from "@/lib/hooks/typed-redux-hooks";
import { coordinatesData } from "@/data";

const ParallelsAndMeridiansMarkers = () => {
  const viewParallelsAndMeridians = useTypedSelector(
    (state) => state.data.parallelsAndMeridians,
  );

  return (
    <>
      {viewParallelsAndMeridians && <ParallelsAndMeridians />}
      <AnimatePresence>
        {viewParallelsAndMeridians &&
          coordinatesData.map((point, index) => (
            <PointOfInterest key={`${point.name}-${index}`} {...point} />
          ))}
      </AnimatePresence>
    </>
  );
};

export default ParallelsAndMeridiansMarkers;
