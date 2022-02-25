# React template:

> ⚠️ WARNING: This template is unstable, use with caution.

My react app template for practicing with many features:

<table>
    <tbody>
        <tr>
            <td> Framework </td>
            <td> React </td>
            <td> v17 </td>
        </tr>
        <tr>
            <td> Routing </td>
            <td> React-router </td>
            <td> v6 </td>
        </tr>
        <tr>
            <td> State Management </td>
            <td> Redux-toolkit </td>
            <td> v1 </td>
        </tr>
        <tr>
            <td> Data fetching </td>
            <td> React-query </td>
            <td> v3 </td>
        </tr>
        <tr>
            <td> Component Styling </td>
            <td> WindiCSS </td>
            <td> v3 </td>
        </tr>
        <tr>
            <td> UI Components Library </td>
            <td> Mantine </td>
            <td> v3 </td>
        </tr>
        <tr>
            <td> UI Component Visualizer </td>
            <td> Storybook </td>
            <td> v6 (@storybook/react)</td>
        </tr>
        <tr>
            <td> Lint tool </td>
            <td> ESLint </td>
            <td> v8 </td>
        </tr>
        <tr>
            <td> Formatter </td>
            <td> Prettier </td>
            <td> v2 </td>
        </tr>
        <tr>
            <td> Build tool </td>
            <td> Vite </td>
            <td> v2 </td>
        </tr>
        <tr>
            <td> Icons </td>
            <td> Iconify </td>
            <td> v3 </td>
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

> NOTE: Create "tailwind.config.js" to avoid errors. Tailwind plugins don't support windicss functions, such as: addDynamic, ...

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

> NOTE: Override **Mantine configs** with **WindiCSS configs**.

<table>
    <tbody>
        <tr>
            <td> Config </td>
            <td> Mantine's default </td>
            <td> Changes </td>
        </tr>
        <tr>
            <td> theme.colors </td>
            <td>
                <p>Mantine base colors</p>
                <a href="https://mantine.dev/theming/extend-theme/#default-colors">link</a>
            </td>
            <td>
                <p>Use 'blue-gray' for dark color from Mantine, so 'dark' color from WindiCSS is removed</p>
                <a href="https://windicss.org/utilities/general/colors.html">link</a>
            </td>
        </tr>
        <tr>
            <td> theme.fontFamily </td>
            <td>
                <p>'-apple-system, BlinkMacSystemFont, Segoe UI, Roboto, Helvetica, Arial, sans-serif, Apple Color Emoji, Segoe UI Emoji'</p>
                <a href="https://github.com/mantinedev/mantine/blob/master/src/mantine-styles/src/theme/default-theme.ts#L19">link</a>
            </td>
            <td>
                <p>'ui-sans-serif, system-ui, -apple-system, BlinkMacSystemFont, Segoe UI, Roboto, Helvetica, Arial, sans-serif, Apple Color Emoji, Segoe UI Emoji'</p>
                <a href="https://github.com/windicss/windicss/blob/main/src/config/base.ts#L530">link</a>
            </td>
        </tr>
        <tr>
            <td> theme.lineHeight </td>
            <td>
                <p>1.55</p>
                <a href="https://github.com/mantinedev/mantine/blob/master/src/mantine-styles/src/theme/default-theme.ts#L17">link</a>
            </td>
            <td>
                <p>1</p>
                <a href="https://github.com/windicss/windicss/blob/main/src/config/base.ts#L797">link</a>
            </td>
        </tr>
        <tr>
            <td> theme.headings.fontFamily </td>
            <td>
                <p>'-apple-system, BlinkMacSystemFont, Segoe UI, Roboto, Helvetica, Arial, sans-serif, Apple Color Emoji, Segoe UI Emoji'</p>
                <a href="https://github.com/mantinedev/mantine/blob/master/src/mantine-styles/src/theme/default-theme.ts#L66">link</a>
            </td>
            <td>
                <p>'ui-sans-serif, system-ui, -apple-system, BlinkMacSystemFont, Segoe UI, Roboto, Helvetica, Arial, sans-serif, Apple Color Emoji, Segoe UI Emoji'</p>
                <a href="https://github.com/windicss/windicss/blob/main/src/config/base.ts#L530">link</a>
            </td>
        </tr>
        <tr>
            <td> theme.breakpoints </td>
            <td>
                <ul>
                    <li>xs: 576</li>
                    <li>sm: 768</li>
                    <li>md: 992</li>
                    <li>lg: 1200</li>
                    <li>xl: 1400</li>
                </ul>
                <a href="https://mantine.dev/theming/extend-theme/#breakpoints">link</a>
            </td>
            <td>
                <ul>
                    <li>sm: 640</li>
                    <li>md: 768</li>
                    <li>lg: 1024</li>
                    <li>xl: 1280</li>
                    <li>'2xl': 1536</li>
                </ul>
                <a href="https://windicss.org/features/responsive-design.html#breakpoints">link</a>
            </td>
        </tr>
        <tr>
            <td> theme.shadows </td>
            <td>
                <ul>
                    <li>xs: '0 1px 3px rgba(0, 0, 0, 0.05), 0 1px 2px rgba(0, 0, 0, 0.1)', </li>
                    <li>sm: '0 1px 3px rgba(0, 0, 0, 0.05), rgba(0, 0, 0, 0.05) 0px 10px 15px -5px, rgba(0, 0, 0, 0.04) 0px 7px 7px -5px',</li>
                    <li>md: '0 1px 3px rgba(0, 0, 0, 0.05), rgba(0, 0, 0, 0.05) 0px 20px 25px -5px, rgba(0, 0, 0, 0.04) 0px 10px 10px -5px',</li>
                    <li>lg: '0 1px 3px rgba(0, 0, 0, 0.05), rgba(0, 0, 0, 0.05) 0px 28px 23px -7px, rgba(0, 0, 0, 0.04) 0px 12px 12px -7px',</li>
                    <li>xl: '0 1px 3px rgba(0, 0, 0, 0.05), rgba(0, 0, 0, 0.05) 0px 36px 28px -7px, rgba(0, 0, 0, 0.04) 0px 17px 17px -7px',</li>
                </ul>
                <a href="https://github.com/mantinedev/mantine/blob/master/src/mantine-styles/src/theme/default-theme.ts#L24">link
                </a>
            </td>
            <td>
                <ul>
                    <li>sm: '0 1px 2px 0 rgb(0 0 0/0.05)',</li>
                    <li>md: '0 4px 6px -1px rgb(0 0 0/0.1),0 2px 4px -2px rgb(0 0 0/0.1)',</li>
                    <li>lg: '0 10px 15px -3px rgb(0 0 0/0.1),0 4px 6px -4px rgb(0 0 0/0.1)',</li>
                    <li>xl: '0 20px 25px -5px rgb(0 0 0/0.1),0 8px 10px -6px rgb(0 0 0/0.1)',</li>
                    <li>'2xl': '0 25px 50px -12px rgb(0 0 0/0.25)',</li>
                    <li>inner: 'inset 0 2px 4px 0 rgb(0 0 0/0.05)',</li>
                    <li>none: '0 0 #0000',</li>
                </ul>
                <a href="https://github.com/windicss/windicss/blob/main/src/config/base.ts#L422">link
                </a>
            </td>
        </tr>
    </tbody>
</table>

# 2. TODO:

- [x] Add npm script for eslint.
- [x] Add react query
- [x] Add ~~redux?~~ redux-toolkit
- [ ] Add Docker, Jenkins for project.
