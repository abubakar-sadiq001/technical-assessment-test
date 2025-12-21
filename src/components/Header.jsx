function Header() {
  return (
    <div className="sticky top-0 flex w-full items-center justify-between bg-[#9013FE] px-5 py-7 shadow">
      <div>
        <h1 className="text-[25px]">Rewards Hub</h1>
        <p className="text-gray-600">
          Earn points, unlock rewards, and celebrate your progress!
        </p>
      </div>

      <button className="flex h-8.5 w-8.5 items-center justify-center rounded-full bg-yellow-400">
        <ion-icon
          name="notifications"
          style={{
            fontSize: "20px",
          }}
        ></ion-icon>
      </button>
    </div>
  );
}

export default Header;
