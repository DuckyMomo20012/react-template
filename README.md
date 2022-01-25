# React template:

> ⚠️ WARNING: This template is unstable, use with caution.

My react app template for practicing with many features:
- React
- React router v6
- Bundle: Vite
- Building UI components with Storybook
- Tailwind
- ESLint
- Prettier

# 1. Create template from scratch:

## 1.1. Create vite project:
```console
yarn create vite
```

## 1.2. Change directory to newly created project:
```console
cd my-app
```

## 1.3. Install required packages from vite:
```console
yarn
```

## 1.4. Install react-router:
```console
yarn add react-router-dom@latest
```

## 1.5. Install more packages (dev dependencies):
- Prettier: prettier
- Eslint: eslint, eslint-plugin-react
- Tailwind: tailwindcss, postcss, autoprefixer
- Storybook: @storybook/addon-postcss
```console
yarn add --dev prettier eslint eslint-plugin-react tailwindcss postcss autoprefixer @storybook/addon-postcss
```

## 1.6. Install tailwindcss:
- Create tailwind config file:

```console
npx tailwindcss init
```

- Follow instructions from tailwind documentation:

https://tailwindcss.com/docs/guides/vite

https://tailwindcss.com/docs/installation/using-postcss

> NOTE: Remember to create a postcss.config.js file

## 1.7. Install storybook:
- Create storybook:
```console
npx sb init
```

- Fix storybook error **"ERR_OSSL_EVP_UNSUPPORTED"**:

Edit npm script:

```json
"storybook": "SET NODE_OPTIONS=--openssl-legacy-provider && start-storybook -p 6006",
```
- Fix storybook error **"PostCSS plugin tailwindcss requires PostCSS 8"**:

Follow instructions: https://storybook.js.org/addons/@storybook/addon-postcss


# 2. TODO:

- [ ] Add npm script for eslint.
