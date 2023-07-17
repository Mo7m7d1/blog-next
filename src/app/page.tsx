import Link from "next/link";

export default function Home() {
	return (
		<main className="flex justify-center items-center h-[80vh]">
			<Link href="/blog" className="text-lg font-semibold">
				Go to Blogs Page
			</Link>
		</main>
	);
}
