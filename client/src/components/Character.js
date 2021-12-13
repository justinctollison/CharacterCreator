import { useParams } from "react-router-dom";
import { useEffect, useState } from "react";
import styled from "styled-components";
import { Box } from "../styles";

function Character() {

    const [character, setCharacter] = useState([]);

    const { id } = useParams();

    useEffect(() => {
        fetch(`/characters/${id}`)
            .then((r) => r.json())
            .then(setCharacter);
      }, []);

    return (
        <Box>
        <img src={character.image_url} alt="display image"></img>
        <h2>{character.name}</h2>
        <p><b>Race:</b> {character.race}</p>
        <p><b>Universe/Genre/Game:</b> {character.universe_genre_game}</p>
        <p><b>Class:</b> {character.character_class}</p>
        <p><b>Description:</b> {character.description}</p>
        <p><b>History:</b> {character.history}</p>
        {/* <cite>Created by: {character.user.username}</cite> */}
    </Box>
    );
}

const Wrapper = styled.section`
  max-width: 1000px;
  margin: 40px auto;
  padding: 16px;
  display: flex;
  gap: 24px;
`;

const WrapperChild = styled.div`
  flex: 1;
`;

export default Character;