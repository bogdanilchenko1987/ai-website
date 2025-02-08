// "use client";

// import { useEffect, useState } from "react";
// import { useSearchParams } from "next/navigation";

// const Joke = () => {
//   const searchParams = useSearchParams();
//   const query = searchParams.get("query");
//   const [joke, setJoke] = useState("");

//   useEffect(() => {
//     if (query) {
//       fetch(`https://api.yomomma.info/`)
//         .then((response) => response.json())
//         .then((data) => setJoke(data.joke));
//     }
//   }, [query]);

//   return (
//     <div className="flex flex-col items-center justify-center min-h-screen py-2">
//       <h1 className="text-4xl font-bold mb-4">Here's your joke:</h1>
//       <p className="text-2xl p-4 border border-gray-300 rounded bg-gray-100 transition duration-500 ease-in-out transform hover:scale-105">
//         {joke}
//       </p>
//     </div>
//   );
// };

// export default Joke;

"use client";

import { useEffect, useState } from "react";
import { useSearchParams } from "next/navigation";
import jokes from "@/jokes.json";

const Joke = () => {
  const searchParams = useSearchParams();
  const query = searchParams.get("query")?.toLowerCase();
  const [joke, setJoke] = useState("");

  useEffect(() => {
    if (query) {
      const filteredJokes = jokes.filter((joke: string) =>
        joke.toLowerCase().includes(query)
      );
      setJoke(filteredJokes.length > 0 ? filteredJokes[0] : "No joke found.");
    }
  }, [query]);

  return (
    <div className="flex flex-col items-center justify-center min-h-screen py-2">
      <h1 className="text-4xl font-bold mb-4">Here your joke:</h1>
      <p className="text-2xl p-4 border border-gray-300 rounded bg-gray-100 transition duration-500 ease-in-out transform hover:scale-105">
        {joke}
      </p>
    </div>
  );
};

export default Joke;
