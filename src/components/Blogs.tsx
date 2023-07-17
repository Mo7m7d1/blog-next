import BlogCard from "./BlogCard";

export default async function Blogs() {
	const res = await fetch("https://64b0f031062767bc48255a99.mockapi.io/blogs", {
		// cache: "no-store",
		next: {
			revalidate: 60,
		},
	});

	const blogs: Blog[] = await res.json();

	const blogsJSX = blogs.map((blog) => <BlogCard {...blog} key={blog.id} />);

	return blogsJSX;
}
