import { Button, Link, Navbar, NavbarBrand, NavbarContent, NavbarItem } from '@nextui-org/react';
import React from 'react'
import { GiMatchTip } from 'react-icons/gi';

export default function TopNav() {
  return (
    <Navbar
        maxWidth='xl'
        className='bg-gradient-to-r from-purple-400 to-purple-700'
        classNames={{
            item: [
                'text-xl',
                'text-white',
            ]
        }}
    >
        <NavbarBrand>
            <GiMatchTip size={40} />
            <div className='font-bold text-3xl flex'>
                <span>Next</span>
                <span>Match</span>
            </div>
        </NavbarBrand>
        <NavbarContent justify='center'>
            <NavbarItem as={Link} href='/members'>Matches</NavbarItem>
            <NavbarItem as={Link} href='/lists'>Lists</NavbarItem>
            <NavbarItem as={Link} href='/messages'>Messages</NavbarItem>
        </NavbarContent>
        <NavbarContent justify='end'>
            <Button variant='bordered' className='text-white'>Login</Button>
            <Button variant='bordered' className='text-white'>Register</Button>
        </NavbarContent>
    </Navbar>
 )
}
