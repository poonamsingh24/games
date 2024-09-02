import React, { useEffect } from "react";
import { Link } from "react-router-dom";

export default function GameList() {
  const [games, setGames] = React.useState([]);
  const [error, setError] = React.useState(null);

  //   get game data
  const fetchGames = async () => {
    try {
      const response = await fetch(
        "https://free-to-play-games-database.p.rapidapi.com/api/filter?tag=3d.mmorpg.fantasy.pvp&platform=pc",
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
    fetchGames();
  }, []);

  console.log(games);
  return (
    <div>
      {/* list of some games */}
      <div className="max-w-7xl mx-auto px-4 md:px-0 my-10 lg:my-20">
        <h1 className="text-3xl text-center  font-bold mb-10">Popular Games</h1>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-5">
          {/* map games */}
          {games.slice(0, 8).map((game) => (
            <Link to={`/games/${game.id}`} key={game.id} className="relative">
              <div className="h-full">
                <img
                  src={game.thumbnail}
                  alt=""
                  className="w-full h-60 block"
                />
              </div>
              <div className="absolute inset-0 bg-black/60 z-50">
                <h1 className="absolute  text-xl font-semibold z-40 h-full left-[50%] top-[50%] translate-x-[-50%]  text-white">
                  {game.title}
                </h1>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </div>
  );
}
