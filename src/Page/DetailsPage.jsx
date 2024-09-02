import React from "react";
import { useParams } from "react-router-dom";

export default function DetailsPage() {
  const [games, setGames] = React.useState({});
  const [error, setError] = React.useState(null);
  const { id } = useParams();

  console.log(games);

  const fetchGamesDetails = async () => {
    try {
      const response = await fetch(
        `https://free-to-play-games-database.p.rapidapi.com/api/game?id=${id}`,
        {
          method: "GET",
          headers: {
            "x-rapidapi-key":
              "dce14bd7b0msh5deb7e064d40439p10e22cjsn49aa91af3945",
            "x-rapidapi-host": "free-to-play-games-database.p.rapidapi.com",
          },
        }
      );
      const result = await response.json();
      setGames(result);
    } catch (error) {
      setError(error);
    }
  };

  React.useEffect(() => {
    fetchGamesDetails();
  }, []);

  return (
    <section>
      <div className="max-w-7xl mx-auto px-4 sm:px-1 my-20 ">
        <div className="grid grid-cols-1 sm:grid-cols-3  gap-10">
          <div className="">
            <div>
              <img
                src={games.thumbnail}
                alt={games.title}
                className="block h-60 w-full object-cover"
              />
            </div>
            <div className="flex gap-4 pt-5">
              <span className="bg-zinc-700 hover:bg-zinc-700/90 text-gray-100 px-4 py-3 text-center rounded-sm block">
                {games.status === "Live" ? "Paid" : "Free"}
              </span>
              <a
                href={games.game_url}
                target="_blank"
                className="bg-blue-500 cursor-pointer  hover:bg-blue-500/80 transition ease-out text-gray-100 px-4 py-3  w-full text-center font-medium rounded-sm block"
              >
                Play Now
              </a>
            </div>
          </div>
          <div className="md:col-span-2 col-span-1">
            {/* bradecrum */}
            <a
              href="/"
              className="text-zinc-100 hover:text-zinc-500/60 text-sm font-semibold"
            >
              Home
            </a>
            &gt;{" "}
            <a
              href="/game"
              className="text-zinc-100 hover:text-zinc-500/60 text-sm font-semibold"
            >
              Free Games
            </a>
            &gt; <span className="text-zinc-300">{games.title}</span>
            <h2 className="text-5xl font-bold text-zinc-300 ">{games.title}</h2>
            <div>
              <h3 className="text-2xl font-semibold py-4 border-b border-zinc-500">
                {" "}
                About {games.title}
              </h3>
              <p className="text-zinc-200 py-3">{games.short_description}</p>
            </div>
            <div>
              <h3 className="text-2xl font-semibold">Additional Information</h3>
              <p className="border-b border-zinc-300 pb-3">
                Please note this free-to-play game may or may not offer optional
                in-game purchases.
              </p>
              <div className="grid grid-cols-1 sm:grid-cols-3 gap-6">
                <div>{games.title}</div>
                <div></div>
                <div></div>
              </div>
            </div>
            <div>
              <h3 className="text-2xl font-semibold py-4 border-b border-zinc-300">
                About {games.title}
              </h3>
              <p className="text-zinc-200 py-4">{games.description}</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
