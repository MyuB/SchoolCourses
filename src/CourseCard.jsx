import styled from "styled-components";
import Chart from "./icons/Chart.jsx";
import Computer from "./icons/Computer.jsx";
import Calendar from "./icons/Calendar.jsx";

const Container = styled.div`
  background-color: white;
  border: 1px solid #f0f1f3;
  border-radius: 8px;
  width: 296px;
  height: 407px;
  box-sizing: border-box;
  padding: 28px 24px 20px;
  position: relative;
  display: flex;
  flex-direction: column;
`;

const Tags = styled.p`
  font-weight: bold;
  font-size: 12px;
  line-height: 17px;
  color: #5d59ad;
  margin-bottom: 1px;
`;

const Title = styled.h5`
  font-weight: bold;
  font-size: 18px;
  line-height: 26px;
  color: #151618;
  margin-top: 8px;
  margin-bottom: 10px;
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

const CostWrapper = styled.div`
  margin-top: 18px;
  display: flex;
  align-items: flex-end;
`;

const CurrentCost = styled.p`
  font-weight: bold;
  font-size: 16px;
  line-height: 23px;
  color: #151618;
`;

const OriginalCost = styled.p`
  font-size: 14px;
  line-height: 20px;
  text-decoration-line: line-through;
  color: #a8a9ab;
  margin-left: 8px;
`;

const DiscountPercentile = styled.p`
  font-weight: bold;
  font-size: 16px;
  line-height: 23px;
  color: #f94669;
  margin-left: auto;
`;

const CostFree = styled.div`
  font-weight: bold;
  font-size: 16px;
  line-height: 23px;
  color: #34ab53;
  margin-top: 88px;
`;

const TextsWrapper = styled.div`
  margin-top: 22px;
`;

const TextWrapper = styled.div`
  display: flex;
  align-items: center;
  height: 22px;

  + div {
    margin-top: 9px;
  }
`;

const Text = styled.p`
  font-weight: bold;
  font-size: 12px;
  line-height: 13px;
  color: #7d7e80;
  margin-left: 8px;
`;

const Image = styled.img`
  position: absolute;
  right: 24px;
  bottom: 158px;
  width: 56px;
  height: 56px;
`;

const LanguagesWrapper = styled.div`
  display: flex;
  margin-top: 15px;
`;

function getColorByLang(lang) {
  if (lang === "파이썬") return "#477DB1";
  if (lang === "HTML/CSS") return "#DE561D";
  if (lang === "자바스크립트") return "#F3CB39";
  if (lang === "C") return "#477DB1";
}

const Language = styled.p`
  font-weight: bold;
  font-size: 13px;
  line-height: 13px;
  color: ${(props) => getColorByLang(props.lang)};
  position: relative;
  padding: 6px, 8px;

  + p {
    margin-left: 8px;
  }

  ::before {
    content: "";
    position: absolute;
    top: 0;
    bottom: 0;
    left: 0;
    right: 0;
    background-color: ${(props) => getColorByLang(props.lang)};
    opacity: 0.2;
    border-radius: 2px;
  }
`;

function gradeCalc(grade) {
  if (grade === "A+") return 4.5;
  else if (grade === "A") return 4.0;
  else if (grade === "B+") return 3.5;
  else if (grade === "B") return 3.0;
  else if (grade === "C") return 2.0;
  else if (grade === "P") return NaN;
}

const Grade = styled.div`
  font-weight: bold;
  font-size: 16px;
  line-height: 23px;
  color: #151618;
`;

const GradeinNum = styled.div`
  font-size: 16px;
  line-height: 20px;
  color: black;
  margin-left: 18px;
`;

CourseCard.defaultProps = {
  tags: ["전공선택", "태그2"],
  title: "오퍼레이팅시스템",
  description: "OS가 어떻게 작동하는지 배웁니다",
  isFree: false,
  currentCost: 42000,
  grade: "A",
  originalCost: 57000,
  discountPercentile: 35,
  level: "중급",
  classFormat: "온라인",
  duration: "2022-1",
  imgUrl: "logo192.png",
  languages: ["C"],
};

export default function CourseCard({
  tags,
  title,
  description,
  isFree,

  grade,

  level,
  classFormat,
  duration,
  imgUrl,
  languages,
}) {
  return (
    <Container>
      <Tags>{tags.join("﹒")}</Tags>
      <Title>{title}</Title>
      <Description>{description}</Description>
      <TextsWrapper>
        <TextWrapper>
          <Chart />
          <Text>난이도: {level}</Text>
        </TextWrapper>
        <TextWrapper>
          <Computer />
          <Text>수업: {classFormat}</Text>
        </TextWrapper>
        <TextWrapper>
          <Calendar />
          <Text>기간: {duration}</Text>
        </TextWrapper>
      </TextsWrapper>
      <Image src={imgUrl} />
      <LanguagesWrapper>
        {languages.map((lang, idx) => {
          return (
            <Language key={`${lang}-${idx}-${title}`} lang={lang}>
              {lang}
            </Language>
          );
        })}
      </LanguagesWrapper>
      <DividerLine />
      {isFree ? (
        <CostFree>무료</CostFree>
      ) : (
        <CostWrapper>
          <Grade>학점: {grade}</Grade>
          <GradeinNum>{gradeCalc(grade)}</GradeinNum>
        </CostWrapper>
      )}
    </Container>
  );
}
