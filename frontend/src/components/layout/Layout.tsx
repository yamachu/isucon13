import { Global } from '@emotion/react';
import styled from '@emotion/styled';
import { Typography } from '@mui/joy';
import Dropdown from '@mui/joy/Dropdown';
import Menu from '@mui/joy/Menu';
import MenuButton from '@mui/joy/MenuButton';
import MenuItem from '@mui/joy/MenuItem';
import Stack from '@mui/joy/Stack';
import { useColorScheme } from '@mui/joy/styles';
import React from 'react';
import { MdChair, MdOutlineDarkMode, MdDarkMode } from 'react-icons/md';
import { Link } from 'react-router-dom';

interface LayoutProps {
  children: React.ReactNode;
}
export function Layout(props: LayoutProps): React.ReactElement {
  const colorScheme = useColorScheme();
  const mode = colorScheme.systemMode ?? colorScheme.mode;

  return (
    <div>
      <Global
        styles={{
          body: {
            backgroundColor: mode === 'light' ? '#fff' : '#000',
          },
        }}
      />
      <Stack
        direction="row"
        justifyContent="space-between"
        alignItems="center"
        spacing={2}
        sx={{
          px: 3,
          py: 1,
          borderBottom: (t) => `1px solid ${t.vars.palette.background.level1}`,
          position: 'fixed',
          top: 0,
          left: 0,
          right: 0,
          zIndex: 100,
          backgroundColor: mode === 'light' ? 'white' : 'black',
        }}
      >
        <LogoLink to="/">
          <MdChair size="25px" />
          <Typography level="h1" sx={{ fontSize: '20px' }}>
            ISUTUBE
          </Typography>
        </LogoLink>
        <Stack direction="row" alignItems="center" spacing={2}>
          <div>
            <Dropdown>
              <MenuButton variant="plain">
                {mode === 'light' ? (
                  <MdOutlineDarkMode size="20px" />
                ) : (
                  <MdDarkMode size="20px" />
                )}
              </MenuButton>
              <Menu>
                <MenuItem
                  onClick={() => colorScheme.setMode('light')}
                  selected={colorScheme.mode === 'light'}
                >
                  Light
                </MenuItem>
                <MenuItem
                  onClick={() => colorScheme.setMode('dark')}
                  selected={colorScheme.mode === 'dark'}
                >
                  Dark
                </MenuItem>
                <MenuItem
                  onClick={() => colorScheme.setMode('system')}
                  selected={colorScheme.mode === 'system'}
                >
                  System
                </MenuItem>
              </Menu>
            </Dropdown>
          </div>
          <div>
            <Dropdown>
              <MenuButton>account</MenuButton>
              <Menu>
                <MenuItem>aaa</MenuItem>
                <MenuItem>bbb</MenuItem>
              </Menu>
            </Dropdown>
          </div>
        </Stack>
      </Stack>
      <div style={{ paddingTop: '60px' }}>{props.children}</div>
    </div>
  );
}

const LogoLink = styled(Link)`
  display: flex;
  align-items: flex-end;
  text-decoration: none;
  svg {
    margin-right: 0.2rem;
    color: #ff0000;
  }
`;
