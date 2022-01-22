import { Outlet } from "react-router-dom";
import Navigation from "../Navigation/Navigation";
import { Header, Footer, Main } from "./Layout.styled";

export default function Layout() {
  return (
    <>
      <Header>
        <Navigation />
      </Header>
      <Main>
        <Outlet />
      </Main>
      <Footer>
        Developed <a href="tel:+380675034464">Vasily Lopatkin</a>. January 2022.
      </Footer>
    </>
  );
}
