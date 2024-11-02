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
        <img
          src="src/assets/image.svg"
          alt="confetti background"
          className="-translate-y-14 w-screen lg:h-28 lg:object-cover"
        />

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
