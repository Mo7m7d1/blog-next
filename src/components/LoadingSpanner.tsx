export default function LoadingSpinner() {
	return (
		<div className="flex justify-center items-center h-[80vh]">
			<div className="animate-spin rounded-full h-24 w-24 border-t-2 border-b-2 border-indigo-500"></div>
		</div>
	);
}
