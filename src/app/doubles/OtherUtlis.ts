export type StringInfo = {
  lowerCase: string;
  upperCase: string;
  characters: string[];
  length: number;
  extraInfo: Object | undefined;
};

type LoggerServiceCallback = (arg: string) => void;

export function calculateComplexity(stringOnfo: StringInfo) {
  return Object.keys(stringOnfo.extraInfo).length * stringOnfo.length;
}

export function toUpperCaseWithCallback(
  arg: string,
  callback: LoggerServiceCallback
) {
  if (!arg) {
    callback("Invalid argument");
    return;
  }
  callback(`called function with ${arg}`);
  return arg.toUpperCase();
}

export class OtherStringUtils {
  public callExternaelService() {
    console.log("Calling external service");
  }

  public toUpperCase(arg: string) {
    return arg.toUpperCase();
  }

  public logString(arg: string) {
    console.log(arg);
  }
}
