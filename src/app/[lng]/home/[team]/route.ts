import pool from '@/mysql';
import { Params } from 'next/dist/shared/lib/router/utils/route-matcher';

export async function GET(request: Request, context: { params: Params }) {
	const { lng, team } = context.params; // 获取动态路由参数 lng

	// 从连接池获取一个连接
	// const connection = await pool.getConnection();
	// // 执行一个查询
	// const [rows] = await connection.query("SELECT * FROM your_table");
	// 释放连接，返回查询结果
	// connection.release();

	// const users = await pool.query("SELECT * FROM item");
	// console.log(users);

	return new Response(
		JSON.stringify({
			message: `Hello from the API in ${lng} ${team}`
			// data: rows,
		}),
		{
			status: 200,
			headers: {
				'Content-Type': 'application/json'
			}
		}
	);
}
