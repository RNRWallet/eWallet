## Getting Started

To get a local copy up and running follow these simple example steps.

### Prerequisites

* nvm - for installation instrucitons https://github.com/nvm-sh/nvm?tab=readme-ov-file#install--update-script
  * Install `npm` using `nvm` and set the default version of `node` after installing
* yarn - for installation instrucitons https://yarnpkg.com/getting-started/install
  Make sure to enable the `berry` version
  ```
  yarn set version berry
  ```
### Project setup (only for the initial time)

* Initialize npm project 
  ```bash
  yarn init -y
  ```
  
  A `.yarn` directory and `.yarnrc.yml` file will both be created that need to be checked into git. These are the files that will set up your project’s local Yarn instance.
* Add typescript to the project
  ```bash
  yarn add -DE typescript
  ```
* Run `yarn`
  ```bash
  yarn install
  ```
  _This generates / updates the `yarn.lock` file._
* Set `type` to `module` in `package.json` file.
  _This will effectively switch node interpreter to the native ESM mode when running code of your package._
* Add `node` typings 
  ```bash
  yarn add -D @types/node
  ```
* Use one of the [ESM-bases](https://github.com/tsconfig/bases) for TypeScript config files (`tsconfig.json` - create this file)
  ```json
  {
    "$schema": "https://json.schemastore.org/tsconfig",
    "extends": [
      "@tsconfig/node22/tsconfig.json",
      "@tsconfig/strictest/tsconfig.json",
    ],
    "compilerOptions": {},
    "include": [],
  }
  ```

  _Usually, we do this with `yarn tsc --init` command._

## ESLint setup

```bash
yarn add --dev eslint @eslint/js typescript-eslint
```

Next, create an `eslint.config.js` config file in the root of the project, and populate it with the following:
```
// @ts-check

import eslint from '@eslint/js';
import tseslint from 'typescript-eslint';

export default tseslint.config(
  eslint.configs.recommended,
  tseslint.configs.strict,
  tseslint.configs.stylistic,
);
```
This code will enable our [recommended configuration](https://typescript-eslint.io/users/configs) for linting.

> 🗒️ Homework: Configre `plugin:sort/recommended`, `plugin:import/recommended`, `plugin:import/typescript` and `prettier` as part of the eslint.

## Workspaces

Workspaces allows us to share the reusable code in the form of packages. (e.g. sub-projects in maven)

```bash
mkdir packages
mkdir apps
```

- `packages` - reusable packages such as core, loggers, and common utils.
- `apps` - basically deployable units such as a service

Now, add a `workspaces` section in the root `package.json`
```json
"workspaces": [
   "apps/*",
   "packages/*"
 ]
```

Now, let's create one package and one app

```bash
cd packages
yarn create utils

cd ..
cd apps
yarn create api

cd ..
yarn workspace api add -E utils # adding utils as dependency into api
```

Update root `package.json` file with following
```json
"scripts": {
    "build": "yarn workspaces foreach run build"
},
```

> 🗒️ **Homework:** Extract some common parts from the root `tscofnig.json` into `tsconfig.build.json`. And extend the individual workspace `tsconfig.json` from the `tsconfig.build.json`

## Jest setup
WIP

## Additional links
* [TypeScript ESM support](https://www.typescriptlang.org/docs/handbook/esm-node.html)
* ts-node ESM support [[documentation](https://github.com/TypeStrong/ts-node#commonjs-vs-native-ecmascript-modules) | [issue](https://github.com/TypeStrong/ts-node/issues/1007)]
* [reusable tsconfig bases](https://github.com/tsconfig/bases)
* [Using Jest with SWC, TypeScript, and ESM](https://gist.github.com/slavafomin/9d97c9794a3ce4293722b83aeaa05e4c#using-jest-with-swc-typescript-and-esm)
