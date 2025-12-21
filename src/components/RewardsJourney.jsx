function RewardsJourney() {
  return (
    <div>
      <h1 className="my-3 border-l-4 pl-4 text-2xl font-semibold">
        Your Rewards Journey
      </h1>

      <div className="flex justify-center gap-5">
        <div className="rounded-xl bg-yellow-600">
          <header className="flex items-center gap-2 bg-[rgba(144,_19,_254,_0.2)] p-4 text-[17px] font-semibold text-gray-700">
            <ion-icon name="calendar"></ion-icon>
            <h1>Points Balance</h1>
          </header>

          <section className="p-3">
            {/*  */}
            <div>
              <h1>10</h1>
              <h1>⭐</h1>
            </div>

            {/*  */}
            <div>
              <p>Progress to $5 Gift Card</p>
              <p>0/5000</p>
            </div>

            {/*  */}
            <div>
              <div className="h-3.5 w-full rounded-full bg-gray-200"></div>
              <p>🚀 Just getting started — keep earning points!</p>
            </div>
          </section>
        </div>

        <div className="rounded-xl bg-yellow-600">
          <header className="flex items-center gap-2 bg-[rgba(144,_19,_254,_0.2)] p-4 text-[17px] font-semibold text-gray-700">
            <ion-icon name="calendar"></ion-icon>
            <h1>Daily Streak</h1>
          </header>

          <section className="p-3">
            {/*  */}
            <div>
              <h1>10</h1>
              <h1>⭐</h1>
            </div>

            {/*  */}
            <div>
              <p>Progress to $5 Gift Card</p>
              <p>0/5000</p>
            </div>

            {/*  */}
            <div>
              <div className="h-3.5 w-full rounded-full bg-gray-200"></div>
              <p>🚀 Just getting started — keep earning points!</p>
            </div>
          </section>
        </div>

        <div className="rounded-xl bg-blue-400">
          <header className="flex items-center justify-between gap-2 bg-[rgba(144,_19,_254,_0.2)] p-4 text-[13px] text-gray-700">
            <div className="flex flex-col justify-between gap-4">
              <p className="w-full max-w-[80px] min-w-[80px] rounded-full bg-red-400 py-1 text-center text-[12px]">
                Featured
              </p>
              <h1 className="text-[20px] font-bold">Top Tool Spotlight</h1>
              <h1 className="text-[17px] font-semibold">Reclaim</h1>
            </div>
            <div>
              <img src="./spotlight-icon2.png" width={60} />
            </div>
          </header>

          <section className="p-3">
            {/*  */}
            <div className="flex gap-4">
              <ion-icon name="calendar" style={{ fontSize: "30px" }}></ion-icon>
              <div>
                <p className="text-[14px] font-semibold">
                  Automate and Optimize Your Schedule
                </p>
                <p className="my-2 w-full max-w-[250px] text-[13px]">
                  Reclaim.ai is an AI-powered calendar assistant that
                  automatically schedules your tasks, meetings, and breaks to
                  boost productivity. Free to try — earn Flowva Points when you
                  sign up!
                </p>
              </div>
            </div>

            {/*  */}
            <div className="flex justify-between border-t">
              <button className="flex items-center gap-2 rounded-full bg-pink-500 px-4 py-2">
                <ion-icon name="calendar"></ion-icon>
                <p className="text-[13px]">Sign up</p>
              </button>
              <button className="flex items-center gap-2 rounded-full bg-pink-500 px-4 py-2">
                <ion-icon name="calendar"></ion-icon>
                <p className="text-[13px]">Claim 50 pts</p>
              </button>
            </div>
          </section>
        </div>
      </div>
    </div>
  );
}

export default RewardsJourney;
