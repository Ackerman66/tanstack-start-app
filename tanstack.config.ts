import { createApp } from '@tanstack/start-server'
import { reactRouter } from '@tanstack/react-start'

export default createApp({
  router: reactRouter({
    routesDirectory: './src/routes',
  }),
})