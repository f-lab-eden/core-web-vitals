import styled from '@emotion/styled';
import Image from "next/image";
import NextButton from "../../Buttons/NextButton";

const Definition = () => {
    return (
        <Container>
            <figure>
                <Image src={'/images/fid.svg'} width={500} height={500} alt={'fid'}/>
                <figcaption>이미지 출처: https://web.dev/vitals/</figcaption>
            </figure>
            <p>
               FID(First Input Delay, 최초 입력 지연)는 사용자가 링크를 클릭하거나, 버튼을 탭하는 등의 최초 입력 시작한 시점부터 브라우저가 해당 인터렉션에 대한 응답으로 실제로 이벤트 핸들러 처리를 시작하기까지의 시간을 측정한다.
            </p>
            <p>좋은 사용자 경험을 제공하기 위해서 FID는 100밀리초 이하여야 한다.</p>
            <p>FID 값이 커지는 이유는 대개 브라우저의 메인 스레드가 다른 작업을 할 수 없어서 사용자에게 응답할 수 없기 때문이다.</p>

            <br/>
            <br/>

            <p><strong>최초 입력으로 간주되는 것은?</strong></p>
            <p>클릭, 탭 및 키 누름과 같은 이벤트이다.</p>
            <span>참고로 스크롤 및 확대/축소는 최초 입력으로 간주되지 않는다.</span>
            <NextButton path={'/fid/optimization'}/>
        </Container>
    )
}

const Container = styled.div`
  figure {
    text-align: center;
  }

  p {
    line-height: 30px;
  }

  i {
    font-weight: 600;
    color: #0055D6;
  }
`;
export default Definition;
