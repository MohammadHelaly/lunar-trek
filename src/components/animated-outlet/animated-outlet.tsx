import React from "react";
import { useLocation, useOutlet } from "react-router-dom";
import { AnimatePresence } from "framer-motion";

const AnimatedOutlet = () => {
  const { pathname } = useLocation();
  const element = useOutlet();

  return (
    <AnimatePresence mode="wait">
      {element && React.cloneElement(element, { key: pathname })}
    </AnimatePresence>
  );
};

export default AnimatedOutlet;
