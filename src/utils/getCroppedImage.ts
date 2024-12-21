const RESULT_MIMETYPE = 'image/jpeg'

const createImage = (url: string) => {
  return new Promise((resolve, reject) => {
    const image = new Image()
    image.addEventListener('load', () => resolve(image))
    image.addEventListener('error', (error) => reject(error))
    image.src = url
  })
}

const getCroppedImage = async (
  imageSrc: string,
  croppedAreaObj: any,
  asBase64: boolean = false,
): Promise<any> => {
  const image: any = await createImage(imageSrc)
  const canvas = document.createElement('canvas')
  canvas.width = croppedAreaObj.width
  canvas.height = croppedAreaObj.height
  const ctx = canvas.getContext('2d')

  if (!ctx) {
    return null
  }

  ctx.fillStyle = '#ffffff'
  ctx.fillRect(0, 0, canvas.width, canvas.height)
  ctx.drawImage(
    image,
    croppedAreaObj.x,
    croppedAreaObj.y,
    croppedAreaObj.width,
    croppedAreaObj.height,
    0,
    0,
    croppedAreaObj.width,
    croppedAreaObj.height,
  )

  if (asBase64) {
    // As Base64 string
    return canvas.toDataURL(RESULT_MIMETYPE)
  }

  // As a blob
  return new Promise((resolve) => {
    canvas.toBlob((file) => {
      resolve(file)
    }, RESULT_MIMETYPE)
  })
}

export default getCroppedImage
