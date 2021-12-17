import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";
import { Box, Button } from "../styles";

function CharacterList() {
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
                            <p><b>Race:</b> {character.race}</p>
                            <p><b>Universe/Genre/Game:</b> {character.universe_genre_game}</p>
                            <p><b>Class:</b> {character.character_class}</p>
                            {/* <a href={character.image_url} target="_blank" rel="noreferrer"><h4>Image Link</h4></a>
                            <p><b>Description:</b> {character.description}</p>
                            <p><b>History:</b> {character.history}</p> */}
                            {/* <cite>Created by: {character.user.username}</cite> */}
                            <Button as={Link} to={`/characters/${character.id}`}>View</Button>
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