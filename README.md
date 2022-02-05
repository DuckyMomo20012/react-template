# React template:

> ⚠️ WARNING: This template is unstable, use with caution.

My react app template for practicing with many features:
- React
- React router v6
- Bundle: Vite
- Building UI components with Storybook
- Windicss
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
- ~~Tailwind: tailwindcss, postcss, autoprefixer~~
- Storybook: @storybook/addon-postcss
```console
yarn add --dev prettier eslint eslint-plugin-react @storybook/addon-postcss
```

## 1.6. Install tailwindcss:
- Install package:

```console
yarn add --dev vite-plugin-windicss windicss
```

- Follow instructions from windicss documentation:

https://windicss.org/integrations/vite.html

- Install "sort class" plugin for windicss (from tailwindcss):

```console
yarn add --dev prettier-plugin-tailwindcss
```

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


# 2. TODO:

- [ ] Add npm script for eslint.
- [ ] Add Docker, Jenkins for project.
- [ ] Add react query?
- [ ] Add redux?
