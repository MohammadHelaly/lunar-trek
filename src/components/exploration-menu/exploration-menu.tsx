import { motion } from "framer-motion";
import Button from "@/components/button";
import Select from "@/components/select";
import {
  useTypedSelector,
  useTypedDispatch,
} from "@/lib/hooks/typed-redux-hooks";
import { dataActions } from "@/lib/store/slices/data-slice";
import { formatData } from "@/lib/helpers";
import { nakamura1979MoonquakeData, lognonne2003MoonquakeData } from "@/data";

const options = formatData(
  nakamura1979MoonquakeData,
  lognonne2003MoonquakeData,
);

const controlVariants = {
  hidden: { opacity: 0, x: 0, pointerEvents: "none" as const },
  initial: { opacity: 0, x: -40 },
  animate: { opacity: 1, x: 0, pointerEvents: "auto" as const },
};

const legendVariants = {
  hidden: { opacity: 0, y: 40, pointerEvents: "none" as const },
  visible: { opacity: 1, y: 0, pointerEvents: "auto" as const },
};

const controlTransition = {
  type: "tween",
  duration: 0.4,
  delayChildren: 1,
  staggerChildren: 0.2,
};

const presentTransition = { type: "tween", duration: 0.8 };

const MotionButton = motion(Button);

const MotionSelect = motion(Select);

const ExplorationMenu = () => {
  const dispatch = useTypedDispatch();
  const {
    toggleTopographicView,
    toggleParallelsAndMeridians,
    toggleSeasAndOceans,
    toggleCratersAndMountains,
    toggleLandingSites,
    setSelectedMoonquake,
  } = dataActions;

  const topographicView = useTypedSelector(
    (state) => state.data.topographicView,
  );
  const parallelsAndMeridians = useTypedSelector(
    (state) => state.data.parallelsAndMeridians,
  );
  const seasAndOceans = useTypedSelector((state) => state.data.seasAndOceans);
  const cratersAndMountains = useTypedSelector(
    (state) => state.data.cratersAndMountains,
  );
  const landingSites = useTypedSelector((state) => state.data.landingSites);
  const selectedMoonquake = useTypedSelector(
    (state) => state.data.selectedMoonquake,
  );
  const timeSeriesData = useTypedSelector(
    (state) => state.data.timeSeriesData.on,
  );

  const animateSelect = {
    opacity: !timeSeriesData ? 1 : 0,
    pointerEvents: !timeSeriesData ? ("auto" as const) : ("none" as const),
  };

  const selectValue =
    timeSeriesData || selectedMoonquake === undefined
      ? ""
      : JSON.stringify(selectedMoonquake);

  const selectActive = selectedMoonquake !== undefined;

  const toggleTopographicViewHandler = () => {
    dispatch(toggleTopographicView());
  };

  const toggleParallelsAndMeridiansHandler = () => {
    dispatch(toggleParallelsAndMeridians());
  };

  const toggleSeasAndOceansHandler = () => {
    dispatch(toggleSeasAndOceans());
  };

  const toggleCratersAndMountainsHandler = () => {
    dispatch(toggleCratersAndMountains());
  };

  const toggleLandingSitesHandler = () => {
    dispatch(toggleLandingSites());
  };

  const selectedMoonquakeChangeHandler = (
    event: React.ChangeEvent<HTMLSelectElement>,
  ) => {
    if (event.target.value === "") {
      dispatch(setSelectedMoonquake(undefined));
    } else {
      dispatch(setSelectedMoonquake(JSON.parse(event.target.value)));
    }
  };

  return (
    <div className="pointer-events-auto flex w-[30%] flex-col items-start gap-2 lg:w-[27%] lg:gap-3">
      <motion.div
        transition={controlTransition}
        initial="initial"
        animate="animate"
        className="flex w-full flex-col items-start gap-1.5 lg:gap-2"
      >
        <MotionButton
          variants={controlVariants}
          transition={controlTransition}
          text="Topographic View"
          onClick={toggleTopographicViewHandler}
          active={topographicView}
        />
        <MotionButton
          variants={controlVariants}
          transition={controlTransition}
          text="Parallels and Meridians"
          onClick={toggleParallelsAndMeridiansHandler}
          active={parallelsAndMeridians}
        />
        <MotionButton
          variants={controlVariants}
          transition={controlTransition}
          text="Seas and Oceans"
          onClick={toggleSeasAndOceansHandler}
          active={seasAndOceans}
        />
        <MotionButton
          variants={controlVariants}
          transition={controlTransition}
          text="Craters and Mountains"
          onClick={toggleCratersAndMountainsHandler}
          active={cratersAndMountains}
        />
        <MotionButton
          variants={controlVariants}
          transition={controlTransition}
          text="Apollo Mission Landing Sites"
          onClick={toggleLandingSitesHandler}
          active={landingSites}
        />
        <MotionSelect
          variants={controlVariants}
          transition={controlTransition}
          animate={animateSelect}
          text="Select a Seismic Event"
          onChange={selectedMoonquakeChangeHandler}
          active={selectActive}
          value={selectValue}
          options={options}
        />
      </motion.div>
      <motion.div
        variants={legendVariants}
        transition={presentTransition}
        initial="hidden"
        animate={topographicView ? "visible" : "hidden"}
        className="flex w-full flex-col items-start gap-1"
      >
        <div className="flex w-full flex-col items-start">
          <p className="font-futura font-light text-white max-lg:text-[0.5rem]">
            Elevation (m):
          </p>
          <div className="flex w-full items-center justify-between">
            <p className="font-futura font-light text-white max-lg:text-[0.5rem]">
              +10780
            </p>
            <p className="font-futura font-light text-white max-lg:text-[0.5rem]">
              -9130
            </p>
          </div>
        </div>
        <img
          src="/assets/images/legend.jpg"
          alt="Topographic View Legend"
          className="w-full border border-gray max-lg:h-1.5"
        />
      </motion.div>
    </div>
  );
};

export default ExplorationMenu;
