// uno.config.ts
import { defineConfig } from "unocss";
import { presetWind } from "@unocss/preset-wind";

export default defineConfig({
  rules: [
    [
      /^view-transition-([\w-]+)$/,
      ([, name]) => ({ "view-transition-name": name, contain: "layout" }),
    ],
    [
      /^pyn-transition-(\d+)$/,
      ([, duration]) => ({
        "transition-property":
          "color, background-color, border-color, outline-color, text-decoration-color, fill, stroke, opacity, -shadow, transform, filter, backdrop-filter",
        "transition-duration": `${duration}ms`,
        "transition-timing-function": "cubic-bezier(0.4, 0, 0.2, 1)",
      }),
    ],
  ],
  presets: [presetWind()],
});
