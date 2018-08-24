export function createConstants(...constants) {
  return constants.reduce((accumulator, constant) => {
    accumulator[constant] = constant;
    return accumulator;
  }, {});
}
