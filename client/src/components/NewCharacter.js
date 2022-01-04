import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { Button, Error, FormField, Input, Label, Textarea } from "../styles";
import styled from "styled-components";

function NewCharacter({ user }) {
    const [name, setName] = useState("")
    const [race, setRace] = useState("")
    const [universeGenreGame, setUniverseGenreGame] = useState("")
    const [characterClass, setCharacterClass] = useState("")
    const [imageUrl, setImageUrl] = useState("")
    const [description, setDescription] = useState("")
    const [history, setHistory] = useState("")

    const [errors, setErrors] = useState([]);
    const [isLoading, setIsLoading] = useState(false);
    const navigate = useNavigate();

    function handleSubmit(e) {
        e.preventDefault();
        setIsLoading(true);
        fetch("/characters", {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
            },
            body: JSON.stringify({
                name,
                race,
                universe_genre_game: universeGenreGame,
                character_class: characterClass,
                image_url: imageUrl,
                description,
                history,
            }),
        }).then((r) => {
            setIsLoading(false);
            if(r.ok) {
                navigate("/characters");
            } else {
                r.json().then((err) => setErrors(err.errors));
            }
        });
    }

    return (
        <Wrapper>
            <WrapperChild>
                <h2>Create Character</h2>
                <form onSubmit={handleSubmit}>
                    <FormField>
                        <Label htmlFor="name">Name</Label>
                        <Input
                            type="text"
                            id="name"
                            placeholder="My Character"
                            onChange={(e) => setName(e.target.value)}
                        />
                    </FormField>
                    <FormField>
                        <Label htmlFor="race">Race</Label>
                        <Input
                            type="text"
                            id="race"
                            placeholder="Race"
                            onChange={(e) => setRace(e.target.value)}
                        />
                    </FormField>
                    <FormField>
                        <Label htmlFor="universeGenreGame">Universe/Genre/Game</Label>
                        <Input
                            type="text"
                            id="universeGenreGame"
                            placeholder="Universe, game or genre that this character belongs to"
                            onChange={(e) => setUniverseGenreGame(e.target.value)}
                        />
                    </FormField>
                    <FormField>
                        <Label htmlFor="characterClass">Character Class</Label>
                        <Input
                            type="text"
                            id="characterClass"
                            placeholder="Class archetype, such as: rogue, warrior, knight, ect."
                            onChange={(e) => setCharacterClass(e.target.value)}
                        />
                    </FormField>
                    <FormField>
                        <Label htmlFor="imageUrl">Character Picture</Label>
                        <Input
                            type="text"
                            id="imageUrl"
                            placeholder="Post a url to an image"
                            onChange={(e) => setImageUrl(e.target.value)}
                        />
                    </FormField>
                    <FormField>
                        <Label htmlFor="description">Description</Label>
                        <Textarea
                            type="text"
                            placeholder="Describe your character, like their height, age, weight."
                            id="description"
                            rows="10"
                            onChange={(e) => setDescription(e.target.value)}
                        />
                    </FormField>
                    <FormField>
                        <Label htmlFor="history">History</Label>
                        <Textarea
                            type="text"
                            id="history"
                            rows="10"
                            placeholder="The backstory to your character that lays the foundation for their personality."
                            onChange={(e) => setHistory(e.target.value)}
                        />
                    </FormField>
                    <FormField>
                        <Button color="primary" type="submit">
                            {isLoading ? "Loading. . ." : "Submit Character"}
                        </Button>
                    </FormField>
                    <FormField>
                        {errors.map((err) => (
                            <Error key={err}>{err}</Error>
                        ))}
                    </FormField>
                </form>
            </WrapperChild>
            <WrapperChild>
                <h1>{name}</h1>
                <h2>{race}</h2>
                <h2>{characterClass}</h2>
                <p>Description: {description}</p>
                <p>History: {history}</p>
                <p><cite>By {user.username} </cite></p>
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

export default NewCharacter;