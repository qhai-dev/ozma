import type { NextConfig } from "next";

import createNextIntlPlugin from "next-intl/plugin";
import path from "node:path";

const withNextIntl = createNextIntlPlugin();

const nextConfig: NextConfig = {
	output: "standalone",
	reactCompiler: true,
	turbopack: {
		root: path.join(__dirname, "../../../"),
	},
	devIndicators: false,
};

export default withNextIntl(nextConfig);
