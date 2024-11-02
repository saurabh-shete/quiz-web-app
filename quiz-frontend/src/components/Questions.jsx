import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { updateResult } from "../hooks/setResult";
import { useFetchQuestion } from "../hooks/fetchQuestion";
import { CheckCircleIcon } from "@heroicons/react/solid";

export default function Questions({ onChecked, onNext }) {
  const [checked, setChecked] = useState([]);
  const { trace, queue } = useSelector((state) => state.questions);
  const questions = useSelector(
    (state) => state.questions.queue[state.questions.trace]
  );
  const dispatch = useDispatch();
  const [{ isLoading, serverError }] = useFetchQuestion();

  useEffect(() => {
    setChecked([]);
  }, [trace]);

  useEffect(() => {
    dispatch(updateResult({ trace, checked }));
  }, [checked, dispatch]);

  function onSelect(index) {
    if (questions?.multipleCorrect) {
      if (checked.includes(index)) {
        setChecked(checked.filter((item) => item !== index));
      } else {
        setChecked([...checked, index]);
      }
    } else {
      setChecked([index]);
    }
    onChecked(index);
  }

  const progress = ((trace + 1) / queue.length) * 100;

  if (isLoading) return <h3 className="text-gray-700">Loading...</h3>;
  if (serverError)
    return <h3 className="text-red-600">{serverError || "Unknown Error"}</h3>;

  return (
    <div className="flex flex-col items-center h-screen w-screen bg-[#AF9CF3] pt-14">
      {/* Confetti Background and Progress Indicator */}
      <div className="relative w-full flex justify-center items-center rounded-b-3xl">
        <div className="-translate-y-[70px] lg:-translate-y-14 w-screen lg:h-28 relative h-28 flex justify-center items-center rounded-b-3xl overflow-hidden">
          <svg
            version="1.1"
            viewBox="0 0 2048 428"
            width= "100%"
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

        {/* Progress Circle */}
        <div className="absolute top-14 lg:top-24 flex items-center justify-center">
          <div
            className="relative flex items-center justify-center w-32 h-32 rounded-full"
            style={{
              background: `conic-gradient(#10b981 ${progress}%, #e5e7eb 0%)`,
              padding: "8px",
            }}
          >
            <div className="flex items-center justify-center bg-white w-full h-full rounded-full">
              <span className="text-4xl font-extrabold italic text-gray-900 z-10 font-sans">
                {trace + 1}
              </span>
              <span className="mt-5 text-xs font-extrabold italic text-gray-500 z-10 font-sans">
                /{queue.length}
              </span>
            </div>
          </div>
        </div>
      </div>

      {/* Question Card */}
      <div className="bg-white w-full flex-1 rounded-t-3xl shadow-lg p-6 pt-20 mt-4 overflow-hidden flex flex-col">
        <h2 className="text-2xl font-extrabold text-gray-800 mb-4 text-left font-sans">
          {questions?.question}
        </h2>

        {/* Display Image if Available */}
        {questions?.image && (
          <div className="mb-4">
            <img
              src={questions.image}
              alt="Question related visual"
              className="w-48 h-48 max-w-md rounded-lg shadow-md mx-auto"
            />
          </div>
        )}

        {/* Scrollable Options */}
        <div className="flex-1 overflow-y-auto space-y-4 pb-6">
          {questions?.options.map((option, index) => (
            <div
              key={index}
              className={`flex items-center px-4 py-8 mb-4 rounded-lg cursor-pointer transition-colors duration-200 ${
                checked.includes(index)
                  ? "bg-white border-2 border-green-500"
                  : "bg-[#F3F4FA]"
              }`}
              onClick={() => onSelect(index)}
            >
              {checked.includes(index) ? (
                <CheckCircleIcon className="h-10 w-10 text-green-500 mr-2" />
              ) : (
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  stroke="#d1d5db"
                  strokeWidth="1.5"
                  className="w-10 h-10"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M21 12a9 9 0 1 1-18 0 9 9 0 0 1 18 0z"
                  />
                </svg>
              )}
              <label
                htmlFor={`option-${index}`}
                className="text-lg font-medium text-gray-700 cursor-pointer w-full font-sans"
              >
                {option}
              </label>
            </div>
          ))}
        </div>
      </div>

      {/* Next Button */}
      <button
        className={`absolute bottom-5 w-96 font-semibold text-lg px-8 py-4 rounded-full shadow-lg transition duration-200 ${
          checked.length === 0
            ? "bg-gray-400 text-gray-300 cursor-not-allowed"
            : "bg-red-500 text-white hover:bg-red-600"
        }`}
        onClick={() => {
          if (checked.length > 0) onNext();
        }}
        disabled={checked.length === 0}
      >
        Next <span className="ml-2">→</span>
      </button>
    </div>
  );
}
