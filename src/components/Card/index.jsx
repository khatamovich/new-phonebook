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
import { useAuthContext } from "../../hooks/useAuthContext";
import { useDelete } from "../../hooks/useDelete";

const Card = ({
  _id,
  name,
  jobtitle,
  separation,
  governance,
  region,
  email,
  phone,
}) => {
  const { user } = useAuthContext();
  const { handleDelete, isLoading } = useDelete();

  return (
    <StyledCard>
      <Head>
        <h2>{name}</h2>
      </Head>

      <Body>
        {governance && (
          <Field>
            <Key>Boshqarma</Key>
            <Value>{governance}</Value>
          </Field>
        )}

        {jobtitle && (
          <Field>
            <Key>Lavozim</Key>
            <Value>{jobtitle}</Value>
          </Field>
        )}

        {separation && (
          <Field>
            <Key>Bo&apos;lim</Key>
            <Value>{separation}</Value>
          </Field>
        )}
      </Body>

      <Foot>
        <Phone>
          <IoCall />
          {phone}
        </Phone>

        <Region>{region}</Region>

        {email && (
          <Email href={`mailto:${email}`}>
            <AiOutlineMail />
          </Email>
        )}

        {user && (
          <Controls>
            <button>
              <MdEditNote />
            </button>

            <button disabled={isLoading} onClick={() => handleDelete(_id)}>
              <MdDeleteSweep />
            </button>
          </Controls>
        )}
      </Foot>
    </StyledCard>
  );
};

export default Card;
