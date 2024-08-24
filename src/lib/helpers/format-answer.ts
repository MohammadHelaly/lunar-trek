const formatAnswer = (
  answer: string,
  type: "text" | "percent" = "text",
): string => {
  if (type === "percent") {
    return `${((1 - parseFloat(answer)) * 100).toFixed(0)}%`;
  }

  const formattedAnswer = answer.trim().endsWith(".")
    ? answer.trim()
    : `${answer.trim()}.`;
  return formattedAnswer.charAt(0).toUpperCase() + formattedAnswer.slice(1);
};

export { formatAnswer };
