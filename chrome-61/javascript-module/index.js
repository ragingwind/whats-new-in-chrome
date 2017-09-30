export function setHeader(txt) {
  document.addEventListener('DOMContentLoaded', () => {
    setTimeout(function() {
      const h1 = document.querySelector('h1')
      h1.textContent = txt
    }, 1500)
  })
}