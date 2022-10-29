import styled from '@emotion/styled';
import Image from "next/image";
import Link from 'next/link'

const Definition = () => {
    return (
        <Container>
            <figure>
                <Image src={'/images/cls.svg'} width={500} height={500} alt={'cls'}/>
                <figcaption>이미지 출처: https://web.dev/vitals/</figcaption>
            </figure>
            <p>CLS(Cumulative Layout Shift, 누적 레이아웃 이동)은 예기치 않은 레이아웃 이동에 대한 점수를 의미한다.</p>
            <p>웹 사이트를 이용하면서 보고있던 글자가 반짝거리거나, 보이지 않았던 이미지나 비디오, 광고 등이 화면 위로 불쑥 올라온 경험 다들 있으시죠?</p>
            <p>바로 그거예요! 예기치 않은 레이아웃 이동을 발생시키는 바로 그것!</p>
            <p>이런 에피소드도 있었다네요</p>
            <Link href={'https://www.zachleat.com/web/mitt-romney-webfont-problem/'} target={'_blank'}>FOIT로 인한 웃픈 썰,,</Link>
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

  a {
    color: #3884c7;

    &:hover {
      text-decoration: underline;
    }
  }
`;
export default Definition;
