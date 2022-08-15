import React from 'react';
import { Container, createStyles, Group, Header } from '@mantine/core';
import NavBrand from '../logo';
import NavDropdown from './nav-dropdown';
import NavLink from './nav-link';

const HEADER_HEIGHT = 100;

const useStyles = createStyles((theme) => ({
    root: {
        position: 'relative',
        zIndex: 1,
    },

    header: {
        display: 'flex',
        justifyContent: 'space-between',
        alignItems: 'center',
        height: '100%',
    },
    
    links: {
        [theme.fn.smallerThan('sm')]: {
          display: 'none',
        },
    },

}));

const links: { link: string, label: string }[] = [
    { link: '/', label: 'Home' },
    { link: '/about', label: 'About' },
    { link: '/blog', label: 'Blog' },
];

const Navigation = () => {
    const { classes } = useStyles();
    
    const items = links.map((link) => (
        <NavLink key={link.label} to={link.link}>
            {link.label}
        </NavLink>
  ));

    return (
        <Header height={HEADER_HEIGHT} mb={60} className={classes.root}>
            <Container className={classes.header}>
                <NavBrand/>
                <Group spacing={10} className={classes.links}>
                    {items}
                </Group>
                <NavDropdown headerHeight={HEADER_HEIGHT}>
                    {items}
                </NavDropdown>
            </Container>
        </Header>
    );
};

export default Navigation;