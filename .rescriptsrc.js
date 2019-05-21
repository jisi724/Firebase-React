module.exports = [
  [
    "use-babel-config",
    {
      presets: ["react-app"],
      plugins: [
        [
          "import",
          {
            libraryName: "antd",
            libraryDirectory: "es",
            style: "css" // true for less
          }
        ]
      ]
    }
  ]
];
