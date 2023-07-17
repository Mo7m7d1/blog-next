import BackBtn from "@/components/BackBtn";

export async function generateMetadata({ params }: DynamicPageProps) {
	return {
		title: `Blog-${params.id}`,
		description: `Blog-${params.id} from ALMO`,
	};
}

export default async function page({ params: { id } }: DynamicPageProps) {
	const res = await fetch(
		`https://64b0f031062767bc48255a99.mockapi.io/blogs/${id}`,
		{
			next: {
				revalidate: 60,
			},
		}
	);
	const blog: Blog = await res.json();
	return (
		<div>
			<BackBtn />
			<div className="flex justify-center items-center h-[80vh] mx-10">
				<div className="flex flex-col gap-3 w-full bg-gray-800 rounded-lg shadow-lg p-3">
					<h1 className="text-lg font-semibold">{blog.title}</h1>
					<p className="ml-3 text-sm text-gray-300">{blog.body}</p>
					<span className="text-gray-400 float-right">@{blog.username}</span>
				</div>
			</div>
		</div>
	);
}
