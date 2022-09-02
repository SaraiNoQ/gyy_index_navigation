<div align='center'>
<img src='README.assets/vite-vue-tailwind.png' alt='Vite' width='600'/>
</div>

<p align='center'>
古籍药典资源
</p>

## 特性

- ⚡  [Vue 3](https://github.com/vuejs/vue-next), [Vite 2](https://github.com/vitejs/vite), [pnpm](https://pnpm.js.org/) - 为速度而生
- 💪 [Typescript](https://www.typescriptlang.org/) - 强大的类型检查
- 🔥 使用 [新的 `<script setup>` 语法](https://github.com/vuejs/rfcs/pull/227)
- 💡 [Vue Router v4](https://router.vuejs.org/zh/) - Vue 路由系统
- 🎨 [Tailwind CSS v3](https://tailwindcss.com/docs/configuration) - 快速建立现代网站，而不必离开 HTML。
- 🎉 [NProgress](https://github.com/rstacruz/nprogress) - 页面加载进度反馈
- 🍍 [使用 Pinia 的状态管理](https://pinia.esm.dev/)
- 🌼 [Daisy](https://daisyui.com/) - 开源的 Tailwind CSS 组件库

### 集成 Tailwind 插件:

- [tailwindcss/forms](https://github.com/tailwindlabs/tailwindcss-forms)
- [tailwindcss/typography](https://tailwindcss.com/docs/typography-plugin)
- [tailwindcss/line-clamp](https://github.com/tailwindlabs/tailwindcss-line-clamp)
- [tailwindcss/aspect-ratio](https://github.com/tailwindlabs/tailwindcss-aspect-ratio)

### 编码风格

- [Eslint](https://eslint.org/docs/user-guide/getting-started)
- [Prettier](https://prettier.io/docs/en/install.html)
- [prettier-plugin-tailwindcss](https://tailwindcss.com/blog/automatic-class-sorting-with-prettier) - 使用 Prettier 自动分类 TailWind 类名

### 推荐的 IDE 设置

- [VSCode](https://code.visualstudio.com/)
- [Volar](https://marketplace.visualstudio.com/items?itemName=johnsoncodehk.volar)

## 项目结构

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

## 使用

### 开发

只需要执行以下命令就可以在 http://localhost:8888 中看到

```bash
pnpm run dev
```

### 构建

构建该应用只需要执行以下命令

```bash
pnpm run build
```

然后你会看到用于发布的 `dist` 文件夹被生成。
