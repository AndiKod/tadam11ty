// https://www.11ty.dev/docs/plugins/fetch/
import EleventyFetch from "@11ty/eleventy-fetch";

export default async function () {
	let url = "https://dog.ceo/api/breeds/image/random";

	/* This returns a promise */
	let dog = await EleventyFetch(url, {
		duration: "1d", // save for 1 day
		type: "json", // we’ll parse JSON for you
	});

	return dog;
};