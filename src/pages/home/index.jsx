import { Link, Outlet } from "react-router-dom";
import "./home.styles.jsx";
import { Wrapper } from "./home.styles.jsx";

const HomeLayout = () => {
  return (
    <Wrapper>
      <nav>
        <ul>
          <li>
            <Link to="/">Home</Link>
          </li>
          <li>
            <Link to="/about">About</Link>
          </li>
        </ul>
      </nav>
      <Outlet />
    </Wrapper>
  );
};
export default HomeLayout;
