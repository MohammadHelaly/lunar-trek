import { motion } from "framer-motion";
import Container from "@/components/container";

const variants = {
  initial: {
    opacity: 0,
  },
  animate: {
    opacity: 1,
  },
};

const transition = {
  type: "tween",
  duration: 1,
  delay: 0.8,
};

const viewport = {
  once: true,
  amount: "all" as const,
};

const HomeSection = () => {
  return (
    <section id="home" className="h-screen bg-transparent">
      <Container className="h-full">
        <div className="flex h-full w-full flex-col items-center justify-center">
          <motion.h1
            variants={variants}
            transition={transition}
            viewport={viewport}
            initial="initial"
            whileInView="animate"
            className="text-center font-futura text-[calc(1.625rem_+_4.5vw)] font-light leading-[1.2] text-white xl:text-[5rem]"
          >
            LUNAR TREK
          </motion.h1>
        </div>
      </Container>
    </section>
  );
};

export default HomeSection;
