const ModuleFederationPlugin = require('webpack/lib/container/ModuleFederationPlugin');
// const path = require('path');

module.exports = {
  output: {
    uniqueName: 'shared-mf'
  },
  optimization: {
    // Only needed to bypass a temporary bug
    runtimeChunk: false
  },
  plugins: [
    new ModuleFederationPlugin({
        name: 'shared',
        filename: 'shared.js',
        library: { type: 'var', name: 'shared' },
        exposes: {
            'shared': 'apps/shared-mf/src/app/mf-provider/index.ts'
        },
        shared: {
          '@angular/core': { singleton: true, eager: true },
          '@angular/common': { singleton: true, eager: true },
          '@angular/router': { singleton: true, eager: true },
        }
    }),
  ],
};
