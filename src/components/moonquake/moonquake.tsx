import { motion } from "framer-motion";
import Marker from "@/components/marker";

interface SelectedMoonQuakeProps {
  latitude: number;
  longitude: number;
  type?: never;
  selected: true;
}

interface TimeSeriesMoonQuakeProps {
  latitude: number;
  longitude: number;
  type:
    | "Shallow Moonquake"
    | "Deep Moonquake"
    | "Meteorite Impact"
    | "Artificial Impact";
  selected?: false;
}

type Props = SelectedMoonQuakeProps | TimeSeriesMoonQuakeProps;

const animation = {
  transform: ["scale(0)", "scale(0.1)", "scale(0.8)", "scale(1)"],
  opacity: [0, 1, 1, 0],
};

const transition = {
  type: "tween",
  times: [0, 0.1, 0.8, 1],
  repeat: Infinity,
};

const Moonquake = (props: Props) => {
  const { latitude, longitude, type, selected = false } = props;

  let moonquakeClasses = "absolute rounded-full border bg-transparent";
  let duration = 1;

  if (selected) {
    moonquakeClasses += " -left-3 -top-3 size-6 border-white";
  }

  switch (type) {
    case "Shallow Moonquake":
      moonquakeClasses += " -left-3 -top-3 size-6 border-yellow";
      duration = 0.8;
      break;
    case "Deep Moonquake":
      moonquakeClasses += " -left-4 -top-4 size-8 border-purple";
      duration = 1.6;
      break;
    case "Meteorite Impact":
      moonquakeClasses += " -left-2 -top-2 size-4 border-green";
      duration = 0.4;
      break;
    case "Artificial Impact":
      moonquakeClasses += " -left-1 -top-1 size-2 border-cyan";
      duration = 0.2;
      break;
  }

  const moonquakeTransition = { ...transition, duration };

  return (
    <Marker
      latitude={latitude}
      longitude={longitude}
      type="scaling"
      showFarSide={selected}
    >
      <motion.div
        transition={moonquakeTransition}
        animate={animation}
        className={moonquakeClasses}
      />
    </Marker>
  );
};

export default Moonquake;
