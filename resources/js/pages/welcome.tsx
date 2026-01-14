import { Head } from '@inertiajs/react';
import { Code2, Download, Share2, Zap } from 'lucide-react';
import { Prism } from 'react-syntax-highlighter';
import { nightOwl } from 'react-syntax-highlighter/dist/esm/styles/prism';

export default function Welcome() {
    const exampleCode = `class You:
    def describe(self, s: str):
        print(f"You are {s}!")

you = You()
you.describe("awesome")

# You are awesome!`;

    return (
        <>
            <Head title="Share Code Instantly">
                <link rel="preconnect" href="https://fonts.bunny.net" />
                <link
                    href="https://fonts.bunny.net/css?family=instrument-sans:400,500,600"
                    rel="stylesheet"
                />
                <link
                    href="https://fonts.bunny.net/css?family=fira-code:400,500,600,700"
                    rel="stylesheet"
                />
            </Head>
            <div className="flex min-h-screen w-full flex-col items-center justify-center bg-slate-950 p-8">
                <div className="flex w-full max-w-5xl flex-col items-center space-y-16">
                    {/* Hero Section */}
                    <div className="flex flex-col items-center space-y-6 text-center">
                        <div className="flex items-center gap-3">
                            <Code2 className="h-12 w-12 text-blue-400" />
                            <h1 className="font-mono text-6xl font-bold tracking-tight text-slate-100">
                                Prezes Gists
                            </h1>
                        </div>
                        <p className="max-w-2xl text-2xl text-slate-300">
                            Share code snippets instantly with beautiful syntax
                            highlighting and zero hassle
                        </p>
                        <div className="mt-8 flex gap-4">
                            <a
                                href="https://github.com/your-username/gists-cli/releases/latest"
                                className="flex items-center gap-2 rounded-lg bg-blue-400 px-6 py-3 text-lg font-medium text-slate-950 transition-colors hover:bg-blue-300"
                            >
                                <Download className="h-5 w-5" />
                                Download CLI
                            </a>
                        </div>
                    </div>

                    {/* Features Section */}
                    <div className="grid w-full grid-cols-1 gap-6 md:grid-cols-3">
                        <div className="flex flex-col items-center rounded-lg border border-slate-800 bg-slate-900/50 p-6 text-center">
                            <Zap className="mb-4 h-10 w-10 text-yellow-400" />
                            <h3 className="mb-2 text-xl font-semibold text-slate-100">
                                Blazingly Fast
                            </h3>
                            <p className="text-slate-400">
                                Upload and share code snippets in seconds from
                                your terminal
                            </p>
                        </div>
                        <div className="flex flex-col items-center rounded-lg border border-slate-800 bg-slate-900/50 p-6 text-center">
                            <Code2 className="mb-4 h-10 w-10 text-green-400" />
                            <h3 className="mb-2 text-xl font-semibold text-slate-100">
                                Syntax Highlighting
                            </h3>
                            <p className="text-slate-400">
                                Beautiful code rendering with support for 100+
                                languages
                            </p>
                        </div>
                        <div className="flex flex-col items-center rounded-lg border border-slate-800 bg-slate-900/50 p-6 text-center">
                            <Share2 className="mb-4 h-10 w-10 text-purple-400" />
                            <h3 className="mb-2 text-xl font-semibold text-slate-100">
                                Easy Sharing
                            </h3>
                            <p className="text-slate-400">
                                Get a shareable link instantly and copy code
                                with one click
                            </p>
                        </div>
                    </div>

                    {/* CLI Section */}
                    <div className="w-full space-y-4 rounded-lg border border-slate-800 bg-slate-900/50 p-8">
                        <h2 className="text-center text-2xl font-semibold text-slate-200">
                            Upload from your terminal
                        </h2>
                        <div className="rounded-lg border border-slate-800 bg-slate-950 p-4">
                            <code
                                className="font-mono"
                                style={{ color: '#d6deeb' }}
                            >
                                $ prezes-gists upload-file myfile.py
                                <br />
                                <span style={{ color: '#addb67' }}>
                                    ✓ File 'myfile.py' uploaded successfully!
                                </span>
                                <br />
                                <span style={{ color: '#82aaff' }}>
                                    →
                                    https://prezes-gists.kacper-preyzner.pl/gist/019bb8cb-0ce3-7346-a7c1-7f11ceb93de4
                                </span>
                            </code>
                        </div>
                        <p className="text-center text-slate-400">
                            Install our CLI tool to start sharing code instantly
                        </p>
                    </div>

                    {/* Code Example Section */}
                    <div className="w-full space-y-4">
                        <h2 className="text-center text-2xl font-semibold text-slate-200">
                            See it in action
                        </h2>
                        <div className="overflow-hidden rounded-lg border border-slate-800 bg-slate-900/50">
                            <div className="flex items-center gap-2 border-b border-slate-800 bg-slate-900 px-4 py-2">
                                <span className="ml-2 font-mono text-sm text-slate-400">
                                    myfile.py
                                </span>
                            </div>
                            <Prism
                                language="python"
                                style={nightOwl}
                                PreTag="div"
                                customStyle={{
                                    fontFamily: "'Fira Code', monospace",
                                    fontSize: '16px',
                                    lineHeight: '1.6',
                                    margin: 0,
                                    background: 'transparent',
                                }}
                                children={exampleCode.trim()}
                            />
                        </div>
                    </div>

                    {/* Footer */}
                    <div className="text-center text-sm text-slate-500">
                        <p>Made with ♥ for developers</p>
                    </div>
                </div>
            </div>
        </>
    );
}
