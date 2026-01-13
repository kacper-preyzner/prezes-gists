import { Head } from "@inertiajs/react";
import { Check, Copy, Hash, Link } from "lucide-react";
import { useEffect, useState } from "react";
import { Prism } from "react-syntax-highlighter";
import { nightOwl } from "react-syntax-highlighter/dist/esm/styles/prism";

type Gist = { name: string; content: string; language: string };

type Props = {
	gist: Gist;
};

export default function GistShow({ gist }: Props) {
	const [copied, setCopied] = useState(false);
	const [linkCopied, setLinkCopied] = useState(false);
	const [showLineNumbers, setShowLineNumbers] = useState(() => {
		const stored = localStorage.getItem("showLineNumbers");
		return stored ? JSON.parse(stored) : false;
	});

	useEffect(() => {
		localStorage.setItem("showLineNumbers", JSON.stringify(showLineNumbers));
	}, [showLineNumbers]);

	const copyToClipboard = async () => {
		try {
			await navigator.clipboard.writeText(gist.content);
			setCopied(true);
			setTimeout(() => setCopied(false), 2000);
		} catch (err) {
			console.error("Failed to copy:", err);
		}
	};

	const copyLinkToClipboard = async () => {
		try {
			await navigator.clipboard.writeText(window.location.href);
			setLinkCopied(true);
			setTimeout(() => setLinkCopied(false), 2000);
		} catch (err) {
			console.error("Failed to copy link:", err);
		}
	};

	return (
		<>
			<Head title="Prezes Gists">
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
			<div className="flex flex-col items-center p-8 w-full min-h-screen bg-slate-950">
				<div className="flex flex-col items-center space-y-8 w-full max-w-5xl">
					<div className="flex justify-between items-center w-full">
						<h1 className="font-mono text-4xl font-bold tracking-tight text-slate-100">
							{gist.name}
						</h1>
						<div className="flex gap-2 items-center">
							<button
								onClick={() => setShowLineNumbers(!showLineNumbers)}
								className={`flex gap-2 items-center py-1.5 px-3 text-sm rounded-md transition-colors ${
									showLineNumbers
										? "text-slate-100 bg-slate-700"
										: "text-slate-300 bg-slate-800 hover:bg-slate-700"
								}`}
								title="Toggle line numbers"
							>
								<Hash className="w-4 h-4" />
								<span>Line Numbers</span>
							</button>
							<button
								onClick={copyLinkToClipboard}
								className="flex gap-2 items-center py-1.5 px-3 text-sm rounded-md transition-colors text-slate-300 bg-slate-800 hover:bg-slate-700"
								title="Copy link to clipboard"
							>
								{linkCopied ? (
									<>
										<Check className="w-4 h-4" />
										<span>Link Copied!</span>
									</>
								) : (
									<>
										<Link className="w-4 h-4" />
										<span>Copy Link</span>
									</>
								)}
							</button>
							<button
								onClick={copyToClipboard}
								className="flex gap-2 items-center py-1.5 px-3 text-sm rounded-md transition-colors text-slate-300 bg-slate-800 hover:bg-slate-700"
								title="Copy code to clipboard"
							>
								{copied ? (
									<>
										<Check className="w-4 h-4" />
										<span>Copied!</span>
									</>
								) : (
									<>
										<Copy className="w-4 h-4" />
										<span>Copy</span>
									</>
								)}
							</button>
						</div>
					</div>
					<div className="overflow-hidden w-full rounded-lg border bg-slate-900/50 border-slate-800">
						<div className="flex gap-2 items-center py-2 px-4 border-b bg-slate-900 border-slate-800">
							<span className="font-mono text-sm text-slate-400">
								{gist.name}
							</span>
						</div>
						<Prism
							language={gist.language}
							style={nightOwl}
							PreTag="div"
							showLineNumbers={showLineNumbers}
							customStyle={{
								fontFamily: "'Fira Code', monospace",
								fontSize: "16px",
								lineHeight: "1.6",
								margin: 0,
								background: "transparent",
							}}
							children={gist.content.trim()}
						/>
					</div>
				</div>
			</div>
		</>
	);
}
