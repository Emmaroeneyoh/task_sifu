import Image from "../../assets/image.jpg";
const articles = [
	{
		id: 1,
		title: "15 Shocking Elon Musk Tweets About Stock Market",
		category: "Stock Market",
		date: "June 28, 2021",
		author: "akbarh",
		image: Image,
		featured: true,
	},
	{
		id: 2,
		title: "Want a Career in Technology? Make This Secret Weapon",
		category: "Technology",
		date: "June 28, 2021",
		image: Image,
	},
	{
		id: 3,
		title: "The Health Industry Is Changing Fast. Here's How to Keep Pace",
		category: "Health",
		date: "June 28, 2021",
		image: Image,
	},
	{
		id: 4,
		title: "Everything You Ever Wanted to Know About Technology",
		category: "Technology",
		date: "June 28, 2021",
		image: Image,
	},
];

export default function Hero() {
	return (
		<div className="w-full h-[90vh] mx-auto p-4">
			<div className="flex max-w-6xl items-stretch w-full h-full border-b-[2px] border-black py-10  gap-6 mx-auto">
				{/* Featured Article */}
				<article className="relative w-full h-full">
					<div className="relative h-full w-full overflow-hidden">
						<img src={articles[0].image} alt="" className="h-full w-full object-cover" />
						<div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" />
						<div className="absolute bottom-0  p-6  text-white">
							<span className="mb-2 inline-block bg-tag  bg-primary px-2 py-1 text-xs">{articles[0].category}</span>
							<h2 className="mb-2 text-2xl font-bold">{articles[0].title}</h2>
							<div className="flex items-center gap-2 text-sm">
								<span>{articles[0].author}</span>
								<span>•</span>
								<span>{articles[0].date}</span>
							</div>
						</div>
					</div>
				</article>

				{/* Right Side Articles */}
				<div className="flex flex-col w-full  justify-between">
					{articles.slice(1).map((article) => (
						<article key={article.id} className="flex gap-4 w-full">
							<div className="relative h-36 w-1/2 shrink-0 overflow-hidden">
								<img src={article.image} alt="" className="h-full w-full object-cover" />
							</div>
							<div className="flex w-1/2 flex-col justify-center items-start">
								<span className="mb-1 inline text-white bg-tag px-2 py-1 text-xs text-primary">{article.category}</span>
								<h3 className="mb-1  font-bold text-xl">{article.title}</h3>
								<span className="text-xs text-muted-foreground">{article.date}</span>
							</div>
						</article>
					))}
				</div>
			</div>
		</div>
	);
}
