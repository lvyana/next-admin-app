import { AntdRegistry } from '@ant-design/nextjs-registry';
import { ReactNode } from 'react';

type Props = {
	children: ReactNode;
};

export default function RootLayout({ children }: Props) {
	return (
		<>
			<AntdRegistry>{children}</AntdRegistry>
		</>
	);
}
