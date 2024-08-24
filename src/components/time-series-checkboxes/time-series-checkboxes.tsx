import { motion, AnimatePresence } from "framer-motion";
import {
  useTypedSelector,
  useTypedDispatch,
} from "@/lib/hooks/typed-redux-hooks";
import { dataActions } from "@/lib/store/slices/data-slice";

const variants = {
  hidden: { opacity: 0, x: 40, pointerEvents: "none" as const },
  visible: { opacity: 1, x: 0, pointerEvents: "auto" as const },
};

const transition = { type: "tween", duration: 0.4 };

const TimeSeriesCheckboxes = () => {
  const viewTimeSeriesData = useTypedSelector(
    (state) => state.data.timeSeriesData,
  );

  const dispatch = useTypedDispatch();
  const { setTimeSeriesData } = dataActions;

  const shallowMoonquakesChangeHandler = () => {
    dispatch(
      setTimeSeriesData({
        shallowMoonquakes: !viewTimeSeriesData.shallowMoonquakes,
      }),
    );
  };

  const deepMoonquakesChangeHandler = () => {
    dispatch(
      setTimeSeriesData({
        deepMoonquakes: !viewTimeSeriesData.deepMoonquakes,
      }),
    );
  };

  const meteoriteImpactsChangeHandler = () => {
    dispatch(
      setTimeSeriesData({
        meteoriteImpacts: !viewTimeSeriesData.meteoriteImpacts,
      }),
    );
  };

  const artificialImpactsChangeHandler = () => {
    dispatch(
      setTimeSeriesData({
        artificialImpacts: !viewTimeSeriesData.artificialImpacts,
      }),
    );
  };

  return (
    <AnimatePresence>
      {viewTimeSeriesData.on && (
        <motion.div
          variants={variants}
          transition={transition}
          initial="hidden"
          animate="visible"
          exit="hidden"
          className="pointer-events-auto z-30 grid grid-cols-2 items-center justify-center gap-8 self-center md:absolute md:bottom-0 md:right-0 md:flex md:flex-row md:gap-5"
        >
          <div className="flex flex-row items-center justify-between gap-2">
            <div className="flex flex-row items-center justify-between gap-2 max-2xl:w-min">
              <input
                name="shallow-moonquakes"
                id="shallow-moonquakes"
                type="checkbox"
                disabled={!viewTimeSeriesData.on}
                checked={viewTimeSeriesData.shallowMoonquakes}
                onChange={shallowMoonquakesChangeHandler}
                className="rounded-none accent-muted"
              />
              <label
                htmlFor="shallow-moonquakes"
                className="font-futura text-base font-light leading-none text-white"
              >
                Shallow Moonquakes
              </label>
            </div>
            <div className="size-4 rounded-full border border-white bg-yellow" />
          </div>
          <div className="flex flex-row items-center justify-between gap-2">
            <div className="flex flex-row items-center justify-between gap-2 max-2xl:w-min">
              <input
                type="checkbox"
                name="deep-moonquakes"
                id="deep-moonquakes"
                disabled={!viewTimeSeriesData.on}
                checked={viewTimeSeriesData.deepMoonquakes}
                onChange={deepMoonquakesChangeHandler}
                className="rounded-none accent-muted"
              />
              <label
                htmlFor="deep-moonquakes"
                className="font-futura text-base font-light leading-none text-white"
              >
                Deep Moonquakes
              </label>
            </div>
            <div className="size-4 rounded-full border border-white bg-purple" />
          </div>
          <div className="flex flex-row items-center justify-between gap-2">
            <div className="flex flex-row items-center justify-between gap-2 max-2xl:w-min">
              <input
                type="checkbox"
                name="meteorite-impacts"
                id="meteorite-impacts"
                disabled={!viewTimeSeriesData.on}
                checked={viewTimeSeriesData.meteoriteImpacts}
                onChange={meteoriteImpactsChangeHandler}
                className="rounded-none accent-muted"
              />
              <label
                htmlFor="meteorite-impacts"
                className="font-futura text-base font-light leading-none text-white"
              >
                Meteorite Impacts
              </label>
            </div>
            <div className="size-4 rounded-full border border-white bg-green" />
          </div>
          <div className="flex flex-row items-center justify-between gap-2">
            <div className="flex flex-row items-center justify-between gap-2 max-2xl:w-min">
              <input
                type="checkbox"
                name="artificial-impacts"
                id="artificial-impacts"
                disabled={!viewTimeSeriesData.on}
                checked={viewTimeSeriesData.artificialImpacts}
                onChange={artificialImpactsChangeHandler}
                className="rounded-none accent-muted"
              />
              <label
                htmlFor="artificial-impacts"
                className="font-futura text-base font-light leading-none text-white"
              >
                Artificial Impacts
              </label>
            </div>
            <div className="size-4 rounded-full border border-white bg-cyan" />
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
};

export default TimeSeriesCheckboxes;
