import { log } from "@packages/logger";

export const handler = async (event: any) => {
	log("event: " + JSON.stringify(event));
	return {
		statusCode: 200,
		body: JSON.stringify({
			message: "Hello world!",
		}),
	};
};

if (import.meta.vitest) {
	const { it, expect } = import.meta.vitest;

	it("validates date of birth", () => {
		expect(log("test")).toBeUndefined();
	});
}
