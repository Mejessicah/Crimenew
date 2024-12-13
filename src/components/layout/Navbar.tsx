import React from 'react';
import NavLinks from './NavLinks';
import Logo from './Logo';

export default function Navbar() {
  return (
    <nav className="bg-slate-900 text-white p-4 fixed w-full top-0 z-50">
      <div className="container mx-auto flex items-center justify-between">
        <Logo />
        <NavLinks />
      </div>
    </nav>
  );
}