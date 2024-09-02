import React, { useState } from "react";
import { Link } from "react-router-dom";

export default function AllGames() {
  const [categories, setCategories] = React.useState([]);
  const [error, setError] = React.useState(null);

  const z = new Set([...categories.map((gen) => gen.genre)]);
  const catey = Array.from(z);

  //   get game data
  const fetchGames = async () => {
    try {
      const response = await fetch(
        "https://free-to-play-games-database.p.rapidapi.com/api/games",
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
      setCategories(result);
    } catch (error) {
      setError(error);
    }
  };

  const itemsPerPage = 30; // Number of items per page
  const items = categories; //list of data

  const [currentPage, setCurrentPage] = useState(1);

  // Calculate the indices for the current page
  const startIndex = (currentPage - 1) * itemsPerPage;
  const endIndex = startIndex + itemsPerPage;

  const currentItems = items.slice(startIndex, endIndex);

  // Calculate the total number of pages
  const totalPages = Math.ceil(items.length / itemsPerPage);

  // Handle page change
  const handlePageChange = (pageNumber) => {
    setCurrentPage(pageNumber);
    window.scrollTo(0, 0);
  };

  React.useEffect(() => {
    fetchGames();
  }, []);

  return (
    <section className="lg:max-w-7xl mx-auto px-4 md:px-0 my-10 lg:my-20 relative">
      <div className="grid grid-cols-1 md:grid-cols-4  gap-4">
        <div className="lg:sticky top-5">
          <div className=" p-5 border rounded-xl shadow-sm">
            <h4 className="mb-2 font-bold">Platform</h4>
            <hr />
            <div className="my-2 flex gap-2 items-center">
              <input type="radio" id="pc" name="platform" />
              <label htmlFor="pc">PC Games</label>
            </div>
            <div className="mb-2 flex gap-2 items-center">
              <input type="radio" id="browser" name="platform" />
              <label htmlFor="browser">Browser Games</label>
            </div>
          </div>
          {/* genre */}
          <div className="border  rounded-xl shadow-sm mt-5 h-72 overflow-y-auto overflow-hidden">
            <h4 className="font-bold sticky top-0 px-5 pt-5 pb-2 bg-blue-900">
              Genre/Tag:
            </h4>
            <hr />
            <div className="px-5 ">
              {catey.map((cat) => (
                <div className="my-2 flex gap-2 items-center">
                  <input type="radio" id={cat} name="cat" />
                  <label htmlFor={cat}>{cat}</label>
                </div>
              ))}
            </div>
          </div>
        </div>
        <div className="col-span-1 md:col-span-3 p-5">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
            {currentItems
              // .filter((cat) => cat.platform === "PC (Windows)")
              .map((cat) => (
                <Link to={`/games/${cat.id}`} className="block" key={cat.id}>
                  <div className="flex gap-5 bg-white border rounded-xl shadow-sm overflow-hidden relative">
                    <div className="w-32">
                      <img
                        src={cat.thumbnail}
                        alt="/"
                        className="w-full h-full object-cover "
                      />
                    </div>
                    <div className="absolute right-3 top-3 bg-slate-100 text-black px-2 py-0.5 text-xs rounded-md">
                      {cat.genre}
                    </div>
                    <div className="py-6">
                      <h1 className="font-bold text-lg text-gray-700">
                        {cat.title}
                      </h1>
                      <h3 className="text-sm text-gray-400">{cat.genre}</h3>
                      <p className="text-sm text-gray-400">
                        Release Date : {cat.release_date}
                      </p>
                    </div>
                  </div>
                </Link>
              ))}
          </div>
          <div className="py-5  mt-20">
            <div className="flex justify-center items-center gap-5">
              <button
                onClick={() => handlePageChange(currentPage - 1)}
                className="border px-3 py-1 rounded-lg"
                disabled={currentPage === 1}
              >
                Prev
              </button>
              <div className="flex gap-3">
                {Array.from({ length: totalPages }, (_, index) => (
                  <button
                    key={index}
                    onClick={() => handlePageChange(index + 1)}
                    disabled={index + 1 === currentPage}
                    className={`border px-3 py-1 rounded-lg ${
                      index + 1 === currentPage && "bg-black text-white"
                    }`}
                  >
                    {index + 1}
                  </button>
                ))}
              </div>

              <button
                onClick={() => handlePageChange(currentPage + 1)}
                className="border px-3 py-1 rounded-lg"
                disabled={currentItems.length < itemsPerPage}
              >
                Next
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
