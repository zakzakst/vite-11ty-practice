import { eleventyPlugin } from "vite-plugin-eleventy";

export default {
  plugins: [eleventyPlugin()],
  root: "src",
  build: {
    outDir: "../dist",
    emptyOutDir: true,
    rollupOptions: {
      output: {
        assetFileNames: function (assetInfo) {
          const cssRegex = new RegExp(".css$", "i");
          const imgRegex = new RegExp(".(gif|jpeg|jpg|png|svg|webp)$", "i");
          if (cssRegex.test(assetInfo.name)) {
            return "css/[name].min.[ext]";
          } else if (imgRegex.test(assetInfo.name)) {
            return "images/[name].[ext]";
          } else {
            return "assets/[name].[ext]";
          }
        },
      },
    },
  },
};
