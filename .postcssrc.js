/**
 * .postcssrc is Only for bundling not for running on browser.
 * that's why we use Common Js(running on Node.js). not a ESM (for running on browser) 
 * 
 * Common Js :
 * import -> require()
 * export -> module.exports
 */

// import autoprefixer from 'autoprefixer'

// export {
//   plugins: [
//     autoprefixer
//   ]
// }
module.exports = {
  plugins: [
    require('autoprefixer')
  ]
}