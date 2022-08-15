import { Container } from '@mantine/core';
import React from 'react';
import Footer from '../footer';
import Navigation from '../navigation';
import Theme from './theme';

const Layout = ({ children }: React.PropsWithChildren) => {
    return (
        <Theme>
            <Navigation/>
            <main>
                <Container size='md'>
                {children}
                </Container>
            </main>
            <Footer/>
        </Theme>
    );
};

export default Layout