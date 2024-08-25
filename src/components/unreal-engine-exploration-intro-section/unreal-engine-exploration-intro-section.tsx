import { motion } from "framer-motion";
import Container from "@/components/container";
import SectionHeader from "@/components/section-header";
import ContentPadding from "@/components/content-padding";

const contentVariants = {
  initial: {
    opacity: 0,
    x: -40,
  },
  animate: {
    opacity: 1,
    x: 0,
  },
};

const videoVariants = {
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
};

const contentViewport = {
  once: true,
  amount: "all" as const,
};

const videoViewport = {
  once: true,
  amount: "some" as const,
};

const UnrealEngineExplorationIntroSection = () => {
  return (
    <section
      id="unreal-engine-exploration-intro"
      className="mb-10 mt-28 overflow-x-hidden bg-blue py-12 md:mb-20 md:mt-56 lg:my-28 xl:my-32 2xl:my-36"
    >
      <Container>
        <div className="flex flex-col items-center justify-center gap-12 pb-4">
          <SectionHeader textTheme="light" titleText="Experience a Moonquake" />
          <ContentPadding>
            <div className="flex w-full flex-col items-center justify-center gap-4">
              <motion.p
                variants={contentVariants}
                transition={transition}
                viewport={contentViewport}
                initial="initial"
                whileInView="animate"
                className="w-full text-start font-futura text-xl font-light text-white"
              >
                Explore the moon's surface with Unreal Engine 5 and feel the
                thrill of a moonquake beneath your feet. Experience the lunar
                landscape's stark beauty and witness geological forces in
                action. Discover the moon's hidden secrets as you traverse its
                rugged terrain.
              </motion.p>
              <hr className="h-px w-full border-none bg-muted" />
              <motion.div
                variants={videoVariants}
                transition={transition}
                viewport={videoViewport}
                initial="initial"
                whileInView="animate"
                className="aspect-video w-full bg-black"
              >
                <video
                  className="h-full w-full object-contain"
                  title="Lunar Trek - First Person View"
                  autoPlay
                  muted
                  loop
                  playsInline
                  controls
                >
                  <source
                    src={
                      import.meta.env.BASE_URL +
                      "assets/images/lunar-trek-first-person-view.mp4"
                    }
                    type="video/mp4"
                  />
                </video>
              </motion.div>
            </div>
          </ContentPadding>
        </div>
      </Container>
    </section>
  );
};

export default UnrealEngineExplorationIntroSection;
