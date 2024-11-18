import { Buffer } from 'node:buffer';
import type { PageServerLoad } from './$types';

export const load: PageServerLoad = async ({ fetch }) => {
	const images: Promise<string>[] = [];
	for (let i = 0; i < 8; i++) {
		images.push(
			fetch(`https://picsum.photos/150/150?random=${i}`)
				.then((res) => res.blob()) // Fetch the image as a blob
				.then((blob) =>
					blob.arrayBuffer().then((buffer) => {
						const base64 = Buffer.from(buffer).toString('base64');
						return `data:image/jpeg;base64,${base64}`;
					})
				)
		);
	}
	return {
		images: await Promise.all(images)
	};
};
