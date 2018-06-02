export function checkType(type, objectTypes) {
  const actionTypes = Object.values(objectTypes);

  for (let i = 0; i < actionTypes.length; i += 1) {
    if (actionTypes[i] === type) {
      return type;
    }
  }

  return false;
}
