export type AboutPagesResponse = {
	name: string;
};
// #----------- 上: ts类型定义 ----------- 分割线 ----------- 下: JS代码 -----------

import req from '@/utils/req';

export const aboutPagesApi = () => req.post('/aboutpages');
