import { Head } from "@inertiajs/react";
import { Code2, Download, Share2, Zap } from "lucide-react";
import { Prism } from "react-syntax-highlighter";
import { nightOwl } from "react-syntax-highlighter/dist/esm/styles/prism";

export default function Welcome() {
	const exampleCode = `function shareCode() {
  const gist = await uploadGist({
    name: "hello.js",
    content: "console.log('Hello, World!')",
    language: "javascript"
  });

  return gist.url;
}`;

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
			<div className="flex flex-col justify-center items-center p-8 w-full min-h-screen bg-slate-950">
				<div className="flex flex-col items-center space-y-16 w-full max-w-5xl">
					{/* Hero Section */}
					<div className="flex flex-col items-center space-y-6 text-center">
						<div className="flex gap-3 items-center">
							<Code2 className="w-12 h-12 text-blue-400" />
							<h1 className="font-mono text-6xl font-bold tracking-tight text-slate-100">
								Prezes Gists
							</h1>
						</div>
						<p className="max-w-2xl text-2xl text-slate-300">
							Share code snippets instantly with beautiful syntax highlighting
							and zero hassle
						</p>
						<div className="flex gap-4 mt-8">
							<a
								href="https://github.com/your-username/gists-cli/releases/latest"
								className="flex gap-2 items-center py-3 px-6 text-lg font-medium bg-blue-400 rounded-lg transition-colors hover:bg-blue-300 text-slate-950"
							>
								<Download className="w-5 h-5" />
								Download CLI
							</a>
						</div>
					</div>

					{/* Features Section */}
					<div className="grid grid-cols-1 gap-6 w-full md:grid-cols-3">
						<div className="flex flex-col items-center p-6 text-center rounded-lg border bg-slate-900/50 border-slate-800">
							<Zap className="mb-4 w-10 h-10 text-yellow-400" />
							<h3 className="mb-2 text-xl font-semibold text-slate-100">
								Blazingly Fast
							</h3>
							<p className="text-slate-400">
								Upload and share code snippets in seconds from your terminal
							</p>
						</div>
						<div className="flex flex-col items-center p-6 text-center rounded-lg border bg-slate-900/50 border-slate-800">
							<Code2 className="mb-4 w-10 h-10 text-green-400" />
							<h3 className="mb-2 text-xl font-semibold text-slate-100">
								Syntax Highlighting
							</h3>
							<p className="text-slate-400">
								Beautiful code rendering with support for 100+ languages
							</p>
						</div>
						<div className="flex flex-col items-center p-6 text-center rounded-lg border bg-slate-900/50 border-slate-800">
							<Share2 className="mb-4 w-10 h-10 text-purple-400" />
							<h3 className="mb-2 text-xl font-semibold text-slate-100">
								Easy Sharing
							</h3>
							<p className="text-slate-400">
								Get a shareable link instantly and copy code with one click
							</p>
						</div>
					</div>

					{/* Code Example Section */}
					<div className="space-y-4 w-full">
						<h2 className="text-2xl font-semibold text-center text-slate-200">
							See it in action
						</h2>
						<div className="overflow-hidden rounded-lg border bg-slate-900/50 border-slate-800">
							<div className="flex gap-2 items-center py-2 px-4 border-b bg-slate-900 border-slate-800">
								<span className="ml-2 font-mono text-sm text-slate-400">
									example.js
								</span>
							</div>
							<Prism
								language="javascript"
								style={nightOwl}
								PreTag="div"
								customStyle={{
									fontFamily: "'Fira Code', monospace",
									fontSize: "16px",
									lineHeight: "1.6",
									margin: 0,
									background: "transparent",
								}}
								children={exampleCode.trim()}
							/>
						</div>
					</div>

					{/* CLI Section */}
					<div className="p-8 space-y-4 w-full rounded-lg border bg-slate-900/50 border-slate-800">
						<h2 className="text-2xl font-semibold text-center text-slate-200">
							Upload from your terminal
						</h2>
						<div className="p-4 rounded-lg border bg-slate-950 border-slate-800">
							<code className="font-mono" style={{ color: "#d6deeb" }}>
								$ prezes-gists upload myfile.js
								<br />
								<span style={{ color: "#addb67" }}>
									✓ File 'myfile.js' uploaded successfully!
								</span>
								<br />
								<span style={{ color: "#82aaff" }}>
									→
									https://prezes-gists.kacper-preyzner.pl/gist/019bb8cb-0ce3-7346-a7c1-7f11ceb93de4
								</span>
							</code>
						</div>
						<p className="text-center text-slate-400">
							Install our CLI tool to start sharing code instantly
						</p>
					</div>

					{/* Footer */}
					<div className="text-sm text-center text-slate-500">
						<p>Made with ♥ for developers</p>
					</div>
				</div>
			</div>
		</>
	);
}
