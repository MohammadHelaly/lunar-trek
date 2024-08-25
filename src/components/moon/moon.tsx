import { useLoader } from "@react-three/fiber";
import { TextureLoader } from "three";
import { useTypedSelector } from "@/lib/hooks/typed-redux-hooks";

const Moon = () => {
  const topographicView = useTypedSelector(
    (state) => state.data.topographicView,
  );

  const moonTexture = useLoader(
    TextureLoader,
    import.meta.env.BASE_URL + "assets/images/moon.jpg",
  );
  const topographyTexture = useLoader(
    TextureLoader,
    import.meta.env.BASE_URL + "assets/images/topography.jpg",
  );

  const map = topographicView === true ? topographyTexture : moonTexture;

  return (
    <mesh>
      <sphereGeometry attach="geometry" args={[2, 64, 64, -Math.PI / 2]} />
      <meshStandardMaterial map={map} />
    </mesh>
  );
};

export default Moon;
