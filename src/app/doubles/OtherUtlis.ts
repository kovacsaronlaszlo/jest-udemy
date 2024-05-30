export type StringInfo = {
  lowerCase: string;
  upperCase: string;
  characters: string[];
  length: number;
  extraInfo: Object | undefined;
};

export function calculateComplexity(stringOnfo: StringInfo) {
  return Object.keys(stringOnfo.extraInfo).length * stringOnfo.length;
}
