"use client";
import BlogSkeleton from "@/components/BlogSkeleton";
import InfiniteBlogs from "@/components/InfiniteBlogs";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { Suspense } from "react";

export default function Home() {
	const BlogSkeletonJSX = new Array(4)
		.fill(null)
		.map((_, index) => <BlogSkeleton key={index} />);

	return (
		<QueryClientProvider client={new QueryClient()}>
			<div className="m-10">
				<h1 className="text-2xl text-center font-bold mb-5">Blogs: </h1>
				<main className="flex justify-center items-center gap-3 flex-wrap w-full">
					<Suspense fallback={BlogSkeletonJSX}>
						<InfiniteBlogs />
					</Suspense>
				</main>
			</div>
		</QueryClientProvider>
	);
}
