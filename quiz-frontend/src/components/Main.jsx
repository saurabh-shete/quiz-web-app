import React from "react";
import { useNavigate } from "react-router-dom";

export default function Main() {
  const navigate = useNavigate();

  function handleStartQuiz() {
    navigate("/quiz"); // Directly navigate to the quiz page
  }

  return (
    <div className="flex flex-col w-screen items-center justify-between min-h-screen bg-gradient-to-b from-purple-50 to-purple-400 p-6">
      {/* Logo */}
      <div className="w-44 h-44 mb-4 lg:w-72 lg:h-72 object-contain">
        <svg
          version="1.1"
          viewBox="0 0 2048 492"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            transform="translate(211,1)"
            d="m0 0h9l10 4 5 5 7 10 12 22 14 24 14 25 14 24 14 25 14 24 13 23 56 98 15 26 13 23 5 10v12l-5 9-8 6-3 1h-11l-17-6-78-30-37-14-36-14-10-3h-10l-24 8-65 25-86 33-4 1h-10l-8-4-6-7-3-6v-9l9-19 6-10 8-14 14-24 14-25 14-24 15-27 14-24 14-25 14-24 14-25 14-24 14-25 22-38 6-9 8-6z"
            fill="#FB801D"
          />
          <path
            transform="translate(885,144)"
            d="m0 0 15 1 16 4 15 8 10 8 7 7 9 13 6 13 5 16 2 12v32l-4 19-8 20-9 13-9 10-13 9-13 6-15 4-13 1-17-2-12-4-13-7-12-11-3-3v113l-1 1h-57l-1-13v-251l1-16h57l1 1v15l-1 9h2l2-4 8-8 10-7 11-5 12-3zm-22 51-10 3-8 5-5 4-6 9-4 9-2 9v15l3 13 6 11 5 6 9 6 9 3 5 1h9l12-3 9-6 5-5 5-6 4-9 2-10v-18l-4-13-6-10-9-8-11-5-5-1z"
            fill="#232323"
          />
          <path
            transform="translate(1986,85)"
            d="m0 0 57 1v249l-4 2h-54v-25l-5 4-7 8-10 7-15 6-9 2-14 1-17-2-13-4-14-8-12-10-8-10-8-14-6-15-4-21v-28l4-21 6-16 10-16 11-12 13-9 11-5 15-4 14-1 18 2 14 5 14 9 11 11v-60l1-25zm-50 110-12 4-9 7-6 7-5 11-2 8v19l4 13 4 8 5 6 10 7 9 3 5 1h10l13-4 11-8 5-7 5-13 2-11v-8l-3-14-7-14-4-5-11-7-10-3z"
            fill="#242424"
          />
          <path
            transform="translate(1209,144)"
            d="m0 0 16 1 15 4 13 7 12 11 5 5-1-3v-22h58v189l-2 1h-55l-1-1v-18l1-6-5 4-6 7-10 7-11 5-15 4-13 1-17-2-10-3-16-8-13-11-9-11-7-12-7-19-3-16v-32l4-20 6-16 7-11 7-9 9-9 11-7 10-5 16-4zm12 51-11 4-9 6-7 8-5 10-2 9v20l4 13 6 10 9 8 12 5 5 1h10l11-3 10-6 7-7 7-15 1-5v-22l-3-10-6-11-8-8-10-5-8-2z"
            fill="#222"
          />
          <path
            transform="translate(1729,144)"
            d="m0 0 20 1 18 4 16 7 14 10 10 10 7 10 6 12 5 16 2 13v24l-1 5-131 1 3 12 5 10 7 7 9 4 4 1h16l12-5 5-5 5-7h61l1 2-6 15-8 13-11 12-10 8-16 8-11 4-15 3h-28l-19-4-18-8-11-8-7-6-9-11-8-14-5-13-3-13-1-9v-23l4-21 6-15 6-11 8-10 8-8 14-9 13-6 15-4zm-4 47-11 4-9 6-7 11-3 11 7 1h62l4-1-1-8-3-8-9-10-11-5-5-1z"
            fill="#222"
          />
          <path
            transform="translate(544,147)"
            d="m0 0h57l1 110 3 12 5 9 8 7 11 4h18l10-4 7-5 6-10 3-12 1-110 1-1h57v189l-1 1h-56l-1-1v-23l-9 9-14 9-12 5-16 3h-13l-17-3-12-5-11-7-9-9-9-14-5-13-3-14-1-22v-104z"
            fill="#232323"
          />
          <path
            transform="translate(1534,144)"
            d="m0 0 18 1 17 4 12 5 14 10 10 12 6 12 4 14v7h-53l-7-14-6-4-6-2-11-1-10 2-5 3-3 5v7l3 5v2l5 2 13 5 35 9 13 5 10 5 9 7 6 7 6 12 3 15-1 13-4 12-5 8-9 10-9 6-13 6-15 4-20 2-17-1-19-4-16-7-10-6-12-11-7-10-5-12-2-7v-7l2-1h54l4 9 6 7 8 4 9 2h7l11-3 5-4 2-4v-7l-4-6-10-5-18-5-24-6-20-8-12-8-7-9-5-10-2-8v-19l4-13 7-11 5-6 11-8 15-7 19-4z"
            fill="#232323"
          />
          <path
            transform="translate(1109,145)"
            d="m0 0h6v61l-1 1-28 1-13 4-8 6-5 7-3 11-1 90v9l-4 2h-54l-1-5v-184l1-1h57l1 1v26l1 2 11-13 11-8 12-6 11-3z"
            fill="#262626"
          />
          <path
            transform="translate(1366,147)"
            d="m0 0h58v189l-8 1h-49l-1-1z"
            fill="#222"
          />
          <path
            transform="translate(252,373)"
            d="m0 0h12l6 4 4 6 1 3v89l-2 6-4 6-6 3-6 1-10-4-5-6-1-3v-93l4-7z"
            fill="#FB801D"
          />
          <path
            transform="translate(1386,65)"
            d="m0 0h18l10 4 8 6 6 10 2 8v7l-3 10-7 9-9 6-8 2h-17l-9-3-9-7-6-10-1-4v-14l4-10 9-9 8-4z"
            fill="#242423"
          />
          <path
            transform="translate(169,440)"
            d="m0 0h10l6 4 4 5 2 8v16l-2 8-4 6-11 4-8-2-7-6-2-5v-26l4-7 5-4z"
            fill="#FB8120"
          />
        </svg>
      </div>
      <>
        {/* Quiz Circle */}
        <div className="flex items-center justify-center bg-white rounded-full shadow-xl w-64 h-64">
          <h1 className="font-extrabold text-red-500 text-5xl">Quiz</h1>
        </div>

        {/* Start Quiz Button */}
        <button
          onClick={handleStartQuiz}
          className="mt-10 bg-red-500 text-white py-3 px-32 rounded-full text-lg font-semibold shadow-lg transform hover:scale-105 transition duration-300 sm:text-xl md:text-2xl lg:text-3xl xl:text-4xl"
        >
          Start
        </button>
      </>
    </div>
  );
}
