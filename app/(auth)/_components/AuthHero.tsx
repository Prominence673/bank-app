export default function AuthText(): React.ReactNode {
    return (
      <>
      {/* text middle*/}
      <div className="absolute top-1/2 -translate-y-1/2 left-20 flex-col font-serif">
        <h1 className="text-[#e8eaf2] text-4xl font-bold">Your money,</h1>
        <h1 className="text-blue-600 text-4xl font-bold">under control.</h1>
        <p className="text-[#9ba3c4] text-sm w-80 font-bold mt-5">Manage your accounts, cards and transfers with total security from one place.</p>
      </div>
      {/* text bottom*/}
      <div className="absolute flex gap-10 bottom-10 left-20 font-serif">
        <div className="flex-col gap-2">
          <h1 className="text-[#e8eaf2] text-2xl font-bold">2,4M+</h1>
          <p className="text-[#9ba3c4] text-sm font-bold">Active clients</p>
          </div>
          <div className="flex-col gap-2">
            <h1 className="text-[#e8eaf2] text-2xl font-bold">99.9%</h1>
            <p className="text-[#9ba3c4] text-sm font-bold">Online time</p>
          </div>
          <div className="flex-col gap-2">
            <h1 className="text-[#e8eaf2] text-2xl font-bold">$0</h1>
            <p className="text-[#9ba3c4] text-sm font-bold">Commissions</p>
          </div>
      </div >
      </>
    )
}