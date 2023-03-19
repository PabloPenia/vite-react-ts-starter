# vite-react-ts-starter

## Yet another Frontend Starter Kit.

- **Toolchain**: [ViteJs](https://vitejs.dev/ 'ViteJS documentation').
- **Framework**: [ReactJs](https://reactjs.org 'React Documentation') - [Typescript](https://typescriptlang.org 'Typescript documentation').
- **Linter**: [Eslint](https://eslint.org 'Eslint documentation') with [Javascript Standard Styleguide](https://standardjs.com/ 'JS Standard style documentation').
- **Formatter**: [Prettier](https://prettier.io 'Prettier documentation').
- **Unit Testing**: [Vitest](https://vitest.org 'Vitest documentation') with [Testing Library](https://testing-library.com/ 'Testing library documentation') (JestDOM/JsDOM).
- **Styles**: [SASS](https://sasslang.org 'Sass documentation')-ready with some tools and resets included such as dark theme configurations and fluid typo.
- **Component generation** with [GRC - Generate React Cli](https://github.com/arminbro/generate-react-cli 'Generate React Clic Documentation')

## How to build

On your preferred CLI run:

- Clone this repository `git clone 'https://github.com/PabloPenia/yet-another-react-ts-template'`.
- Install dependencies: `yarn ci` or `npm ci`.

## Included Scripts

- Run in development mode: `yarn dev` or `npm run dev`.
- Run in production mode: `yarn preview` or `npm run preview`. (this will build for production before run.)
- Build for production: `yarn build` or `npm run build`.
- Show linter warnings: `yarn lint` or `npm run lint`.
- Auto-Fix linter warnings: `yarn lint:fix` or `npm run lint:fix`.
- Run tests: `yarn test` or `npm run test`.
- Generate a new component: `yarn gen MyComponent` or `npm run gen MyComponent`.
- Generate a new route: `yarn gen:route MyRoute` or `npm run gen:route MyRoute`.
