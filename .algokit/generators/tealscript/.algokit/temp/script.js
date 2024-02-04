fs = require('fs');
path = require('path');

const contractsDir = path.join(__dirname, '..', '..',);
const pkgJsonPath = path.join(contractsDir, 'package.json');
const prettierConfigPath = path.join(contractsDir, '.prettierrc');
const eslintConfigPath = path.join(contractsDir, '.eslintrc.js');
const jestConfigPath = path.join(contractsDir, 'jest.config.js');

const files = [pkgJsonPath, prettierConfigPath, eslintConfigPath, jestConfigPath];

files.forEach((file) => {
  if (!fs.existsSync(file)) {
    fs.copyFileSync(path.join(__dirname, path.basename(file)), file);
  }
});