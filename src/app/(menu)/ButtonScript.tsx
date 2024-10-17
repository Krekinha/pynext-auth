"use client";

export default function ButtonScript() {
	async function scriptPython() {
		console.log("scriptPython");
	}

	return (
		<button
			type="button"
			onClick={() => scriptPython()}
			className="p-2 w-40 border border-gray-300 rounded-md"
		>
			Script Python
		</button>
	);
}
