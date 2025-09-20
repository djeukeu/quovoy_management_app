import React from 'react';

export const metadata = {
    title: 'Lead Management App',
    description: 'Quovoy Coding Test',
};

export default function RootLayout({ children }) {
    return (
        <html lang="en">
            <body>{children}</body>
        </html>
    );
}
