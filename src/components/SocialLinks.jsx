import { Link } from "react-router";
import { links } from "../data/data";

function SocialLinks() {
  return (
    <div>
      <ul className="flex justify-center gap-4">
        {links.map((link) => (
          <Link key={link.iconName}>
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
