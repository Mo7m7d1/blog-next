import Link from "next/link";

export default function BlogCard({ id, title, body, username }: Blog) {
	return (
		<Link href={`blog/${id}`} className="w-full">
			<div className="flex flex-col gap-3 w-full bg-gray-800 rounded-lg shadow-lg p-3">
				<h1 className="text-lg font-semibold">{title}</h1>
				<p className="ml-3 text-sm text-gray-300">{body}</p>
				<span className="text-gray-400 float-right">@{username}</span>
			</div>
		</Link>
	);
}
