import { ApolloStation } from "@/data/types";

const formatStations = (stations: ApolloStation[]) => stations.join(", ");

export { formatStations };
