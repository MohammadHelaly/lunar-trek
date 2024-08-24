import { motion } from "framer-motion";

interface Props {
  children: React.ReactNode;
}

const pageVariants = {
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

const pageTransition = {
  type: "tween",
  ease: "anticipate",
  duration: 1,
};

const AnimatedPage = (props: Props) => {
  const { children } = props;

  return (
    <motion.div
      variants={pageVariants}
      transition={pageTransition}
      initial="initial"
      animate="in"
      exit="out"
    >
      {children}
    </motion.div>
  );
};

export default AnimatedPage;
