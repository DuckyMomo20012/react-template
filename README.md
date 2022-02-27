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

<details>
<summary>theme.colors</summary>
Use 'blue-gray' for dark color from Mantine, so 'dark' color from WindiCSS is removed

<a href="https://mantine.dev/theming/extend-theme/#default-colors">Base</a>
<a href="https://github.com/mantinedev/mantine/blob/master/src/mantine-styles/src/theme/default-colors.ts#L3">Base (github)</a>
<a href="https://windicss.org/utilities/general/colors.html">Changes</a>
<a href="https://github.com/windicss/windicss/blob/main/src/config/colors.ts#L132">Changes (github)</a>

```diff
{
          pink: [
-           '#fff0f6',
-           '#ffdeeb',
-           '#fcc2d7',
-           '#faa2c1',
-           '#f783ac',
-           '#f06595',
-           '#e64980',
-           '#d6336c',
-           '#c2255c',
-           '#a61e4d',
+           '#fdf2f8',
+           '#fce7f3',
+           '#fbcfe8',
+           '#f9a8d4',
+           '#f472b6',
+           '#ec4899',
+           '#db2777',
+           '#be185d',
+           '#9d174d',
+           '#831843',

          ],
+         rose: [
+           '#fff1f2',
+           '#ffe4e6',
+           '#fecdd3',
+           '#fda4af',
+           '#fb7185',
+           '#f43f5e',
+           '#e11d48',
+           '#be123c',
+           '#9f1239',
+           '#881337',
+         ],
          red: [
-           '#fff5f5',
-           '#ffe3e3',
-           '#ffc9c9',
-           '#ffa8a8',
-           '#ff8787',
-           '#ff6b6b',
-           '#fa5252',
-           '#f03e3e',
-           '#e03131',
-           '#c92a2a',
+           '#fef2f2',
+           '#fee2e2',
+           '#fecaca',
+           '#fca5a5',
+           '#f87171',
+           '#ef4444',
+           '#dc2626',
+           '#b91c1c',
+           '#991b1b',
+           '#7f1d1d',
          ],
          orange: [
-           '#fff4e6',
-           '#ffe8cc',
-           '#ffd8a8',
-           '#ffc078',
-           '#ffa94d',
-           '#ff922b',
-           '#fd7e14',
-           '#f76707',
-           '#e8590c',
-           '#d9480f',
+           '#fff7ed',
+           '#ffedd5',
+           '#fed7aa',
+           '#fdba74',
+           '#fb923c',
+           '#f97316',
+           '#ea580c',
+           '#c2410c',
+           '#9a3412',
+           '#7c2d12',
          ],
          yellow: [
-           '#fff9db',
-           '#fff3bf',
-           '#ffec99',
-           '#ffe066',
-           '#ffd43b',
-           '#fcc419',
-           '#fab005',
-           '#f59f00',
-           '#f08c00',
-           '#e67700',
+           '#fefce8',
+           '#fef9c3',
+           '#fef08a',
+           '#fde047',
+           '#facc15',
+           '#eab308',
+           '#ca8a04',
+           '#a16207',
+           '#854d0e',
+           '#713f12',
          ],
+         amber: [
+           '#fffbeb',
+           '#fef3c7',
+           '#fde68a',
+           '#fcd34d',
+           '#fbbf24',
+           '#f59e0b',
+           '#d97706',
+           '#b45309',
+           '#92400e',
+           '#78350f',
+         ],
          lime: [
-           '#f4fce3',
-           '#e9fac8',
-           '#d8f5a2',
-           '#c0eb75',
-           '#a9e34b',
-           '#94d82d',
-           '#82c91e',
-           '#74b816',
-           '#66a80f',
-           '#5c940d',
+           '#f7fee7',
+           '#ecfccb',
+           '#d9f99d',
+           '#bef264',
+           '#a3e635',
+           '#84cc16',
+           '#65a30d',
+           '#4d7c0f',
+           '#3f6212',
+           '#365314',
          ],
          green: [
-           '#ebfbee',
-           '#d3f9d8',
-           '#b2f2bb',
-           '#8ce99a',
-           '#69db7c',
-           '#51cf66',
-           '#40c057',
-           '#37b24d',
-           '#2f9e44',
-           '#2b8a3e',
+           '#f0fdf4',
+           '#dcfce7',
+           '#bbf7d0',
+           '#86efac',
+           '#4ade80',
+           '#22c55e',
+           '#16a34a',
+           '#15803d',
+           '#166534',
+           '#14532d',
          ],
+         emerald: [
+           '#ecfdf5',
+           '#d1fae5',
+           '#a7f3d0',
+           '#6ee7b7',
+           '#34d399',
+           '#10b981',
+           '#059669',
+           '#047857',
+           '#065f46',
+           '#064e3b',
+         ],
          teal: [
-           '#e6fcf5',
-           '#c3fae8',
-           '#96f2d7',
-           '#63e6be',
-           '#38d9a9',
-           '#20c997',
-           '#12b886',
-           '#0ca678',
-           '#099268',
-           '#087f5b',
+           '#f0fdfa',
+           '#ccfbf1',
+           '#99f6e4',
+           '#5eead4',
+           '#2dd4bf',
+           '#14b8a6',
+           '#0d9488',
+           '#0f766e',
+           '#115e59',
+           '#134e4a',
          ],
          cyan: [
-           '#e3fafc',
-           '#c5f6fa',
-           '#99e9f2',
-           '#66d9e8',
-           '#3bc9db',
-           '#22b8cf',
-           '#15aabf',
-           '#1098ad',
-           '#0c8599',
-           '#0b7285',
+           '#ecfeff',
+           '#cffafe',
+           '#a5f3fc',
+           '#67e8f9',
+           '#22d3ee',
+           '#06b6d4',
+           '#0891b2',
+           '#0e7490',
+           '#155e75',
+           '#164e63',
          ],
+         sky: [
+           '#f0f9ff',
+           '#e0f2fe',
+           '#bae6fd',
+           '#7dd3fc',
+           '#38bdf8',
+           '#0ea5e9',
+           '#0284c7',
+           '#0369a1',
+           '#075985',
+           '#0c4a6e',
+         ],
          blue: [
-           '#e7f5ff',
-           '#d0ebff',
-           '#a5d8ff',
-           '#74c0fc',
-           '#4dabf7',
-           '#339af0',
-           '#228be6',
-           '#1c7ed6',
-           '#1971c2',
-           '#1864ab',
+           '#eff6ff',
+           '#dbeafe',
+           '#bfdbfe',
+           '#93c5fd',
+           '#60a5fa',
+           '#3b82f6',
+           '#2563eb',
+           '#1d4ed8',
+           '#1e40af',
+           '#1e3a8a',
          ],
          indigo: [
-           '#edf2ff',
-           '#dbe4ff',
-           '#bac8ff',
-           '#91a7ff',
-           '#748ffc',
-           '#5c7cfa',
-           '#4c6ef5',
-           '#4263eb',
-           '#3b5bdb',
-           '#364fc7',
+           '#eef2ff',
+           '#e0e7ff',
+           '#c7d2fe',
+           '#a5b4fc',
+           '#818cf8',
+           '#6366f1',
+           '#4f46e5',
+           '#4338ca',
+           '#3730a3',
+           '#312e81',
          ],
+         purple: [
+           '#faf5ff',
+           '#f3e8ff',
+           '#e9d5ff',
+           '#d8b4fe',
+           '#c084fc',
+           '#a855f7',
+           '#9333ea',
+           '#7e22ce',
+           '#6b21a8',
+           '#581c87',
+         ],
          violet: [
-           '#f3f0ff',
-           '#e5dbff',
-           '#d0bfff',
-           '#b197fc',
-           '#9775fa',
-           '#845ef7',
-           '#7950f2',
-           '#7048e8',
-           '#6741d9',
-           '#5f3dc4',
+           '#f5f3ff',
+           '#ede9fe',
+           '#ddd6fe',
+           '#c4b5fd',
+           '#a78bfa',
+           '#8b5cf6',
+           '#7c3aed',
+           '#6d28d9',
+           '#5b21b6',
+           '#4c1d95',
          ],
+         fuchsia: [
+           '#fdf4ff',
+           '#fae8ff',
+           '#f5d0fe',
+           '#f0abfc',
+           '#e879f9',
+           '#d946ef',
+           '#c026d3',
+           '#a21caf',
+           '#86198f',
+           '#701a75',
+         ],
          gray: [
-           '#f8f9fa',
-           '#f1f3f5',
-           '#e9ecef',
-           '#dee2e6',
-           '#ced4da',
-           '#adb5bd',
-           '#868e96',
-           '#495057',
-           '#343a40',
-           '#212529',
+           '#fafafa',
+           '#f4f4f5',
+           '#e4e4e7',
+           '#d4d4d8',
+           '#a1a1aa',
+           '#71717a',
+           '#52525b',
+           '#3f3f46',
+           '#27272a',
+           '#18181b',
          ],
+         'blue-gray': [
+           '#f8fafc',
+           '#f1f5f9',
+           '#e2e8f0',
+           '#cbd5e1',
+           '#94a3b8',
+           '#64748b',
+           '#475569',
+           '#334155',
+           '#1e293b',
+           '#0f172a',
+         ],
+         'cool-gray': [
+           '#f9fafb',
+           '#f3f4f6',
+           '#e5e7eb',
+           '#d1d5db',
+           '#9ca3af',
+           '#6b7280',
+           '#4b5563',
+           '#374151',
+           '#1f2937',
+           '#111827',
+         ],
+         'warm-gray': [
+           '#fafaf9',
+           '#f5f5f4',
+           '#e7e5e4',
+           '#d6d3d1',
+           '#a8a29e',
+           '#78716c',
+           '#57534e',
+           '#44403c',
+           '#292524',
+           '#1c1917',
+         ],
+         'true-gray': [
+           '#fafafa',
+           '#f5f5f5',
+           '#e5e5e5',
+           '#d4d4d4',
+           '#a3a3a3',
+           '#737373',
+           '#525252',
+           '#404040',
+           '#262626',
+           '#171717',
+         ],
+         light: [
+           '#fdfdfd',
+           '#fcfcfc',
+           '#fafafa',
+           '#f8f9fa',
+           '#f6f6f6',
+           '#f2f2f2',
+           '#f1f3f5',
+           '#e9ecef',
+           '#dee2e6',
+           '#dde1e3',
+         ],
          dark: [
-           '#C1C2C5',
-           '#A6A7AB',
-           '#909296',
-           '#5c5f66',
-           '#373A40',
-           '#2C2E33',
-           '#25262b',
-           '#1A1B1E',
-           '#141517',
-           '#101113',
+           '#f8fafc',
+           '#f1f5f9',
+           '#e2e8f0',
+           '#cbd5e1',
+           '#94a3b8',
+           '#64748b',
+           '#475569',
+           '#334155',
+           '#1e293b',
+           '#0f172a',
+         ],
        }
```

