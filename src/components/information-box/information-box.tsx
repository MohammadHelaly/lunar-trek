import { motion, AnimatePresence } from "framer-motion";
import { useTypedSelector } from "@/lib/hooks/typed-redux-hooks";
import {
  formatDate,
  formatTime,
  formatCoordinates,
  formatType,
  formatDepth,
  formatStations,
} from "@/lib/helpers";

const variants = {
  hidden: { opacity: 0, y: 40 },
  visible: { opacity: 1, y: 0 },
};

const transition = { type: "tween", duration: 0.8 };

const InformationBox = () => {
  const selectedMoonquake = useTypedSelector(
    (state) => state.data.selectedMoonquake,
  );

  const moonquakeType = selectedMoonquake
    ? formatType(selectedMoonquake.type)
    : "N/A";

  const moonquakeDate = selectedMoonquake
    ? formatDate(selectedMoonquake.year, selectedMoonquake.day)
    : "N/A";

  const moonquakeTime = selectedMoonquake
    ? formatTime(
        selectedMoonquake.hour,
        selectedMoonquake.minute,
        selectedMoonquake.second,
      )
    : "N/A";

  const moonquakeEpicentre = selectedMoonquake
    ? formatCoordinates(selectedMoonquake.latitude, selectedMoonquake.longitude)
    : "N/A";

  const moonquakeMagnitude =
    selectedMoonquake && "magnitude" in selectedMoonquake
      ? selectedMoonquake.magnitude
      : "N/A";

  const moonquakeDepth =
    selectedMoonquake &&
    "depth" in selectedMoonquake &&
    selectedMoonquake.depth !== undefined &&
    selectedMoonquake.depth > 0
      ? formatDepth(selectedMoonquake.depth)
      : "N/A";

  const moonquakeStations =
    selectedMoonquake &&
    "stations" in selectedMoonquake &&
    selectedMoonquake.stations.length > 0
      ? formatStations(selectedMoonquake.stations)
      : "N/A";

  return (
    <AnimatePresence>
      {selectedMoonquake && (
        <motion.div
          variants={variants}
          transition={transition}
          initial="hidden"
          animate="visible"
          exit="hidden"
          className="pointer-events-auto absolute right-0 top-0 flex h-fit w-[30%] flex-col border-2 border-gray bg-muted backdrop-blur-sm lg:w-[27%]"
        >
          <div className="flex w-full flex-col items-center px-1 pt-2 lg:gap-3.5 lg:px-4 lg:pb-3.5 lg:pt-6">
            <h2 className="w-full text-start font-futura text-sm font-light text-white lg:text-[2.5rem]">
              Seismic Event:
            </h2>
          </div>
          <hr className="mx-1 h-px border-none bg-gray/25 lg:mx-2" />
          <div className="flex w-full flex-col items-start gap-2 px-1 py-2 lg:gap-3 lg:px-4">
            <p className="text-start font-futura text-[0.475rem] font-light text-white lg:text-xl">
              Type: {moonquakeType}
            </p>
            <p className="text-start font-futura text-[0.475rem] font-light text-white lg:text-xl">
              Date of detection: {moonquakeDate}
            </p>
            <p className="text-start font-futura text-[0.475rem] font-light text-white lg:text-xl">
              Time of detection: {moonquakeTime}
            </p>
            <p className="text-start font-futura text-[0.475rem] font-light text-white lg:text-xl">
              Epicentre: {moonquakeEpicentre}
            </p>
            <p className="text-start font-futura text-[0.475rem] font-light text-white lg:text-xl">
              Magnitude: {moonquakeMagnitude}
            </p>
            <p className="text-start font-futura text-[0.475rem] font-light text-white lg:text-xl">
              Depth: {moonquakeDepth}
            </p>
            <p className="text-start font-futura text-[0.475rem] font-light text-white lg:text-xl">
              Detected by Apollo Site(s): {moonquakeStations}
            </p>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
};

export default InformationBox;
