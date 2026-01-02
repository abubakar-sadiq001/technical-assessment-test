import { useEffect, useRef, useState } from "react";
import { createPortal } from "react-dom";
import { useUser } from "../lib/useUser";
import { useSignout } from "../lib/useSignout";
import { navLinks } from "../data/data";
import { NavLink } from "react-router";

function MediumScreenSidebar({ setShowMediumSideBar }) {
  const menuRef = useRef(0);

  const overlayRef = useRef(null);
  const { user, isLoading } = useUser();
  const splittedEmail = user?.email?.split("@");
  const firstEmailLetter = user?.email?.at(0);
  const [showLogout, setShowLogout] = useState(false);

  const [windowWidth, setWindowWidth] = useState(0);

  useEffect(() => {
    (function () {
      if (windowWidth > 1198) {
        setShowMediumSideBar(false);
      }
    })();
  }, [setShowMediumSideBar, windowWidth]);

  useEffect(() => {
    window.addEventListener("resize", () => {
      setWindowWidth(window.innerWidth);
    });
  }, []);

  const { signoutUser, isPending } = useSignout();

  function handleClose() {
    setShowMediumSideBar(false);
  }

  // Handle click on overlay only
  function handleOverlayClick(e) {
    if (overlayRef.current === e.target) {
      handleClose();
    }
  }

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

  return createPortal(
    <div
      className="fixed inset-0 z-1000 flex items-center justify-start bg-black/40 backdrop-blur-[1px] transition-all"
      onClick={handleOverlayClick}
      ref={overlayRef}
    >
      <div className="my-12.5 h-full w-full max-w-60 overflow-hidden rounded-lg bg-white text-center shadow-xl">
        {/* CONTENT */}

        <div className="bg-ambgrayer-100 relative flex h-screen w-full flex-col justify-between gap-5 overflow-y-auto">
          <div className="relative">
            <ion-icon
              name="close-outline"
              className="absolute top-2 right-2 cursor-pointer rounded-lg p-1 text-[25px] text-gray-500 hover:bg-gray-200 hover:text-black"
              onClick={handleClose}
            ></ion-icon>
            <img src="./flowva-logo.png" width={170} className="flex p-5" />
          </div>

          <ul className="p-5">
            {navLinks.map((link) => (
              <NavLink
                to={link.pathName}
                key={link.name}
                className={({ isActive }) =>
                  isActive
                    ? "mb-2 flex items-center gap-3 rounded-[7px] bg-[rgba(144,19,254,0.2)] px-3 py-3 text-[#9013FE]"
                    : "mb-2 flex items-center gap-4 rounded-[7px] px-3 py-3 text-[16px] text-gray-900 transition-all hover:bg-[rgba(144,19,254,0.1)]"
                }
              >
                <ion-icon
                  name={link.iconName}
                  style={{
                    fontSize: "20px",
                  }}
                ></ion-icon>
                <p>{link.name}</p>
              </NavLink>
            ))}
          </ul>

          {/* LOGGED IN USER */}
          <div
            className="relative flex cursor-pointer items-center gap-2 p-5"
            onClick={() => setShowLogout((s) => !s)}
          >
            {showLogout && (
              <div
                ref={menuRef}
                className="absolute bottom-18 left-3 w-full max-w-50 rounded-lg border border-[#901efe] bg-white px-3 py-2"
              >
                <button
                  onClick={signoutUser}
                  disabled={isPending}
                  className="w-full cursor-pointer rounded-lg px-3 py-2 text-left text-sm hover:bg-red-100 hover:text-red-400"
                >
                  Log Out
                </button>
              </div>
            )}
            <div className="flex w-10 justify-center rounded-full bg-[#9013fe33] py-2 font-semibold text-[#901efe]">
              <p>{firstEmailLetter?.toUpperCase()}</p>
            </div>
            <div>
              <h2 className="text-left text-[14px] font-semibold">
                {isLoading ? "Loading..." : splittedEmail?.at(0)}
              </h2>
              <p className="text-[13px] text-gray-400">
                {`${user?.email?.length > 18 ? user?.email.slice(0, 20) + "..." : user?.email.slice(0, 20)}`}
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>,
    document.body,
  );
}

export default MediumScreenSidebar;
