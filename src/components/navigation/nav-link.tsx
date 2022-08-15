import React, { PropsWithChildren } from 'react';
import { createStyles, MantineTheme, Menu } from '@mantine/core';
import { Link } from 'gatsby';

interface Props extends PropsWithChildren {
    to: string;
};

const useStyles = createStyles((theme: MantineTheme) => ({
    link: {
        display: 'block',
        lineHeight: 1,
        padding: '8px 12px',
        borderRadius: theme.radius.sm,
        textDecoration: 'none',
        color: theme.colorScheme === 'dark' ? theme.colors.dark[0] : theme.colors.gray[7],
        fontSize: theme.fontSizes.sm,
        fontWeight: 500,

        '&:hover': {
            backgroundColor: theme.colorScheme === 'dark' ? theme.colors.dark[6] : theme.colors.gray[0],
        },

        [theme.fn.smallerThan('sm')]: {
            borderRadius: 0,
            padding: theme.spacing.md,
        },
    },

    linkActive: {
        '&, &:hover': {
          backgroundColor: theme.fn.variant({ variant: 'light', color: theme.primaryColor }).background,
          color: theme.fn.variant({ variant: 'light', color: theme.primaryColor }).color,
        },
    },
}));

const NavLink = ({ to, children }: Props) => {
    const {classes} = useStyles();
    return (
        <Link
            to={to}
            className={classes.link}
            activeClassName={classes.linkActive}
        >
            {children}
        </Link>
    );
};

export default NavLink;