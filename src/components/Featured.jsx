function Featured({ setShowFeaturedModal }) {
  return (
    <div className="w-full translate-y-0 transform rounded-xl bg-white shadow-[0px_5px_10px] shadow-[#dcdcdc] duration-300 hover:-translate-y-1.5 hover:shadow-[0px_8px_10px]">
      <header className="flex w-full items-center justify-between gap-2 rounded-tl-xl rounded-tr-xl border-b-[#f3f4f6] bg-[linear-gradient(135deg,_#9013FE_0%,_#70D6FF_100%)] p-4 text-[13px] text-white">
        <div className="flex flex-col justify-between gap-4">
          <p className="w-full max-w-20 rounded-full bg-[#ffffff33] py-1 text-center text-[12px] backdrop-blur-sm">
            Featured
          </p>
          <h1 className="text-[20px] font-bold">Top Tool Spotlight</h1>
          <h1 className="text-[17px] font-semibold">Reclaim</h1>
        </div>
        <div>
          <img src="./spotlight-icon2.png" width={60} />
        </div>
      </header>

      <section className="">
        {/*  */}
        <div className="flex gap-4 px-4 py-3">
          <ion-icon
            name="calendar"
            className="text-[30px] text-[#901efe]"
          ></ion-icon>
          <div>
            <p className="text-[14px] font-semibold text-gray-800">
              Automate and Optimize Your Schedule
            </p>
            <p className="my-2 mb-4 w-full max-w-62.5 text-[13px] text-gray-600 max-[988px]:max-w-full">
              Reclaim.ai is an AI-powered calendar assistant that automatically
              schedules your tasks, meetings, and breaks to boost productivity.
              Free to try — earn Flowva Points when you sign up!
            </p>
          </div>
        </div>

        {/*  */}
        <div className="flex justify-between border-t border-[#f3f4f6] px-3 py-[4.5px] max-[988px]:py-2">
          <button className="flex cursor-pointer items-center justify-center gap-2 rounded-full border-0 bg-[#9013fe] px-4 py-2 font-semibold text-white transition-all duration-200 hover:bg-[#8628da]">
            <ion-icon name="calendar"></ion-icon>
            <p className="text-[13px]">Sign up</p>
          </button>
          <button
            className="flex cursor-pointer items-center gap-2 rounded-full bg-pink-500 bg-[linear-gradient(45deg,#9013FE,#FF8687)] px-4 py-2 text-sm font-semibold text-white"
            onClick={() => {
              setShowFeaturedModal(true);
            }}
          >
            <ion-icon name="calendar"></ion-icon>
            <p className="text-[13px]">Claim 50 pts</p>
          </button>
        </div>
      </section>
    </div>
  );
}

export default Featured;
