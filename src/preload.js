/*
const { Loader } = require('@googlemaps/js-api-loader')
const {mapsToken} = require("./config.json")


const loader = new Loader({
  apiKey: mapsToken,
  version: "weekly",
  libraries: ["places"]
});

*/
window.addEventListener('load', () => {

  
    const replaceText = (selector, text) => {
      const element = document.getElementById(selector)
      if (element) element.innerText = text
    }
  
    for (const dependency of ['chrome', 'node', 'electron']) {
      replaceText(`${dependency}-version`, process.versions[dependency])
    //loader.load()

    
    
    
    
  }
})
