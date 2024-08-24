import { motion } from "framer-motion";
import Container from "@/components/container";
import SectionHeader from "@/components/section-header";
import ContentPadding from "@/components/content-padding";
import ContactInformation from "@/components/contact-information";
import { contactData } from "@/data";

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

const informationParentVariants = {
  initial: {
    opacity: 0,
  },
  animate: {
    opacity: 1,
  },
};

const informationChildrenVariants = {
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

const informationTransition = {
  type: "tween",
  duration: 0.4,
  staggerChildren: 0.2,
};

const contentViewport = {
  once: true,
  amount: "all" as const,
};

const informationViewport = {
  once: true,
  amount: "some" as const,
};

const ContactSection = () => {
  return (
    <section
      id="contact"
      className="mb-10 overflow-x-hidden bg-white py-12 md:mb-20 lg:mb-28 xl:mb-32 2xl:mb-36"
    >
      <Container>
        <div className="flex flex-col items-center justify-center gap-12">
          <SectionHeader
            titleText="Contact Us"
            subtitleText="Get in touch with the team behind Lunar Trek."
            textTheme="dark"
          />
          <ContentPadding>
            <div className="flex w-full flex-col items-center justify-center gap-4">
              <motion.p
                variants={contentVariants}
                transition={contentTransition}
                viewport={contentViewport}
                initial="initial"
                whileInView="animate"
                className="w-full text-start font-futura text-xl font-light text-blue"
              >
                We are a group of passionate computer engineering students from
                Alexandria University who are fascinated by space exploration.
                We developed Lunar Trek to participate in NASA's International
                Space Apps Challenge. Our goal is to contribute our skills and
                knowledge while inspiring others' passion for the cosmos.
              </motion.p>
              <hr className="h-px w-full border-none bg-muted" />
              <motion.div
                variants={informationParentVariants}
                transition={informationTransition}
                viewport={informationViewport}
                initial="initial"
                whileInView="animate"
                className="grid w-full grid-cols-1 gap-3 lg:grid-cols-2 lg:gap-4"
              >
                {contactData.map((contact) => (
                  <motion.div
                    key={contact.photo}
                    variants={informationChildrenVariants}
                    transition={informationTransition}
                    className="w-full"
                  >
                    <ContactInformation key={contact.photo} {...contact} />
                  </motion.div>
                ))}
              </motion.div>
            </div>
          </ContentPadding>
        </div>
      </Container>
    </section>
  );
};

export default ContactSection;
