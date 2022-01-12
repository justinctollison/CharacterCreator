import forest from "../styles/forest.png"
import { Image } from "react-bootstrap"


function Home(){
    const styleBug = {
        display: 'flex', 
        alignItems: 'center', 
        justifyContent: "center",
        flexDirection: 'column',
    }

    return(
        <div style={styleBug}>
            <Image src={forest} roundedCircle fluid></Image>
        </div>
  );
}

export default Home;