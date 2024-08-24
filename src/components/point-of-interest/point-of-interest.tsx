import Marker from "@/components/marker";
import { LocationArrow } from "@/assets/icons";

interface Props {
  latitude: number;
  longitude: number;
  name: string;
  waypoint?: boolean;
}

const PointOfInterest = (props: Props) => {
  const { latitude, longitude, name, waypoint } = props;

  return (
    <Marker latitude={latitude} longitude={longitude} type="rising">
      <div className="relative flex flex-row">
        {waypoint && (
          <LocationArrow className="absolute -left-[3px] -top-1.5 h-[7px] w-[5px] fill-white" />
        )}
        <p className="font-futura text-[0.4rem] font-light leading-[0.5rem] text-white">
          {name}
        </p>
      </div>
    </Marker>
  );
};

export default PointOfInterest;
