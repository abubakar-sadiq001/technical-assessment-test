function MorePoints() {
  return (
    <div className="mt-5">
      <h1 className="my-3 border-l-4 border-[#901efe] pl-4 text-2xl font-semibold">
        Earn More Points
      </h1>

      <div className="flex gap-4 max-[684px]:flex-col">
        <div className="w-full max-w-87.5 translate-y-0 transform rounded-xl border border-[#e5e7eb] bg-gray-50 duration-300 hover:-translate-y-1.5 hover:border-[#901efe] hover:shadow-[0px_5px_10px] hover:shadow-[#dcdcdc] max-[684px]:max-w-full">
          <header className="flex items-center gap-3 rounded-tl-xl rounded-tr-xl bg-white p-4">
            <ion-icon
              name="star-outline"
              style={{
                backgroundColor: "#9013fe33",
                color: "#9013FE",
                fontSize: "25px",
                padding: "6px",
                borderRadius: "10px",
              }}
            ></ion-icon>
            <p className="text-[14px] font-semibold">
              Refer and win 10,000 points!
            </p>
          </header>

          <section className="p-4">
            <p className="text-[14px] font-semibold">
              Invite 3 friends by Nov 20 and earn a chance to be one of 5
              winners of <span className="text-[#901efe]">10,000 points.</span>{" "}
              Friends must complete onboarding to qualify.
            </p>
          </section>
        </div>
        {/*  */}
        <div className="w-full max-w-87.5 translate-y-0 transform rounded-xl border border-[#e5e7eb] bg-gray-50 duration-300 hover:-translate-y-1.5 hover:border-[#901efe] hover:shadow-[0px_5px_10px] hover:shadow-[#dcdcdc] max-[684px]:max-w-full">
          <header className="flex items-center gap-3 rounded-tl-xl rounded-tr-xl bg-white p-4">
            <ion-icon
              name="share-social-outline"
              style={{
                backgroundColor: "#9013fe33",
                color: "#9013FE",
                fontSize: "25px",
                padding: "6px",
                borderRadius: "10px",
              }}
            ></ion-icon>
            <div>
              <p className="text-[13px] font-semibold">
                Refer and win 10,000 points!
              </p>
              <p className="text-[13px]">Earn +25 pts</p>
            </div>
          </header>

          <section className="flex items-center justify-between p-4">
            <p className="text-[14px] font-semibold">Share your tool stack</p>
            <button className="flex cursor-pointer items-center gap-2 rounded-full bg-[#eef2ff] px-4 py-2 font-semibold text-[#901efe] transition-all duration-200 hover:bg-[#901efe] hover:text-white">
              <ion-icon
                name="share-social-outline"
                style={{ fontSize: "25px" }}
              ></ion-icon>
              <p className="text-[14px]">Share</p>
            </button>
          </section>
        </div>
      </div>
    </div>
  );
}

export default MorePoints;
