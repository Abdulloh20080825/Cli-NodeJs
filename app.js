import getArgs from "./helpers/args.js";
import { printError, printHelp, printSuccess } from "./services/log.service.js";

const startCli = () => {
  const args = getArgs(process.argv);
  console.log(args);

  if (args.h) {
    printHelp();
    // help
  }
  if (args.s) {
    // save
  }
  if (args.t) {
    // save token
  }
};

startCli();
