import { Link, NavLink } from "react-router";

const navLinks = [
  {
    name: "Home",
    pathName: "/",
    iconName: "home",
  },
  {
    name: "Discover",
    pathName: "discover",
    iconName: "compass",
  },
  {
    name: "Library",
    pathName: "library",
    iconName: "cube",
  },
  {
    name: "Tech Stack",
    pathName: "stack",
    iconName: "layers",
  },
  {
    name: "Subscriptions",
    pathName: "subscriptions",
    iconName: "card",
  },
  {
    name: "Rewards Hub",
    pathName: "rewards",
    iconName: "diamond",
  },
  {
    name: "Settings",
    pathName: "settings",
    iconName: "settings",
  },
];

function SideBar() {
  return (
    <div className="sticky top-0 left-0 flex h-screen w-60 flex-col justify-between gap-5 overflow-y-auto bg-white p-5">
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
                ? "mb-2 flex items-center gap-3 rounded-[7px] bg-[rgba(144,19,254,0.2)] px-3 py-3 text-[17px] text-[#9013FE]"
                : "mb-2 flex items-center gap-4 px-3 py-3 text-[17px] text-gray-900 transition-all"
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
      <div className="flex items-center gap-2">
        {/* <div className="h-10 w-10 rounded-full bg-yellow-300"></div> */}
        <div>
          <img src="./Anonymous_face.jpg" className="h-10 w-10 rounded-full" />
        </div>{" "}
        <div>
          <h2>Sdik</h2>
          <p>Abubakar sadiq</p>
        </div>
      </div>
    </div>
  );
}

export default SideBar;
