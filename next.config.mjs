/** @type {import('next').NextConfig} */
const nextConfig = {
	images: {
		domains: ['tailwindui.com']
	},
	typescript: {
		// 忽略 TypeScript 构建错误
		ignoreBuildErrors: true
	}
};

export default nextConfig;
