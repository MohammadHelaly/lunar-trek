import { motion } from "framer-motion";
import Container from "@/components/container";
import Icon from "@/components/icon";
import { GitHub } from "@/assets/icons";

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
  duration: 0.4,
  staggerChildren: 0.2,
};

const viewport = {
  once: true,
  amount: "all" as const,
};

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer id="footer" className="bg-blue py-12">
      <Container>
        <motion.div
          variants={variants}
          transition={transition}
          viewport={viewport}
          initial="initial"
          whileInView="animate"
          className="flex w-full flex-col items-center justify-center gap-4 lg:items-start"
        >
          <motion.div
            variants={variants}
            transition={transition}
            className="flex w-full flex-col items-center justify-center gap-4 lg:flex-row lg:items-end lg:justify-between lg:px-2"
          >
            <div className="flex flex-col items-center gap-1.5 lg:items-start">
              <p className="text-center font-futura text-xs font-thin text-white sm:text-[13px] lg:text-start">
                Background image by{" "}
                <a
                  href="https://twitter.com/AJamesMcCarthy"
                  target="_blank"
                  rel="noreferrer"
                  className="text-white underline"
                >
                  Andrew McCarthy
                </a>
                .
              </p>
              <p className="text-center font-futura text-xs font-thin text-white sm:text-[13px] lg:text-start">
                Surface of 3D moon globe from{" "}
                <a
                  href="https://www.solarsystemscope.com/textures/"
                  target="_blank"
                  rel="noreferrer"
                  className="text-white underline"
                >
                  Solar System Scope
                </a>
                .
              </p>
              <p className="text-center font-futura text-xs font-thin text-white sm:text-[13px] lg:text-start">
                Topography of 3D moon globe from{" "}
                <a
                  href="https://astrogeology.usgs.gov/search/map/Moon/LMMP/LOLA-derived/Lunar_LRO_LOLA_ClrShade_Global_64ppd_BlueSteel"
                  target="_blank"
                  rel="noreferrer"
                  className="text-white underline"
                >
                  Moon LRO LOLA Shaded Relief (ESA)
                </a>
                .
              </p>
              <p className="text-center font-futura text-xs font-thin text-white sm:text-[13px] lg:text-start">
                Seismic data gathered from{" "}
                <a
                  href="https://pds-geosciences.wustl.edu/missions/apollo/seismic_event_catalog.htm"
                  target="_blank"
                  rel="noreferrer"
                  className="text-white underline"
                >
                  Apollo Seismic Event Catalog (NASA's PDS)
                </a>
                .
              </p>
              <p className="text-center font-futura text-xs font-thin text-white sm:text-[13px] lg:text-start">
                Virtual Experience developed with{" "}
                <a
                  href="https://www.unrealengine.com/en-US/"
                  target="_blank"
                  rel="noreferrer"
                  className="text-white underline"
                >
                  Unreal Engine 5
                </a>
                .
              </p>
              <p className="text-center font-futura text-xs font-thin text-white sm:text-[13px] lg:text-start">
                Developed with{" "}
                <a
                  href="https://reactjs.org/"
                  target="_blank"
                  rel="noreferrer"
                  className="text-white underline"
                >
                  React.js
                </a>
                .
              </p>
            </div>
            <Icon link="https://github.com/MohammadHelaly/lunar-trek">
              <GitHub className="size-8 rounded-sm fill-white" />
            </Icon>
          </motion.div>
          <hr className="h-px w-full border-none !bg-muted" />
          <motion.p
            variants={variants}
            transition={transition}
            className="text-center font-futura text-xs font-thin text-white sm:text-[13px] lg:px-2 lg:text-start"
          >
            &copy; {currentYear} Mohammad Helaly
          </motion.p>
        </motion.div>
      </Container>
    </footer>
  );
};

export default Footer;
