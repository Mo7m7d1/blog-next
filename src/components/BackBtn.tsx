"use client";
import { useRouter } from "next/navigation";

export default function BackBtn() {
	const router = useRouter();

	return (
		<button
			onClick={() => router.back()}
			className="bg-indigo-600 p-1 rounded-lg shadow-md m-4"
		>
			<span className="text-gray-200 font-semibold">Back</span>
		</button>
	);
}