</details>

<details>
<summary>theme.fontFamily</summary>
<a href="https://github.com/mantinedev/mantine/blob/master/src/mantine-styles/src/theme/default-theme.ts#L19">Base</a>
<a href="https://github.com/windicss/windicss/blob/main/src/config/base.ts#L530">Changes</a>

```diff
- '-apple-system, BlinkMacSystemFont, Segoe UI, Roboto, Helvetica, Arial, sans-serif, Apple Color Emoji, Segoe UI Emoji'

+ 'ui-sans-serif, system-ui, -apple-system, BlinkMacSystemFont, Segoe UI, Roboto, Helvetica, Arial, sans-serif, Apple Color Emoji, Segoe UI Emoji'
```

</details>

<details>
<summary>theme.lineHeight</summary>
<a href="https://github.com/mantinedev/mantine/blob/master/src/mantine-styles/src/theme/default-theme.ts#L17">Base</a>
<a href="https://github.com/windicss/windicss/blob/main/src/config/base.ts#L797">Changes</a>

```diff
- 1.55

+ 1
```

</details>

<details>
<summary>theme.headings.fontFamily</summary>
<a href="https://github.com/mantinedev/mantine/blob/master/src/mantine-styles/src/theme/default-theme.ts#L66">Base</a>
<a href="https://github.com/windicss/windicss/blob/main/src/config/base.ts#L530">Changes</a>

