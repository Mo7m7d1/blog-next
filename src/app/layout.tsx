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
			<body className="dark:bg-black dark:text-white font-sans">
				{children}
			</body>
		</html>
	);
}
