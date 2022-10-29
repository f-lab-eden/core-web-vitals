import styled from '@emotion/styled';
import Optimization from "../../src/views/components/CoreWebVitals/LCP/Optimization";
import PrevButton from "../../src/views/components/Buttons/PrevButton";

const LCPOptimization = () => {
    return (
        <Container>
            <Optimization/>
            <PrevButton path={'/lcp'}/>
        </Container>
    )
}

const Container = styled.div`

`;
export default LCPOptimization;
