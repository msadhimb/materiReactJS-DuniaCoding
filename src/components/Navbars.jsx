import { Navbar } from "flowbite-react";
import { Link, Outlet } from "react-router-dom";

const Navbars = () => {
  return (
    <>
      <Navbar rounded>
        <Navbar.Brand as={Link} href="https://flowbite-react.com">
          <span className="self-center whitespace-nowrap text-xl font-semibold dark:text-white">
            Flowbite React
          </span>
        </Navbar.Brand>
        <Navbar.Toggle />
        <Navbar.Collapse>
          <Navbar.Link as={Link} to={"/"}>
            State
          </Navbar.Link>
          <Navbar.Link as={Link} to={"/fruit"}>
            Fruit
          </Navbar.Link>
          <Navbar.Link as={Link} to={"/addition"}>
            Addition
          </Navbar.Link>
          <Navbar.Link as={Link} to={"/pokemon"}>
            Pokemon
          </Navbar.Link>
        </Navbar.Collapse>
      </Navbar>
      <Outlet />
    </>
  );
};

export default Navbars;
