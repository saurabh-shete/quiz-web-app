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

  const totalPoints = scoreData?.totalPoints || 1; // Avoid division by zero
  const earnedPoints = scoreData?.earnedPoints || 0;
  const correctAnswers = Math.floor(earnedPoints / 10);
  const incorrectAnswers = 7 - correctAnswers; // Assuming 7 questions in total
  const percentage = Math.round((earnedPoints / totalPoints) * 100);

  // Convert percentage to degrees for the pointer rotation
  const pointerDegree = (percentage / 100) * 180;

  return (
    <div className="flex flex-col items-center justify-center h-screen w-screen bg-[#AF9CF3] pt-14">
      {/* Confetti Background */}
      <div className="-translate-y-[70px] lg:-translate-y-14 w-screen lg:h-28 relative h-28 flex justify-center items-center rounded-b-3xl overflow-hidden">
        <svg
          version="1.1"
          viewBox="0 0 2048 428"
          width="100%"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            transform="translate(1746)"
            d="m0 0h302v38h-2v2l-8 7-6 7-5 4-1 2h-2v2l-5 4-6 7-5 4-92 92-4-2-166-166z"
            fill="#FFEE58"
          />
          <path
            transform="translate(289)"
            d="m0 0h268l-5 18-8 18-9 15-8 10-9 10-9 8-13 9-12 7-20 8-23 5-9 1h-20l-15-2-19-5-16-7-13-7-12-9-10-9-9-9-11-15-11-21-6-18z"
            fill="#35D7FF"
          />
          <path
            transform="translate(979,112)"
            d="m0 0h19l13 4 10 6 9 8 7 10 5 13 1 5v16l-3 12-6 11-9 10-8 6-10 5-16 3-14-1-12-4-11-7-5-4-8-11-5-11-2-8v-17l3-12 6-11 11-12 14-8z"
            fill="#FEED57"
          />
          <path
            transform="translate(1308)"
            d="m0 0h98l5 15v19l-3 10-7 13-8 9-11 7-10 4-10 2h-12l-12-3-14-7-8-7-7-10-5-11-2-8v-15l3-13z"
            fill="#FD7D03"
          />
          <path
            transform="translate(149,87)"
            d="m0 0 7 6 32 32-6 7-86 86-7-6-32-32 1-3 8-7z"
            fill="#FAA7FE"
          />
          <path
            transform="translate(1588,10)"
            d="m0 0 6 2 24 14 28 16 13 8-2 6-14 24-5 8-5-2-28-16-26-15-12-7 2-5 15-26z"
            fill="#39FEFE"
          />
          <path
            transform="translate(1739,125)"
            d="m0 0 11 1 9 5 7 8 3 8v11l-4 9-7 8-9 4-11 1-10-3-9-8-4-8-1-11 2-8 5-8 6-5 6-3z"
            fill="#FAC34F"
          />
          <path
            transform="translate(183,278)"
            d="m0 0h9l9 3 8 6 5 9 1 3v13l-5 10-8 7-8 3h-13l-8-3-5-4-6-10-1-2v-15l5-10 8-7z"
            fill="#FEBAC5"
          />
          <path
            transform="translate(24,26)"
            d="m0 0 4 2 5 6 8 7 8 8v2l4 2 10 10v3l-5 5h-2l-2 4-4 4h-2l-2 4-3 1-1 3-4-1-36-36 3-5z"
            fill="#FD7E04"
          />
          <path
            transform="translate(1875,376)"
            d="m0 0h2l12 21v3l-26 15-17 10-4 1-12-21 1-4 28-16z"
            fill="#39FFFE"
          />
          <path
            transform="translate(564,194)"
            d="m0 0 4 2 31 31-2 5-16 16-7-6-28-28 2-4z"
            fill="#A5FFEA"
          />
          <path
            transform="translate(1622,309)"
            d="m0 0 4 2 5 6 8 7 11 11 1 4-10 10-3 4-4-2-16-16-7-6v-2l-3-1 1-4z"
            fill="#FD7E05"
          />
          <path
            transform="translate(1272,249)"
            d="m0 0 11 2 10 3-2 10-8 30-16-4-5-2 1-7 8-30z"
            fill="#FEED57"
          />
          <path
            transform="translate(344,202)"
            d="m0 0 5 2 14 8-2 5-16 28-3 3-17-10-1-2 16-28z"
            fill="#FEED57"
          />
          <path
            transform="translate(866,36)"
            d="m0 0 17 4 4 2-10 38-4 1-17-5-1-2 10-37z"
            fill="#FAA7FE"
          />
          <path
            transform="translate(1057,63)"
            d="m0 0h10l7 4 4 6 1 8-3 7-4 5-5 2h-10l-7-4-4-7v-10l5-8z"
            fill="#39FEFE"
          />
          <path
            transform="translate(615,109)"
            d="m0 0h8l8 4 4 6 1 9-4 8-5 4-2 1h-12l-6-4-4-7v-9l4-7 5-4z"
            fill="#FFEE58"
          />
          <path
            transform="translate(1438,128)"
            d="m0 0 10 1 5 3 4 6 1 9-4 8-4 4-10 2-9-3-4-5-2-4v-9l4-7 6-4z"
            fill="#FFEE58"
          />
          <path
            transform="translate(24,26)"
            d="m0 0 4 2 5 6 8 7 8 8v2l4 2 10 10v3l-5 5h-2l-2 4-4 4h-2l-2 4-3 1 1-8 6-6 6-3-1-7-8-7-13-13v-2h-2v-2l-12-3-2 4-7 9 1 5 4 4v2l4 2 9 10-4 3-7-6-16-16 3-5z"
            fill="#FAC54F"
          />
        </svg>
      </div>

      {/* Result Card */}
      <div className="bg-white w-full h-full rounded-t-3xl shadow-lg p-6 mt-4 pt-12">
        <h2 className="text-2xl font-extrabold text-center text-gray-800 mb-6 font-sans">
          Your result
        </h2>

        {/* Gauge with Percentage */}
        <div className="relative flex items-center justify-center mb-6">
          {/* Background Half-Circle */}
          <div className="w-72 h-56">
            <svg
              version="1.1"
              viewBox="0 0 1920 1392"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                transform="translate(906)"
                d="m0 0h110l56 6 44 6 43 8 31 7 44 12 38 12 38 14 29 12 33 15 32 16 21 11 27 16 20 12 17 11 12 8 17 12 19 14 28 22 13 11 14 12 10 9 8 7 15 14 13 12 6 6v2h2l7 8 7 7 7 8 13 14 7 8 11 13 9 11 11 14 16 21 12 17 26 39 13 21 12 21 12 22 17 33 15 33 12 29 11 29 12 35 12 42 8 32 8 39 6 36 6 49 4 44v93l-5 56-6 46-6 36-9 42-12 45-13 41-14 38-14 34-12 27-8 16-1 3-5-1-852-426-5-1-852 426-5 2-8-15-13-28-16-39-12-32-15-48-10-38-7-30-7-37-7-49-4-39-2-23v-106l6-58 4-30 7-41 9-41 7-28 10-34 12-36 14-37 12-28 12-26 16-32 9-17 14-24 9-15 13-21 17-25 12-17 16-21 11-14 13-16 13-15 12-14 8-8 7-8 15-16 12-12 8-7 17-16 10-9 8-7 14-12 14-11 15-12 19-14 18-13 38-25 20-12 26-15 28-15 35-17 30-13 33-13 28-10 31-10 44-12 35-8 43-8 42-6 47-5z"
                fill="#F2F5FA"
              />
            </svg>
          </div>

          {/* Gradient Arc */}
          <div className="absolute w-72 h-40 top-0">
            <svg
              version="1.1"
              viewBox="0 0 1600 832"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                transform="translate(756)"
                d="m0 0h89l49 5 42 6 37 7 40 10 30 9 38 13 32 13 29 13 25 12 29 16 22 13 22 14 19 13 19 14 17 13 16 13 14 12 20 18 8 7 30 30 7 8 11 12 9 11 13 15 10 13 15 20 12 17 10 15 12 19 9 15 13 23 12 23 14 29 16 38 9 24 12 37 11 41 8 37 7 43 5 46 2 24v47l-6 11-8 8-8 4-4 1h-12l-12-5-9-9-4-8-1-4-2-49-3-37-5-38-7-37-8-34-10-34-9-27-13-33-11-25-14-29-10-19-14-24-15-24-13-19-13-18-14-18-11-13-9-11-13-14-7-8-10-10-7-8-12-11-9-9-11-9-12-11-14-11-15-12-19-14-30-20-21-13-23-13-19-10-26-13-33-14-27-10-36-12-37-10-37-8-37-6-37-4-35-2h-62l-30 2-44 5-35 6-40 9-35 10-41 14-32 13-33 15-25 13-18 10-20 12-39 26-28 21-16 13-14 12-11 10-8 7-11 11-8 7-12 13-9 9-9 11-11 12-11 14-13 16-10 14-12 17-10 15-12 20-10 17-8 14-19 38-13 30-13 35-11 33-9 34-6 26-6 32-4 28-3 28-2 35-1 31-2 9-6 9-8 7-9 4h-13l-12-5-9-9-5-10v-52l6-59 6-39 8-39 7-28 10-34 13-38 13-32 9-20 11-24 16-30 14-24 11-18 20-30 14-19 12-16 14-17 9-11 12-13 7-8 11-12 31-31 8-7 11-10 11-9 14-12 13-10 21-16 19-13 15-10 24-15 23-13 18-10 17-8 16-8 27-12 36-14 36-12 31-9 38-9 38-7 43-6z"
                fill="#FC463F"
              />
              <path
                transform="translate(962,19)"
                d="m0 0 11 2 26 5h7l34 10 41 14 32 13 29 13 25 12 29 16 22 13 22 14 19 13 19 14 17 13 16 13 14 12 20 18 8 7 30 30 7 8 11 12 9 11 13 15 10 13 15 20 12 17 10 15 12 19 9 15 13 23 12 23 14 29 16 38 9 24 12 37 11 41 8 37 7 43 5 46 2 24v47l-6 11-8 8-8 4-4 1h-12l-12-5-9-9-4-8-1-4-2-49-3-37-5-38-7-37-8-34-10-34-9-27-13-33-11-25-14-29-10-19-14-24-15-24-13-19-13-18-14-18-11-13-9-11-13-14-7-8-10-10-7-8-12-11-9-9-11-9-12-11-14-11-15-12-19-14-30-20-21-13-23-13-19-10-26-13-33-14-27-10-36-12-37-10-4-6-9-4-9-5-10-6-4-6-3-19h2l-1-9v-3h2l-1-4 5-3h18z"
                fill="#75BB6B"
              />
              <path
                transform="translate(756)"
                d="m0 0h89l49 5 42 6 37 7 29 7v2l-13-2-24-5-5 1h-18l-4 2v4l-2 2 2 5-2 6 3 18 4 6 13 7 9 5 5 2 3 3v3l-12-2-35-7-34-5-29-3-35-2h-62l-30 2-44 5-35 6-40 9-35 10-41 14-32 13-33 15-25 13-18 10-20 12-48 32 1-3 13-10 5-5 11-10 4-4-1-7 3-1v-2h-7l-3-2-2-4-7-3-1-11 6-17 2-5-3-1-11 3-4 1 3-3 21-13 27-15 15-8 23-11 26-12 41-16 36-12 31-9 38-9 38-7 43-6z"
                fill="#FEAF39"
              />
              <path
                transform="translate(1432,313)"
                d="m0 0 4 1 12 16 12 17 10 15 12 19 9 15 13 23 12 23 14 29 16 38 9 24 12 37 11 41 8 37 7 43 5 46 2 24v47l-6 11-8 8-8 4-4 1h-12l-12-5-9-9-4-8-1-4-2-49-3-37-5-38-7-37-8-34-10-34-9-27-13-33-11-25-14-29-10-19-9-15-1-6 4-1h4v2h2l1-2 5 5 6 1 3 2-1-9 1-4h-2l-2-10 5-3 1-6 3 1v-2h2l-2-14 1-2-5-12-2-5-5-11-5-8-5-9-5-11v-2h-2v-3h-2z"
                fill="#4EB778"
              />
              <path
                transform="translate(386,120)"
                d="m0 0 4 1-2 6-6 17 1 11 7 3 1 4 10 2v2l-2 1 1 7-5 5-12 11-5 5-12 9-4 5-16 12-16 13-14 12-11 10-8 7-11 11-8 7-12 13-9 9-9 11-11 12-11 14-13 16-10 14-12 17-10 15-12 20-10 17-8 14-19 38-1-3 4-11h2l1-7 8-16 6-14 3-9 4-6-3 1 2-4 1-4h-2l1-3 3-1 1-2-5 1-5-1-2-1v-5h-2l-1-6v-6l-6 2v-2h-2l-3-13 2-9 5-13 4-7 3-7 4-7-8 2 2-5 13-17 10-13 13-16 9-11 12-13 7-8 11-12 31-31 8-7 11-10 11-9 14-12 13-10 21-16 19-13 18-12 6-2z"
                fill="#FD673F"
              />
              <path
                transform="translate(962,19)"
                d="m0 0 11 2 26 5h7l34 10 41 14 32 13 29 13 25 12 29 16 22 13 11 7-3 3h-6l2 7 4 2 7 9 1 3 4 1 4 6 2 10h-4l-3-1-2 4-8 8-2 1-16 1-7-4h-3l1 3 3 3-1 2 3 1-1 2-24-15-21-12-16-9-36-18-33-14-27-10-36-12-37-10-4-6-9-4-9-5-10-6-4-6-3-19h2l-1-9v-3h2l-1-4 5-3h18z"
                fill="#AFC85B"
              />
              <path
                transform="translate(604,29)"
                d="m0 0h17l3 5-9 11-1 7 4 7v2l5 2 5 4 1 5-6 5-13 7-17 6-4 2h-3v2l-3 1-1 2-41 14-32 13-33 15-25 13-18 10-20 12-48 32 1-3 13-10 5-5 11-10 4-4-1-7 3-1v-2h-7l-3-2-2-4-7-3-1-11 6-17 2-5-3-1-11 3-4 1 3-3 21-13 27-15 15-8 23-11 26-12 41-16 39-13 18-2 10-2z"
                fill="#FD943B"
              />
              <path
                transform="translate(801)"
                d="m0 0h44l49 5 42 6 37 7 29 7v2l-13-2-24-5-5 1h-18l-4 2v4l-2 2 2 5-2 6 3 18 4 6 13 7 9 5 5 2 3 3v3l-12-2-35-7-34-5-29-3-35-2-55-1 1-2 13-4 5-4 9-4 3-3-4-15-3-6 1-13 2-11z"
                fill="#F8CB3C"
              />
              <path
                transform="translate(1228,125)"
                d="m0 0 4 1 27 18 19 14 17 13 16 13 14 12 10 9-1 6-5-2 1 3-6 1h-4l4 8 1 4h-2l-1 5-7 10-4 2 3 5 5 5-3 1 3 2v2h2l1 3h-2l4 6 1 4 2 5h2l6 9 3 5v6l-2-1v-2l-3 1-8-8-7-8-12-11-9-9-11-9-12-11-14-11-15-12-19-14-21-14-1-3-2-1v-3l-3-2v-3l4-1 6 4 16-1 5-3 3-5h2l2-5 6 2-2-10-3-4v-2l-4-1-8-10v-2l-4-1-3-6 1-3h6z"
                fill="#94C160"
              />
              <path
                transform="translate(962,19)"
                d="m0 0 11 2 26 5h7l34 10 41 14 15 6 2 3h-9l-5-2-16-3-4-1v8l4 5-1 5-2 8-1 5-6 7-3 3-1 3h2l1 6 4 1 10 6 2 4 2 2-6-1-36-13-36-11-23-6-4-6-9-4-9-5-10-6-4-6-3-19h2l-1-9v-3h2l-1-4 5-3h18z"
                fill="#DACC49"
              />
              <path
                transform="translate(756)"
                d="m0 0h45l-3 21 1 8 3 7 3 11-5 5-10 4-5 4-11 3-1 1-7 1-30 2-44 5-16 2v-2l5-2h7l11-5h8l10-5 8-3 3-1 2-6-5-1-8-7-1-1v-8l-2-4 1-4 2-1 2-5-1-4-3-1-25-2h-11l-19 2-12 2v-2l28-5 37-5z"
                fill="#FEC138"
              />
              <path
                transform="translate(1064,53)"
                d="m0 0 9 1 14 3 5 1h5l2-1 30 13 28 13 23 12 14 8v2l-11-3-10-4-14-6-16-6-9-3-14-2 3 3 1 4h-2l-3 15-3 4-1 3-5 3-3 4v5l4 2 12 7v2l6 2 17 10 11 7v2h2l-1 3-15-8-36-18-33-14-3-6-11-7-3-1-1-6h-2l1-5 3-1 2-4h2l2-6 1-8 2-4-1-4-3-4z"
                fill="#BFCB55"
              />
              <path
                transform="translate(1013,37)"
                d="m0 0h15l13 3 16 4 10 2 6 1 23 9 2 3h-9l-5-2-16-3-4-1v8l4 5-1 5-2 8-1 5-6 7-3 3-1 3h2l1 6 4 1 10 6 2 4 2 2-6-1-36-13-3-1-2-7-6-2v-2l-5-2-4-6-4-2 2-20-1-8 7-1-6-7-2-5h4z"
                fill="#CCCC4E"
              />
              <path
                transform="translate(676,9)"
                d="m0 0 4 1-1 2-19 2-12 2v-2z"
                fill="#FAC53A"
              />
              <path
                transform="translate(1334,206)"
                d="m0 0 5 2 2 3-5 4-3-6z"
                fill="#84BE66"
              />
              <path
                transform="translate(676,9)"
                d="m0 0 4 1-1 2-13 1 1-2z"
                fill="#FBC339"
              />
              <path
                transform="translate(379,193)"
                d="m0 0m-1 1v3l-12 9v-3z"
                fill="#FC9B3B"
              />
            </svg>
          </div>

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
