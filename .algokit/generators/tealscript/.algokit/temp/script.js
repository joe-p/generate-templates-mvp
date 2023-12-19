fs = require('fs');
path = require('path');

const pkgJsonPath = path.join(__dirname, '..', '..', 'package.json');

const delta = JSON.parse(fs.readFileSync(path.join(__dirname, 'package-delta.json'), 'utf-8'));
const pkgJson = JSON.parse(fs.readFileSync(pkgJsonPath, 'utf-8'));

['devDependencies', 'scripts'].forEach(key => {
    pkgJson[key] = { ...pkgJson[key], ...delta[key] }
});

fs.writeFileSync(pkgJsonPath, JSON.stringify(pkgJson, undefined, 4));

fs.rmSync(__dirname, { recursive: true, force: true });
