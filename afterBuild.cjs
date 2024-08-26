const fs = require('fs')
const path = require('path')

const filePath = path.join(__dirname, 'docs', 'index.html')

fs.readFile(filePath, 'utf8', (err, data) => {
  if (err) {
    console.error('💥💥💥 Error reading the file:', err)
    return
  }

  // necessary for GitHub Pages
  const prefix = '/crop-and-compress-images'

  const updatedData = data
    .replace(/href="\//g, `href="${prefix}/`)
    .replace(/src="\//g, `src="${prefix}/`)

  fs.writeFile(filePath, updatedData, 'utf8', (err) => {
    if (err) {
      console.error('💥💥💥 Error writing the file:', err)
      return
    }
    console.info('✅✅✅ File updated successfully!')
  })
})
