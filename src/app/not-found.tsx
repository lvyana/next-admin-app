'use client';
import { Button, Result } from 'antd';
import Link from 'next/link';

const NotFound = () => {
	return (
		<>
			<html lang="en">
				<body>
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
				</body>
			</html>
		</>
	);
};

export default NotFound;
