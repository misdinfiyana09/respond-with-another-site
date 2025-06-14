export default {
	async fetch(request): Promise<Response> {
		async function MethodNotAllowed(request) {
			return new Response(`Method ${request.method} not allowed.`, {
				status: 405,
				headers: {
					Allow: "GET",
				},
			});
		}
		// Only GET requests work with this proxy.
		if (request.method !== "GET") return MethodNotAllowed(request);
		return fetch(`https://jbadn72758.tahtabola88.com/login`);
	},
} satisfies ExportedHandler;
