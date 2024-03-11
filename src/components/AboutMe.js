import React from 'react';
import { Container, Typography, Box, Button } from '@mui/material';

export const AboutMe = () => {
    return (
        <Container maxWidth="md" className="my-8">
            <Box className="md:flex items-center gap-9">
                <img className="border-solid border-4 border-sec rounded-xl md:w-10rem w-[20rem]" src="/Me.png" alt="me" />
                <div className="text-base text-primary">
                    <Typography variant="h2" component="h2" className="font-bold text-2xl mb-2">
                        About Me
                    </Typography>
                    <Typography variant="body1" className="mt-2">
                        Hello! I'm Mahin, a computer science graduate from Toronto Metropolitan University. For over 2 years, I've developed full stack solutions for companies - crafting intuitive front ends paired with robust back end systems.
                    </Typography>
                    <Typography variant="body1" className="mt-2">
                        I enjoy continuously expanding my skills by learning new programming languages and frameworks. And you can bet I bring that same dedication to intellectually defending my favorite sports teams!
                    </Typography>
                    <Typography variant="body1" className="mt-2">
                        Outside of work, catch me unleashing my competitive side on the ping pong table.
                    </Typography>
                    <Button
                        variant="contained"
                        color="primary"
                        href="https://www.linkedin.com/in/mahin-haider/"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="mt-4 mr-2"
                    >
                        Connect with me on LinkedIn
                    </Button>
                    <Button
                        variant="contained"
                        color="primary"
                        href="https://github.com/haidermahin"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="mt-4"
                    >
                        Check out my GitHub
                    </Button>
                </div>
            </Box>
        </Container>
    );
};
