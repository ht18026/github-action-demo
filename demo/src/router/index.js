import { createRouter, createWebHashHistory, createWebHistory } from 'vue-router'
import routes from './routes' // 按你的项目实际

const history = import.meta.env.MODE === 'production'
  ? createWebHashHistory(import.meta.env.BASE_URL) // 线上用 hash
  : createWebHistory(import.meta.env.BASE_URL)     // 本地开发仍然 history

export default createRouter({ history, routes })
