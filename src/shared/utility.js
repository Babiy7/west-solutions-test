export const updatedObject = (state, newValues) => ({ ...state, ...newValues });

export function isValid(data) {
  if (data.username !== "username") {
    return false;
  }

  if (data.password !== "1234567") {
    return false;
  }

  return true;
}
