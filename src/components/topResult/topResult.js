import {
    Container,
    Heading,
    Card,
    Imgae,
    Name,
    FlexRow,
    By,
    Type
} from './style'
const TopResut = ({topPick}) => {
    return (
        <Container>
            <Heading>Top result</Heading>
            <Card>
                <Imgae src={topPick?.images[0].url} alt={topPick?.images[0].url} />
                <Name>{topPick.name}</Name>
                <FlexRow>
                    <By>{topPick?.artists[0].name}</By>
                    <Type>{topPick?.type} </Type>
                </FlexRow>
            </Card>
        </Container>
    );
};
export default TopResut
