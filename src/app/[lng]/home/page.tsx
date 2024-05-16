'use client';
import Layout from '@/layout';
import { FC, useEffect } from 'react';
import { aboutPagesApi } from './api';

type HomeProps = {
	params: {
		lng: string;
	};
};
// #----------- 上: ts类型定义 ----------- 分割线 ----------- 下: JS代码 -----------

const Home: FC<HomeProps> = ({ params: { lng } }) => {
	useEffect(() => {
		const getData = async () => {
			const data = await aboutPagesApi();
			console.log(data);
		};
		getData();
	}, []);

	return (
		<>
			<Layout path="home" lng={lng}>
				<>home</>
			</Layout>
		</>
	);
};

export default Home;
