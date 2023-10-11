const { getDefaultConfig } = require("@expo/metro-config");

module.exports = (async () => {
  const defaultConfig = await getDefaultConfig(__dirname);

  return {
    ...defaultConfig,
    resolver: {
      ...defaultConfig.resolver,
      sourceExts: [...defaultConfig.resolver.sourceExts, "cjs"],
    },
    transformer: {
      ...defaultConfig.transformer,
      assetPlugins: [
        ...defaultConfig.transformer.assetPlugins,
        "expo-asset/tools/hashAssetFiles",
      ],
    },
  };
})();
