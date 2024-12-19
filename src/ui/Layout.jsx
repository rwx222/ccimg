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
              href='https://buymeacoffee.com/vapor91'
              target='_blank'
              className='text-xl leading-5 md:text-base md:leading-5'
            >
              {`Buy me a ☕️`}
            </Navbar.Link>

            <Navbar.Link
              href='https://x.com/andresdotsh'
              target='_blank'
              className='text-xl leading-5 md:text-base md:leading-5'
            >
              {`With ❤️ by`}
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
