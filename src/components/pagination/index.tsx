"use client";

export default function Pagination({ currentPage, setCurrentPage, totalPages }: { currentPage: number; setCurrentPage: any; totalPages: number }) {
  const buildPaginationButton = ({ index }: { index: number }) => (
    <div
      className={`min-h-[3rem] h-[3rem] min-w-[3rem] w-[3rem] rounded-[0.8rem] flex justify-center items-center ${
        currentPage === index ? "bg-primary" : ""
      } cursor-pointer`}
    >
      <span className={`${currentPage === index ? "text-white" : "text-gray-500"} text-[1.4rem]`}>{index}</span>
    </div>
  );

  return (
    <div className="min-h-[6rem] h-[6rem] w-full flex">
      <div className="h-full w-[25rem] flex justify-center items-center">
        <span className="text-[1.4rem] font-bold">Showing 1-20 of 100</span>
      </div>
      <div className="h-full min-w-0 grow flex justify-center items-center select-none">
        {/* First */}
        {buildPaginationButton({ index: 1 })}

        {/* Seeing */}
        <div className="ml-[1.5rem]">...</div>
        <div className="h-full flex justify-center items-center mx-[1rem] gap-[1.5rem]">
          {buildPaginationButton({ index: 10 })}
          {buildPaginationButton({ index: 11 })}
          {buildPaginationButton({ index: 12 })}
          {buildPaginationButton({ index: 13 })}
          {buildPaginationButton({ index: 14 })}
          {buildPaginationButton({ index: 15 })}
          {buildPaginationButton({ index: 16 })}
        </div>
        <div className="mr-[1.5rem]">...</div>

        {/* Last */}
        {buildPaginationButton({ index: 26 })}
      </div>
      <div className="h-full w-[25rem]"></div>
    </div>
  );
}
