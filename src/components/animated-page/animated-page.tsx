import { motion } from "framer-motion";

interface Props {
  children: React.ReactNode;
}

const variants = {
  initial: {
    opacity: 0,
  },
  in: {
    opacity: 1,
  },
  out: {
    opacity: 0,
  },
};

const transition = {
  type: "tween",
  ease: "anticipate",
  duration: 1,
};

const AnimatedPage = (props: Props) => {
  const { children } = props;

  return (
    <motion.div
      variants={variants}
      transition={transition}
      initial="initial"
      animate="in"
      exit="out"
    >
      {children}
    </motion.div>
  );
};

export default AnimatedPage;
