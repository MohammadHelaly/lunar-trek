const formatCoordinates = (latitude: number, longitude: number) =>
  `${latitude || "N/A"}°, ${longitude || "N/A"}°`;

export { formatCoordinates };
