import React from 'react'
import Image from 'next/image'
import testimage from '@/images/EnkelTrick.png'
import Container from './Container'

const Header = () => {
  return (
    <header className="w-full bg-gray-300">
        <Container className="bg-red-300 max-w-lg">
            {/* Logo */}
            <Image src={testimage} alt="TestImage" height={50} className="mx-auto"/>
            {/* Navigation */}
            {/* Theme Switcher */}
            {/* Input */}
        </Container>
    </header>
  )
}

export default Header