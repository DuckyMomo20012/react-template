# React template:

> ⚠️ WARNING: This template is unstable, use with caution.

[![Netlify Status](https://api.netlify.com/api/v1/badges/af6e74f5-7c1e-44fd-93ea-6073c8ac1176/deploy-status)](https://app.netlify.com/sites/my-react-template/deploys)

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

## Getting Started:

First, install dependencies:

```bash
yarn
```

Then run the development server:

```bash
yarn dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the
result.

## Folder Architecture:

```
.
├── components
│   ├── elements
│   ├── layouts
│   └── modules
├── constants
├── context
├── hooks
├── pages
│   └── api
├── routes
├── store
│   └── slice
├── stories
└── main.jsx
```

- `elements`: Basic building blocks.
- `layouts`: Wrap your pages with default layout.
- `modules`: Modules are built out of multiple `elements`.
- `constants`: Global constants.
- `context`: React Context providers.
- `hooks`: Custom hooks.
- `pages`: Your page routes (adopt from NextJS folder architecture).
- `pages/api`: Your apis (adopt from NextJS folder architecture).
- `routes`: Global route for react-router.
- `store`: Store your Redux store.
- `store/slice`: Store your Redux slices.
- `stories`: Your stories components.

## Build Template from Scratch:

Checkout [Wiki](https://github.com/DuckyMomo20012/react-template/wiki) page

## TODO:

- [ ] Add Docker, Jenkins for project.
- [x] Migrate react to v18.
- [x] Add npm script for eslint.
- [x] Add react query
- [x] Add ~~redux?~~ redux-toolkit.
