// @flow

export function createConstants(...constants: Array<string>): { [key: string]: string} {
  return constants.reduce((accumulator, constant) => {
    accumulator[constant] = constant;
    return accumulator;
  }, {});
}
