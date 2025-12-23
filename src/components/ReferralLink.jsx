import { useEffect, useState } from "react";

function ReferralLink() {
  const link = "https://flowvahub.com/signup/?ref=sdik8337";
  const [isCopied, setIsCopied] = useState(false);

  useEffect(() => {
    setTimeout(() => {
      setIsCopied(false);
    }, 2000);
  }, [isCopied, setIsCopied]);

  function copyRefLink() {
    navigator.clipboard
      .writeText(link)
      .then(() => {
        setIsCopied(true);
      })
      .catch((err) => {
        console.log(err);
      });
  }

  return (
    <div>
      <div className="relative my-10 rounded-lg bg-purple-50 px-3 py-2">
        <label className="text-[13px] text-gray-700">
          Your personal referral link:
        </label>
        <input
          type="text"
          value={link}
          readOnly
          className="relative my-2 w-full rounded-md border-2 border-[#e5e7eb] bg-white p-2 text-[14px] outline-[#901efe] focus:border-0 focus:outline-2"
        />

        {!isCopied ? (
          <ion-icon
            name="copy-outline"
            onClick={copyRefLink}
            style={{
              position: "absolute",
              right: 40 - 20,
              top: 47,
              fontSize: "24px",
              color: "#901efe",
              cursor: "pointer",
            }}
          ></ion-icon>
        ) : (
          <ion-icon
            name="checkmark-outline"
            style={{
              position: "absolute",
              right: 40 - 20,
              top: 47,
              fontSize: "24px",
              color: "green",
              cursor: "pointer",
            }}
          ></ion-icon>
        )}
      </div>
    </div>
  );
}

export default ReferralLink;
