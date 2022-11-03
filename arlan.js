export default function Home() {
	return (
		<div className="flex flex-col items-center relative min-h-screen">
			<h2 className="font-raleway font-bold text-6xl text-primary pt-20 pb-6 md:text-3xl">
				Custom <span className="text-active">News</span> App
			</h2>
			<h3 className="text-secondary text-2xl font-raleway font-bold uppercase tracking-wide mb-12 md:text-base md:px-4 md:text-center">
				Get the latest news from around the world for a given query
			</h3>
		</div>
	);
}
export default function Home() {
	return (
		<div className="flex flex-col items-center relative min-h-screen">
			<h2 className="font-raleway font-bold text-6xl text-primary pt-20 pb-6 md:text-3xl">
				Custom <span className="text-active">News</span> App
			</h2>
			<h3 className="text-secondary text-2xl font-raleway font-bold uppercase tracking-wide mb-12 md:text-base md:px-4 md:text-center">
				Get the latest news from around the world for a given query
			</h3>
			<div className="flex flex-col justify-between items-center w-full md:items-center">
				<form className="flex w-full justify-center md:flex-col md:w-5/6">
					<input
						autoFocus={true}
						type="text"
						className="border-none outline-none focus:ring-2 focus:ring-active w-2/5 bg-primary px-4 py-2 rounded-sm font-raleway md:w-full"
						placeholder="Search for anything..."
					/>
					<button className="outline-none border border-active font-bold font-raleway ml-4 px-12 py-2 rounded-sm bg-active text-primary transition duration-300 hover:bg-background hover:text-black md:ml-0 md:mt-4">
						Search
					</button>
				</form>
			</div>
		</div>
	);
}

import {useState} from 'react';
export default function Home() {
	const [query, setQuery] = useState('taylor swift');
	const [response, setResponse] = useState(null);
	return (
		<div className="flex flex-col items-center relative min-h-screen">
			<h2 className="font-raleway font-bold text-6xl text-primary pt-20 pb-6 md:text-3xl">
				Custom <span className="text-active">News</span> App
			</h2>
			<h3 className="text-secondary text-2xl font-raleway font-bold uppercase tracking-wide mb-12 md:text-base md:px-4 md:text-center">
				Get the latest news from around the world for a given query
			</h3>
			<div className="flex flex-col justify-between items-center w-full md:items-center">
				<form className="flex w-full justify-center md:flex-col md:w-5/6">
					<input
						autoFocus={true}
						type="text"
						value={query}
						onChange={e => setQuery(e.target.value)}
						className="border-none outline-none focus:ring-2 focus:ring-active w-2/5 bg-primary px-4 py-2 rounded-sm font-raleway md:w-full"
						placeholder="Search for anything..."
					/>
					<button className="outline-none border border-active font-bold font-raleway ml-4 px-12 py-2 rounded-sm bg-active text-primary transition duration-300 hover:bg-background hover:text-black md:ml-0 md:mt-4">
						Search
					</button>
				</form>
			</div>
		</div>
	);
}
