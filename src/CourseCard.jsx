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

const CreditWrapper = styled.div`
  margin-top: 50px;
  display: flex;
  align-items: flex-end;
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
  font-weight: bold;
  line-height: 23px;
  color: black;
  margin-left: auto;
  margin-right: 15px;
`;

CourseCard.defaultProps = {
  tags: ["#전공선택", "#5대전공"],
  title: "오퍼레이팅시스템",
  description: "OS가 어떻게 작동하는지 배웁니다",
  grade: "A",
  level: "고급",
  classFormat: "온라인",
  duration: "2022-1",
  imgUrl: "logo192.png",
  languages: ["C"],
};

export default function CourseCard({
  tags,
  title,
  description,
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

      <CreditWrapper>
        <Grade>학점: {grade}</Grade>
        <GradeinNum>평점: {gradeCalc(grade)}</GradeinNum>
      </CreditWrapper>
    </Container>
  );
}
