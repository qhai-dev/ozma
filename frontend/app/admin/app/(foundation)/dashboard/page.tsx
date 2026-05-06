import type { Metadata, ResolvingMetadata } from "next";

import { getTranslations } from "next-intl/server";

export async function generateMetadata(_parent: ResolvingMetadata): Promise<Metadata> {
	const t = await getTranslations("metadata");
	return {
		title: t("dashboard"),
	};
}

export default function Page() {
	return (
		<div className="relative h-full w-full p-5">
			<div
				className="absolute bottom-[12.5%] left-[15%] overflow-clip right-[75%] top-[12.5%]"
				data-node-id="1:1104"
			>
				<div className="absolute contents inset-[8.33%]" data-node-id="1:1105">
					<div
						className="absolute bg-amber-5 inset-[8.33%] overflow-clip rounded-[5.333px]"
						data-node-id="1:1106"
					/>
				</div>
				<div className="absolute inset-[29.17%] overflow-clip" data-node-id="1:1107">
					<svg
						className="absolute inset-[3.65%_11.98%] max-w-none size-full"
						data-node-id="I1:1107;129:13863"
						fill="none"
						viewBox="0 0 48 48"
						xmlns="http://www.w3.org/2000/svg"
						xmlnsXlink="http://www.w3.org/1999/xlink"
					>
						<path
							d="M20 24H28M28 24L24 20M28 24L24 28"
							stroke="white"
							strokeLinecap="round"
							strokeLinejoin="round"
							strokeWidth="2"
						/>
						<path
							d="M10 34V26C10 24.8954 10.8954 24 12 24H36C37.1046 24 38 24.8954 38 26V34C38 35.1046 37.1046 36 36 36H12C10.8954 36 10 35.1046 10 34Z"
							stroke="white"
							strokeLinecap="round"
							strokeLinejoin="round"
							strokeWidth="2"
						/>
					</svg>
				</div>
			</div>
			<p
				className="absolute h-[14.063px] leading-[13.333px] left-[45.33px] not-italic text-[9.333px] text-text-tertiary top-1 w-[37.5px]"
				data-node-id="1:1108"
			>
				性能大盘
			</p>
			<div
				className="absolute left-[10.67px] overflow-clip size-[10.667px] top-[5.33px]"
				data-node-id="1:1109"
			>
				<svg
					className="absolute inset-[26.81%_26.67%_26.81%_37.5%] max-w-none size-full"
					data-node-id="I1:1109;1125:3"
					fill="none"
					viewBox="0 0 48 48"
					xmlns="http://www.w3.org/2000/svg"
					xmlnsXlink="http://www.w3.org/1999/xlink"
				>
					<path
						d="M16 24L24 16L32 24"
						stroke="currentColor"
						strokeLinecap="round"
						strokeLinejoin="round"
						strokeWidth="2"
					/>
				</svg>
			</div>
		</div>
	);
}
