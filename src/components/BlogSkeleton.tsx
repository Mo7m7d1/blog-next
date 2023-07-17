export default function BlogSkeleton() {
	return (
		<div className="flex flex-col gap-3 w-full bg-gray-800 rounded-lg shadow-lg p-3 px-6 h-36 animate-smoothPulse">
			<h1 className="text-lg font-semibold w-32 h-9 bg-gray-900 rounded-lg shadow-md"></h1>
			<p className="ml-3 text-sm text-gray-300 w-full h-16 bg-gray-900 rounded-lg shadow-md"></p>
			<span className="text-gray-400 w-32 h-7 bg-gray-900 rounded-lg shadow-md"></span>
		</div>
	);
}
