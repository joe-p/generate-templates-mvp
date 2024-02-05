fs = require('fs');
path = require('path');

const contractsDir = path.join(__dirname, '..', '..', 'contracts');
const pkgJsonPath = path.join(contractsDir, 'package.json');
const prettierConfigPath = path.join(contractsDir, '.prettierrc.toml');
const eslintConfigPath = path.join(contractsDir, '.eslintrc.js');
const jestConfigPath = path.join(contractsDir, 'jest.config.js');
const tsConfigPath = path.join(contractsDir, 'tsconfig.json');

const files = [pkgJsonPath, prettierConfigPath, eslintConfigPath, jestConfigPath, tsConfigPath];

files.forEach((file) => {
  if (!fs.existsSync(file)) {
    fs.copyFileSync(path.join(__dirname, path.basename(file)), file);
  }
});

fs.rmSync(__dirname, { recursive: true, force: true });