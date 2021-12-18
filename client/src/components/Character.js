import { useParams, useNavigate, Link } from "react-router-dom";
import { useEffect, useState } from "react";
import { Box, Button } from "../styles";


function Character({user}) {

    const [character, setCharacter] = useState([]);

    const { id } = useParams();
    const navigate = useNavigate();

    useEffect(() => {
        fetch(`/characters/${id}`)
            .then((r) => r.json())
            .then(setCharacter);
      }, []);

    function handleDelete(e) {
      e.preventDefault();
      fetch(`/characters/${id}`, {
          method: "DELETE",
          headers: {
              "Content-Type": "application/json",
          },
      }).then((r) => {
        if(r.ok) {
            navigate("/characters");
        } else {
            r.json()
        }
    });
  }



  console.log(user.id)
  console.log(character.user)

    return (
        <Box>
        <img src={character.image_url} alt="display image"></img>
        <h2>{character.name}</h2>
        <p><b>Race:</b> {character.race}</p>
        <p><b>Universe/Genre/Game:</b> {character.universe_genre_game}</p>
        <p><b>Class:</b> {character.character_class}</p>
        <p><b>Description:</b> {character.description}</p>
        <p><b>History:</b> {character.history}</p>
        <p>Likes: {character.likes}</p>
        {/* <cite>Created by: {character.user}</cite> */}
        <Button onClick={handleDelete}>Delete</Button>
        <br></br>
        <br></br>
        <Button as={Link} to={`/characters/${id}/edit`}>Edit</Button>
    </Box>
    );
}


export default Character;