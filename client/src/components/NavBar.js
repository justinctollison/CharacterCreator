import React from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";
import { Button, Box } from "../styles";


function NavBar({ user, setUser}) {
    function handleLogoutClick(){
        fetch("/logout", { method: "DELETE" }).then((r) => {
            if (r.ok) {
                setUser(null);
            }
        });
    }

    return (
        <Wrapper>
            <Logo>
                <Link to="/"></Link>
                RPGC Creator
            </Logo>
            <Nav>
                <Box>Hello, {user.username}</Box>
                <Button as={Link} to="/characters">
                    Character List
                </Button>
                <Button as={Link} to="/new">
                    New Character
                </Button>
                <Button variant="outline" onClick={handleLogoutClick}>
                    Logout
                </Button>
            </Nav>
        </Wrapper>
    );
}

const Wrapper = styled.header`
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 8px;
`;

const Logo = styled.h1`
  font-family: "Montserrat";
  font-size: 3rem;
  color: black;
  margin: 0;
  line-height: 1;
  a {
    color: inherit;
    text-decoration: none;
  }
`;

const Nav = styled.nav`
  display: flex;
  gap: 4px;
  position: absolute;
  right: 8px;
`; 

export default NavBar;