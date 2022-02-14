# React template:

> ⚠️ WARNING: This template is unstable, use with caution.

My react app template for practicing with many features:

<table>
<tbody>
<tr>
<td> Framework </td> <td> React </td> <td> v17 </td>
</tr>

<tr>
<td> Routing </td> <td> React-router </td> <td> v6 </td>
</tr>

<tr>
<td> State Management </td> <td> Redux-toolkit </td> <td> v1 </td>
</tr>

<tr>
<td> Data fetching </td> <td> React-query </td> <td> v3 </td>
</tr>

<tr>
<td> Component Styling </td> <td> WindiCSS </td> <td> v3 </td>
</tr>

<tr>
<td> UI Components Library </td> <td> Mantine </td> <td> v3 </td>
</tr>

<tr>
<td> UI Component Visualizer </td> <td> Storybook </td> <td> v6 (@storybook/react)</td>
</tr>

<tr>
<td> Lint tool </td> <td> ESLint </td> <td> v8 </td>
</tr>

<tr>
<td> Formatter </td> <td> Prettier </td> <td> v2 </td>
</tr>

<tr>
<td> Build tool </td> <td> Vite </td> <td> v2 </td>
</tr>

<tr>
<td> Icons </td> <td> React Icons </td> <td> v4 </td>
</tr>
</tbody>
</table>

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

> NOTE: Create "tailwind.config.js" to avoid errors. Tailwind plugins don't support windicss functions, such as: addDynamic,...

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

## 1.8. Install Mantine:

```console
yarn add @mantine/hooks @mantine/core
```

> NOTE: Apply **WindiCSS configs** to Color, font family, breakpoints, headings,
> line height configs.

<table>
<tbody>
<tr>
<td> Config </td> <td> Mantine's default </td> <td> Changes </td>
</tr>
<tr>
<td> theme.colors </td> <td> https://mantine.dev/theming/extend-theme/#default-colors </td> <td> https://windicss.org/utilities/general/colors.html </td>
</tr>
<tr>
<td> theme.fontFamily </td> <td> <a href="https://github.com/mantinedev/mantine/blob/master/src/mantine-styles/src/theme/default-theme.ts#L19">'-apple-system, BlinkMacSystemFont, Segoe UI, Roboto, Helvetica, Arial, sans-serif, Apple Color Emoji, Segoe UI Emoji'</a> </td> <td> <a href="https://github.com/windicss/windicss/blob/main/src/config/base.ts#L530">'ui-sans-serif, system-ui,-apple-system, BlinkMacSystemFont, Segoe UI, Roboto, Helvetica, Arial, sans-serif, Apple Color Emoji, Segoe UI Emoji'</a> </td>
</tr>
<tr>
<td> theme.lineHeight </td> <td> <a href="https://github.com/mantinedev/mantine/blob/master/src/mantine-styles/src/theme/default-theme.ts#L17">1.55</a> </td> <td> <a href="https://github.com/windicss/windicss/blob/main/src/config/base.ts#L797">1</a> </td>
</tr>
<tr>
<td> theme.headings.fontFamily </td> <td> <a href="https://github.com/mantinedev/mantine/blob/master/src/mantine-styles/src/theme/default-theme.ts#L66">'-apple-system, BlinkMacSystemFont, Segoe UI, Roboto, Helvetica, Arial, sans-serif, Apple Color Emoji, Segoe UI Emoji'</a> </td> <td> <a href="https://github.com/windicss/windicss/blob/main/src/config/base.ts#L530">'ui-sans-serif, system-ui,-apple-system, BlinkMacSystemFont, Segoe UI, Roboto, Helvetica, Arial, sans-serif, Apple Color Emoji, Segoe UI Emoji'</a> </td>
</tr>
<tr>
<td> theme.breakpoints </td> <td> <a href="https://mantine.dev/theming/extend-theme/#breakpoints">xs: 576, sm: 768, md: 992, lg: 1200, xl: 1400,</a> </td> <td> <a href="https://windicss.org/features/responsive-design.html#breakpoints">sm: 640, md: 768, lg: 1024, xl: 1280, '2xl': 1536,</a> </td>
</tr>
</tbody>
</table>
# 2. TODO:

- [x] Add npm script for eslint.
- [x] Add react query
- [x] Add ~~redux?~~ redux-toolkit
- [ ] Add Docker, Jenkins for project.
