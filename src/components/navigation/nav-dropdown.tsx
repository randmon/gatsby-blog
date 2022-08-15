import { Burger, createStyles, MantineTheme, Paper, Transition } from '@mantine/core';
import { useDisclosure } from '@mantine/hooks';
import React, { PropsWithChildren } from 'react';
import NavLink from './nav-link';

interface Props extends PropsWithChildren {
    headerHeight: number;
}

const useStyles = createStyles((theme: MantineTheme) => ({
    burger: {
        [theme.fn.largerThan('sm')]: {
          display: 'none',
        },
    },

    dropdown: {
        position: 'absolute',
        left: 0,
        right: 0,
        zIndex: 0,
        borderRadius: 0,
        border: 'none',
        boxShadow: theme.shadows.md,

        [theme.fn.largerThan('sm')]: {
            display: 'none',
        },
    },
}));

const NavDropdown = ({headerHeight, children}: Props) => {
    const [opened, { toggle }] = useDisclosure(false);
    const { classes } = useStyles();

    return(
        <>
            <Burger opened={opened} onClick={toggle} className={classes.burger} size="sm" />
            <Transition mounted={opened} transition='slide-down' duration={200} timingFunction='ease'>
                {(styles) => (
                    <Paper className={classes.dropdown} withBorder style={styles} sx={{
                        top: headerHeight,
                    }}>
                        {children}
                    </Paper>
                )}
            </Transition>
        </>
    );
};

export default NavDropdown;