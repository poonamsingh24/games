import React, { useEffect } from "react";
import { Link } from "react-router-dom";

export default function GamelistTwo() {
  const [games, setGames] = React.useState([]);
  const [error, setError] = React.useState(null);

  //   get game data
  const fetchGames = async () => {
    try {
      const response = await fetch(
        "https://free-to-play-games-database.p.rapidapi.com/api/games?platform=pc",
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
        <h1 className="text-3xl text-center  font-bold mb-10">PC Games</h1>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3  gap-5">
          {/* map games */}
          {games.slice(0, 6).map((game) => (
            <Link to={`/games/${game.id}`} key={game.id} className="relative">
              <div className="h-full">
                <img
                  src={game.thumbnail}
                  alt=""
                  className="w-full h-60 block"
                />
                <div>
                  <h2 className="font-bold text-xl">{game.title}</h2>
                  <span className="text-white text-xs bg-black absolute py-1 px-2 top-2 rounded-lg right-2">
                    {game.platform}
                  </span>
                  <p>{game.short_description}</p>
                </div>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </div>
  );
}
