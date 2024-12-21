export const IMAGE_MAX_SIZE_IN_MB = 20

export const LSK_LAST_ASPECT_OPTION = 'LSK_ASPECT_OPTION'
export const LSK_LAST_COMPRESSION_QUALITY = 'LSK_COMPRESSION_QUALITY'
export const LSK_LAST_COMPRESSION_MAX_WIDTH = 'LSK_COMPRESSION_MAX_WIDTH'
export const LSK_LAST_COMPRESSION_MAX_HEIGHT = 'LSK_COMPRESSION_MAX_HEIGHT'

type RegularOption = {
  id: string
  value: number
}
export const ASPECT_OPTIONS: RegularOption[] = [
  { id: '1:1 Square', value: 1 },
  { id: '16:9 Desktop', value: 16 / 9 },
  { id: '4:3 Classic', value: 4 / 3 },
  { id: '3:2 Photography', value: 3 / 2 },
  { id: '21:9 Cinematic', value: 21 / 9 },
  { id: '3:4 Vertical', value: 3 / 4 },
  { id: '9:16 Phone', value: 9 / 16 },
]

export const QUALITY_OPTIONS: RegularOption[] = [
  { id: '0.9 (Higher)', value: 0.9 },
  { id: '0.8', value: 0.8 },
  { id: '0.7', value: 0.7 },
  { id: '0.6', value: 0.6 },
  { id: '0.5', value: 0.5 },
  { id: '0.4', value: 0.4 },
  { id: '0.3', value: 0.3 },
  { id: '0.2', value: 0.2 },
  { id: '0.1 (Lower)', value: 0.1 },
]

type SizeOption = {
  id: string
  value: number | null
}
export const SIZE_OPTIONS: SizeOption[] = [
  { id: 'None', value: null },
  { id: '400px', value: 400 },
  { id: '480px', value: 480 },
  { id: '600px', value: 600 },
  { id: '640px', value: 640 },
  { id: '720px', value: 720 },
  { id: '800px', value: 800 },
  { id: '1024px', value: 1024 },
  { id: '1080px', value: 1080 },
  { id: '1280px', value: 1280 },
  { id: '1440px', value: 1440 },
  { id: '1920px', value: 1920 },
  { id: '2160px', value: 2160 },
  { id: '2560px', value: 2560 },
  { id: '3840px', value: 3840 },
]
