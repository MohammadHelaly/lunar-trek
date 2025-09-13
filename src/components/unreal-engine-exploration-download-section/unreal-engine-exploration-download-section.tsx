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

const buttonVariants = {
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

const UnrealEngineExplorationDownloadSection = () => {
  return (
    <section
      id="unreal-engine-exploration-download"
      className="mb-10 overflow-x-hidden bg-white py-12 md:mb-20 lg:mb-28 xl:mb-32 2xl:mb-36"
    >
      <Container>
        <div className="flex flex-col items-center justify-center gap-12 pb-4">
          <SectionHeader
            textTheme="dark"
            titleText="Trek across the Moon's Surface"
          />
          <ContentPadding>
            <div className="flex w-full flex-col items-center justify-center gap-4">
              <motion.p
                variants={contentVariants}
                transition={transition}
                viewport={contentViewport}
                initial="initial"
                whileInView="animate"
                className="w-full text-start font-futura text-xl font-light text-blue"
              >
                Step into the extraordinary and delve into the moon's enigmatic
                beauty. As you wander the lunar expanse, embrace the awe of its
                vastness and exlpore its mysteries. Begin a new odyssey as you
                immerse yourself in a captivating experience that transports you
                to the wonders of Earth's celestial neighbor.
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
                  title="Lunar Trek - Third Person View"
                  autoPlay
                  muted
                  loop
                  playsInline
                  controls
                >
                  <source
                    src={
                      import.meta.env.BASE_URL +
                      "assets/images/lunar-trek-third-person-view.mp4"
                    }
                    type="video/mp4"
                  />
                </video>
              </motion.div>
              <hr className="h-px w-full border-none bg-muted" />
              <motion.div
                variants={buttonVariants}
                transition={transition}
                viewport={contentViewport}
                initial="initial"
                whileInView="animate"
                className="mx-auto w-full md:w-1/2"
              >
                <Button
                  text="Download and Try It Yourself"
                  strongText
                  link="https://drive.google.com/file/d/1KHxgiR-UJtHpS01MdU9-TFYcboxizkhd/view?usp=sharing"
                  newTab
                />
              </motion.div>
              <motion.p
                variants={videoVariants}
                transition={transition}
                viewport={contentViewport}
                initial="initial"
                whileInView="animate"
                className="text-center font-futura text-base font-normal text-blue"
              >
                **Disclamer: Due to resource limitations, Lunar Trek Unreal
                Engine 5 Virtual Experience could not be deployed to a web
                server. Executable files are available for download at this
                link. Due to security concerns with downloading files, the above
                videos are provided as demonstrations.
              </motion.p>
            </div>
          </ContentPadding>
        </div>
      </Container>
    </section>
  );
};

export default UnrealEngineExplorationDownloadSection;
