import babel from 'rollup-plugin-babel';
import resolve from 'rollup-plugin-node-resolve';
import commonjs from 'rollup-plugin-commonjs';
import typescript from '@rollup/plugin-typescript';
import tslib from 'tslib'; // Tambahkan baris ini

export default {
  input: 'src/index.ts', // Masukkan file sumber utama Anda di sini
  output: {
    file: 'dist/bundle.js', // Tentukan nama dan lokasi output bundle Anda di sini
    format: 'cjs', // Format bundling yang diinginkan, misalnya 'cjs' untuk Node.js
    exports: 'default', // Mengatur ekspor default
  },
  
  plugins: [
    resolve(),
    commonjs(),
    babel({
      exclude: 'node_modules/**', // Mengecualikan direktori node_modules dari transformasi Babel
    }),
    typescript({
      tslib, // Tambahkan opsi tslib di sini
    })
  ],
};