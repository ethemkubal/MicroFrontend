import { Link, useOutlet } from "react-router-dom";

type Props = {};

function HomeLayout({}: Props) {
  const outlet = useOutlet();
  return (
    <div>
      <div>
        <h1>REACT + MVC</h1>
        <ul>
          <Link to={"MVC"}>MVC</Link>
        </ul>
        <ul>
          <Link to={"Login"}>Login</Link>
        </ul>
        <ul>
          <Link to="/home">MVC HOME</Link>
        </ul>
      </div>
      <div>{outlet}</div>
    </div>
  );
}

export default HomeLayout;
