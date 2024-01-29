export const meta = () => {
  return [{ title: "New Remix App" }];
};

import { Link } from "react-router-dom";

export default function Index() {
  return (
    <div style={{ fontFamily: "system-ui, sans-serif", lineHeight: "1.4" }}>
      <h1>Welcome to Remix</h1>
      <ul>
        <li>
          <Link
            
            to="/about"
            rel="noreferrer"
          >
            About
          </Link>
        </li>
        <li>
          <a
            
            href="/hello-world"
            rel="noreferrer"
          >
            Hello World
          </a>
        </li>
        <li>
          <a  href="/contact" rel="noreferrer">
            Contact
          </a>
        </li>
      </ul>
    </div>
  );
}
