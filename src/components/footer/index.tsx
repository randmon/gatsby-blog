import React from 'react';
import { ActionIcon, Container, createStyles, Group } from '@mantine/core';
import { IconBrandGmail, IconBrandInstagram, IconBrandLinkedin, IconBrandTwitter, IconBrandYoutube } from '@tabler/icons';
import NavBrand from '../logo';
import { ThemeToggle } from './theme-toggle';

const useStyles = createStyles((theme) => ({
    footer: {
      marginTop: 120,
      borderTop: `1px solid ${
        theme.colorScheme === 'dark' ? theme.colors.dark[5] : theme.colors.gray[2]
      }`,
    },
  
    inner: {
      display: 'flex',
      justifyContent: 'space-between',
      alignItems: 'center',
      paddingTop: theme.spacing.xl,
      paddingBottom: theme.spacing.xl,
  
      [theme.fn.smallerThan('xs')]: {
        flexDirection: 'column',
      },
    },
  
    links: {
      [theme.fn.smallerThan('xs')]: {
        marginTop: theme.spacing.md,
      },
    },
}));

const Footer = () => {
    const { classes } = useStyles();

    return (
      <div className={classes.footer}>
        <Container className={classes.inner}>
          <ThemeToggle />
          <Group spacing={0} className={classes.links} position="right" noWrap>
            <ActionIcon size="lg" component='a' target='_blank' href='https://www.linkedin.com/in/cristinacmarques/'>
              <IconBrandLinkedin size={18} stroke={1.5} />
            </ActionIcon>
            <ActionIcon size="lg" component='a' target='_blank' href='https://twitter.com/randm0n'>
              <IconBrandTwitter size={18} stroke={1.5} />
            </ActionIcon>
            <ActionIcon size="lg" component='a' target='_blank' href='mailto:ccmarques98@gmail.com'>
              <IconBrandGmail size={18} stroke={1.5} />
            </ActionIcon>
            {/* <ActionIcon size="lg" component='a' target='_blank' href='https://www.instagram.com/cristinacmarques/'>
              <IconBrandInstagram size={18} stroke={1.5} />
            </ActionIcon> */}
          </Group>
        </Container>
      </div>
    );
};

export default Footer;