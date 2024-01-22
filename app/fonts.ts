import localFont from 'next/font/local';

export const neue = localFont({
    variable: '--font-neue',
    src: [
        {
            path: './assets/fonts/NeueMontreal-Bold.woff2',
            weight: '700',
            style: 'bold'
        },
        {
            path: './assets/fonts/NeueMontreal-Medium.woff2',
            weight: '500',
            style: 'medium'
        },
        {
            path: './assets/fonts/NeueMontreal-Light.woff2',
            weight: '300',
            style: 'normal'
        }
    ]
});