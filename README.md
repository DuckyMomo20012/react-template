# my-app
My React app template for practicing with many features:
- React
- React router v6
- Bundle: Vite
- Building UI components with Storybook
- Tailwind
- ESLint
- Prettier

# 1. Installation:

1. Create vite project:
```bash
yarn create vite
```

2. Change directory to newly created project:
```bash
cd my-app
```

3. Install packages for vite:
```bash
yarn
```

4. Install react-router:
```bash
yarn add react-router-dom@latest
```

5. Install more packages:
- Prettier
- Eslint
- Tailwind
```bash
yarn add --dev prettier eslint eslint-plugin-react tailwindcss postcss autoprefixer @storybook/addon-postcss
```

6. Create tailwind config file:
```bash
npx tailwindcss init
```

7. Follow instructions from tailwind documentation:

> NOTE: Remember to create a postcss.config.js file

https://tailwindcss.com/docs/guides/vite

https://tailwindcss.com/docs/installation/using-postcss


8. Create storybook:
```bash
npx sb init
```

- Fix storybook error code "ERR_OSSL_EVP_UNSUPPORTED":

Edit npm script:

"storybook": "SET NODE_OPTIONS=--openssl-legacy-provider && start-storybook -p
6006",

- Fix storybook error "PostCSS plugin tailwindcss requires PostCSS 8":

Follow instructions: https://storybook.js.org/addons/@storybook/addon-postcss


# 2. TODO:
[] Add npm script for eslint.
