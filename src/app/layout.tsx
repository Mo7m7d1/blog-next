import Navbar from "@/components/Navbar";
import "./globals.css";

export const metadata = {
	title: "Almo Blog",
	description: "Blog app for ALMO",
};

export default function RootLayout({
	children,
}: {
	children: React.ReactNode;
}) {
	return (
		<html lang="en">
			<body
				suppressHydrationWarning={true}
				className="dark:bg-black dark:text-white"
			>
				<Navbar />
				{children}
			</body>
		</html>
	);
}
