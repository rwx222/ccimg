import PropTypes from 'prop-types'
import { Flowbite, Navbar, Button } from 'flowbite-react'
import { Toaster } from 'react-hot-toast'

import GitHubIcon from '../Icons/GitHubIcon'
import MainSvg from '../assets/main.svg'

function Layout({ children }) {
  return (
    <Flowbite>
      <div className='bg-[#97afb9] dark:bg-gray-800'>
        <Navbar
          fluid
          rounded
          className='mx-auto max-w-3xl bg-[#97afb9] dark:bg-gray-800'
        >
          <Navbar.Brand href='https://ccimg.vapor91.com/'>
            <img src={MainSvg} className='h-9' alt='Crop & Compress Logo' />

            <span className='pl-3 self-center whitespace-nowrap text-xl font-semibold dark:text-white'>{`ccimg`}</span>
          </Navbar.Brand>

          <div className='flex md:order-2'>
            <Button
              size={'sm'}
              className='mr-4 md:mr-0'
              as='a'
              href='https://github.com/andresdotsh/crop-and-compress-images'
              target='_blanks'
            >
              <GitHubIcon className='xs:mr-1' width='20' height='20' />
              <span className='hidden xs:inline text-base leading-5 font-normal'>{`GitHub`}</span>
            </Button>
            <Navbar.Toggle />
          </div>

          <Navbar.Collapse>
            <Navbar.Link
              href='https://www.npmjs.com/package/react-easy-crop'
              target='_blank'
              className='text-lg leading-5 md:text-sm md:leading-5'
            >
              {`react-easy-crop`}
            </Navbar.Link>

            <Navbar.Link
              href='https://www.npmjs.com/package/js-image-compressor'
              target='_blank'
              className='text-lg leading-5 md:text-sm md:leading-5'
            >
              {`js-image-compressor`}
            </Navbar.Link>

            <Navbar.Link
              href='https://x.com/andresdotsh'
              target='_blank'
              className='text-lg leading-5 md:text-sm md:leading-5'
            >
              <span className='md:hidden'>{`with ❤️ by`}</span>
              <span className='hidden md:inline'>{`❤️`}</span>
            </Navbar.Link>
          </Navbar.Collapse>
        </Navbar>
      </div>

      {children}
      <Toaster />
    </Flowbite>
  )
}

Layout.propTypes = {
  children: PropTypes.node.isRequired,
  topLeftContent: PropTypes.node,
}

export default Layout
