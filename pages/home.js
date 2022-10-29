import styled from "@emotion/styled";
import Navigation from "../src/views/components/Navigation";
import CoreWebVitals from "../src/views/components/CoreWebVitals";
import {ContentContainer} from "../src/styles/Layout.Styled";

export default function Home() {
    return (
        <Container>
            <ContentContainer>
                <CoreWebVitals/>
                <Navigation/>
            </ContentContainer>
        </Container>

    )
}

const Container = styled.div`
`;
