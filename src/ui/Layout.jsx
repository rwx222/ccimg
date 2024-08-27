import PropTypes from 'prop-types'
import { DarkThemeToggle, Flowbite, Navbar, Button } from 'flowbite-react'
import { Toaster } from 'react-hot-toast'

import GitHubIcon from '../Icons/GitHubIcon'
import MainSvg from '../assets/main.svg'

function Layout({ children, topLeftContent }) {
  return (
    <Flowbite>
      <div className='bg-[#97afb9] dark:bg-gray-800'>
        <Navbar
          fluid
          rounded
          className='mx-auto max-w-3xl bg-[#97afb9] dark:bg-gray-800'
        >
          <Navbar.Brand href='https://andresdotsh.github.io/crop-and-compress-images/'>
            <img src={MainSvg} className='h-9' alt='Crop & Compress Logo' />

            <span className='pl-3 self-center whitespace-nowrap text-sm sm:text-xl font-semibold dark:text-white'>{`Crop & Compress`}</span>
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

      <div className='pt-1 pb-12 mx-auto max-w-3xl'>
        <div className='flex justify-between items-center cu-px-standard'>
          <div>{topLeftContent}</div>

          <DarkThemeToggle />
        </div>

        <div>{children}</div>
      </div>

      <Toaster />
    </Flowbite>
  )
}

Layout.propTypes = {
  children: PropTypes.node.isRequired,
  topLeftContent: PropTypes.node,
}

export default Layout
