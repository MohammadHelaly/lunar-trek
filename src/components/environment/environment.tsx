import { Canvas } from "@react-three/fiber";
import Camera from "@/components/camera";
import Lights from "@/components/lights";
import Space from "@/components/space";
import Moon from "@/components/moon";
import ExplorationMarkers from "@/components/exploration-markers";

const Environment = () => {
  return (
    <div className="fixed left-0 top-0 h-screen w-screen bg-space">
      <Canvas>
        <Camera />
        <Lights />
        <Space />
        <Moon />
        <ExplorationMarkers />
      </Canvas>
    </div>
  );
};

export default Environment;
