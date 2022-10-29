import styled from '@emotion/styled';
import {ContentContainer} from "../../../../styles/Layout.Styled";
import Definition from "./Definition";
import Optimization from "./Optimization";

const AboutLCP = () => {
    return (
        <Container>
            <ContentContainer>
                <Definition/>
                <Optimization/>
            </ContentContainer>
        </Container>
    )
}

const Container = styled.div`

`;
export default AboutLCP;
