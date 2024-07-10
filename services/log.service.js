import chalk from "chalk";
import dedent from "dedent-js";

const printError = (error) => {
  console.log(chalk.bgRed("ERROR " + error));
};

const printSuccess = (success) => {
  console.log(chalk.bgGreen("SUCCESS " + success));
};

const printHelp = () => {
  console.log(dedent`${chalk.bgCyan("Help")}
  -s [CITY] for install city
  -h for help
  -t [API_KEY] fro save token
  `);
};

export { printError, printSuccess, printHelp };
