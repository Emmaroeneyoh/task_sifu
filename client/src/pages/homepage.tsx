import Header from "../components/homepage/header";
import Hero from "../components/homepage/hero";
import StockMarket from "../components/homepage/stockmarket";
const Homepage = () => {
	return (
		<div>
			<Header />
			<Hero />

			<div className="w-full bg-[red] h-48"></div>
			<StockMarket />
		</div>
	);
};

export default Homepage;
