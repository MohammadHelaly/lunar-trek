import {
  Nakamura1979MoonquakeData,
  Lognonne2003MoonquakeData,
} from "@/data/types";

const formatData = (
  nakamura1979MoonquakeData: Nakamura1979MoonquakeData[],
  lognonne2003MoonquakeData: Lognonne2003MoonquakeData[],
) => {
  const nakamura1979MoonquakeDataOptions = nakamura1979MoonquakeData.map(
    (moonquake) => ({
      value: JSON.stringify(moonquake),
      label: `Nakamura 1979 - ${moonquake.type ? moonquake.type[0] + " - " : "N/A - "} ${moonquake.year}/${moonquake.day.toString().padStart(3, "0")}`,
    }),
  );

  const lognonne2003MoonquakeDataOptions = lognonne2003MoonquakeData.map(
    (moonquake) => ({
      value: JSON.stringify(moonquake),
      label: `Lognonné 2003 - ${moonquake.type ? moonquake.type[0] + " - " : "N/A - "} ${moonquake.year}/${moonquake.day.toString().padStart(3, "0")}`,
    }),
  );

  return [
    ...nakamura1979MoonquakeDataOptions,
    ...lognonne2003MoonquakeDataOptions,
  ];
};

export { formatData };
