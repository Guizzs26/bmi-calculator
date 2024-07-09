export const isValidNumber = (value: number | string): boolean => {
  if (typeof value === "string") {
    return (
      !isNaN(parseFloat(value)) &&
      isFinite(parseFloat(value)) &&
      parseFloat(value) > 0
    );
  } else {
    return !isNaN(value) && isFinite(value) && value > 0;
  }
};
