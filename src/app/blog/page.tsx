import BlogSkeleton from "@/components/BlogSkeleton";
import Blogs from "@/components/Blogs";
import { Metadata } from "next";
import { Suspense } from "react";

export const metadata: Metadata = {
	title: "ALMO blogs",
	description: "A list of almo's blogs that you can view",
};

export default async function page() {
	const BlogSkeletonJSX = new Array(4)
		.fill(null)
		.map((_, index) => <BlogSkeleton key={index} />);

	return (
		<div className="m-10">
			<h1 className="text-2xl text-center font-bold mb-5">Blogs: </h1>
			<main className="flex justify-center items-center gap-3 flex-wrap">
				<Suspense fallback={BlogSkeletonJSX}>
					<Blogs />
				</Suspense>
			</main>
		</div>
	);
}
