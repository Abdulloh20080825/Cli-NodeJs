import getArgs from "./helpers/args.js";
import { printError, printHelp, printSuccess } from "./services/log.service.js";
import { saveKeyValue } from "./services/storage.service.js";

const saveToken = async (token) => {
  try {
    await saveKeyValue("token", token);
    printSuccess("Token was saved");
  } catch (error) {
    printError(error.message);
  }
};

const startCli = () => {
  const args = getArgs(process.argv);

  if (args.h) {
    printHelp();
    // help
  }
  if (args.s) {
    // save
  }
  if (args.t) {
    return saveToken(args.t);
    // save token
  }
};

startCli();
