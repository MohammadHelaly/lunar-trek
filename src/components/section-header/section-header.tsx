import { motion } from "framer-motion";

interface Props {
  titleText: string;
  subtitleText?: string;
  textTheme?: "light" | "dark";
}

const parentVariants = {
  initial: {
    opacity: 0,
  },
  animate: {
    opacity: 1,
  },
};

const childVariants = {
  initial: {
    opacity: 0,
  },
  animate: {
    opacity: 1,
  },
};

const transition = {
  type: "tween",
  duration: 0.4,
  staggerChildren: 0.2,
};

const viewport = {
  once: true,
  amount: "all" as const,
};

const SectionHeader = (props: Props) => {
  const { titleText, subtitleText, textTheme = "dark" } = props;

  const textVariant = textTheme === "light" ? "text-white" : "text-blue";

  const titleClasses = `${textVariant} text-[calc(1.375rem_+_1.5vw)] leading-[1.2] xl:text-[2.5rem] font-futura font-light text-start`;

  const subtitleClasses = `${textVariant} font-light font-futura text-start text-xl`;

  return (
    <motion.div
      variants={parentVariants}
      transition={transition}
      viewport={viewport}
      initial="initial"
      whileInView="animate"
      className="flex w-full flex-col items-start justify-center gap-2 px-9"
    >
      <motion.h2
        variants={childVariants}
        transition={transition}
        className={titleClasses}
      >
        {titleText}
      </motion.h2>
      {subtitleText && (
        <motion.p
          variants={childVariants}
          transition={transition}
          className={subtitleClasses}
        >
          {subtitleText}
        </motion.p>
      )}
    </motion.div>
  );
};

export default SectionHeader;
