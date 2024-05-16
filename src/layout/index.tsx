'use client';
import React, { Children, useState } from 'react';
import { MenuFoldOutlined, MenuUnfoldOutlined, UploadOutlined, UserOutlined, VideoCameraOutlined } from '@ant-design/icons';
import { Button, Layout as AntdLayout, Menu, theme, Row, Col } from 'antd';
import AntdContainer from './AntdContainer';
import { useRouter } from 'next/navigation';
import { useTranslation } from '@/i18n/client';
import Footer from './components/language';

const { Header, Sider, Content } = AntdLayout;

type LayoutProps = {
	children: React.ReactNode;
	path: string;
	lng: string;
};
// #----------- 上: ts类型定义 ----------- 分割线 ----------- 下: JS代码 -----------

const Layout: React.FC<LayoutProps> = ({ lng, children, path }) => {
	const router = useRouter();
	const { t } = useTranslation(lng, 'layout');
	const [collapsed, setCollapsed] = useState(false);
	const {
		token: { colorBgContainer, borderRadiusLG }
	} = theme.useToken();

	const handleSelect = (row: { key: string }) => {
		router.push(row.key);
	};

	return (
		<AntdContainer>
			<AntdLayout className="min-h-screen">
				<Sider trigger={null} collapsible collapsed={collapsed} style={{ background: colorBgContainer }}>
					<div className="demo-logo-vertical" />
					<Menu
						theme="light"
						mode="inline"
						defaultSelectedKeys={[path]}
						items={[
							{
								key: 'about',
								icon: <UserOutlined />,
								label: t('about')
							},
							{
								key: 'home',
								icon: <VideoCameraOutlined />,
								label: t('home')
							}
						]}
						onSelect={handleSelect}
					/>
				</Sider>
				<AntdLayout>
					<Header style={{ padding: 0, background: colorBgContainer }}>
						<Row justify="end" align="middle" id="header-icon-function">
							<Col>
								<Button
									type="text"
									icon={collapsed ? <MenuUnfoldOutlined /> : <MenuFoldOutlined />}
									onClick={() => setCollapsed(!collapsed)}
									style={{
										fontSize: '16px',
										width: 64,
										height: 64
									}}
								/>
							</Col>
							<Col>
								<Footer lng={lng}></Footer>
							</Col>
						</Row>
					</Header>
					<Content
						style={{
							margin: '24px 16px',
							padding: 24,
							minHeight: 280,
							background: colorBgContainer,
							borderRadius: borderRadiusLG
						}}
					>
						<>{children}</>
					</Content>
				</AntdLayout>
			</AntdLayout>
		</AntdContainer>
	);
};

export default Layout;
