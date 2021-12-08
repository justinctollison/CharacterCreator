import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";
import { Box, Button } from "../styles";
// import ReactMarkdown from  "react-markdown"

function CharacterList( {user} ) {
    const [characters, setCharacters] = useState([]);

    useEffect(() => {
        fetch("/characters")
            .then((r) => r.json())
            .then(setCharacters);
    }, []);

    return (
        <Wrapper>
            {characters.length > 0 ? (
                characters.map((character) => (
                    <Character key={character.id}>
                        <Box>
                            <h2>{character.name}</h2>
                            <p>Race: {character.race}</p>
                            <p>Class: {character.character_class}</p>
                            <p>History: {character.history}</p>
                            <p>Description: {character.description}</p>
                            <p>Image: {character.image_url}</p>
                            <cite>Created by: {user.username}</cite>
                            {/* <ReactMarkdown>{character.description}</ReactMarkdown> */}
                        </Box>
                    </Character>
                ))
            ) : (
                <>
                    <h2>No Characters Found</h2>
                    <Button as={Link} to="/new">
                        Create a new character
                    </Button>
                </>
            )}
        </Wrapper>
    );
}

const Wrapper = styled.section`
  max-width: 800px;
  margin: 40px auto;
`;

const Character = styled.article`
  margin-bottom: 24px;
`;

export default CharacterList;