This is a MVP monorepo for what a generator-based init experience for algokit could look like. 

The goal is to create a base template with generators that can be ran at any time to add functionality.

# Usage

1. Clone this repo
2. Run `algokit generate typescript` to generate the base typescript files
3. Run `algokit generate tealscript` and/or `algokit generate react` to generate the tealscript and/or react files
4. Run algokit bootstrap all to install dependencies and setup `.env`


# Sanity Test

Run all the generators and their associated npm scripts

```bash
algokit generate typescript &&\
    algokit generate tealscript &&\
    algokit generate react &&\
    algokit bootstrap all &&\
    npm run compile-contracts &&\
    npm run generate-clients &&\
    npm run test ||\
    npm run dev
```