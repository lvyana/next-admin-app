'use client';
import { Button, Result } from 'antd';
import Link from 'next/link';

const NotFound = () => {
	return (
		<>
			<main className="grid min-h-full place-items-center bg-white px-6 py-24 sm:py-32 lg:px-8">
				<main>
					<Result
						status="404"
						title="404"
						subTitle="Sorry, the page you visited does not exist."
						extra={
							<Link href={'/'}>
								<Button type="primary">Back Home</Button>
							</Link>
						}
					/>
				</main>
			</main>
		</>
	);
};

export default NotFound;
