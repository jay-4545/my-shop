import { Button, Navbar } from "flowbite-react";
import { useState } from "react";
import { HiShoppingCart } from "react-icons/hi";
import DrawerComponent from "./Drawer";

export function NavComponent() {
  const [isOpen, setIsOpen] = useState(false);
  const toggleDrawer = () => setIsOpen(!isOpen);
  return (
    <>
      <Navbar
        fluid
        rounded
        className="bg-[#fcfcfe] fixed w-full overflow-hidden z-10 "
      >
        <Navbar.Brand href="https://flowbite-react.com">
          <img
            src="/images/trolley.png"
            className="ml-3 h-6 sm:h-9"
            alt="my-Shop Logo"
          />
          <span className="self-center whitespace-nowrap text-xl font-semibold dark:text-white ml-3">
            My-Shop
          </span>
        </Navbar.Brand>
        <div className="flex md:order-2">
          <Button
            pill
            gradientDuoTone="pinkToOrange"
            className="mr-2"
            onClick={toggleDrawer}
          >
            <HiShoppingCart className="mr-2 h-5 w-5" />
            Cart
          </Button>
          <Navbar.Toggle />
        </div>
        <Navbar.Collapse className="[&>ul]:text-lg">
          <Navbar.Link href="#" active>
            Home
          </Navbar.Link>
          <Navbar.Link href="#">About</Navbar.Link>
          <Navbar.Link href="#">Services</Navbar.Link>
          <Navbar.Link href="#">Pricing</Navbar.Link>
          <Navbar.Link href="#">Contact</Navbar.Link>
        </Navbar.Collapse>
      </Navbar>
      <DrawerComponent isOpen={isOpen} toggleDrawer={toggleDrawer} />
    </>
  );
}

export default NavComponent;
