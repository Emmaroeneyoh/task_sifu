import { InboxIcon } from "lucide-react";

export default function Error({ reset }: { reset: () => void }) {
	return (
		<div className="flex min-h-[400px] w-full items-center justify-center px-4">
			<div className="flex flex-col items-center justify-center space-y-4 text-center" role="status" aria-live="polite">
				<div className="rounded-full bg-muted p-4">
					<InboxIcon className="h-12 w-12 text-muted-foreground" aria-hidden="true" />
				</div>

				<h2 className="text-lg font-semibold">An Error Occurred</h2>

				<p className="max-w-sm text-sm text-muted-foreground">There was an error during operation</p>

				<button onClick={() => reset()} className="p-3 text-white px-5 bg-tag">
					Refetch
				</button>
			</div>
		</div>
	);
}
