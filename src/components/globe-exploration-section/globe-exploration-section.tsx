import Environment from "@/components/environment";
import ExplorationUI from "@/components/exploration-ui";

const GlobeExplorationSection = () => {
  return (
    <section className="absolute inset-0 left-0 top-0 grid">
      <Environment />
      <ExplorationUI />
    </section>
  );
};

export default GlobeExplorationSection;
