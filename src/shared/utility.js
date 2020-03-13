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
