import React, { useState, useEffect, useMemo } from "react";
import { Vector3 } from "@react-three/fiber";
import { motion } from "framer-motion";
import { Html } from "@react-three/drei";
import { useTypedSelector } from "@/lib/hooks/typed-redux-hooks";
import { degreeToRadian } from "@/lib/helpers";

interface Props {
  latitude: number;
  longitude: number;
  showFarSide?: boolean;
  type: "scaling" | "rising";
  children?: React.ReactNode;
}

const risingVariants = {
  hidden: { opacity: 0, y: 10 },
  visible: { opacity: 1, y: 0 },
};

const scalingVariants = {
  hidden: { opacity: 0, transform: "scale(0)" },
  visible: { opacity: 1, transform: "scale(1)" },
};

const transition = { type: "tween", duration: 0.8 };

const HTML = motion(Html);

const Marker = (props: Props) => {
  const { latitude, longitude, showFarSide = false, type, children } = props;

  const cameraPosition = useTypedSelector((state) => state.data.cameraPosition);

  const [showMarker, setShowMarker] = useState(false);

  let variants = {};

  switch (type) {
    case "scaling":
      variants = scalingVariants;
      break;
    case "rising":
      variants = risingVariants;
      break;
  }

  const position: Vector3 = useMemo(
    () => [
      2 *
        Math.sin(Math.PI / 2 - degreeToRadian(latitude)) *
        Math.sin(degreeToRadian(longitude)),
      2 * Math.cos(Math.PI / 2 - degreeToRadian(latitude)),
      2 *
        Math.sin(Math.PI / 2 - degreeToRadian(latitude)) *
        Math.cos(degreeToRadian(longitude)),
    ],
    [latitude, longitude],
  );

  useEffect(() => {
    const distanceToPoint = Math.sqrt(
      Math.pow(cameraPosition[0] - position[0], 2) +
        Math.pow(cameraPosition[1] - position[1], 2) +
        Math.pow(cameraPosition[2] - position[2], 2),
    );

    const distanceFromOrigin = Math.sqrt(
      Math.pow(cameraPosition[0], 2) +
        Math.pow(cameraPosition[1], 2) +
        Math.pow(cameraPosition[2], 2),
    );

    const isNearSide = distanceToPoint < distanceFromOrigin * 0.95;

    setShowMarker(isNearSide || showFarSide);
  }, [cameraPosition, position, showFarSide]);

  return (
    <HTML
      position={position}
      distanceFactor={12}
      variants={variants}
      transition={transition}
      initial="hidden"
      animate={showMarker ? "visible" : "hidden"}
      exit="hidden"
      className="pointer-events-none select-none"
    >
      {children}
    </HTML>
  );
};

export default Marker;
