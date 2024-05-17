'use client';
import { FC, useEffect } from 'react';
import Link from 'next/link';
import Layout from '@/layout';

type AboutProps = {
	params: {
		lng: string;
	};
};
// #----------- 上: ts类型定义 ----------- 分割线 ----------- 下: JS代码 -----------

// 引入 useTranslation
import { useTranslation } from '@/i18n/client';

const About: FC<AboutProps> = ({ params: { lng } }) => {
	const { t } = useTranslation(lng, 'about');

	useEffect(() => {
		console.log(t('about'));
	}, [t]);

	return (
		<Layout path="about" lng={lng}>
			<h1>About</h1>
			<Link href={`/${lng}/about/1`}>goto aboutpages</Link>
			<div>{t('about')}</div>
		</Layout>
	);
};

export default About;
