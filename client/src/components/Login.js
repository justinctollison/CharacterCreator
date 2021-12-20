import { useState } from "react";
import LoginForm from "./LoginForm";
import SignUpForm from "./SignUpForm";
import { Button } from "../styles";
import styled from "styled-components";

function Login({ onLogin }) {
    const [showLogin, setShowLogin] = useState(true);

    return (
        <Wrapper>
            <Logo>RPGC Creator</Logo>
            {showLogin ? (
                <>
                    <LoginForm onLogin={onLogin} />
                    <Divider />
                    <p>
                        New?
                        <Button color="secondary" onClick={() => setShowLogin(false)}>
                            Sign up here
                        </Button>
                    </p>
                </>
            ) : (
                <>
                <SignUpForm onLogin={onLogin} />
                <Divider />
                <p>
                    Not new?
                    <Button color="secondary" onClick={() => setShowLogin(true)}>
                        Log in here
                    </Button>
                </p>
                </>
            )}
        </Wrapper>
    );
}

const Logo = styled.h1`
  font-family: cursive;
  font-size: 3rem;
  margin: 8px 0 16px;
`;

const Wrapper = styled.section`
  max-width: 500px;
  margin: 40px auto;
  padding: 16px;
`;

const Divider = styled.hr`
  border: none;
  border-bottom: 1px solid #ccc;
  margin: 16px 0;
`;

export default Login;