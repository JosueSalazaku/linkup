import type { Config } from "tailwindcss";

export default {
    darkMode: ["class"],
    content: [
        "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
        "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
        "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
    ],
    theme: {
        screens: {
            sm: '640px',
            md: '768px',
            lg: '1024px',
            xl: '1400px'
        },
        extend: {
            colors: {
                primaryDark: '#364866', // Dark blue
                secondaryDark: '#4c5c76', // Blue-gray
                accentYellow: '#dda93d', // Golden yellow
                accentOrange: '#ca641f', // Burnt orange
            },
            fontFamily: {
                sans: ['Poppins']
            },
            borderRadius: {
                lg: 'var(--radius)',
                md: 'calc(var(--radius) - 2px)',
                sm: 'calc(var(--radius) - 4px)'
            }
        }
    },
} satisfies Config;
