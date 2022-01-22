import { Nav, NavigationLink, NavList, ListItem } from "./Navigation.styled";

export default function Navigation() {
  return (
    <Nav>
      <NavList>
        <ListItem>
          <NavigationLink to="/">Home</NavigationLink>
        </ListItem>
        <ListItem>
          <NavigationLink to="/movies">Movies</NavigationLink>
        </ListItem>
      </NavList>
    </Nav>
  );
}
