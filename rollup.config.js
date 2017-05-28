import babel from 'rollup-plugin-babel'
import uglify from 'rollup-plugin-uglify'

const plugins = [babel()]
if (process.env.NODE_ENV === 'production') plugins.push(uglify())

export default({
  entry: 'src/app/index.js',
  dest: 'dist/bundle.js',
  format: 'iife',
  moduleName: 'nanoMVC',
  plugins
})
