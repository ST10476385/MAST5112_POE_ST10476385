const { getDefaultConfig } = require('expo/metro-config');

const config = (() => {
  const defaultConfig = getDefaultConfig(__dirname);

  const { transformer, resolver } = defaultConfig;

  if (!resolver || !transformer) {
    throw new Error('Invalid Metro configuration');
  }

  return {
    ...defaultConfig,
    transformer: {
      ...transformer,
      babelTransformerPath: require.resolve('react-native-svg-transformer'),
    },
    resolver: {
      ...resolver,
      assetExts: resolver.assetExts ? resolver.assetExts.filter((ext: string) => ext !== 'svg') : [],
      sourceExts: [...(resolver.sourceExts || []), 'svg'],
    },
  };
})();

module.exports = config;