import { createStitches } from '@stitches/react';

const { styled } = createStitches({
    theme: {
        colors: {
            primary: '#4e56ff',
            secondary: '#48d359',
            textPrimary: '#2c3a57',
            textSecondary: '#4f5f82',
            shadow: 'rgba(0, 0, 0, 0.12)',
        },
        shadows: {
            sm: '0 1px 3px rgba(0, 0, 0, 0.12)',
        },
    },
    media: {
        sm: '(max-width: 700px)',
    },
});

export { styled };
