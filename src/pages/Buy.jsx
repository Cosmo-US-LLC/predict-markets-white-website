import { PresaleBuyWidgetSection } from '../components/buy/PresaleBuyWidgetSection.jsx'

export function Buy() {
  return (
    <div className="min-h-screen bg-[#f0f2f5] px-4 py-12">
      <div className="mx-auto max-w-lg">
        <h1 className="mb-8 text-center font-[Inter] text-2xl font-bold text-gray-900 md:text-3xl">
          Buy $PREDICT
        </h1>
        <PresaleBuyWidgetSection />
      </div>
    </div>
  )
}
