// @ts-check
import { defineConfig } from "astro/config";
import starlight from "@astrojs/starlight";

// https://astro.build/config
export default defineConfig({
  integrations: [
    starlight({
      title: "Galio",
      social: [
        {
          icon: "github",
          label: "GitHub",
          href: "https://github.com/qhai-dev/galio",
        },
      ],
      sidebar: [
        {
          label: "简介",
          items: [{ label: "设计理念", slug: "guides/example" }],
        },
        {
          label: "快速开始",
          autogenerate: { directory: "reference" },
        },
        {
          label: "指南",
          autogenerate: { directory: "reference" },
        },
      ],
    }),
  ],
});
