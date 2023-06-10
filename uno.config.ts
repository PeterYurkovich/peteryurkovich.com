// uno.config.ts
import { defineConfig } from "unocss";
import { presetWind } from "@unocss/preset-wind";

export default defineConfig({
  rules: [
    [
      /^view-transition-([\w-]+)$/,
      ([, name]) => ({ "view-transition-name": name, contain: "layout" }),
    ],
  ],
  presets: [presetWind()],
});
