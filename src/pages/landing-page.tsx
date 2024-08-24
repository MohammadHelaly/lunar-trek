import Layout from "@/components/layout";
import HomeSection from "@/components/home-section";
import ExploreSection from "@/components/explore-section";
import AboutSection from "@/components/about-section";
import ContactSection from "@/components/contact-section";

const LandingPage = () => {
  return (
    <Layout>
      <HomeSection />
      <ExploreSection />
      <AboutSection />
      <ContactSection />
    </Layout>
  );
};

export default LandingPage;
