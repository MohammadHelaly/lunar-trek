import { motion } from "framer-motion";
import Container from "@/components/container";
import ContentPadding from "@/components/content-padding";
import SectionHeader from "@/components/section-header";
import { LinkArrow } from "@/assets/icons";

const contentVariants = {
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
  delay: 0.4,
};

const viewport = {
  once: true,
  amount: "some" as const,
};

const AboutSection = () => {
  return (
    <section
      id="about"
      className="mb-10 bg-blue py-12 md:mb-20 lg:mb-28 xl:mb-32 2xl:mb-36"
    >
      <Container>
        <div className="flex flex-col items-center justify-center gap-12">
          <SectionHeader
            titleText="About Lunar Trek"
            subtitleText="Read about the history of lunar seismic events."
            textTheme="light"
          />
          <ContentPadding>
            <div className="flex w-full flex-col items-center justify-center gap-4">
              <motion.p
                variants={contentVariants}
                transition={transition}
                viewport={viewport}
                initial="initial"
                whileInView="animate"
                className="w-full text-start font-futura text-xl font-light text-white"
              >
                The Apollo missions, undertaken by NASA between 1969 and 1972,
                were a monumental achievement in human history. These missions
                not only marked the first successful human landings on the Moon
                but also provided invaluable scientific data that deepened our
                understanding of Earth's celestial neighbor. Among the many
                scientific experiments conducted during the Apollo missions, the
                recording of lunar seismic events stands out as a significant
                contribution to lunar science. These seismic recordings have
                unearthed a wealth of knowledge about the Moon's geological
                history, structure, and evolution.
                <br />
                <br />
                The Apollo missions deployed a series of seismometers on the
                lunar surface during Apollo 11, 12, 14, 15, and 16 missions.
                These seismometers were collectively part of the Apollo Lunar
                Surface Experiments Package (ALSEP), and they recorded seismic
                activities on the Moon for extended periods. The primary goal of
                these experiments was to investigate the moon's internal
                structure, tectonic activity, and the nature of lunar
                earthquakes, also known as "moonquakes."
                <br />
                <br />
                Moonquakes, as recorded by the seismometers, were classified
                into two main categories: deep moonquakes and shallow
                moonquakes. Deep moonquakes were characterized by their origin
                in the deep lunar interior, often several hundred kilometers
                below the surface. These events were more akin to tectonic
                activity on Earth, and they provided vital insights into the
                Moon's internal dynamics. Shallow moonquakes, on the other hand,
                occurred relatively close to the lunar surface. These were
                generally weaker than deep moonquakes but were more frequent.
                The seismometers detected thousands of shallow moonquakes during
                their operational lifetimes. The exact cause of these shallow
                moonquakes remains a subject of scientific investigation, with
                potential triggers including meteorite impacts, thermal stress,
                or the gravitational pull of Earth.
                <br />
                <br />
                The seismic data recorded by the Apollo missions allowed
                scientists to develop a detailed picture of the Moon's internal
                structure. By analyzing the propagation of seismic waves through
                the lunar interior, researchers were able to estimate the
                composition and thickness of the Moon's crust, mantle, and
                potentially even a partially molten layer deep beneath the
                surface. One of the most surprising discoveries was the
                existence of a partially molten layer or "magma ocean" beneath
                the lunar surface. This finding challenged earlier assumptions
                about the Moon's interior and raised intriguing questions about
                its geological history and early volcanic activity.
                <br />
                <br />
                The seismic data collected by the Apollo missions continue to be
                a valuable resource for lunar scientists. The recorded
                moonquakes, their frequencies, and patterns of occurrence have
                been revisited and reanalyzed with modern scientific techniques.
                These studies have expanded our understanding of the Moon's
                current geological stability and potential implications for
                future lunar missions and lunar base construction. Looking
                ahead, the Apollo seismic experiments have paved the way for
                future lunar exploration initiatives. New missions, such as
                NASA's Artemis program, aim to return humans to the Moon and
                establish a sustainable presence. The lessons learned from the
                Apollo seismic experiments will inform the design and execution
                of future experiments and instruments aimed at unraveling more
                lunar mysteries.
                <br />
                <br />
                In the realm of lunar seismology, two significant contributions
                are worth mentioning. Nakamura's 1979 catalogue and Lognonné's
                2003 catalogue have played pivotal roles in cataloging and
                analyzing lunar seismic events. Nakamura's work from 1979 laid
                the foundation by meticulously documenting and categorizing a
                range of lunar quakes. Decades later, Lognonné's 2003 catalogue
                expanded upon Nakamura's pioneering efforts, incorporating
                additional data from more recent lunar missions. These
                comprehensive catalogues serve as essential references for
                researchers, aiding in the ongoing exploration and understanding
                of lunar seismic activity.
                <br />
                <br />
                The recording of lunar seismic events by the Apollo missions
                remains a remarkable scientific achievement. These experiments
                have yielded critical insights into the Moon's internal
                structure, tectonic activity, and geological history. As we
                continue our journey to explore the cosmos and plan for future
                lunar exploration, the legacy of the Apollo seismic experiments
                serves as a testament to the enduring quest for knowledge about
                our celestial neighbors. The data collected during those
                missions will continue to inspire and inform the next generation
                of lunar scientists and explorers.
                <br />
                <br />
                This immense legacy is what inspired our team to participate in
                NASA's International Space Apps Challenge and to build Lunar
                Trek, in order to visualize the seismic events from Nakamura's
                and Lognonné's catalogues. We hope that Lunar Trek will help
                educate and inspire future lunar enthusiasts and scientists.
              </motion.p>
              <hr className="h-px w-full border-none bg-muted" />
              <motion.div
                variants={contentVariants}
                transition={transition}
                viewport={viewport}
                initial="initial"
                whileInView="animate"
                className="grid w-full grid-cols-1 gap-4 md:grid-cols-3 md:gap-6 lg:gap-2"
              >
                <a
                  target="_blank"
                  href="https://www.spaceappschallenge.org/"
                  className="flex items-center justify-between gap-1 text-start font-futura text-base font-light text-white underline lg:justify-center lg:text-center"
                >
                  NASA Space Apps Challenge
                  <LinkArrow className="size-4 min-w-4 fill-white" />
                </a>
                <a
                  target="_blank"
                  href="https://pds-geosciences.wustl.edu/missions/apollo/seismic_event_catalog.htm"
                  className="flex items-center justify-between gap-1 text-start font-futura text-base font-light text-white underline lg:justify-center lg:text-center"
                >
                  Apollo Seismic Event Catalog (NASA's PDS)
                  <LinkArrow className="size-4 min-w-4 fill-white" />
                </a>
                <a
                  target="_blank"
                  href="https://repositories.lib.utexas.edu/handle/2152/65680"
                  className="flex items-center justify-between gap-1 text-start font-futura text-base font-light text-white underline lg:justify-center lg:text-center"
                >
                  Read more about lunar seismic events
                  <LinkArrow className="size-4 min-w-4 fill-white" />
                </a>
              </motion.div>
            </div>
          </ContentPadding>
        </div>
      </Container>
    </section>
  );
};

export default AboutSection;
