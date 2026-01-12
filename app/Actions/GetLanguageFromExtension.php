<?php

namespace App\Actions;

class GetLanguageFromExtension
{
    public function __construct() {}

    public function handle(string $extension): string
    {
        $map = [
            // JavaScript/TypeScript
            'js' => 'javascript',
            'jsx' => 'javascript',
            'mjs' => 'javascript',
            'cjs' => 'javascript',
            'ts' => 'typescript',
            'tsx' => 'typescript',

            // Web
            'html' => 'xml',
            'htm' => 'xml',
            'xml' => 'xml',
            'css' => 'css',
            'scss' => 'scss',
            'sass' => 'scss',
            'less' => 'less',

            // Python
            'py' => 'python',
            'pyw' => 'python',

            // Rust
            'rs' => 'rust',

            // Go
            'go' => 'go',

            // Java/JVM
            'java' => 'java',
            'kt' => 'kotlin',
            'kts' => 'kotlin',
            'scala' => 'scala',
            'groovy' => 'groovy',
            'gradle' => 'gradle',

            // C/C++
            'c' => 'c',
            'h' => 'c',
            'cpp' => 'cpp',
            'hpp' => 'cpp',
            'cc' => 'cpp',
            'cxx' => 'cpp',
            'c++' => 'cpp',
            'hh' => 'cpp',

            // C#
            'cs' => 'csharp',

            // PHP
            'php' => 'php',

            // Ruby
            'rb' => 'ruby',
            'rake' => 'ruby',

            // Swift
            'swift' => 'swift',

            // Objective-C
            'm' => 'objectivec',
            'mm' => 'objectivec',

            // Shell
            'sh' => 'bash',
            'bash' => 'bash',
            'zsh' => 'bash',

            // PowerShell
            'ps1' => 'powershell',
            'psm1' => 'powershell',
            'psd1' => 'powershell',

            // Config/Data formats
            'json' => 'json',
            'yaml' => 'yaml',
            'yml' => 'yaml',
            'xml' => 'xml',
            'toml' => 'ini',
            'ini' => 'ini',
            'properties' => 'properties',

            // Markdown
            'md' => 'markdown',
            'markdown' => 'markdown',

            // SQL
            'sql' => 'sql',

            // Docker
            'dockerfile' => 'dockerfile',

            // Makefile
            'makefile' => 'makefile',
            'mk' => 'makefile',

            // LaTeX
            'tex' => 'latex',
            'latex' => 'latex',

            // Lua
            'lua' => 'lua',

            // Perl
            'pl' => 'perl',
            'pm' => 'perl',

            // Haskell
            'hs' => 'haskell',
            'lhs' => 'haskell',

            // Elixir
            'ex' => 'elixir',
            'exs' => 'elixir',

            // Erlang
            'erl' => 'erlang',
            'hrl' => 'erlang',

            // Clojure
            'clj' => 'clojure',
            'cljs' => 'clojure',
            'cljc' => 'clojure',

            // Lisp
            'lisp' => 'lisp',
            'lsp' => 'lisp',

            // Scheme
            'scm' => 'scheme',
            'ss' => 'scheme',

            // OCaml
            'ml' => 'ocaml',
            'mli' => 'ocaml',

            // F#
            'fs' => 'fsharp',
            'fsi' => 'fsharp',
            'fsx' => 'fsharp',

            // Dart
            'dart' => 'dart',

            // R
            'r' => 'r',

            // Matlab
            'mat' => 'matlab',
            'matlab' => 'matlab',

            // Julia
            'jl' => 'julia',

            // Vim
            'vim' => 'vim',

            // Nginx
            'nginx' => 'nginx',

            // Apache
            'htaccess' => 'apache',
            'apache' => 'apache',

            // Diff
            'diff' => 'diff',
            'patch' => 'diff',

            // Protocol Buffers
            'proto' => 'protobuf',

            // GraphQL
            'graphql' => 'graphql',
            'gql' => 'graphql',

            // Assembly
            'asm' => 'x86asm',
            's' => 'armasm',

            // Crystal
            'cr' => 'crystal',

            // Nim
            'nim' => 'nim',

            // Zig
            'zig' => 'c',

            // D
            'd' => 'd',

            // Elm
            'elm' => 'elm',

            // Fortran
            'f' => 'fortran',
            'f90' => 'fortran',
            'f95' => 'fortran',

            // COBOL
            'cob' => 'coq',

            // Ada
            'ada' => 'ada',
            'adb' => 'ada',

            // Pascal
            'pas' => 'delphi',

            // Verilog
            'v' => 'verilog',
            'sv' => 'verilog',

            // VHDL
            'vhd' => 'vhdl',
            'vhdl' => 'vhdl',

            // Prolog
            'pro' => 'prolog',

            // Puppet
            'pp' => 'puppet',

            // Handlebars
            'hbs' => 'handlebars',

            // Twig
            'twig' => 'twig',

            // Pug
            'pug' => 'pug',
            'jade' => 'pug',

            // Stylus
            'styl' => 'stylus',

            // CoffeeScript
            'coffee' => 'coffeescript',

            // LiveScript
            'ls' => 'livescript',

            // Haxe
            'hx' => 'haxe',

            // Arduino
            'ino' => 'arduino',

            // Processing
            'pde' => 'processing',

            // GLSL
            'glsl' => 'glsl',
            'vert' => 'glsl',
            'frag' => 'glsl',

            // CMake
            'cmake' => 'cmake',

            // Dockerfile
            'dockerignore' => 'dockerfile',
        ];

        return $map[$extension] ?? 'plaintext';
    }
}
