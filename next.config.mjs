import { copyFile } from 'fs/promises'
import { join } from 'path'
import { fileURLToPath } from 'url'
import { dirname } from 'path'

const __filename = fileURLToPath(import.meta.url)
const __dirname = dirname(__filename)

const isProd = process.env.NODE_ENV === 'production'

/** @type {import('next').NextConfig} */
const nextConfig = {
  assetPrefix: isProd ? 'https://farmience.com/' : '',
  output: 'export',
  images: {
    unoptimized: true,
    loader: 'imgix',
    path: isProd ? 'https://farmience.com' : '',
  },
  
  // Add webpack configuration for _headers file
  webpack: (config, { isServer }) => {
    // Only run on the client side build
    if (!isServer) {
      config.plugins.push({
        apply: (compiler) => {
          compiler.hooks.afterEmit.tapAsync('CopyHeadersPlugin', async (compilation, callback) => {
            try {
              await copyFile(
                join(__dirname, 'public', '_headers'),
                join(__dirname, 'out', '_headers')
              )
              console.log('Successfully copied _headers file to out directory')
            } catch (error) {
              console.error('Error copying _headers file:', error)
            }
            callback()
          })
        }
      })
    }
    return config
  },
}

export default nextConfig