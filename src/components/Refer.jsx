import ReferralLink from "./ReferralLink";
import SocialLinks from "./SocialLinks";

function Refer() {
  return (
    <div>
      <h1 className="my-3 border-l-4 border-[#901efe] pl-4 text-2xl font-semibold">
        Refer & Earn
      </h1>

      <div className="hover:shadow-[#dcdcdc w-full translate-y-0 transform rounded-xl bg-gray-50 shadow-[0px_3px_5px] shadow-[#dcdcdc] transition-all duration-300 hover:-translate-y-1.5 hover:shadow-[0px_5px_10px]">
        <header className="flex items-center gap-3 rounded-tl-xl rounded-tr-xl border-b-[#f3f4f6] bg-[#eef2ff] p-4">
          <ion-icon
            name="people-outline"
            style={{
              color: "#9013FE",
              fontSize: "30px",
            }}
          ></ion-icon>
          <div>
            <p className="text-[20px] font-semibold text-gray-700">
              Share Your Link
            </p>
            <p className="text-[14px] text-gray-500">
              Invite friends and earn 25 points when they join!{" "}
            </p>
          </div>
        </header>

        <section className="p-4">
          <div className="flex justify-evenly">
            <div className="text-center">
              <p className="text-[25px] font-semibold text-[#901efe]">0</p>
              <p className="text-[14px]">Referrals</p>
            </div>

            <div className="text-center">
              <p className="text-[25px] font-semibold text-[#901efe]">0</p>
              <p className="text-[14px]">Points Earned</p>
            </div>
          </div>

          {/* Refferal link */}
          <ReferralLink />

          {/* Social links */}
          <SocialLinks />
        </section>
      </div>
    </div>
  );
}

export default Refer;
