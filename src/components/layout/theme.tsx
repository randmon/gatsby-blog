import React, { useState } from 'react';
import { ColorScheme, ColorSchemeProvider, MantineProvider } from '@mantine/core';
import { useHotkeys, useLocalStorage } from '@mantine/hooks';

const Theme = ({ children }: React.PropsWithChildren) => {

    const [colorScheme, setColorScheme] = useLocalStorage<ColorScheme>({
        key: 'mantine-color-scheme',
        defaultValue: 'light',
        getInitialValueInEffect: true,
    });

    // const [colorScheme, setColorScheme] = useState<ColorScheme>('light');
    const toggleColorScheme = (value?: ColorScheme) =>
      setColorScheme(value || (colorScheme === 'dark' ? 'light' : 'dark'));

    useHotkeys([['mod+J', () => toggleColorScheme()]]);

    return (
        <ColorSchemeProvider colorScheme={colorScheme} toggleColorScheme={toggleColorScheme}>
            <MantineProvider
                theme={{
                    colorScheme,
                }}
                withGlobalStyles
                withNormalizeCSS
            >
                {children}
            </MantineProvider>
        </ColorSchemeProvider>
    );
};

export default Theme;