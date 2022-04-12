module.exports = {
  future: {
    removeDeprecatedGapUtilities: true,
    purgeLayersByDefault: true,
  },
  purge: {
    enabled: Boolean(process.env.NODE_ENV === 'production'),
    content: [
      './core/**/*.tsx',
      './pages/**/*.tsx',
      './meetnet/components/**/*.tsx',
      './openWeather/components/**/*.tsx',
      './windfinder/components/**/*.tsx',
    ],
  },
  theme: {
    extend: {},
  },
  variants: {},
  plugins: [],
};
