console.log('inline: loaded')

export function setHeader(txt) {
  console.log('inline: called set-header', document)
  
  document.querySelector('h1').textContent = txt
  console.log('inline: header updated')
}
