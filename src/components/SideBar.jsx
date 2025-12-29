import { Link, NavLink } from "react-router";
import { useUser } from "../lib/useUser";
import { navLinks } from "../data/data";
import { useEffect, useRef, useState } from "react";
import { useSignout } from "../lib/useSignout";

function SideBar() {
  const menuRef = useRef(0);
  const { user, isLoading } = useUser();
  // console.log(user);
  const splittedEmail = user?.email?.split("@");
  const [showLogout, setShowLogout] = useState(false);

  const { signoutUser, isPending } = useSignout();

  useEffect(() => {
    const handleOutsideClick = (event) => {
      // Close menu if click is outside the menu
      if (
        showLogout &&
        menuRef.current &&
        !menuRef.current.contains(event.target)
      ) {
        setShowLogout(false);
      }
    };

    document.addEventListener("mousedown", handleOutsideClick);

    return () => {
      document.removeEventListener("mousedown", handleOutsideClick);
    };
  }, [showLogout]);

  return (
    <div className="sticky top-0 left-0 flex h-screen w-60 flex-col justify-between gap-5 overflow-y-auto bg-white p-5 max-[1199px]:hidden">
      <div>
        <img src="./flowva-logo.png" width={160} className="flex pl-3" />
      </div>

      <ul className="">
        {navLinks.map((link) => (
          <NavLink
            to={link.pathName}
            key={link.name}
            className={({ isActive }) =>
              isActive
                ? "mb-2 flex items-center gap-3 rounded-[7px] bg-[rgba(144,19,254,0.2)] px-3 py-3 text-[#9013FE]"
                : "mb-2 flex items-center gap-4 rounded-[7px] px-3 py-3 text-[16px] text-gray-900 transition-all hover:bg-[rgba(144,19,254,0.1)]"
            }
            // className="mb-7 flex items-center gap-4 text-[17px] text-gray-900"
          >
            <ion-icon
              name={link.iconName}
              style={{
                fontSize: "20px",
              }}
            ></ion-icon>
            <p
            //   to={link.pathName}
            //   className={({ isActive }) => (isActive ? "bg-blue-600" : "")}
            >
              {link.name}
            </p>
          </NavLink>
        ))}
      </ul>

      {/* LOGGED IN USER */}
      <div
        className="relative flex cursor-pointer items-center gap-2"
        onClick={() => setShowLogout((s) => !s)}
      >
        {/* <div className="h-10 w-10 rounded-full bg-yellow-300"></div> */}
        {showLogout && (
          <div
            ref={menuRef}
            className="absolute bottom-13 left-3 w-full max-w-75 rounded-lg border border-[#901efe] bg-white px-3 py-2"
          >
            <button
              onClick={signoutUser}
              disabled={isPending}
              className="w-full cursor-pointer rounded-lg px-4 py-2 text-left hover:bg-red-100 hover:text-red-400"
            >
              Log Out
            </button>
          </div>
        )}
        <div>
          {/* <img src="./Anonymous_face.jpg" className="h-10 w-10 rounded-full" /> */}
          <ion-icon
            name="person-circle-outline"
            style={{
              fontSize: "45px",
            }}
          ></ion-icon>
        </div>{" "}
        <div>
          <h2 className="text-[14px] font-semibold">
            {isLoading ? "Loading..." : splittedEmail?.at(0)}
          </h2>
          <p className="text-[13px] text-gray-400">
            {`${user?.email?.length > 18 ? user?.email.slice(0, 20) + "..." : user?.email.slice(0, 20)}`}
          </p>
        </div>
      </div>
    </div>
  );
}

export default SideBar;
