import { Head } from '@inertiajs/react';
import { Check, Copy, File, Hash, Link } from 'lucide-react';
import { useEffect, useState } from 'react';
import { Prism } from 'react-syntax-highlighter';
import { nightOwl } from 'react-syntax-highlighter/dist/esm/styles/prism';

type Gist = { name: string; content: string; language: string };

type Props = {
    gists: Gist[];
};

export default function AlbumShow({ gists }: Props) {
    const [activeIndex, setActiveIndex] = useState(0);
    const [copied, setCopied] = useState(false);
    const [linkCopied, setLinkCopied] = useState(false);
    const [showLineNumbers, setShowLineNumbers] = useState(() => {
        const stored = localStorage.getItem('showLineNumbers');
        return stored ? JSON.parse(stored) : false;
    });

    const activeGist = gists[activeIndex];

    useEffect(() => {
        localStorage.setItem(
            'showLineNumbers',
            JSON.stringify(showLineNumbers),
        );
    }, [showLineNumbers]);

    const copyToClipboard = async () => {
        try {
            await navigator.clipboard.writeText(activeGist.content);
            setCopied(true);
            setTimeout(() => setCopied(false), 2000);
        } catch (err) {
            console.error('Failed to copy:', err);
        }
    };

    const copyLinkToClipboard = async () => {
        try {
            await navigator.clipboard.writeText(window.location.href);
            setLinkCopied(true);
            setTimeout(() => setLinkCopied(false), 2000);
        } catch (err) {
            console.error('Failed to copy link:', err);
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
            <div className="flex min-h-screen w-full bg-slate-950">
                <aside className="sticky top-0 h-screen w-64 flex-shrink-0 overflow-y-auto border-r border-slate-800 bg-slate-900/50">
                    <div className="border-b border-slate-800 px-4 py-3">
                        <h2 className="font-mono text-sm font-semibold text-slate-300">
                            Files
                        </h2>
                    </div>
                    <nav className="p-2">
                        {gists.map((gist, index) => (
                            <button
                                key={index}
                                onClick={() => setActiveIndex(index)}
                                className={`flex w-full items-center gap-2 rounded-md px-3 py-2 text-left font-mono text-sm transition-colors ${
                                    activeIndex === index
                                        ? 'bg-slate-700 text-slate-100'
                                        : 'text-slate-400 hover:bg-slate-800 hover:text-slate-300'
                                }`}
                            >
                                <File className="h-4 w-4 flex-shrink-0" />
                                <span className="truncate">{gist.name}</span>
                            </button>
                        ))}
                    </nav>
                </aside>

                <main className="flex-1 p-8">
                    <div className="mx-auto max-w-5xl space-y-6">
                        <div className="flex items-center justify-between">
                            <h1 className="font-mono text-2xl font-bold tracking-tight text-slate-100">
                                {activeGist.name}
                            </h1>
                            <div className="flex items-center gap-2">
                                <button
                                    onClick={() =>
                                        setShowLineNumbers(!showLineNumbers)
                                    }
                                    className={`flex items-center gap-2 rounded-md px-3 py-1.5 text-sm transition-colors ${
                                        showLineNumbers
                                            ? 'bg-slate-700 text-slate-100'
                                            : 'bg-slate-800 text-slate-300 hover:bg-slate-700'
                                    }`}
                                    title="Toggle line numbers"
                                >
                                    <Hash className="h-4 w-4" />
                                    <span>Line Numbers</span>
                                </button>
                                <button
                                    onClick={copyLinkToClipboard}
                                    className="flex items-center gap-2 rounded-md bg-slate-800 px-3 py-1.5 text-sm text-slate-300 transition-colors hover:bg-slate-700"
                                    title="Copy link to clipboard"
                                >
                                    {linkCopied ? (
                                        <>
                                            <Check className="h-4 w-4" />
                                            <span>Link Copied!</span>
                                        </>
                                    ) : (
                                        <>
                                            <Link className="h-4 w-4" />
                                            <span>Copy Link</span>
                                        </>
                                    )}
                                </button>
                                <button
                                    onClick={copyToClipboard}
                                    className="flex items-center gap-2 rounded-md bg-slate-800 px-3 py-1.5 text-sm text-slate-300 transition-colors hover:bg-slate-700"
                                    title="Copy code to clipboard"
                                >
                                    {copied ? (
                                        <>
                                            <Check className="h-4 w-4" />
                                            <span>Copied!</span>
                                        </>
                                    ) : (
                                        <>
                                            <Copy className="h-4 w-4" />
                                            <span>Copy</span>
                                        </>
                                    )}
                                </button>
                            </div>
                        </div>

                        <div className="overflow-hidden rounded-lg border border-slate-800 bg-slate-900/50">
                            <div className="flex items-center gap-2 border-b border-slate-800 bg-slate-900 px-4 py-2">
                                <span className="font-mono text-sm text-slate-400">
                                    {activeGist.name}
                                </span>
                            </div>
                            <Prism
                                language={activeGist.language}
                                style={nightOwl}
                                PreTag="div"
                                showLineNumbers={showLineNumbers}
                                customStyle={{
                                    fontFamily: "'Fira Code', monospace",
                                    fontSize: '16px',
                                    lineHeight: '1.6',
                                    margin: 0,
                                    background: 'transparent',
                                }}
                                children={activeGist.content.trim()}
                            />
                        </div>
                    </div>
                </main>
            </div>
        </>
    );
}
