import type { Metadata } from 'next';
import { ReactNode } from 'react';

import './globals.css';

interface RootLayoutProps {
	children: ReactNode;
}

export const metadata: Metadata = {
	title: 'UI Snippets',
	description: 'A collection of UI snippets'
};

export default function RootLayout({
	children
}: RootLayoutProps) {
	return (
		<html lang="en">
			<body>{children}</body>
		</html>
	);
}
