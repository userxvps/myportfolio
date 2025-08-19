// Copy files from the static-assets directory to the dist directory using fs
// This script is executed by the build process
import { RESET_STYLES } from '@nordcraft/core/dist/styling/theme.const'
import fs from 'fs'
import path from 'path'
import { fileURLToPath } from 'url'

const __filename = fileURLToPath(import.meta.url)
const __dirname = path.dirname(__filename)

const resolvePath = (...segments) => path.resolve(__dirname, ...segments)

try {
  const staticDir = resolvePath('../assets/_static')
  const distDir = resolvePath('../dist')
  fs.mkdirSync(staticDir, { recursive: true })
  fs.mkdirSync(distDir, { recursive: true })

  const filesToCopy = [
    'page.main.esm.js',
    'page.main.esm.js.map',
    'custom-element.main.esm.js',
  ]

  filesToCopy.forEach((file) => {
    const source = resolvePath('../node_modules/@nordcraft/runtime/dist', file)
    const destination = resolvePath('../assets/_static', file)
    fs.copyFileSync(source, destination)
  })

  fs.writeFileSync(resolvePath('../assets/_static/reset.css'), RESET_STYLES)

  fs.copyFileSync(
    resolvePath('../__project__/project.json'),
    resolvePath('../dist/project.json'),
  )
} catch (error) {
  console.error('Error during static assets sync:', error)
  process.exit(1)
}
