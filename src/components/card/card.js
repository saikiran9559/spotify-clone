
import {useNavigate} from 'react-router-dom';
import {ReactComponent as Play} from './../../assets/play-button-svgrepo-com.svg';
import {
    Container,
    ImageBox,
    Img,
    PlayButton,
    PlayListName,
    By
} from './style'
const Card = ({input}) => {
    const navigate = useNavigate()
    const goTo = () => {
        navigate(`/${input.type}/${input.id}`)
    }
    return (
        <Container onClick={goTo}>
            <ImageBox>
                <Img src={input.img} alt={input.id} />
                <PlayButton> <Play width="10px" height="10px" fill="white" /></PlayButton>
            </ImageBox>
            <PlayListName>{input.name}</PlayListName>
            <By>{input.owner}</By>
        </Container>
    );
}

// {
//     title:
//     artists:
//     img_url:
//     card_url:
// }

export default Card;
