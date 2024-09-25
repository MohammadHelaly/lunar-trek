import { Routes } from "@/lib/router";
import { useState, useEffect } from "react";
import { useLocation } from "react-router-dom";
import { motion, useScroll } from "framer-motion";
import Container from "@/components/container";
import NavLinks from "@/components/nav-links";
import NavDrawer from "@/components/nav-drawer";
import { HamburgerMenu } from "@/assets/icons";

const navBackgroundVariants = {
  initial: {
    clipPath: "polygon(0 0, 0 0, 0 100%, 0 100%)",
  },
  animate: {
    clipPath: "polygon(0 0, 100% 0, 100% 100%, 0 100%)",
  },
};

const navParentVariants = {
  initial: {
    opacity: 0,
  },
  animate: { opacity: 1 },
};

const navChildVariants = {
  initial: {
    opacity: 0,
  },
  animate: {
    opacity: 1,
  },
};

const backgroundTransition = {
  type: "tween",
  duration: 0.4,
};

const contentTransition = {
  type: "tween",
  duration: 0.4,
  staggerChildren: 0.2,
};

const viewport = {
  once: true,
  amount: "some" as const,
};

const NavBar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [animate, setAnimate] = useState(false);
  const { pathname } = useLocation();
  const { scrollY } = useScroll();

  const navBarBackground =
    pathname === Routes.GLOBE_EXPLORATION ? "max-lg:backdrop-blur-sm" : "";

  useEffect(() => {
    const unsubscribe = scrollY.on("change", (latest) => {
      setAnimate(latest > 100 && pathname !== Routes.GLOBE_EXPLORATION);
    });
    return () => unsubscribe();
  }, [scrollY, pathname]);

  useEffect(() => {
    setIsOpen(false);
  }, [pathname]);

  const toggleDrawer = () => {
    setIsOpen((previous) => !previous);
  };

  return (
    <header className="fixed top-0 z-50 w-full bg-transparent">
      <motion.div
        variants={navBackgroundVariants}
        transition={backgroundTransition}
        initial="initial"
        animate={animate ? "animate" : "initial"}
        className="absolute inset-0 left-0 top-0 bg-blue"
      />
      <div className="relative w-full py-2 lg:py-3">
        <Container>
          <motion.div
            variants={navParentVariants}
            transition={contentTransition}
            viewport={viewport}
            initial="initial"
            whileInView="animate"
            className="flex w-full items-center gap-2 lg:justify-end"
          >
            <motion.nav
              variants={navChildVariants}
              transition={contentTransition}
            >
              <ul className="hidden lg:flex">
                <NavLinks />
              </ul>
              <button
                className={
                  "pointer-events-auto z-50 flex h-10 w-14 items-center justify-center border border-muted bg-transparent px-3 shadow-none focus:outline-none lg:hidden " +
                  navBarBackground
                }
                type="button"
                aria-label="Toggle navigation"
                onClick={toggleDrawer}
              >
                <HamburgerMenu className="h-full w-full fill-muted brightness-200" />
              </button>
            </motion.nav>
          </motion.div>
        </Container>
        <NavDrawer
          open={isOpen}
          onOpenChange={setIsOpen}
          background={navBarBackground}
          animate={animate}
        />
      </div>
    </header>
  );
};

export default NavBar;
