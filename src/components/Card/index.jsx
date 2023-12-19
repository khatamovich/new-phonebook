import {
  StyledCard,
  Head,
  Body,
  Field,
  Key,
  Value,
  Foot,
  Phone,
  Region,
  Email,
  Controls,
} from "./Card.styled";

import { IoCall } from "react-icons/io5";
import { AiOutlineMail } from "react-icons/ai";
import { MdEditNote } from "react-icons/md";
import { MdDeleteSweep } from "react-icons/md";

const Card = ({
  admin,
  name,
  jobtitle,
  separation,
  governance,
  region,
  email,
  phone,
}) => {
  return (
    <StyledCard>
      <Head>
        <h2>{name}</h2>
      </Head>
      <Body>
        <Field>
          <Key>Boshqarma</Key>
          <Value>{governance}</Value>
        </Field>

        <Field>
          <Key>Lavozim</Key>
          <Value>{jobtitle}</Value>
        </Field>

        <Field>
          <Key>Bo&apos;lim</Key>
          <Value>{separation}</Value>
        </Field>
      </Body>

      <Foot>
        <Phone>
          <IoCall />
          {phone}
        </Phone>

        <Region>{region}</Region>

        {!admin && (
          <Email href={`mailto:${email}`}>
            <AiOutlineMail />
          </Email>
        )}

        {admin && (
          <Controls>
            <button>
              <MdEditNote />
            </button>
            <button>
              <MdDeleteSweep />
            </button>
          </Controls>
        )}
      </Foot>
    </StyledCard>
  );
};

export default Card;
