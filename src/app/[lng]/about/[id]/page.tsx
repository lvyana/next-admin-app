import { redirect } from 'next/navigation';
import { aboutPagesApi, AboutPagesResponse } from './api';
import { Button } from 'antd';
import Link from 'next/link';
import { FC } from 'react';
import { GetStaticPaths } from 'next';
import type { Metadata } from 'next';
import { languages } from '@/i18n';
type AboutParmas = {
	params: string;
};

type PathsLngType = {
	params: { id: string; lng: string };
};
// #----------- 上: ts类型定义 ----------- 分割线 ----------- 下: JS代码 -----------

type Props = {
	params: { productId: string };
};

export const generateMetadata = async ({ params }: Props): Promise<Metadata> => {
	const { data }: { data: AboutPagesResponse[] } = await aboutPagesApi();
	console.log(data);

	return {
		title: `About - ${data[0].name}`,
		description: `About - ${data[0].name}`
	};
};

const AboutPages: FC<AboutParmas> = async ({ params }) => {
	const { data }: { data: AboutPagesResponse[] } = await aboutPagesApi();
	console.log(params, data);

	return (
		<div>
			<h1>AboutPages</h1>
			<Button>
				<Link href={'/about'}>back</Link>
			</Button>
			{data.map((v) => {
				return <div key={v.name}>{v.name}</div>;
			})}
		</div>
	);
};

export const getStaticPaths: GetStaticPaths = (context) => {
	console.log(context, 123);
	const paths = [{ params: { id: '1' } }];

	const pathsLng = languages.reduce<PathsLngType[]>((pre, lng) => {
		const pathsLngType = paths.map((val) => {
			const params = { ...val.params, lng };
			return { params };
		});
		return pre.concat(pathsLngType);
	}, []);

	return {
		paths: pathsLng,
		fallback: false
	};
};

export default AboutPages;
