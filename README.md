<div align='center'>
<img src='README.assets/vite-vue-tailwind.png' alt='Vite' width='600'/>
</div>

<p align='center'>
Pharmacopoeia resources of ancient books </b><sup><em>(medicine)</em></sup><br>
</p>

<div align='center'>
<b>English</b> | <a href="README.zh-CN.md">简体中文</a>
</div>

## Features

- ⚡  [Vue 3](https://github.com/vuejs/vue-next), [Vite 2](https://github.com/vitejs/vite), [pnpm](https://pnpm.js.org/) - born with fastness
- 💪 [Typescript](https://www.typescriptlang.org/) - of course! necessary
- 🔥 Use the [new `<script setup>` syntax](https://github.com/vuejs/rfcs/pull/227)
- 💡 [Vue Router v4](https://router.vuejs.org/zh/) - The official router for Vue.js
- 🎨 [Tailwind CSS v3](https://tailwindcss.com/docs/configuration) - Rapidly build modern websites without ever leaving your HTML.
- 🎉 [NProgress](https://github.com/rstacruz/nprogress) - Page loading progress feedback
- 🍍 [State Management via Pinia](https://pinia.esm.dev/) - The Vue Store that you will enjoy using
- 🌼 [DaisyUI](https://daisyui.com/) - The free and open-source Tailwind CSS component library

### First-party plugins needed for Tailwind UI:

- [tailwindcss/forms](https://github.com/tailwindlabs/tailwindcss-forms)
- [tailwindcss/typography](https://tailwindcss.com/docs/typography-plugin)
- [tailwindcss/line-clamp](https://github.com/tailwindlabs/tailwindcss-line-clamp)
- [tailwindcss/aspect-ratio](https://github.com/tailwindlabs/tailwindcss-aspect-ratio)

### Coding Style

- [Eslint](https://eslint.org/docs/user-guide/getting-started)
- [Prettier](https://prettier.io/docs/en/install.html)
- [prettier-plugin-tailwindcss](https://tailwindcss.com/blog/automatic-class-sorting-with-prettier) - Automatic Class Sorting with Prettier

### Recommended IDE Setup

- [VSCode](https://code.visualstudio.com/)
- [Volar](https://marketplace.visualstudio.com/items?itemName=johnsoncodehk.volar)

## directory

```
├── LICENSE
├── README.assets
│   └── vite-vue-tailwind.png
├── README.md
├── README.zh-CN.md
├── index.html
├── node_modules
├── package.json
├── pnpm-lock.yaml
├── postcss.config.js        # tailwind configuration
├── public
│   └── favicon.ico
├── src
│   ├── App.vue
│   ├── assets               # static resource
│   │   └── logo.png
│   ├── components           # global component
│   │   └── Navbar.vue       # Navbar component
│   ├── env.d.ts
│   ├── main.ts
│   ├── router               # Vue router
│   │   └── index.ts
│   ├── settings.ts          # global configuration
│   ├── store                # Pinia store
│   │   ├── counter.ts
│   │   └── index.ts
│   ├── styles               # global style
│   │   ├── main.scss
│   │   ├── nprogress.scss   # nprogress style
│   │   ├── tailwind.css
│   │   └── variables.scss
│   ├── utils                # global public method
│   │   └── logger.ts        # log print
│   └── views                # all pages
│       └── Index.vue
├── tailwind.config.js       # tailwind configuration
├── tsconfig.json            # TS compilation configuration
└── vite.config.ts           # Vite configuration

```

## Usage

### Development

Just run and visit http://localhost:8888

```bash
pnpm run dev
```

### Build

To build the App, run

```bash
pnpm run build
```

And you will see the generated file in `dist` that ready to be served.
