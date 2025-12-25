function FeaturedModalContents() {
  return (
    <div className="mt-3">
      <h1 className="text-[18px] font-semibold"> Claim Your 25 Points</h1>

      <div className="my-3 text-sm text-gray-500">
        <p className="mb-1">
          Sign up for Reclaim (free, no payment needed), then fill the form
          below:
        </p>

        <p>1️⃣ Enter your Reclaim sign-up email.</p>
        <p>
          2️⃣ Upload a screenshot of your Reclaim profile showing your email.
        </p>

        <p className="mt-1">
          After verification, you’ll get 25 Flowva Points! 🎉😊
        </p>
      </div>

      <div>
        <label htmlFor="email" className="text-[14px] font-semibold">
          Email used on Reclaim
        </label>

        <input
          type="email"
          id="email"
          className="my-1 w-full rounded-lg rounded-md border border-[#EDE9FE] px-4 py-2 text-base transition-all duration-[.2s] ease-linear outline-none focus:border-[#9013fe]"
          placeholder="User@example.com"
        />
      </div>

      <div className="mt-3">
        <label htmlFor="upload" className="text-[14px] font-semibold">
          Upload screenshot (mandatory)
        </label>

        {/* <input type="file" id="upload" className="w-full rounded-lg p-4" /> */}

        <label className="my-1 block cursor-pointer rounded-[8px] border border-dashed border-[#e9ecef] bg-[#f9f9f9] p-[0.5rem] transition-all duration-200 hover:bg-[rgba(29,28,28,0.05)]">
          <p className="flex items-center justify-center gap-2">
            <ion-icon
              name="cloud-download-outline"
              style={{
                fontSize: "25px",
                color: "black",
              }}
            ></ion-icon>
            <span>Choose file</span>
          </p>
          <input
            type="file"
            accept="image/*"
            required
            id="upload"
            className="hidden"
          />
        </label>
      </div>

      <div className="mt-3 mt-5 flex items-center justify-end gap-3">
        <button className="cursor-pointer rounded-[8px] bg-[#e9ecef] p-[0.5rem_1rem] font-semibold text-[#020617] transition-all duration-200 hover:bg-[#d1d5db]">
          Cancel
        </button>
        <button className="cursor-pointer rounded-[8px] bg-[#9103fe] p-[0.5rem_1rem] font-semibold text-white transition-all duration-200 hover:bg-[#FF8687]">
          Submit Claim
        </button>
      </div>
    </div>
  );
}

export default FeaturedModalContents;
