import path from 'path'

import { defineConfig, type ConfigEnv } from 'vite'
import { sveltekit } from '@sveltejs/kit/vite'

import browserslist from 'browserslist'
import { browserslistToTargets } from 'lightningcss'


export default ({ mode }: ConfigEnv) => {
  const isProduction = mode === 'production'

  const genDevName = (name: string, filename: string, css: string) => {
    const file = path.basename(filename, path.extname(filename))
    const hash = Buffer.from(css).toString('base64').substring(0, 2)
    
    return `${file}__${name}__${hash}`.replace(/\.module/g, '')
  }

  return defineConfig({
    build: {
      cssMinify: 'lightningcss'
    },

    css: {
      lightningcss: {
        drafts: {
          customMedia: true
        },
        targets: browserslistToTargets(browserslist('>= 0.25%'))
      },
      modules: {
        generateScopedName: isProduction
          ? '[hash:base64:2]'
          : genDevName
      }
    },

    plugins: [
      sveltekit()
    ],

    server: {
      headers: {
        'accept-ch': 'sec-ch-prefers-color-scheme sec-ch-viewport-width'
      },
      port: 3000
    }
  })
}
