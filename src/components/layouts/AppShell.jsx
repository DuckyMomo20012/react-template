import { AppShell as MantineAppShell, Overlay } from '@mantine/core';
import { useState } from 'react';
import { Outlet } from 'react-router-dom';
import { Footer } from '@/components/layouts/Footer';
import { Header } from '@/components/layouts/Header';
import { Navbar } from '@/components/layouts/Navbar';

const AppShell = () => {
  const [navBarOpened, setNavBarOpened] = useState(false);

  return (
    <MantineAppShell
      footer={<Footer />}
      header={<Header setNavBarOpened={setNavBarOpened} />}
      navbar={
        <Navbar navBarOpened={navBarOpened} setNavBarOpened={setNavBarOpened} />
      }
    >
      {navBarOpened && <Overlay opacity={0.5} color="black" zIndex={199} />}
      <Outlet />
    </MantineAppShell>
  );
};

export { AppShell };
