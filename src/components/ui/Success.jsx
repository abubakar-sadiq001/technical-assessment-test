import Confetti from "react-confetti";

function Success() {
  return (
    <div>
      <Confetti width={350} numberOfPieces={100} />

      <div className="flex justify-center">
        <img src="./approve.png" width={150} />
      </div>

      <h1 className="text-[22px] font-semibold text-[#901efe]">Level Up! 🎉</h1>

      <h1 className="my-3 text-4xl font-bold text-purple-600">+5 Points</h1>

      <p className="animate-bounce">✨ 💎 🎯</p>

      <p className="mt-2 mb-6 text-[14px]">
        You've claimed your daily points! Come back tomorrow
      </p>
    </div>
  );
}

export default Success;
