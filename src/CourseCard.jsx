import styled from "styled-components";

const Container = styled.div`
  background-color: white;
  border: 1px solid #f0f1f3;
  border-radius: 8px;
  width: 296px;
  height: 407px;
  box-sizing: border-box;
  padding: 28px 24px 0;
  position: relative;
`;

const Tags = styled.p`
  font-weight: bold;
  font-size: 12px;
  line-height: 17px;
  color: #5d59ad;
  margin-bottom: 8px;
`;

const Title = styled.h5`
  font-weight: bold;
  font-size: 18px;
  line-height: 26px;
  color: #151618;
  margin-bottom: 16px;
`;

const Description = styled.p`
  color: #5e5f61;
  font-size: 14px;
  line-height: 20px;
`;

const DividerLine = styled.div`
  width: 296px;
  height: 1px;
  background-color: #ececec;
  position: absolute;
  left: 0;
  bottom: 64px;
`;

CourseCard.defaultProps = {
  tags: ["태그1", "태그2"],
  title: "샘플 타이틀",
  description: "프로그래밍이 처음이신가요? 파이썬으로 쉽고 재밌게 시작해봐요.",
};

// styled component를 과목카드를 만드세요.
export default function CourseCard({ tags, title, description }) {
  return (
    <Container>
      <Tags>{tags.join("﹒")}</Tags>
      <Title>{title}</Title>
      <Description>{description}</Description>
      <DividerLine />
    </Container>
  );
}
