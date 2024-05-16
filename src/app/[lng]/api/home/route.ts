import { Params } from 'next/dist/shared/lib/router/utils/route-matcher';

export async function GET(request: Request, context: { params: Params }) {
	const { lng } = context.params; // 获取动态路由参数 lng

	return new Response(
		JSON.stringify({
			message: `Hello from the API in ${lng} `
		}),
		{
			status: 200,
			headers: {
				'Content-Type': 'application/json'
			}
		}
	);
}
