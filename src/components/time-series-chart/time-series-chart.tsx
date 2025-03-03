import {
  Nakamura1979MoonquakeData,
  Lognonne2003MoonquakeData,
} from "@/data/types";
import { motion, AnimatePresence } from "framer-motion";
import {
  LineChart,
  Line,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip as RCTooltip,
  Label,
  ResponsiveContainer,
} from "recharts";
import Tooltip from "@/components/tooltip";
import { useTypedSelector } from "@/lib/hooks/typed-redux-hooks";
import { useWindowDimensions } from "@/lib/hooks/window-dimensions";
import { nakamura1979MoonquakeData, lognonne2003MoonquakeData } from "@/data";

type MoonquakeData = Nakamura1979MoonquakeData | Lognonne2003MoonquakeData;

interface DataVisibilities {
  "Shallow Moonquake": boolean;
  "Deep Moonquake": boolean;
  "Meteorite Impact": boolean;
  "Artificial Impact": boolean;
}

interface DataTypeColors {
  "Shallow Moonquake": string;
  "Deep Moonquake": string;
  "Meteorite Impact": string;
  "Artificial Impact": string;
}

const completeMoonquakeData: MoonquakeData[] = [
  ...nakamura1979MoonquakeData,
  ...lognonne2003MoonquakeData,
];

const variants = {
  hidden: { opacity: 0, y: -40, pointerEvents: "none" as const },
  visible: { opacity: 1, y: 0, pointerEvents: "auto" as const },
};

const transition = { type: "tween", duration: 0.8 };

const TimeSeriesChart = () => {
  const viewTimeSeriesData = useTypedSelector(
    (state) => state.data.timeSeriesData,
  );

  const { width } = useWindowDimensions();

  const dataVisibilities: DataVisibilities = {
    "Shallow Moonquake": viewTimeSeriesData.shallowMoonquakes,
    "Deep Moonquake": viewTimeSeriesData.deepMoonquakes,
    "Meteorite Impact": viewTimeSeriesData.meteoriteImpacts,
    "Artificial Impact": viewTimeSeriesData.artificialImpacts,
  };

  const dataTypeColors: DataTypeColors = {
    "Shallow Moonquake": "#efff5c",
    "Deep Moonquake": "#aa00be",
    "Meteorite Impact": "#00af5a",
    "Artificial Impact": "#00cdff",
  };

  const countByYearAndType = (data: MoonquakeData[]) => {
    const counts: Record<string, Record<string, number>> = {};
    const allTypes = Object.keys(dataTypeColors);

    data.forEach((item) => {
      const { year, type: typeArray } = item;
      const type = typeArray[1];

      if (!counts[year]) {
        counts[year] = {};
        allTypes.forEach((type) => (counts[year][type] = 0)); // Initialize all types to 0
      }

      counts[year][type]++;
    });

    return counts;
  };

  const counts = countByYearAndType(completeMoonquakeData);
  const years = Object.keys(counts).map((year) => ({
    year,
    ...counts[year],
  }));

  const lines = Object.keys(dataTypeColors).filter(
    (type) => dataVisibilities[type as keyof DataVisibilities],
  );

  const size = width < 800 ? 20 : 34;

  return (
    <AnimatePresence>
      {viewTimeSeriesData.on && (
        <motion.div
          variants={variants}
          transition={transition}
          initial="hidden"
          animate="visible"
          exit="hidden"
          className="absolute right-0 top-0 flex h-[300px] w-2/5 items-center justify-center rounded-none border-2 border-solid border-gray bg-muted p-1.5 text-center text-white outline-none backdrop-blur-sm max-lg:h-[220px] max-lg:w-3/5 max-lg:p-1 max-[500px]:h-[145px] max-[500px]:w-[68.75%] max-[500px]:p-0.5"
        >
          <ResponsiveContainer height="100%" width="100%">
            <LineChart width={800} height={800} data={years}>
              <CartesianGrid stroke="#e9e6e6" strokeWidth={0.3} />
              <XAxis
                dataKey="year"
                height={size}
                stroke="#e9e6e6"
                strokeWidth={0.3}
                className="fill-white font-futura text-sm font-extralight max-lg:text-[10px] max-[480px]:text-[8px]"
                tick={{ fill: "white" }}
              >
                <Label
                  className="fill-white font-futura text-sm font-extralight max-lg:text-[10px] max-[480px]:text-[8px]"
                  value="Year"
                  offset={-2}
                  position="insideBottom"
                />
              </XAxis>
              <YAxis
                width={size + 2}
                className="fill-white font-futura text-sm font-extralight max-lg:text-[10px] max-[480px]:text-[8px]"
                stroke="#e9e6e6"
                strokeWidth={0.3}
                tick={{ fill: "white" }}
              >
                <Label
                  className="fill-white font-futura text-sm font-extralight max-lg:text-[10px] max-[480px]:text-[8px]"
                  value="Number of Seismic Events"
                  angle={-90}
                  offset={window.innerWidth < 800 ? 4 : 10}
                  position="insideBottomLeft"
                />
              </YAxis>
              <RCTooltip
                content={({ active, payload, label }) => (
                  <Tooltip
                    active={active}
                    payload={payload as { name: string; value: string }[]}
                    label={label}
                  />
                )}
              />
              {lines.map((type) => (
                <Line
                  key={type}
                  type="monotone"
                  dataKey={type}
                  stroke={dataTypeColors[type as keyof DataTypeColors]}
                  // dot={false}
                />
              ))}
            </LineChart>
          </ResponsiveContainer>
        </motion.div>
      )}
    </AnimatePresence>
  );
};

export default TimeSeriesChart;
