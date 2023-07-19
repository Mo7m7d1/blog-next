"use client";

import { useIntersection } from "@mantine/hooks";
import { useInfiniteQuery } from "@tanstack/react-query";
import { useEffect, useRef } from "react";
import BlogCard from "./BlogCard";
import { fetchBlogs } from "@/helpers/fetchBlogs";

export default function InfiniteBlogs() {
	const { data, fetchNextPage, isFetchingNextPage } = useInfiniteQuery(
		["blogs"],
		async ({ pageParam = 1 }) => await fetchBlogs(pageParam),
		{
			getNextPageParam: (_, pages) => pages.length + 1,
			initialData: {
				pages: [],
				pageParams: [1],
			},
		}
	);

	const lastBlogRef = useRef<HTMLElement>(null);
	const { ref, entry } = useIntersection({
		root: lastBlogRef.current,
		threshold: 1,
	});

	useEffect(() => {
		if (entry?.isIntersecting) {
			fetchNextPage();
		}
	}, [entry]);

	const blogs = data?.pages.flatMap((page) => page) || [];

	const blogsJSX = blogs.map((blog, i) => {
		if (i === blogs.length - 1) {
			return (
				<div ref={ref} key={blog.id}>
					<BlogCard {...blog} />
				</div>
			);
		}
		return <BlogCard {...blog} key={blog.id} />;
	});

	return blogsJSX;
}
