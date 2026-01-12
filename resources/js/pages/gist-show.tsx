import { Head } from "@inertiajs/react";
import { Prism } from "react-syntax-highlighter";
import { nightOwl } from "react-syntax-highlighter/dist/esm/styles/prism";

type Gist = { name: string; content: string; language: string };

type Props = {
	gist: Gist;
};

export default function GistShow({ gist }: Props) {
	return (
		<>
			<Head title="Gists">
				<link rel="preconnect" href="https://fonts.bunny.net" />
				<link
					href="https://fonts.bunny.net/css?family=instrument-sans:400,500,600"
					rel="stylesheet"
				/>
			</Head>
			<div className="flex flex-col items-center p-5 w-full min-h-screen bg-slate-950">
				<div className="flex flex-col items-start w-1/2 h-full">
					<p>{gist.name}</p>
					<pre className="justify-self-center w-full">
						<Prism
							language={gist.language}
							style={nightOwl}
							PreTag="div"
							children={gist.content.trim()}
						/>
					</pre>
				</div>
			</div>
		</>
	);
}
