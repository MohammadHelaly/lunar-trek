import ExplorationMenu from "@/components/exploration-menu";
import InformationBox from "@/components/information-box";
import TimeSeriesChart from "@/components/time-series-chart";
import TimeSeriesCheckboxes from "@/components/time-series-checkboxes";

const ExplorationUI = () => {
  return (
    <div className="pointer-events-none relative mx-auto mt-28 flex h-3/4 w-[94vw] flex-col items-start justify-between self-start justify-self-start md:w-[92vw] lg:mt-16 lg:h-auto lg:self-center lg:justify-self-center">
      <ExplorationMenu />
      <InformationBox />
      <TimeSeriesChart />
      <TimeSeriesCheckboxes />
    </div>
  );
};

export default ExplorationUI;
