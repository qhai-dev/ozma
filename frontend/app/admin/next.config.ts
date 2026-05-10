import type { NextConfig } from "next";

import createNextIntlPlugin from "next-intl/plugin";

const withNextIntl = createNextIntlPlugin();

const nextConfig: NextConfig = {
	output: "standalone",
	reactCompiler: true,
};

export default withNextIntl(nextConfig);
