const formatTime = (hour: number, minute: number, second: number) =>
  `${hour?.toString().padStart(2, "0") || "N/A"}:${minute?.toString().padStart(2, "0") || "N/A"}:${second?.toString().padStart(2, "0") || "N/A"}`;

export { formatTime };
