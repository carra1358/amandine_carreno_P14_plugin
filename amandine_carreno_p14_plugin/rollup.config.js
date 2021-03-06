import babel from 'rollup-plugin-babel';
import commonjs from '@rollup/plugin-commonjs';
import nodeResolve from '@rollup/plugin-node-resolve';
import external from 'rollup-plugin-peer-deps-external';
import css from "rollup-plugin-import-css";
import { terser } from 'rollup-plugin-terser';

export default [
    {
        input: 'src/index.js',
        output: [
            {
                file: 'dist/index.js',
                format: 'cjs',
            },
        ],
        plugins: [
            babel({
                exclude: 'node_modules/**',
                presets: ['@babel/preset-react']
            }),
            commonjs(),
            external(),
            css(),
            terser(),
            nodeResolve({
                extensions: [".js", ".jsx"]
            }),
        ]
    }
];