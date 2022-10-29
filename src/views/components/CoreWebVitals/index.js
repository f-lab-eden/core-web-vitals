import styled from '@emotion/styled';
import Title from "./Title";
import Desc from "./Desc";

const CoreWebVitals = () => {
    return (
        <Container>
            <Title/>
            <Desc/>
        </Container>
    )
}

const Container = styled.div`
  padding: 60px 0;

`;
export default CoreWebVitals;
