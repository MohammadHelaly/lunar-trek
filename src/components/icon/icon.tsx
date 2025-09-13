import { motion } from "framer-motion";

interface Props {
  link?: string;
  name?: string;
  download?: boolean;
  children: React.ReactNode;
}

const variants = {
  initial: {
    opacity: 1,
    y: 0,
  },
  animate: {
    opacity: 0.8,
    y: -4,
  },
};

const transition = {
  type: "tween",
  duration: 0.2,
};

const Icon = (props: Props) => {
  const { link, name, download, children } = props;

  return (
    <motion.span
      variants={variants}
      transition={transition}
      initial="initial"
      whileHover="animate"
      whileTap="animate"
    >
      {link ? (
        <motion.a
          href={link}
          target="_blank"
          download={download}
          rel="noopener noreferrer"
          aria-label={name}
        >
          {children}
        </motion.a>
      ) : (
        children
      )}
    </motion.span>
  );
};

export default Icon;
