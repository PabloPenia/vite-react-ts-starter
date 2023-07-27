# vite-react-ts-starter

## Yet another Frontend Starter Kit.

[CHANGELOG](https://github.com/PabloPenia/vite-react-ts-starter/tree/main#changelog)

- **Toolchain**: [ViteJs](https://vitejs.dev/ 'ViteJS documentation').
- **Framework**: [ReactJs](https://reactjs.org 'React Documentation') -
  [Typescript](https://typescriptlang.org 'Typescript documentation').
- **Linter**: [Eslint](https://eslint.org 'Eslint documentation') with
  [Javascript Standard Styleguide](https://standardjs.com/ 'JS Standard style documentation').
- **Formatter**: [Prettier](https://prettier.io 'Prettier documentation').
- **Unit Testing**: [Vitest](https://vitest.org 'Vitest documentation') with
  [Testing Library](https://testing-library.com/ 'Testing library documentation')
  (JestDOM/JsDOM).
- **Styles**: [SASS](https://sasslang.org 'Sass documentation')-ready with some
  tools and resets included such as dark theme configurations and fluid typo.
- **Component generation** with
  [GRC - Generate React Cli](https://github.com/arminbro/generate-react-cli 'Generate React Clic Documentation')
- some **Common Components** included

## How to build

On your preferred CLI run:

- Clone this repository
  `git clone 'https://github.com/PabloPenia/yet-another-react-ts-template'`.
- Install dependencies: `yarn ci` or `npm ci`.

## Included Scripts

- Run in development mode: `yarn dev` or `npm run dev`.
- Run in production mode: `yarn preview` or `npm run preview`. (this will build
  for production before run.)
- Build for production: `yarn build` or `npm run build`.
- Show linter warnings: `yarn lint` or `npm run lint`.
- Auto-Fix linter warnings: `yarn lint:fix` or `npm run lint:fix`.
- Run tests: `yarn test` or `npm run test`.
- Generate a new component: `yarn gen MyComponent` or `npm run gen MyComponent`.
- Generate a new route: `yarn gen:route MyRoute` or `npm run gen:route MyRoute`.

## Extra

- Style ready, resets, fluidtypo, and more: check `src/theme` folder
- Header component.
- Theme switcher dark/light with context ready.
- LazyLoad Wrapper
- Loading Spinner
- Routing with router dom and pre-configured routes.
- Not Found Page
- Usefull common components: Button, Hyperlink extended from standard html.

## CHANGELOG

07/27/2023 - v1.1.0

### Main updates

- Typescript 5.1
- React 18.2
- Eslint 6.2

### Removed

- Standard Style guide.

04/17/2023

- **Added Hyperlink and Button Components**: These components are extended from
  html standards so you can use it this way:

```ts
  <Button onClick={() => setState(newState)}>My Button</Button>
  <Hyperlink to='#mylink' title='Title to my link'>My Link<Hyperlink>
```

You can add any other standard prop such as `aria-*`, `className`, etc. Only
`href` (for links) has been changed to `to` for better compatibility with
react-router-dom

- **Improved Icon Component**: A fully responsive component to work with svg
  sprites. check `src/components/atoms/icon`
- **Added a few dependencies**: [lodash](https://lodash.com/) and
  [classnames](https://github.com/JedWatson/classnames#readme)
- All included components have been refactored to adapt to the
  [Atomic Design Pattern](https://www.smashingmagazine.com/2016/12/atomic-design-workflow/).
- Also GRC templates have been refactored.
