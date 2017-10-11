console.log('dom.js: loaded')

export function setHeader(txt) {
  console.log('dom.js: called set-header', document)
  
  document.querySelector('h1').textContent = txt
  console.log('dom.js: header updated')
}
