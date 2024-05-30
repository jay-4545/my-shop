import { Footer } from "flowbite-react";

export function FooterCo() {
  return (
    <Footer container className="bg-[#fcfcfe] ">
      <div className="w-full text-center">
        <div className="w-full justify-between sm:flex sm:items-center sm:justify-between">
          <Footer.Brand
            href="https://flowbite.com"
            src="/images/trolley.png"
            alt="Flowbite Logo"
            name="My-Shop"
          />
          <Footer.LinkGroup className="text-lg">
            <Footer.Link href="#">About</Footer.Link>
            <Footer.Link href="#">Privacy Policy</Footer.Link>
            <Footer.Link href="#">Licensing</Footer.Link>
            <Footer.Link href="#">Contact</Footer.Link>
          </Footer.LinkGroup>
        </div>
        <Footer.Divider />
        <Footer.Copyright
          href="#"
          by="Flowbite™"
          year={2024}
          className="text-lg"
        />
      </div>
    </Footer>
  );
}

export default FooterCo;
