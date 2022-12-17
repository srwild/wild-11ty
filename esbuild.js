#!/usr/bin/env node

require('dotenv').config('./.env');

const esbuild = require('esbuild');
const sassPlugin = require('esbuild-sass-plugin').sassPlugin;

// Parse arguments
const args = Object.fromEntries(
  process.argv
    .slice(2) // remove first two, they're paths
    .map((arg) => {
      // If the argument is NOT a flag `--` set it to true
      if (!arg.includes('--')) {
        return [arg, true];
      }
      let [command, value] = arg.split('=');
      command = command.replace('--', '');
      return [command, value];
    })
    .filter((a) => a[0] && a[1])
);

const watching = args.watch || false;
const srcDir = 'src';
const srcFiles = [`${srcDir}/js/app.js`, `${srcDir}/css/style.scss`];
const outDir = '_site';

const build = async () => {
  console.log('Running esbuild...');
  await esbuild
    .build({
      logLevel: 'info',
      entryPoints: srcFiles,
      bundle: true,
      minify: !watching,
      outdir: `${outDir}`,
      sourcemap: watching,
      watch: watching,
      plugins: [
        sassPlugin({
          cache: watching,
        }),
      ],
    })
    .catch(() => process.exit(1));
};

build();