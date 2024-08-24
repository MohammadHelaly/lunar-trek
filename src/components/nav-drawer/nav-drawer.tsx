import { motion, AnimatePresence } from "framer-motion";
import * as Dialog from "@radix-ui/react-dialog";
import NavLinks from "@/components/nav-links";

interface Props {
  open: boolean;
  onOpenChange: (open: boolean) => void;
  background: string;
  animate: boolean;
}

const navBackgroundVariants = {
  initial: {
    clipPath: "polygon(0 0, 0 0, 0 100%, 0 100%)",
  },
  animate: {
    clipPath: "polygon(0 0, 100% 0, 100% 100%, 0 100%)",
  },
};

const drawerVariants = {
  hidden: {
    clipPath: "polygon(0 0, 100% 0, 100% 0, 0 0)",
  },
  visible: {
    clipPath: "polygon(0 0, 100% 0, 100% 100%, 0 100%)",
  },
};

const backgroundTransition = {
  type: "tween",
  duration: 0.4,
};

const contentTransition = {
  type: "tween",
  duration: 0.2,
};

const NavDrawer = (props: Props) => {
  const { open, onOpenChange, background, animate } = props;

  return (
    <Dialog.Root open={open} onOpenChange={onOpenChange}>
      <AnimatePresence>
        {open && (
          <Dialog.Content asChild forceMount>
            <motion.div
              initial="hidden"
              animate="visible"
              exit="hidden"
              variants={drawerVariants}
              transition={contentTransition}
              className={
                "fixed top-0 z-40 w-full bg-transparent pt-14 lg:hidden " +
                background
              }
            >
              <nav className="relative">
                <motion.div
                  variants={navBackgroundVariants}
                  transition={backgroundTransition}
                  initial={open && animate ? "animate" : "intial"}
                  animate={animate ? "animate" : "initial"}
                  className="absolute inset-0 left-0 top-0 bg-blue"
                />
                <ul className="flex flex-col items-center gap-2 p-3 pt-0">
                  <NavLinks />
                </ul>
              </nav>
            </motion.div>
          </Dialog.Content>
        )}
      </AnimatePresence>
    </Dialog.Root>
  );
};

export default NavDrawer;
