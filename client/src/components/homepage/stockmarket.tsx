import { useState } from "react";
import categories from "../../data/categories";
import languages from "../../data/languages";

export default function StockMarket() {
	const [category, setCategory] = useState("");
	const [language, setLanguage] = useState("");
	const [country, setCountry] = useState("");
	const articles = [
		{
			id: 1,
			title: "What Your Relationship With Stock Market Says About You",
			category: "Stock Market",
			date: "June 28, 2021",
			author: "akbarh",
			image: "https://websitedemos.net/business-blog-04/wp-content/uploads/sites/895/2021/06/business-blog-latest-news-image-1.jpg",
			excerpt: "Cursus iaculis etiam in In nullam donec sem sed consequat scelerisque nibh amet, massa egestas risus, gravida vel amet, imperdiet ...",
		},
		{
			id: 2,
			title: "How I Learned to Stop Worrying and Love Stock Market",
			category: "Stock Market",
			date: "June 28, 2021",
			author: "akbarh",
			image: "https://websitedemos.net/business-blog-04/wp-content/uploads/sites/895/2021/06/business-blog-latest-news-image-1.jpg",
			excerpt: "Cursus iaculis etiam in In nullam donec sem sed consequat scelerisque nibh amet, massa egestas risus, gravida vel amet, imperdiet ...",
		},
		{
			id: 3,
			title: "Why Stock Market Affects Men and Women Differently",
			category: "Stock Market",
			date: "June 28, 2021",
			author: "akbarh",
			image: "https://websitedemos.net/business-blog-04/wp-content/uploads/sites/895/2021/06/business-blog-latest-news-image-1.jpg",
			excerpt: "Cursus iaculis etiam in In nullam donec sem sed consequat scelerisque nibh amet, massa egestas risus, gravida vel amet, imperdiet ...",
		},
	];

	return (
		<section className="w-full max-w-7xl mx-auto px-4 py-8">
			<div className="mb-8 flex items-center justify-between">
				<h2 className="text-3xl font-bold">News Items</h2>
				<div className="flex gap-4 items-center justify-center">
					Filters :
					<select name="category" value={category} onChange={(e) => setCategory(e.target.value)} id="" className="p-2 border-[1px] capitalize focus:outline-0">
						<option value="" disabled>
							Select Category
						</option>
						{categories.map((category: string, index: number) => (
							<option value={category} key={index} className="capitalize">
								{category}
							</option>
						))}
					</select>
					<select name="language" value={language} onChange={(e) => setLanguage(e.target.value)} className="p-2 border-[1px] capitalize focus:outline-0">
						<option value="" disabled>
							Select Language
						</option>
						{languages.map((language: { key: string; desc: string }, index: number) => (
							<option value={language.key} key={index} className="capitalize">
								{language.desc}
							</option>
						))}
					</select>
					<select name="country" value={country} onChange={(e) => setCountry(e.target.value)} className="p-2 border-[1px] capitalize focus:outline-0">
						<option value="" disabled>
							Select Country
						</option>
						{languages.map((language: { key: string; desc: string }, index: number) => (
							<option value={language.key} key={index} className="capitalize">
								{language.desc}
							</option>
						))}
					</select>
				</div>
			</div>

			<div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
				{articles.map((article) => (
					<article key={article.id} className="flex flex-col">
						<div className="mb-4 aspect-[4/3] overflow-hidden ">
							<img src={article.image} alt="" className="h-full w-full object-cover transition-transform duration-300 hover:scale-105" />
						</div>
						<div className="flex flex-col flex-grow">
							<a href="#" className="mb-2 inline-block text-sm font-medium text-primary text-blue-800 hover:text-black">
								{article.category}
							</a>
							<h3 className="mb-2 text-xl font-bold leading-tight">
								<a href="#" className="hover:text-primary">
									{article.title}
								</a>
							</h3>
							<div className="mb-3 flex items-center gap-2 text-sm text-muted-foreground">
								<span>{article.author}</span>
								<span>•</span>
								<span>{article.date}</span>
							</div>
							<p className="text-muted-foreground">{article.excerpt}</p>
						</div>
					</article>
				))}
			</div>
		</section>
	);
}
