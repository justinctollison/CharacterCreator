import { useState, useEffect } from "react";
import { useParams, useNavigate, Link } from "react-router-dom";
import { Button, Error, FormField, Input, Label, Textarea } from "../styles";
import styled from "styled-components";

function Edit() {

    const [character, setCharacter] = useState([]);

    const { id } = useParams();
    const navigate = useNavigate();

    useEffect(() => {
        fetch(`/characters/${id}`)
            .then((r) => r.json())
            .then(setCharacter);
      }, []);

      console.log(character)
      console.log(character.name)
      console.log(character.image_url)

    const [name, setName] = useState("")
    const [race, setRace] = useState("")
    const [universeGenreGame, setUniverseGenreGame] = useState("")
    const [characterClass, setCharacterClass] = useState("")
    const [imageUrl, setImageUrl] = useState("")
    const [description, setDescription] = useState("")
    const [history, setHistory] = useState("")

    const [isLoading, setIsLoading] = useState(false);

    function handleSubmit(e) {
        e.preventDefault();
        setIsLoading(true);
        fetch(`/characters/${id}`, {
            method: "PUT",
            headers: {
                "Content-Type": "application/json",
            },
            body: JSON.stringify({
                name: name,
                race: race,
                universe_genre_game: universeGenreGame,
                character_class: characterClass,
                image_url: imageUrl,
                description: description,
                history: history,
            }),
        }).then((r) => {
            setIsLoading(false);
            if(r.ok) {
                navigate(`/characters/${id}`);
            } else {
                r.json()
            }
        });
    }

    return (
        <Wrapper>
            <WrapperChild>
                <h2>Edit Character</h2>
                <form onSubmit={handleSubmit}>
                    <FormField>
                        <Label htmlFor="name">Name</Label>
                        <Input
                            type="text"
                            id="name"
                            value={name}
                            onChange={(e) => setName(e.target.value)}
                        />
                    </FormField>
                    <FormField>
                        <Label htmlFor="race">Race</Label>
                        <Input
                            type="text"
                            id="race"
                            value={race}
                            onChange={(e) => setRace(e.target.value)}
                        />
                    </FormField>
                    <FormField>
                        <Label htmlFor="universeGenreGame">Universe/Genre/Game</Label>
                        <Input
                            type="text"
                            id="universeGenreGame"
                            value={universeGenreGame}
                            onChange={(e) => setUniverseGenreGame(e.target.value)}
                        />
                    </FormField>
                    <FormField>
                        <Label htmlFor="characterClass">Character Class</Label>
                        <Input
                            type="text"
                            id="characterClass"
                            value={characterClass}
                            onChange={(e) => setCharacterClass(e.target.value)}
                        />
                    </FormField>
                    <FormField>
                        <Label htmlFor="imageUrl">Character Picture</Label>
                        <Input
                            type="text"
                            id="imageUrl"
                            value={imageUrl}
                            onChange={(e) => setImageUrl(e.target.value)}
                        />
                    </FormField>
                    <FormField>
                        <Label htmlFor="description">Description</Label>
                        <Textarea
                            type="text"
                            id="description"
                            rows="10"
                            value={description}
                            onChange={(e) => setDescription(e.target.value)}
                        />
                    </FormField>
                    <FormField>
                        <Label htmlFor="history">History</Label>
                        <Textarea
                            type="text"
                            id="history"
                            rows="10"
                            value={history}
                            onChange={(e) => setHistory(e.target.value)}
                        />
                    </FormField>
                    <FormField>
                        <Button color="primary" type="submit">
                            {isLoading ? "Loading. . ." : "Submit Edit"}
                        </Button>
                    </FormField>
                </form>
            </WrapperChild>
            <WrapperChild>
                <h1>Original Data</h1>
                <p>{character.name}</p>
                <p>{character.race}</p>
                <p>{character.universe_genre_game}</p>
                <p>{character.character_class}</p>
                <p>{character.image_url}</p>
                <p>{character.description}</p>
                <p>{character.history}</p>
                {/* <p><cite>By {user.username} </cite></p> */}
            </WrapperChild>
        </Wrapper>
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

export default Edit;