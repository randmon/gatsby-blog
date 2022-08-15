import React from 'react';

import { ActionIcon, useMantineColorScheme } from '@mantine/core';
import { IconMoonStars, IconSun } from '@tabler/icons';

export const ThemeToggle = () => {
    const {colorScheme, toggleColorScheme} = useMantineColorScheme();
    const dark = colorScheme === 'dark';

    return (
        <ActionIcon
            variant='outline'
            color={dark ? 'yellow' : 'blue'}
            onClick={() => toggleColorScheme()}
            title={dark ? 'Switch to light theme' : 'Switch to dark theme'}
        >
            {dark ? <IconSun size={18} /> : <IconMoonStars size={18} />}
        </ActionIcon>
    );
};