import resolveConfig from "tailwindcss/resolveConfig";
import defaultConfig from "~~/tailwind.config.js";

const tailwindConfig = resolveConfig(defaultConfig);

export default tailwindConfig;
