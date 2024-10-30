const Loading = () => {
	return (
		<div className="py-8">
			{/* Classic Spinner */}
			<div className="flex flex-col items-center gap-4 rounded-lg  p-24">
				<div className="relative h-12 w-12">
					<div className="absolute h-full w-full animate-spin rounded-full border-4 border-primary border-t-transparent" />
				</div>
			</div>
		</div>
	);
};

export default Loading;
