import {
  Nakamura1979MoonquakeData,
  Lognonne2003MoonquakeData,
} from "@/data/types";
import { createSlice } from "@reduxjs/toolkit";

interface TimeSeriesData {
  on: boolean;
  shallowMoonquakes: boolean;
  deepMoonquakes: boolean;
  meteoriteImpacts: boolean;
  artificialImpacts: boolean;
}

interface DataState {
  topographicView: boolean;
  parallelsAndMeridians: boolean;
  seasAndOceans: boolean;
  cratersAndMountains: boolean;
  landingSites: boolean;
  selectedMoonquake:
    | Nakamura1979MoonquakeData
    | Lognonne2003MoonquakeData
    | undefined;
  timeSeriesData: TimeSeriesData;
  cameraPosition: [number, number, number];
}

const initialState: DataState = {
  topographicView: false,
  parallelsAndMeridians: false,
  seasAndOceans: false,
  cratersAndMountains: false,
  landingSites: false,
  selectedMoonquake: undefined,
  timeSeriesData: {
    on: false,
    shallowMoonquakes: false,
    deepMoonquakes: false,
    meteoriteImpacts: false,
    artificialImpacts: false,
  },
  cameraPosition: [0, 0, 0],
};

const dataSlice = createSlice({
  name: "data",
  initialState,
  reducers: {
    toggleTopographicView: (state) => {
      state.topographicView = !state.topographicView;
    },
    toggleParallelsAndMeridians: (state) => {
      state.parallelsAndMeridians = !state.parallelsAndMeridians;
    },
    toggleSeasAndOceans: (state) => {
      state.seasAndOceans = !state.seasAndOceans;
    },
    toggleCratersAndMountains: (state) => {
      state.cratersAndMountains = !state.cratersAndMountains;
    },
    toggleLandingSites: (state) => {
      state.landingSites = !state.landingSites;
    },
    setSelectedMoonquake: (
      state,
      action: { payload: DataState["selectedMoonquake"] },
    ) => {
      state.selectedMoonquake = action.payload;
    },
    setTimeSeriesData: (
      state,
      action: { payload: Partial<TimeSeriesData> },
    ) => {
      state.timeSeriesData = {
        ...state.timeSeriesData,
        ...action.payload,
      };
    },
    updateCameraPosition: (
      state,
      action: { payload: DataState["cameraPosition"] },
    ) => {
      state.cameraPosition = action.payload;
    },
    reset: () => initialState,
  },
});

export const dataActions = dataSlice.actions;

export type { TimeSeriesData, DataState };

export default dataSlice.reducer;
