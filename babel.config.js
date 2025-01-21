module.exports = {
  presets: ["module:@react-native/babel-preset"],
  plugins: [
    [
      "module:react-native-dotenv",
      {
        moduleName: "@env",
        path: ".env",
        blacklist: null,
        whitelist: null,
        safe: false,
        allowUndefined: true,
      },
    ],
    [
      "babel-plugin-root-import",
      {
        rootPathPrefix: "~",
        rootPathSuffix: "src",
      },
    ],
    [
      "react-native-reanimated/plugin",
      {
        relativeSourceLocation: true,
      },
    ],
  ],
  env: { production: { plugins: ["transform-remove-console"] } },
};
