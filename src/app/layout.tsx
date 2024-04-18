import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import { Navbar } from "@/components/client/Navbar/Navbar";
import { Footer } from "@/components/client/Footer";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
	title: {
		default: 'GDSC NJIT',
		template: '%s - GDSC NJIT',
	},
	description:
		'GDSC is a student-led community backed by Google Developers aimed at empowering undergraduate students from all disciplines to grow their knowledge in technology, build solutions for their local communities, and connect with other members from the Google community.',
};

export default function RootLayout({ children}: Readonly<{
  children: React.ReactNode;
}>) {
	return (
		<html lang="en">
			<body>
						<Navbar />
						{children}
						<Footer />
			</body>
		</html>
	);
}
