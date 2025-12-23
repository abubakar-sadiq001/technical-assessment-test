import { Link } from "react-router";
import { links } from "../data/data";

function SocialLinks() {
  return (
    <div>
      <ul className="flex justify-center gap-4">
        {links.map((link) => (
          <Link
            key={link.iconName}
            className="translate-y-0 transform transition-all duration-200 hover:-translate-y-1"
          >
            <ion-icon
              name={`logo-${link.iconName}`}
              style={{
                fontSize: "30px",
                color: `#${link.color}`,
              }}
            ></ion-icon>
          </Link>
        ))}
      </ul>
    </div>
  );
}

export default SocialLinks;
