import { useEffect, useRef } from "react";
import { useFrame } from "@react-three/fiber";
import { PerspectiveCamera, OrbitControls } from "@react-three/drei";
import {
  useTypedDispatch,
  useTypedSelector,
} from "@/lib/hooks/typed-redux-hooks";
import { useWindowDimensions } from "@/lib/hooks/window-dimensions";
import { dataActions } from "@/lib/store/slices/data-slice";

const Camera = () => {
  const dispatch = useTypedDispatch();
  const { updateCameraPosition } = dataActions;

  const seasAndOceans = useTypedSelector((state) => state.data.seasAndOceans);
  const cratersAndMountains = useTypedSelector(
    (state) => state.data.cratersAndMountains,
  );
  const parallelsAndMeridians = useTypedSelector(
    (state) => state.data.parallelsAndMeridians,
  );
  const viewTimeSeriesData = useTypedSelector(
    (state) => state.data.timeSeriesData.on,
  );
  const landingSites = useTypedSelector((state) => state.data.landingSites);
  const cameraPosition = useTypedSelector((state) => state.data.cameraPosition);

  const { width } = useWindowDimensions();

  // @ts-expect-error - use perspective camera as type
  const camera = useRef<PerspectiveCamera>(null);

  // Set max and default distance based on screen width for nice transition on moon
  const maxDistance =
    width >= 1900
      ? 7.65
      : width >= 1400
        ? 8.35
        : width >= 1300
          ? 6.1
          : width >= 1200
            ? 8.5
            : width >= 1100
              ? 9.25
              : width >= 1000
                ? 8
                : 13.25;

  const defaultDistance = -1 * maxDistance;

  useEffect(() => {
    dispatch(updateCameraPosition([defaultDistance, -2.25, 3.5]));
  }, [dispatch, defaultDistance, updateCameraPosition]);

  useFrame(() => {
    if (
      seasAndOceans ||
      cratersAndMountains ||
      parallelsAndMeridians ||
      viewTimeSeriesData ||
      landingSites
    ) {
      if (camera.current) {
        const currentCameraPosition = camera.current.position.toArray();
        const positionChangeThreshold = 1;
        if (
          Math.abs(currentCameraPosition[0] - cameraPosition[0]) >
            positionChangeThreshold ||
          Math.abs(currentCameraPosition[1] - cameraPosition[1]) >
            positionChangeThreshold ||
          Math.abs(currentCameraPosition[2] - cameraPosition[2]) >
            positionChangeThreshold
        ) {
          dispatch(updateCameraPosition(currentCameraPosition));
        }
      }
    }
  });

  return (
    <>
      <OrbitControls
        minDistance={3.5}
        maxDistance={maxDistance}
        enablePan={false}
        enableZoom={true}
        enableRotate={true}
        autoRotate={viewTimeSeriesData}
      />
      <PerspectiveCamera
        ref={camera}
        makeDefault
        position={[defaultDistance, -2.25, 3.5]}
      />
    </>
  );
};

export default Camera;
