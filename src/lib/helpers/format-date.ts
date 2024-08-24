const formatDate = (year: number, day: number) =>
  `${year || "N/A"}/${day?.toString().padStart(3, "0") || "N/A"}`;

export { formatDate };
