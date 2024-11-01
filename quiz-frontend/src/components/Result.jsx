import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { resetAllAction } from "../redux/reducer/question";
import { resetResultAction } from "../redux/reducer/result";
import { fetchScore } from "../hooks/setResult";

export default function Result() {
  const dispatch = useDispatch();
  const result = useSelector((state) => state.result.result);

  const [scoreData, setScoreData] = useState(null);

  useEffect(() => {
    const calculateScore = async () => {
      const data = await fetchScore(result);
      setScoreData(data);
    };
    calculateScore();
  }, [result]);

  function onRestart() {
    dispatch(resetAllAction());
    dispatch(resetResultAction());
  }

  if (!scoreData) return <p>Loading...</p>;
console.log(scoreData);

  // Ensure values are numbers and default to 0 if undefined
  const totalPoints = scoreData?.totalPoints || 1; // Avoid division by zero
  const earnedPoints = scoreData?.earnedPoints || 0;
  const correctAnswers = Math.round(earnedPoints / 10); // Adjusted to match points logic
  const incorrectAnswers = Math.max(0, 7 - correctAnswers); // Prevent negative values if needed
  const percentage = Math.round((earnedPoints / totalPoints) * 100);

  // Convert percentage to degrees for the pointer rotation
  const pointerDegree = (percentage / 100) * 180;

  return (
    <div className="flex flex-col items-center justify-center h-screen w-screen bg-[#AF9CF3] pt-14">
      {/* Confetti Background */}
      <div className="relative w-full flex justify-center items-center rounded-b-3xl">
        <img
          src="src/assets/image.png"
          alt="confetti background"
          className="-translate-y-14 w-screen lg:h-32 lg:object-fill"
        />
      </div>

      {/* Result Card */}
      <div className="bg-white w-full h-full rounded-t-3xl shadow-lg p-6 mt-4 pt-12">
        <h2 className="text-2xl font-extrabold text-center text-gray-800 mb-6 font-sans">
          Your result
        </h2>

        {/* Gauge with Percentage */}
        <div className="relative flex items-center justify-center mb-6">
          {/* Background Half-Circle */}
          <img
            src="src/assets/second.png" // Use your background gauge image here
            alt="background gauge"
            className="w-72 h-56"
          />

          {/* Gradient Arc */}
          <img
            src="src/assets/third.png" // Use your gradient arc image here
            alt="gradient gauge"
            className="absolute w-full h-40 top-0 object-contain"
          />

          {/* Pointer */}
          <div
            className="absolute top-6 w-0 h-0 border-l-[8px] border-l-transparent border-r-[8px] border-r-transparent border-b-[16px] border-b-gray-900"
            style={{
              transform: `rotate(${pointerDegree}deg) translateY(-12px)`,
              transformOrigin: "50% 100%", // Set rotation origin
            }}
          />

          {/* Percentage Display */}
          <div className="absolute w-48 h-48 top-16 bg-white rounded-full flex items-center justify-center shadow-md"></div>

          {/* Inner Border for Percentage Display */}
          <div className="absolute w-44 h-44 top-[71px] bg-white border border-gray-200 rounded-full flex items-center justify-center">
            <span className="text-4xl font-extrabold text-gray-900 font-sans">
              {percentage}%
            </span>
          </div>
        </div>

        {/* Correct and Incorrect Counts */}
        <div className="flex flex-col items-center space-y-4 mt-20">
          <div className="flex items-center space-x-2 bg-green-100 text-green-600 px-4 py-4 rounded-lg w-3/4">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="currentColor"
              className="w-6 h-6"
              viewBox="0 0 24 24"
            >
              <path
                fillRule="evenodd"
                d="M12 2.25A9.75 9.75 0 0 0 2.25 12 9.75 9.75 0 0 0 12 21.75 9.75 9.75 0 0 0 21.75 12 9.75 9.75 0 0 0 12 2.25z"
                clipRule="evenodd"
              />
            </svg>
            <span className="font-bold text-black">{correctAnswers}</span>
            <span className="text-lg font-medium text-gray-500">Correct</span>
          </div>
          <div className="flex items-center space-x-2 bg-red-100 text-red-600 px-4 py-4 rounded-lg w-3/4">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="currentColor"
              className="w-6 h-6"
              viewBox="0 0 24 24"
            >
              <path
                fillRule="evenodd"
                d="M12 2.25A9.75 9.75 0 0 0 2.25 12 9.75 9.75 0 0 0 12 21.75 9.75 9.75 0 0 0 21.75 12 9.75 9.75 0 0 0 12 2.25z"
                clipRule="evenodd"
              />
            </svg>
            <span className="font-bold text-black">{incorrectAnswers}</span>
            <span className="text-lg font-medium text-gray-500">Incorrect</span>
          </div>
        </div>
      </div>

      {/* Restart Button */}
      <div className="absolute bottom-5 flex items-center justify-center">
        <Link
          to="/"
          onClick={onRestart}
          className="bg-red-500 text-white px-8 py-4 w-96 text-center rounded-full text-lg font-semibold shadow-md hover:bg-red-600 transition duration-200"
        >
          Start Again
        </Link>
      </div>
    </div>
  );
}
