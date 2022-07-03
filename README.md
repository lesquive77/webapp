# Debond front end

## Typescript

The directories used are:

```bash
packages/vite-app-ts/
packages/hardhat-ts/
```

## Quick Start

Running the app

1. install your dependencies

   ```bash
   yarn install
   ```

2. start a hardhat node

   ```bash
   yarn chain
   ```

3. get the contracts
   ```bash
   cd packages/hardhat-ts/contracts
   # clone the repo
   git clone --branch frontend https://github.com/Debond-Protocol/Debond-v0.git
   ```
4. deploy the contracts, `open a new command prompt`
   
   ```bash
   # build hardhat & external contracts types
   yarn contracts:build 
   # deploy your hardhat contracts
   yarn deploy --network $yourNetwork
   ```

5. deploy the app
   ```bash
   # login first to firebase
   yarn build
   # build project
   yarn serve
   ```