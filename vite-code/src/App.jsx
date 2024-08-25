import { DarkThemeToggle, Flowbite, Navbar, Button } from 'flowbite-react'

import GitHubIcon from './Icons/GitHubIcon'

export default function App() {
  return (
    <Flowbite>
      <div className='dark:bg-gray-800'>
        <Navbar fluid rounded className='mx-auto max-w-3xl'>
          <Navbar.Brand href='https://andresdotsh.github.io/crop-and-compress-images/'>
            <img
              src='/favicon.svg'
              className='h-9'
              alt='Crop & Compress Logo'
            />

            <span className='pl-3 self-center whitespace-nowrap text-sm sm:text-xl font-semibold dark:text-white'>{`Crop & Compress`}</span>
          </Navbar.Brand>

          <div className='flex md:order-2'>
            <Button
              size={'sm'}
              className='mr-5 md:mr-0'
              as='a'
              href='https://github.com/andresdotsh/crop-and-compress-images'
              target='_blanks'
            >
              <GitHubIcon className='xs:mr-1' width='20' height='20' />
              <span className='hidden xs:inline'>{`GitHub`}</span>
            </Button>
            <Navbar.Toggle />
          </div>

          <Navbar.Collapse>
            <Navbar.Link
              href='https://www.npmjs.com/package/react-easy-crop'
              target='_blank'
            >{`react-easy-crop`}</Navbar.Link>

            <Navbar.Link
              href='https://www.npmjs.com/package/js-image-compressor'
              target='_blank'
            >{`js-image-compressor`}</Navbar.Link>
          </Navbar.Collapse>
        </Navbar>
      </div>

      <div className='px-5 pt-1 pb-12 mx-auto max-w-3xl md:px-4'>
        <div className='flex justify-end'>
          <DarkThemeToggle />
        </div>
        <div>{`hello world`}</div>
      </div>
    </Flowbite>
  )
}
