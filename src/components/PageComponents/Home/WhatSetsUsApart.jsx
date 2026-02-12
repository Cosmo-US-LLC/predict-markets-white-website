import { Check, X } from 'lucide-react';

export default function WhatSetsUsApart({
  title = 'What Sets Us Apart',
  description = 'Prediction markets are growing fast...',
  tableData = [],
  platforms = {},
}) {
  return (
    <section className="bg-[#020b10] py-12 md:py-20">
      <div className="max-w-[1280px] mx-auto px-4 md:px-8 flex flex-col gap-8 md:gap-10">
        {/* Header */}
        <div className="flex flex-col gap-3 max-w-[868px] text-center mx-auto">
          <h2 className="text-3xl md:text-[45px] font-medium leading-[53px] tracking-[-2px] capitalize text-[#ffffff]">
            {title}
          </h2>
          <p className="text-[#cacaca] text-base leading-6 tracking-[0.32px]">
            {description}
          </p>
        </div>

        {/* Desktop Table */}
        <div className="hidden md:block">
          <div className="bg-[#0f0f0f] p-6 md:p-8 gradient-border-rounded overflow-x-auto">
            <div className="min-w-[972px]">
              {/* Header */}
              <div className="border-b border-white/20 px-[40px] lg:px-[55px] py-6">
                <div className="grid grid-cols-4 gap-4 items-center">
                  <div />
                  {/* PredictMarkets */}
                  <div className="flex flex-col items-center gap-2">
                    <div className="w-[45px] h-[45px]  ">
                      
                        {/* {[...Array(8)].map((_, i) => (
                          <div key={i} className="w-[7px] h-[6.5px] bg-white rounded-[1px]" />
                        ))} */}
                        <img src={platforms?.predictMarkets?.icon} alt="PredictMarkets" className="w-[full] h-[full] object-contain" />
                      </div>
                     
                    <span className="text-white text-base font-medium">
                      {platforms.predictMarkets?.name || 'PredictMarkets'}
                    </span>
                  </div>
                  {/* PolyMarket */}
                  <div className="flex flex-col items-center gap-2">
                    <img
                      src={platforms.polyMarket?.icon}
                      alt={platforms.polyMarket?.name || 'PolyMarket'}
                      className="w-[45px] h-[45px] object-contain"
                    />
                    <span className="text-white text-base font-medium">
                      {platforms.polyMarket?.name || 'PolyMarket'}
                    </span>
                  </div>
                  {/* Kalshi */}
                  <div className="flex flex-col items-center gap-2">
                    <img
                      src={platforms.kalshi?.icon}
                      alt={platforms.kalshi?.name || 'Kalshi'}
                      className="w-[45px] h-[45px] object-contain"
                    />
                    <span className="text-white text-base font-medium">
                      {platforms.kalshi?.name || 'Kalshi'}
                    </span>
                  </div>
                </div>
              </div>

              {/* Body */}
              <div className="px-[40px] lg:px-[55px]">
                {tableData.map((row, index) => (
                  <div
                    key={row.id}
                    className={`grid grid-cols-4 gap-4 items-center py-4 ${
                      index < tableData.length - 1 ? 'border-b border-white/10' : ''
                    }`}
                  >
                    <span className="text-white text-base font-medium">{row.feature}</span>
                    
                    {/* PredictMarkets */}
                    <div className="flex justify-center">
                      {typeof row.predictMarkets === 'boolean' ? (
                        row.predictMarkets ? (
                          <Check className="w-[23px] h-[23px] text-[#2104ff]" />
                        ) : (
                          <X className="w-[23px] h-[23px] text-gray-500" />
                        )
                      ) : (
                        <span className="text-white text-base font-semibold">{row.predictMarkets}</span>
                      )}
                    </div>

                    {/* PolyMarket */}
                    <div className="flex justify-center">
                      {typeof row.polyMarket === 'boolean' ? (
                        row.polyMarket ? (
                          <Check className="w-[23px] h-[23px] text-[#2104ff]" />
                        ) : (
                          <X className="w-[23px] h-[23px] text-gray-500" />
                        )
                      ) : (
                        <span className="text-white text-base font-semibold">{row.polyMarket}</span>
                      )}
                    </div>

                    {/* Kalshi */}
                    <div className="flex justify-center">
                      {typeof row.kalshi === 'boolean' ? (
                        row.kalshi ? (
                          <Check className="w-[23px] h-[23px] text-[#2104ff]" />
                        ) : (
                          <X className="w-[23px] h-[23px] text-gray-500" />
                        )
                      ) : (
                        <span className="text-white text-base font-semibold">{row.kalshi}</span>
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
          <div className="bg-[#0f0f0f] p-4 gradient-border-rounded overflow-x-auto">
            <div className="min-w-[332px]">
              {/* Header */}
              <div className="border-b border-white/20 pb-4 mb-3">
                <div className="grid grid-cols-4 gap-2 items-end">
                  <div />
                  {/* PredictMarkets */}
                  <div className="flex flex-col items-center gap-1">
                    <div className="w-[23px] h-[23px] rounded-[5px] bg-white/10 flex items-center justify-center">
                      <div className="w-[12px] h-[15px] flex flex-wrap gap-[1px]">
                        {[...Array(8)].map((_, i) => (
                          <div key={i} className="w-[3.5px] h-[3.5px] bg-white rounded-[0.5px]" />
                        ))}
                      </div>
                    </div>
                    <span className="text-white text-[10px] font-medium text-center leading-3">
                      {platforms.predictMarkets?.name || 'PredictMarkets'}
                    </span>
                  </div>
                  {/* PolyMarket */}
                  <div className="flex flex-col items-center gap-1">
                    <img
                      src={platforms.polyMarket?.icon}
                      alt={platforms.polyMarket?.name || 'PolyMarket'}
                      className="w-[23px] h-[23px] object-contain"
                    />
                    <span className="text-white text-[10px] font-medium text-center leading-3">
                      {platforms.polyMarket?.name || 'PolyMarket'}
                    </span>
                  </div>
                  {/* Kalshi */}
                  <div className="flex flex-col items-center gap-1">
                    <img
                      src={platforms.kalshi?.icon}
                      alt={platforms.kalshi?.name || 'Kalshi'}
                      className="w-[23px] h-[23px] object-contain"
                    />
                    <span className="text-white text-[10px] font-medium text-center leading-3">
                      {platforms.kalshi?.name || 'Kalshi'}
                    </span>
                  </div>
                </div>
              </div>

              {/* Body */}
              <div className="space-y-2">
                {tableData.map((row, index) => (
                  <div
                    key={row.id}
                    className={`grid grid-cols-4 items-center py-2 ${
                      index < tableData.length - 1 ? 'border-b border-white/10' : ''
                    }`}
                  >
                    <span className="text-white text-[10px] font-medium leading-4">{row.feature}</span>

                    {/* PredictMarkets */}
                    <div className="flex justify-center">
                      {typeof row.predictMarkets === 'boolean' ? (
                        row.predictMarkets ? (
                          <Check className="w-[11px] h-[11px] text-[#2104ff]" />
                        ) : (
                          <X className="w-[11px] h-[11px] text-gray-500" />
                        )
                      ) : (
                        <span className="text-white text-[10px] font-semibold">{row.predictMarkets}</span>
                      )}
                    </div>

                    {/* PolyMarket */}
                    <div className="flex justify-center">
                      {typeof row.polyMarket === 'boolean' ? (
                        row.polyMarket ? (
                          <Check className="w-[11px] h-[11px] text-[#2104ff]" />
                        ) : (
                          <X className="w-[11px] h-[11px] text-gray-500" />
                        )
                      ) : (
                        <span className="text-white text-[10px] font-semibold">{row.polyMarket}</span>
                      )}
                    </div>

                    {/* Kalshi */}
                    <div className="flex justify-center">
                      {typeof row.kalshi === 'boolean' ? (
                        row.kalshi ? (
                          <Check className="w-[11px] h-[11px] text-[#2104ff]" />
                        ) : (
                          <X className="w-[11px] h-[11px] text-gray-500" />
                        )
                      ) : (
                        <span className="text-white text-[10px] font-semibold">{row.kalshi}</span>
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
