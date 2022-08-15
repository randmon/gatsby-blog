import React from 'react';
import { Anchor, Group, Text, ThemeIcon, Title } from '@mantine/core';
import { IconCircles } from '@tabler/icons';
import { Link } from 'gatsby';

const NavBrand = () => {
    return (
        <Anchor component={Link} to='/'>
            <Group noWrap>
                <ThemeIcon
                    variant='outline'
                    sx={(theme) => ({
                        border: 'none',
                        color: theme.fn.primaryColor(),
                    })}
                >
                    <IconCircles size={30}/>
                </ThemeIcon>
                <Title order={1} sx={{fontSize: 26}}>
                    <Text sx={(theme) => ({
                        color: theme.fn.primaryColor(),
                    })}>Randmon</Text>
                </Title>
            </Group>
        </Anchor>
    );
};

export default NavBrand;