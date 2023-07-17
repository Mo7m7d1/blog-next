import Link from "next/link";

export default function Navbar() {
	return (
		<nav className="flex justify-start items-center gap-4 py-5 px-14 shadow-lg bg-zinc-900">
			<Link
				href="/"
				className="mr-6 text-lg font-bold italic text-indigo-500 hover:text-indigo-500/90 transition-all duration-200"
			>
				<h1>ALMO BlOG</h1>
			</Link>
			<Link
				href="/"
				className="hover:text-gray-300 transition-all duration-200"
			>
				<span>Home</span>
			</Link>
			<Link
				href="/blog"
				className="hover:text-gray-300 transition-all duration-200"
			>
				<span>Blog</span>
			</Link>
		</nav>
	);
}
