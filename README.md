# React template:

> ⚠️ WARNING: This template is unstable, use with caution.

[![Netlify Status](https://api.netlify.com/api/v1/badges/af6e74f5-7c1e-44fd-93ea-6073c8ac1176/deploy-status)](https://app.netlify.com/sites/my-react-template/deploys)

My react app template for practicing with many features:

<table>
    <tbody>
        <tr>
            <th> Tech Stack </th>
            <th> Package </th>
            <th> Version (package.json) </th>
        </tr>
        <tr>
            <td> JavaScript Library </td>
            <td> React </td>
            <td> <img alt="GitHub package.json dependency version (prod)" src="https://img.shields.io/github/package-json/dependency-version/DuckyMomo20012/react-template/react?color=B9C3FF&style=flat-square"> </td>
        </tr>
        <tr>
            <td> Routing </td>
            <td> React-router </td>
            <td> <img alt="GitHub package.json dependency version (prod)" src="https://img.shields.io/github/package-json/dependency-version/DuckyMomo20012/react-template/react-router-dom?color=B9C3FF&style=flat-square"> </td>
        </tr>
        <tr>
            <td> State Management </td>
            <td> Redux-toolkit </td>
            <td> <img alt="GitHub package.json dependency version (prod)" src="https://img.shields.io/github/package-json/dependency-version/DuckyMomo20012/react-template/@reduxjs/toolkit?color=B9C3FF&style=flat-square"> </td>
        </tr>
        <tr>
            <td> Data fetching </td>
            <td> React-query </td>
            <td> <img alt="GitHub package.json dependency version (prod)" src="https://img.shields.io/github/package-json/dependency-version/DuckyMomo20012/react-template/react-query?color=B9C3FF&style=flat-square"> </td>
        </tr>
        <tr>
            <td> Component Styling </td>
            <td> WindiCSS </td>
            <td> <img alt="GitHub package.json dependency version (dev dep on branch)" src="https://img.shields.io/github/package-json/dependency-version/DuckyMomo20012/react-template/dev/windicss?color=B9C3FF&style=flat-square"> </td>
        </tr>
        <tr>
            <td> UI Components Library </td>
            <td> Mantine </td>
            <td> <img alt="GitHub package.json dependency version (prod)" src="https://img.shields.io/github/package-json/dependency-version/DuckyMomo20012/react-template/@mantine/core?color=B9C3FF&style=flat-square"> </td>
        </tr>
        <tr>
            <td> UI Component Visualizer </td>
            <td> Storybook <br/> (@storybook/react)</td>
            <td> <img alt="GitHub package.json dependency version (dev dep on branch)" src="https://img.shields.io/github/package-json/dependency-version/DuckyMomo20012/react-template/dev/@storybook/react?color=B9C3FF&style=flat-square"> </td>
        </tr>
        <tr>
            <td> Lint tool </td>
            <td> ESLint </td>
            <td> <img alt="GitHub package.json dependency version (dev dep on branch)" src="https://img.shields.io/github/package-json/dependency-version/DuckyMomo20012/react-template/dev/eslint?color=B9C3FF&style=flat-square"> </td>
        </tr>
        <tr>
            <td> Formatter </td>
            <td> Prettier </td>
            <td> <img alt="GitHub package.json dependency version (dev dep on branch)" src="https://img.shields.io/github/package-json/dependency-version/DuckyMomo20012/react-template/dev/prettier?color=B9C3FF&style=flat-square"> </td>
        </tr>
        <tr>
            <td> Build tool </td>
            <td> Vite </td>
            <td> <img alt="GitHub package.json dependency version (dev dep on branch)" src="https://img.shields.io/github/package-json/dependency-version/DuckyMomo20012/react-template/dev/vite?color=B9C3FF&style=flat-square"> </td>
        </tr>
        <tr>
            <td> Icons </td>
            <td> Iconify <br/> (@iconify/react) </td>
            <td> <img alt="GitHub package.json dependency version (prod)" src="https://img.shields.io/github/package-json/dependency-version/DuckyMomo20012/react-template/@iconify/react?color=B9C3FF&style=flat-square"> </td>
        </tr>
    </tbody>
</table>

## 1. Create template from scratch:

### 1.1. Create vite project:

```console
yarn create vite
```

### 1.2. Change directory to newly created project:

```console
cd my-app
```

### 1.3. Install required packages from vite:

```console
yarn
```

### 1.4. Install react-router:

```console
yarn add react-router-dom@latest
```

### 1.5. Install more packages (dev dependencies):

- Prettier: prettier
- Eslint: eslint, eslint-plugin-react
- ~~Tailwind: tailwindcss, postcss, autoprefixer~~
- Storybook: @storybook/addon-postcss

```console
yarn add --dev prettier eslint eslint-plugin-react @storybook/addon-postcss
```

### 1.6. Install tailwindcss:

- Install package:

```console
yarn add --dev vite-plugin-windicss windicss
```

- Follow instructions from windicss documentation:

https://windicss.org/integrations/vite.html

- Install "sort class" plugin for windicss (from tailwindcss):

> NOTE: Create "tailwind.config.js" to avoid errors. Tailwind plugins don't support windicss functions, such as: addDynamic, ...

```console
yarn add --dev prettier-plugin-tailwindcss
```

### 1.7. Install storybook:

- Create storybook:

```console
npx sb init
```

- Fix storybook error **"ERR_OSSL_EVP_UNSUPPORTED"**:

Edit npm script:

```json
"storybook": "SET NODE_OPTIONS=--openssl-legacy-provider && start-storybook -p 6006",
```

### 1.8. Install Mantine:

```console
yarn add @mantine/hooks @mantine/core
```

> NOTE: Override **Mantine configs** with **WindiCSS configs**.\
> More detail in:
> [CustomMantineProvider.jsx](/src/provider/CustomMantineProvider.jsx)

> NOTE: This project is loaded with Google Fonts: Inter, Barlow, Roboto Slab,
> Space Mono

I still keep base Mantine configs if windicss doesn't have those configs (lines
commented with: "Base Mantine")

[Base Mantine theme](https://github.com/mantinedev/mantine/blob/master/src/mantine-styles/src/theme/default-theme.ts)

[Base Windicss theme](https://github.com/windicss/windicss/blob/main/src/config/base.ts)

## 2. TODO:

- [ ] Add Docker, Jenkins for project.
- [x] Migrate react to v18.
- [x] Add npm script for eslint.
- [x] Add react query
- [x] Add ~~redux?~~ redux-toolkit.
