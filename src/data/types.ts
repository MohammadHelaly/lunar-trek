type MoonquakeType =
  | "Deep Moonquake"
  | "Shallow Moonquake"
  | "Artificial Impact"
  | "Meteorite Impact";

type ApolloStation = "11" | "12" | "14" | "15" | "16" | "17";

type Nakamura1979MoonquakeData = {
  type: [string, MoonquakeType];
  latitude: number;
  longitude: number;
  magnitude: number;
  year: number;
  day: number;
  hour: number;
  minute: number;
  second: number;
  stations: ApolloStation[];
};

type Lognonne2003MoonquakeData = {
  type: [string, MoonquakeType];
  latitude: number;
  longitude: number;
  depth?: number;
  depthError?: number;
  date?: number;
  year: number;
  day: number;
  hour: number;
  minute: number;
  second: number;
  timeError?: number;
};

export type {
  MoonquakeType,
  ApolloStation,
  Nakamura1979MoonquakeData,
  Lognonne2003MoonquakeData,
};
