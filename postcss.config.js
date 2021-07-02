module.exports = {
    plugins: {
      autoprefixer: {},
      "postcss-px-to-viewport": {
        viewportWidth: 375, 
        viewportHeight: 667, 
        unitPrecision: 5, 
        viewportUnit: 'vw', 
        selectorBlankList: [], 
        minPixelValue: 1, 
        mediaQuery: false,
        exclude:[]  
      }
    }
}