"use server";

export const fetchBlogs = async (page: number) => {
	const res = await fetch(
		`https://64b0f031062767bc48255a99.mockapi.io/blogs?page=${page}&limit=2`
	);
	const blogs = await res.json();
	return blogs;
};
