function PointsBalance() {
  return (
    <div className="w-full max-w-87.5 rounded-xl bg-gray-50 shadow-[0px_5px_10px] shadow-[#dcdcdc]">
      <header className="flex items-center gap-2 rounded-tl-xl rounded-tr-xl border-b-[#f3f4f6] bg-[#eef2ff] px-4 py-5 text-[17px] font-semibold text-gray-700">
        <ion-icon name="calendar"></ion-icon>
        <h1 className="text-gray-700">Points Balance</h1>
      </header>

      <section className="p-3">
        {/*  */}
        <div className="mt-7 flex items-center justify-between px-2">
          <h1 className="text-4xl font-extrabold text-[#9013FE]">10</h1>
          <p className="text-4xl">⭐</p>
        </div>

        {/*  */}
        <div className="mt-10 px-1">
          <div className="my-1 flex items-center justify-between">
            <p className="text-[14px] text-gray-600">
              Progress to <b>$5 Gift Card</b>
            </p>
            <p className="text-[15px] font-semibold">0/5000</p>
          </div>

          {/*  */}
          <div>
            <div className="h-2 w-full rounded-full bg-gray-200"></div>
            <p className="mt-1 text-[12px] text-gray-500">
              🚀 Just getting started — keep earning points!
            </p>
          </div>
        </div>
      </section>
    </div>
  );
}

export default PointsBalance;
