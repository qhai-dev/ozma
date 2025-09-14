import { PropsWithChildren } from 'react';

export default function DatasetLayout({ children }: Readonly<PropsWithChildren>) {
	return (
		<div>
			<div>dataset info layout</div>
			<div>侧边栏</div>
			<div>{children}</div>
		</div>
	);
}