```diff
- '-apple-system, BlinkMacSystemFont, Segoe UI, Roboto, Helvetica, Arial, sans-serif, Apple Color Emoji, Segoe UI Emoji'

+ 'ui-sans-serif, system-ui, -apple-system, BlinkMacSystemFont, Segoe UI, Roboto, Helvetica, Arial, sans-serif, Apple Color Emoji, Segoe UI Emoji'
```

</details>

<details>
<summary>theme.breakpoints</summary>
<a href="https://mantine.dev/theming/extend-theme/#breakpoints">Base</a>
<a href="https://github.com/mantinedev/mantine/blob/master/src/mantine-styles/src/theme/default-theme.ts#L56">Base (github)</a>
<a href="https://windicss.org/features/responsive-design.html#breakpoints">Changes</a>
<a href="https://github.com/windicss/windicss/blob/main/src/config/base.ts#L66">Changes (github)</a>

```diff
{
-   xs: 576
-   sm: 768
-   md: 992
-   lg: 1200
-   xl: 1400
+   sm: 640,
+   md: 768,
+   lg: 1024,
+   xl: 1280,
+   '2xl': 1536,
}

```

</details>

<details>
<summary>theme.shadows</summary>
<a href="https://github.com/mantinedev/mantine/blob/master/src/mantine-styles/src/theme/default-theme.ts#L24">Base</a>
<a href="https://github.com/windicss/windicss/blob/main/src/config/base.ts#L422">Changes</a>

