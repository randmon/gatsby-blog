import React from 'react';
import { createStyles, Overlay, Container, Title, Button, Text, BackgroundImage } from '@mantine/core';
import { GatsbyImage, getImage, IGatsbyImageData } from 'gatsby-plugin-image';

const useStyles = createStyles((theme) => ({
    hero: {
        position: 'relative',
        backgroundSize: 'cover',
        backgroundPosition: 'center',
    },
    
    container: {
        height: 700,
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'flex-end',
        alignItems: 'flex-start',
        paddingBottom: theme.spacing.xl * 6,
        zIndex: 1,
        position: 'relative',

        [theme.fn.smallerThan('sm')]: {
        height: 500,
        paddingBottom: theme.spacing.xl * 3,
        },
    },

    title: {
        color: theme.white,
        fontSize: 60,
        fontWeight: 900,
        lineHeight: 1.1,

        [theme.fn.smallerThan('sm')]: {
        fontSize: 40,
        lineHeight: 1.2,
        },

        [theme.fn.smallerThan('xs')]: {
        fontSize: 28,
        lineHeight: 1.3,
        },
    },

    description: {
        color: theme.white,
        maxWidth: 600,

        [theme.fn.smallerThan('sm')]: {
        maxWidth: '100%',
        fontSize: theme.fontSizes.sm,
        },
    },

    control: {
        marginTop: theme.spacing.xl * 1.5,

        [theme.fn.smallerThan('sm')]: {
        width: '100%',
        },
    },
}));


interface Props {
    image: IGatsbyImageData;
    text: string;
};

const ImageHero = ({image, text}: Props) => {
    const { classes } = useStyles();

    return (
        <BackgroundImage component={GatsbyImage} image={image} src='' alt=''>
            <Overlay
                gradient="linear-gradient(180deg, rgba(0, 0, 0, 0.25) 0%, rgba(0, 0, 0, .65) 40%)"
                opacity={1}
                zIndex={0}
            />
            <Container className={classes.container}>
                <Title className={classes.title}>A fully featured React components library</Title>
                <Text className={classes.description} size="xl" mt="xl">
                    {text}
                </Text>

                <Button variant="gradient" size="xl" radius="xl" className={classes.control}>
                Get started
                </Button>
            </Container>
        </BackgroundImage>
    );
};

export default ImageHero;