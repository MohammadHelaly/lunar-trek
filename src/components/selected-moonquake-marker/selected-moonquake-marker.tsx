import { AnimatePresence } from "framer-motion";
import Moonquake from "@/components/moonquake";
import { useTypedSelector } from "@/lib/hooks/typed-redux-hooks";

const SelectedMoonquakeMarker = () => {
  const selectedMoonquake = useTypedSelector(
    (state) => state.data.selectedMoonquake,
  );

  return (
    <AnimatePresence>
      {selectedMoonquake && (
        <Moonquake
          key={`selected-${selectedMoonquake.type[0].toLowerCase()}-${selectedMoonquake.year}-${selectedMoonquake.day}-${selectedMoonquake.latitude}-${selectedMoonquake.longitude}`}
          latitude={selectedMoonquake.latitude}
          longitude={selectedMoonquake.longitude}
          selected
        />
      )}
    </AnimatePresence>
  );
};

export default SelectedMoonquakeMarker;
