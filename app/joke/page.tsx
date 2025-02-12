"use client";

import { useEffect, useState } from "react";
import { useSearchParams } from "next/navigation";
import jokes from "@/jokes.json";

import { useReward } from "react-rewards";

const buttonName = [
  "Booom!",
  "Again!!",
  "Got Ya!",
  "One more time!",
  "Hit you again!",
  "Daaaaamn boy",
  "I'm on fire!",
  "And again!",
];

const Joke = () => {
  const searchParams = useSearchParams();
  const query = searchParams.get("query")?.toLowerCase();
  const [indexB, setIndexB] = useState(0);
  const [index, setIndex] = useState(0);
  const [jks, setJks] = useState<string[]>([]);
  const [btn, setBtn] = useState(true);
  const [px, setPx] = useState(24);

  // const { reward: confettiReward } = useReward("confettiReward", "confetti", {
  //   colors: ["#008000", "#FF0000", "#0000FF"],
  //   elementCount: 50 + index * 50,
  //   spread: 360,
  // });

  const { reward: emojiReward } = useReward("emojiReward", "emoji", {
    emoji: ["😁", "😂", "🤣", "😅", "😆"],
    elementCount: 20 + index * 20,
    spread: 360,
  });

  useEffect(() => {
    if (query) {
      const filteredJokes = jokes.filter((joke: string) =>
        joke.toLowerCase().includes(query)
      );
      setJks(filteredJokes.length > 0 ? filteredJokes : ["No joke found."]);
    }
  }, [query]);

  function handleClick() {
    // confettiReward();
    emojiReward();
    setPx((p) => p + 2);
    if (index < jks.length - 1) {
      setIndex(index + 1);
      setIndexB(indexB + 1);
      if (indexB === buttonName.length - 1) {
        setIndexB(0);
      }
    } else setBtn(false);
  }

  const btnShow = Boolean(jks.length) && jks[0] !== "No joke found." && btn;

  return (
    <div className="flex flex-col items-center justify-center min-h-screen py-2">
      {/* <h1 className="text-4xl text-white font-bold mb-4">Here your joke:</h1> */}
      <p
        style={{ fontSize: `${px}px` }}
        className="font-semibold p-4 text-center transition duration-500 ease-in-out transform hover:scale-105"
      >
        {jks[index]}
      </p>
      <span id="emojiReward" />
      {btnShow && (
        <button
          onClick={handleClick}
          className="mt-4 px-4 py-2 bg-gray-700 text-white rounded hover:bg-gray-900"
        >
          {buttonName[indexB]}
          {/* <span id="confettiReward" /> */}
        </button>
      )}
    </div>
  );
};

export default Joke;
