export const updatedObject = (state, newValues) => ({ ...state, ...newValues });

export const isValid = data => {
  if (data.username !== "username") {
    return false;
  }

  if (data.password !== "12345") {
    return false;
  }

  return true;
};

export const sliceString = (string, numOfChars) => {
  if (typeof string === "string") {
    if (string.length > numOfChars) {
      return (string = string.slice(0, numOfChars) + "...");
    }
  }

  return string;
};
