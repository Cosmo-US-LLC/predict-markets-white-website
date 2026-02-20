import { Check, X } from "lucide-react";

export default function WhatSetsUsApart({
  title = "What Sets Us Apart",
  description = "Prediction markets are growing fast...",
  tableData = [],
  platforms = {},
}) {
  return (
    <section className="bg-white py-12 md:py-20">
      <div
        className="max-w-[1280px] mx-auto px-4 md:px-8 flex flex-col gap-8 md:gap-10"
        style={{
          borderRadius: "15px",
          background:
            "radial-gradient(41.18% 41.18% at 50% 58.84%, rgba(0, 128, 237, 0.50) 0%, rgba(255, 255, 255, 0.50) 100%)",
        }}
      >
        {/* Header */}
        <div className="flex flex-col gap-3 max-w-[970px] text-center mx-auto">
          <h2 className="heading-two">{title}</h2>
          <p className="paragraph-regular !text-[14px] md:!text-[20px] !font-normal md:leading-6 leading-[22px] md:!tracking-[0.32px] !tracking-[0.28px] text-[#000]">
            {description}
          </p>
        </div>

        {/* Desktop Table */}
        <div className="hidden md:block">
          <div
            className="overflow-x-auto"
            style={{
              borderRadius: "15px",
              border: "0.5px solid #DDD",
              background: "rgba(255, 255, 255, 0.80)",
            }}
          >
            <div className="min-w-[862px] pt-6 max-w-[862px] mx-auto pb-8">
              {/* Header */}
              <div className=" border-b border-gray-300 ">
                <div className="grid grid-cols-4 gap-4 items-center">
                  <div />
                  {/* PredictMarkets */}
                  <div className="pt-[40px] rounded-t-[15px] border  !border-b-[0px] border-gray-300 pb-[20px] flex flex-col items-center gap-2 bg-white">
                    <div className="w-[45px] h-[45px]">
                      <img
                        src={platforms?.predictMarkets?.icon}
                        alt="PredictMarkets"
                        className="w-full h-full object-contain"
                      />
                    </div>
                    <span className="text-[#000] text-base font-medium">
                      {platforms.predictMarkets?.name || "PredictMarkets"}
                    </span>
                  </div>
                  {/* PolyMarket */}
                  <div className="pt-[40px] pb-[20px] flex flex-col items-center gap-2">
                    <img
                      src={platforms.polyMarket?.icon}
                      alt={platforms.polyMarket?.name || "PolyMarket"}
                      className="w-[45px] h-[45px] object-contain"
                    />
                    <span className="text-[#000] text-base font-medium">
                      {platforms.polyMarket?.name || "PolyMarket"}
                    </span>
                  </div>
                  {/* Kalshi */}
                  <div className="pt-[40px] pb-[20px] flex flex-col items-center gap-2">
                    <img
                      src={platforms.kalshi?.icon}
                      alt={platforms.kalshi?.name || "Kalshi"}
                      className="w-[45px] h-[45px] object-contain"
                    />
                    <span className="text-[#000] text-base font-medium">
                      {platforms.kalshi?.name || "Kalshi"}
                    </span>
                  </div>
                </div>
              </div>

              {/* Body */}
              <div className="">
                {tableData.map((row, index) => (
                  <div
                    key={row.id}
                    className={`grid grid-cols-4 gap-4 items-center !h-[50px] ${
                      index % 2 === 0 ? "" : ""
                    } ${
                      index < tableData.length - 1
                        ? "border-b border-gray-200"
                        : ""
                    }`}
                  >
                    <span className="text-[#000] text-base font-medium">
                      {row.feature}
                    </span>
                    
                    {/* PredictMarkets */}
                    <div
                      className={`flex justify-center items-center !h-[50px] 
                    bg-white ${index < tableData.length - 1 ? "border  !border-t-[0px] border-gray-300" : "border  !border-t-[0px] border-gray-300 rounded-b-[15px]"}`}
                    >
                      {typeof row.predictMarkets === "boolean" ? (
                        row.predictMarkets ? (
                          <div className="bg-[#0080ED] rounded-full w-[23px] h-[23px] flex items-center justify-center">
                            <Check
                              className="w-[14px] h-[14px] text-white"
                              strokeWidth={3}
                            />
                          </div>
                        ) : (
                          <div className="bg-gray-600 rounded-full w-[23px] h-[23px] flex items-center justify-center">
                            <X
                              className="w-[14px] h-[14px] text-white"
                              strokeWidth={3}
                            />
                          </div>
                        )
                      ) : (
                        <span className="text-[#000] text-base font-semibold">
                          {row.predictMarkets}
                        </span>
                      )}
                    </div>

                    {/* PolyMarket */}
                    <div className="flex justify-center items-center !h-[50px]">
                      {typeof row.polyMarket === "boolean" ? (
                        row.polyMarket ? (
                          <div className="bg-[#0080ED] rounded-full w-[23px] h-[23px] flex items-center justify-center">
                            <Check
                              className="w-[14px] h-[14px] text-white"
                              strokeWidth={3}
                            />
                          </div>
                        ) : (
                          <div className="bg-gray-600 rounded-full w-[23px] h-[23px] flex items-center justify-center">
                            <X
                              className="w-[14px] h-[14px] text-white"
                              strokeWidth={3}
                            />
                          </div>
                        )
                      ) : (
                        <span className="text-[#000] text-base font-semibold">
                          {row.polyMarket}
                        </span>
                      )}
                    </div>

                    {/* Kalshi */}
                    <div className="flex justify-center">
                      {typeof row.kalshi === "boolean" ? (
                        row.kalshi ? (
                          <div className="bg-[#0080ED] rounded-full w-[23px] h-[23px] flex items-center justify-center">
                            <Check
                              className="w-[14px] h-[14px] text-white"
                              strokeWidth={3}
                            />
                          </div>
                        ) : (
                          <div className="bg-gray-600 rounded-full w-[23px] h-[23px] flex items-center justify-center">
                            <X
                              className="w-[14px] h-[14px] text-white"
                              strokeWidth={3}
                            />
                          </div>
                        )
                      ) : (
                        <span className="text-[#000] text-base font-semibold">
                          {row.kalshi}
                        </span>
                      )}
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>

        {/* Mobile Table */}
        <div className="md:hidden">
          <div
            className="overflow-x-auto"
            style={{
              borderRadius: "15px",
              border: "0.5px solid #DDD",
              background: "rgba(255, 255, 255, 0.80)",
            }}
          >
            <div className="min-w-[332px] p-2">
              {/* Header */}
              <div className="border-b border-gray-300 pb-4 mb-3 relative">
                <div className="grid grid-cols-4 gap-2 items-end bg-[#f9fbff] rounded-[10px] px-2 pb-3">
                  <div />
                  <div className="absolute top-[-4px] left-[25.5%] border border-[#0080ED] bg-[#FFFFFFC2] flex items-center justify-center min-h-[470px] w-[82px] z-1 rounded-[8px] shadow-[0px_4px_4px_0px_rgba(0,0,0,0.25)]"></div>
                  {/* PredictMarkets */}
                  <div className="flex flex-col items-center gap-1">
                    <div className="w-[23px] h-[23px]">
                      <img
                        src={platforms?.predictMarkets?.icon}
                        alt="PredictMarkets"
                        className="w-full h-full object-contain"
                      />
                    </div>
                    <span className="text-[#000] text-[10px] relative z-10 font-medium text-center leading-3">
                      {platforms.predictMarkets?.name || "PredictMarkets"}
                    </span>
                  </div>
                  {/* PolyMarket */}
                  <div className="flex flex-col items-center gap-1">
                    <img
                      src={platforms.polyMarket?.icon}
                      alt={platforms.polyMarket?.name || "PolyMarket"}
                      className="w-[23px] h-[23px] object-contain"
                    />
                    <span className="text-[#000] text-[10px] font-medium text-center leading-3">
                      {platforms.polyMarket?.name || "PolyMarket"}
                    </span>
                  </div>
                  {/* Kalshi */}
                  <div className="flex flex-col items-center gap-1">
                    <img
                      src={platforms.kalshi?.icon}
                      alt={platforms.kalshi?.name || "Kalshi"}
                      className="w-[23px] h-[23px] object-contain"
                    />
                    <span className="text-[#000] text-[10px] font-medium text-center leading-3">
                      {platforms.kalshi?.name || "Kalshi"}
                    </span>
                  </div>
                </div>
              </div>

              {/* Body */}
              <div className="space-y-0 md:space-y-2">
                {tableData.map((row, index) => (
                  <div
                    key={row.id}
                    className={`grid grid-cols-4 items-center md:py-2 py-2 bg-white ${
                      index < tableData.length - 1
                        ? "border-b border-gray-200"
                        : ""
                    }`}
                  >
                    <span className="text-[#000] text-[10px] font-medium leading-4">
                      {row.feature}
                    </span>

                    {/* PredictMarkets */}
                    <div className="flex justify-center h-full bg-white items-center ">
                      {typeof row.predictMarkets === "boolean" ? (
                        row.predictMarkets ? (
                          <div className="bg-[#0080ED] rounded-full relative z-10 w-[11px] h-[11px] flex items-center justify-center">
                            <Check
                              className="w-[7px] h-[7px] text-white"
                              strokeWidth={3}
                            />
                          </div>
                        ) : (
                          <div className="bg-gray-600 rounded-full relative z-10 w-[11px] h-[11px] flex items-center justify-center">
                            <X
                              className="w-[7px] h-[7px] text-white"
                              strokeWidth={3}
                            />
                          </div>
                        )
                      ) : (
                        <span className="text-[#000] text-[10px] relative z-10 font-semibold">
                          {row.predictMarkets}
                        </span>
                      )}
                    </div>

                    {/* PolyMarket */}
                    <div className="flex justify-center">
                      {typeof row.polyMarket === "boolean" ? (
                        row.polyMarket ? (
                          <div className="bg-[#0080ED] rounded-full w-[11px] h-[11px] flex items-center justify-center">
                            <Check
                              className="w-[7px] h-[7px] text-white"
                              strokeWidth={3}
                            />
                          </div>
                        ) : (
                          <div className="bg-gray-600 rounded-full w-[11px] h-[11px] flex items-center justify-center">
                            <X
                              className="w-[7px] h-[7px] text-white"
                              strokeWidth={3}
                            />
                          </div>
                        )
                      ) : (
                        <span className="text-[#000] text-[10px] font-semibold">
                          {row.polyMarket}
                        </span>
                      )}
                    </div>

                    {/* Kalshi */}
                    <div className="flex justify-center">
                      {typeof row.kalshi === "boolean" ? (
                        row.kalshi ? (
                          <div className="bg-[#0080ED] rounded-full w-[11px] h-[11px] flex items-center justify-center">
                            <Check
                              className="w-[7px] h-[7px] text-white"
                              strokeWidth={3}
                            />
                          </div>
                        ) : (
                          <div className="bg-gray-600 rounded-full w-[11px] h-[11px] flex items-center justify-center">
                            <X
                              className="w-[7px] h-[7px] text-white"
                              strokeWidth={3}
                            />
                          </div>
                        )
                      ) : (
                        <span className="text-[#000] text-[10px] font-semibold">
                          {row.kalshi}
                        </span>
                      )}
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
