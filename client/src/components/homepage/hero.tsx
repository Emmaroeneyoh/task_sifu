import articles from "../../data/herosection";
import formatDate from "../../utils/formatDate";

export default function Hero() {
	return (
		<div className="w-full md:h-[600px] lg:h-[90vh] mx-auto p-4">
			<div className="flex flex-col h-auto md:h-full md:flex-row max-w-6xl items-stretch w-full  border-b-[2px] border-black py-4 md:py-10  gap-6 mx-auto">
				{/* Featured Article */}
				<a href={articles[0].url} target="_blank" className="relative w-full h-[300px] md:h-full">
					<div className="relative h-full w-full overflow-hidden">
						<img src={articles[0].image} alt="" className="h-[150%] -top-[50%] md:h-[120%] w-full relative md:-top-[20%]" />
						<div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" />
						<div className="absolute bottom-0  p-6  text-white">
							<span className="mb-2 inline-block bg-tag  bg-primary px-2 py-1 text-xs">{articles[0].category}</span>
							<h2 className="mb-2 text-md md:text-2xl font-bold">{articles[0].title}</h2>
							<div className="flex items-center gap-2 text-sm">
								<span>{articles[0].author}</span>
								<span>•</span>
								<span>{articles[0].date}</span>
							</div>
						</div>
					</div>
				</a>

				{/* Right Side Articles */}
				<div className="flex flex-col w-full gap-4 md:gap-0 justify-between">
					{articles.slice(1).map((article, index) => (
						<a href={article.url} target="_blank" key={index} className="flex gap-4 w-full">
							<div className="relative h-36 w-1/2 shrink-0 overflow-hidden">
								<img src={article.image} alt="" className="h-full w-full object-cover" />
							</div>
							<div className="flex w-1/2 flex-col justify-center items-start">
								<span className="mb-1 inline text-white bg-tag px-2 py-1 text-xs text-primary">{article.category}</span>
								<h3 className="mb-1 line-clamp-3  font-bold text-xl">{article.title}</h3>
								<span className="text-xs text-muted-foreground">{formatDate(article.date)}</span>
							</div>
						</a>
					))}
				</div>
			</div>
		</div>
	);
}
