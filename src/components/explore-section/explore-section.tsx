import { Routes } from "@/lib/router";
import { motion } from "framer-motion";
import Container from "@/components/container";
import SectionHeader from "@/components/section-header";
import ContentPadding from "@/components/content-padding";
import Button from "@/components/button";

const contentVariants = {
  initial: {
    opacity: 0,
    x: 40,
  },
  animate: {
    opacity: 1,
    x: 0,
  },
};

const linksVariants = {
  initial: {
    opacity: 0,
    x: -40,
  },
  animate: {
    opacity: 1,
    x: 0,
  },
};

const contentTransition = {
  type: "tween",
  duration: 0.4,
};

const linksTransition = {
  type: "tween",
  duration: 0.4,
  staggerChildren: 0.2,
};

const viewport = {
  once: true,
  amount: "all" as const,
};

const ExploreSection = () => {
  return (
    <section
      id="explore"
      className="mb-10 overflow-x-hidden bg-white py-12 md:mb-20 lg:mb-28 xl:mb-32 2xl:mb-36"
    >
      <Container>
        <div className="flex flex-col items-center justify-center gap-12">
          <SectionHeader titleText="Explore Luna" textTheme="dark" />
          <ContentPadding>
            <div className="flex w-full flex-col items-center justify-center gap-4">
              <motion.p
                variants={contentVariants}
                transition={contentTransition}
                viewport={viewport}
                initial="initial"
                whileInView="animate"
                className="w-full text-start font-futura text-xl font-light text-blue"
              >
                Take to the stars and unearth the secrets hidden under the
                surface of Earth's moon. Through the power of Unreal Engine 5
                and our own custom 3D globe of Luna, you can explore the moon's
                geological features and learn about the seismic events that
                shaped our moon as we know it today.
              </motion.p>
              <hr className="h-px w-full border-none bg-muted" />
              <motion.div
                variants={linksVariants}
                transition={linksTransition}
                viewport={viewport}
                initial="initial"
                whileInView="animate"
                className="mx-auto flex w-full flex-col gap-2 md:gap-4 lg:w-1/2 lg:py-4"
              >
                <motion.div
                  variants={linksVariants}
                  transition={linksTransition}
                  className="w-full"
                >
                  <Button
                    text="Explore a 3D Globe of Luna"
                    link={Routes.GLOBE_EXPLORATION}
                    strongText
                  />
                </motion.div>
                <motion.div
                  variants={linksVariants}
                  transition={linksTransition}
                  className="w-full"
                >
                  <Button
                    text="Explore Luna in Unreal Engine 5"
                    link={Routes.UNREAL_ENGINE_EXPLORATION}
                    strongText
                  />
                </motion.div>
              </motion.div>
            </div>
          </ContentPadding>
        </div>
      </Container>
    </section>
  );
};

export default ExploreSection;
