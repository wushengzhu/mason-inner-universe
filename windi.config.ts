// windi.config.ts
import { defineConfig } from 'windicss/helpers';

export default defineConfig({
  theme: {
    extend: {
      colors: {
        'brand-blue': '#0070f3',
        'brand-red': '#ff0000',
      },
    },
  },
  plugins: [
    // 添加自定义或第三方插件
  ],
  purge: ['./src/**/*.{html,ts,tsx}', './public/index.html'], // 指定扫描目录
});
