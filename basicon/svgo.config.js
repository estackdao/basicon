// svgo.config.js
module.exports = {
  multipass: true,
  plugins: [
    'removeDimensions',
    'removeDoctype',
    'removeXMLNS',
    {
      name: 'removeAttrs',
      params: {
        attrs: [
          'xmlns.*',
          'xml.*',
          'serif:id',
          'id',
        ],
      },
    },
    'cleanupAttrs',
    'convertStyleToAttrs',
    'removeUnknownsAndDefaults',
    {
      name: 'preset-default',
      params: {
        overrides: {
          cleanupIDs: false,
        },
      },
    },
  ],
};