import { AnimatePresence } from "framer-motion";
import PointOfInterest from "@/components/point-of-interest";
import { useTypedSelector } from "@/lib/hooks/typed-redux-hooks";
import { seasAndOceansData } from "@/data";

const SeasAndOceansMarkers = () => {
  const viewSeasAndOceans = useTypedSelector(
    (state) => state.data.seasAndOceans,
  );

  return (
    <AnimatePresence>
      {viewSeasAndOceans &&
        seasAndOceansData.map((sea) => (
          <PointOfInterest key={sea.name} {...sea} />
        ))}
    </AnimatePresence>
  );
};

export default SeasAndOceansMarkers;
