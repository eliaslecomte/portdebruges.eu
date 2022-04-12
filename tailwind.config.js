module.exports = {
  future: {
    removeDeprecatedGapUtilities: true,
    purgeLayersByDefault: true,
  },
  content: [
    './core/**/*.tsx',
    './pages/**/*.tsx',
    './meetnet/components/**/*.tsx',
    './openWeather/components/**/*.tsx',
    './windfinder/components/**/*.tsx',
  ],
  theme: {
    extend: {},
  },
  variants: {},
  plugins: [],
};
