import { StyledBanner, Logo, Title, LastUpdated } from "./Banner.styled";
import { AppContext } from "../../store/AppContext";
import { useContext } from "react";

const Banner = () => {
  const { updatedAt } = useContext(AppContext);
  const hours =
    updatedAt.getHours?.toString().length === 1
      ? "0" + updatedAt.getHours
      : updatedAt.getHours;
  const minutes =
    updatedAt.getMinutes?.toString().length === 1
      ? "0" + updatedAt.getMinutes
      : updatedAt.getMinutes;

  return (
    <StyledBanner>
      <Logo src="/logo.svg" alt="Company logo" />

      <Title>
        <span>O’zbekiston respublikasi</span> Soliq qo’mitasi Hamda uning
        huzuridagi tashkilotlar xodimlarining ichki telefon raqam ro’yxati
      </Title>

      {updatedAt.getYear ? (
        <LastUpdated>
          <b>
            {updatedAt.getYear}-y {updatedAt.getDay} {updatedAt.getMonth}{" "}
            {hours}:{minutes}
          </b>{" "}
          holatiga ko’ra
        </LastUpdated>
      ) : null}
    </StyledBanner>
  );
};

export default Banner;
