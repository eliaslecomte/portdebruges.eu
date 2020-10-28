module.exports = {
  future: {
    removeDeprecatedGapUtilities: true,
    purgeLayersByDefault: true,
  },
  purge: {
    enabled: true,
    content: [
      './core/**/*.tsx',
      './pages/**/*.tsx',
      './meetnet/components/**/*.tsx',
      './openWeather/components/**/*.tsx',
      './windfinder/components/**/*.tsx',
    ],
    options: {
      whitelist: [
        'grid-cols-5', // FIXME:
      ]
    }
  },
  theme: {
    extend: {},
  },
  variants: {},
  plugins: [],
}