```diff
{
-   xs: '0 1px 3px rgba(0, 0, 0, 0.05), 0 1px 2px rgba(0, 0, 0, 0.1)',
-   sm: '0 1px 3px rgba(0, 0, 0, 0.05), rgba(0, 0, 0, 0.05) 0px 10px 15px -5px, rgba(0, 0, 0, 0.04) 0px 7px 7px -5px',
-   md: '0 1px 3px rgba(0, 0, 0, 0.05), rgba(0, 0, 0, 0.05) 0px 20px 25px -5px, rgba(0, 0, 0, 0.04) 0px 10px 10px -5px',
-   lg: '0 1px 3px rgba(0, 0, 0, 0.05), rgba(0, 0, 0, 0.05) 0px 28px 23px -7px, rgba(0, 0, 0, 0.04) 0px 12px 12px -7px',
-   xl: '0 1px 3px rgba(0, 0, 0, 0.05), rgba(0, 0, 0, 0.05) 0px 36px 28px -7px, rgba(0, 0, 0, 0.04) 0px 17px 17px -7px',
+   sm: '0 1px 2px 0 rgb(0 0 0/0.05)',
+   md: '0 4px 6px -1px rgb(0 0 0/0.1),0 2px 4px -2px rgb(0 0 0/0.1)',
+   lg: '0 10px 15px -3px rgb(0 0 0/0.1),0 4px 6px -4px rgb(0 0 0/0.1)',
+   xl: '0 20px 25px -5px rgb(0 0 0/0.1),0 8px 10px -6px rgb(0 0 0/0.1)',
+   '2xl': '0 25px 50px -12px rgb(0 0 0/0.25)',
+   inner: 'inset 0 2px 4px 0 rgb(0 0 0/0.05)',
+   none: '0 0 #0000',
}

```

</details>

# 2. TODO:

- [x] Add npm script for eslint.
- [x] Add react query
- [x] Add ~~redux?~~ redux-toolkit
- [ ] Add Docker, Jenkins for project.
