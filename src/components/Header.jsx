import NotificationBox from "./ui/NotificationBox";

function Header() {
  return (
    <div className="sticky top-0 z-50 flex w-full items-center justify-between bg-gray-50 px-5 py-7 shadow-[0px_2px_20px] shadow-[#e7e7e7]">
      <div>
        <h1 className="text-[25px]">Rewards Hub</h1>
        <p className="text-gray-600">
          Earn points, unlock rewards, and celebrate your progress!
        </p>
      </div>

      <button className="relative flex h-9.5 w-9.5 cursor-pointer items-center justify-center rounded-full bg-gray-200 text-gray-700 transition-all duration-200 hover:bg-gray-300 hover:text-[#901efe]">
        <ion-icon
          name="notifications"
          style={{
            fontSize: "18px",
          }}
        ></ion-icon>

        {/* Notification count */}
        <div className="absolute -top-1 right-0 flex h-4 w-4 animate-bounce items-center justify-center rounded-full bg-red-500 text-[11px] font-bold text-white">
          4
        </div>
      </button>

      {/* <NotificationBox /> */}
    </div>
  );
}

export default Header;
