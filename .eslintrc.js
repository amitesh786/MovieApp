module.exports = {
  root: true,
  extends: ["@react-native-community", "plugin:prettier/recommended"],
  plugins: ["react", "react-hooks", "prettier", "@typescript-eslint"],
  rules: {
    "prettier/prettier": ["error", { endOfLine: "auto", singleQuote: false }],
    "react/self-closing-comp": "off",
    "no-unused-vars": "off",
    "no-shadow": "off",
    "@typescript-eslint/no-unused-vars": ["off"],
    "dot-notation": "off",
    "react-native/no-inline-styles": "off",
    "react/jsx-uses-react": "error",
    "react/jsx-uses-vars": "error",
    "react-hooks/rules-of-hooks": "error",
    "react-hooks/exhaustive-deps": "warn",
  },
};
