import { useEffect, useState } from "react";
import { toast } from "react-toastify";

import categories from "../../data/categories";
import { fetchNewsItems } from "../../libs/axios";
import useDebounce from "../../hooks/useDebounce";
import formatDate from "../../utils/formatDate";

import Loading from "../Loading";
import NoData from "../NoData";
import Error from "../Error";

export default function StockMarket() {
	const [articles, setArticles] = useState([] as { author: string; content: string; title: string; date: Date; image: string; url: string }[]);
	const [category, setCategory] = useState("");
	const [language] = useState("en");
	const [search, setSearch] = useState("");
	const [isLoading, setIsLoading] = useState(true);
	const [error, setError] = useState("");
	const q = useDebounce(search, 1000);

	const reset = () => {
		setSearch("");
		setCategory("");
	};

	useEffect(() => {
		(async () => {
			setIsLoading(true);
			setError("");
			const data = await fetchNewsItems({ category, language, q });
			setIsLoading(false);

			if (data.error) {
				setError(data.error);
				return toast.error(data.error);
			}
			setArticles(data.articles);
		})();
	}, [category, language, q]);

	return (
		<section className="w-full max-w-7xl mx-auto px-4 py-8">
			<div className="mb-8 flex flex-col md:flex-row gap-4 items-center justify-between">
				<h2 className="jtext-xl md:text-3xl font-bold">News Items</h2>
				<div className="flex gap-4 items-center justify-center">
					<p className="hidden md:block">Filters :</p>

					<input type="text" value={search} onChange={(e) => setSearch(e.target.value)} className="p-2 border-[1px] capitalize focus:outline-0" placeholder="Search news" />
					<select name="category" value={category} onChange={(e) => setCategory(e.target.value)} id="" className="p-2 border-[1px] capitalize focus:outline-0">
						<option value="" disabled>
							Select Category
						</option>
						<option value="" disabled>
							All
						</option>
						{categories.map((category: string, index: number) => (
							<option value={category} key={index} className="capitalize">
								{category}
							</option>
						))}
					</select>
				</div>
			</div>

			{!isLoading && (
				<>
					{!error && (
						<>
							{articles.length > 0 && (
								<div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
									{articles.map((article, index: number) => (
										<article key={index} className="flex flex-col">
											<a href={article.url} target="_blank" className="mb-4 aspect-[4/3] overflow-hidden ">
												<img src={article.image} alt="" className="h-full w-full object-cover transition-transform duration-300 hover:scale-105" />
											</a>
											<div className="flex flex-col flex-grow">
												<h3 className="hover:text-primary line-clamp-2 font-bold text-xl">{article.title}</h3>

												<div className="mb-3 flex items-center gap-2 text-sm text-muted-foreground">
													<span>{article.author}</span>
													<span>•</span>
													<span>{formatDate(article.date)}</span>
												</div>
												<p className="text-muted-foreground line-clamp-3">{article.content}</p>
											</div>
										</article>
									))}
								</div>
							)}
							{articles.length == 0 && <NoData reset={reset} />}
						</>
					)}

					{error && <Error reset={reset} />}
				</>
			)}

			{isLoading && <Loading />}
		</section>
	);
}
