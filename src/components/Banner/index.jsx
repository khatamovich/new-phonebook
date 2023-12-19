import { StyledBanner, Logo, Title, LastUpdated } from "./Banner.styled";

const Banner = () => {
  return (
    <StyledBanner>
      <Logo src="/logo.svg" alt="Company logo" />
      <Title>
        <span>O’zbekiston respublikasi</span> Soliq qo’mitasi Hamda uning
        huzuridagi tashkilotlar xodimlarining ichki telefon raqam ro’yxati
      </Title>
      <LastUpdated>
        <b>2023-y 12 Dekabr</b> holatiga ko’ra
      </LastUpdated>
    </StyledBanner>
  );
};

export default Banner;
