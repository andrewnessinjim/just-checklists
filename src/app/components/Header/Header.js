import Image from 'next/image';
import React from 'react';

function Header() {
  return (
    <header>
      <Image src='logo.svg' alt='Logo' width={64} height={64}/>
    </header>
  );
}

export default Header;
