import AppLogoIcon from "./app-logo-icon";

export default function AppLogo() {
	return (
		<>
			<div className="flex justify-center items-center bg-transparent rounded-md aspect-square size-8">
				<AppLogoIcon className="size-6" />
			</div>
			<div className="grid flex-1 ml-1 text-sm text-left">
				<span className="mb-0.5 font-semibold leading-tight truncate">
					Prezes Gists
				</span>
			</div>
		</>
	);
}
