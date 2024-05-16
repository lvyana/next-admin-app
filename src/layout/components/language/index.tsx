'use client';
import React, { FC, useMemo } from 'react';
import { Button } from 'antd';
import IconFont from '@/utils/iconfont';
import { useRouter, usePathname } from 'next/navigation';
type LanguageProps = {
	lng: string;
};
// #----------- 上: ts类型定义 ----------- 分割线 ----------- 下: JS代码 -----------

const Language: FC<LanguageProps> = ({ lng }) => {
	const language = lng;
	const router = useRouter();
	const params = usePathname();
	const handleSizeChange = () => {
		console.log(params, router);

		if (language === 'zh') {
			const url = params.replace('zh', 'en');
			router.push(url);
		} else if (language === 'en') {
			const url = params.replace('en', 'zh');
			router.push(url);
		}
	};

	const languageStr = useMemo(() => {
		const themeMenu = [
			{ label: 'icon-zhongyingwenqiehuan-zhongwen', key: 'zh' },
			{ label: 'icon-zhongyingwenqiehuan-yingwen', key: 'en' }
		];

		return themeMenu.find((item) => item.key === language)?.label;
	}, [language]);
	console.log(languageStr);

	return (
		<>
			<Button
				aria-label="ToggleTheme"
				type="text"
				icon={<IconFont type={'icon-zhongyingwenqiehuan-zhongwen'} style={{ transform: 'scale(1.2)' }} />}
				onClick={handleSizeChange}
			></Button>
		</>
	);
};

export default Language;
