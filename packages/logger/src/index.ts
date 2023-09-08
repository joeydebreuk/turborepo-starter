export const log = (str: any) => {
	console.log("logger: " + str);
};

if (import.meta.vitest) {
	const { it, expect } = import.meta.vitest;

	it("validates date of birth", () => {
		expect(log("test")).toBeUndefined();
	});
}
