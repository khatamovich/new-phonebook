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
import { RxUpdate } from "react-icons/rx";
import { IoCall } from "react-icons/io5";
import { AiOutlineMail } from "react-icons/ai";
import { MdEditNote } from "react-icons/md";
import { MdDeleteSweep } from "react-icons/md";
import { useAuthContext } from "../../hooks/useAuthContext";
import { useDelete } from "../../hooks/useDelete";
import { Link } from "react-router-dom";
import {
  formatPhoneNumber,
  getUpdateDate,
} from "../../utils/transformerFunctions";
import { useState, useEffect } from "react";

const Card = ({
  _id,
  name,
  jobtitle,
  separation,
  governance,
  region,
  email,
  phone,
  lastUpdatedBy,
  updatedAt,
}) => {
  const { user } = useAuthContext();
  const { handleDelete, isLoading } = useDelete();
  const formattedPhone = formatPhoneNumber(phone);
  const [lastUpdatedAt, setLastUpdatedAt] = useState();

  const getLastUpdated = (date) => {
    if (!date) return;

    const { getDay, getMonth, getYear, getHours, getMinutes } =
      getUpdateDate(date);

    setLastUpdatedAt({ getDay, getMonth, getYear, getHours, getMinutes });
  };

  useEffect(() => {
    getLastUpdated(updatedAt);
  }, [updatedAt]);

  return (
    <StyledCard>
      <Head>
        {user && lastUpdatedBy && (
          <RxUpdate
            title={`Administrator: ${lastUpdatedBy?.username} \nSana: ${lastUpdatedAt?.getDay} ${lastUpdatedAt?.getMonth} ${lastUpdatedAt?.getYear}-yil \nVaqti: ${lastUpdatedAt?.getHours}:${lastUpdatedAt?.getMinutes}`}
          />
        )}
        <h2>{name.toLowerCase()}</h2>
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
          {phone ? formattedPhone : "-"}
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
              <Link to={`/edit?docid=${_id}`} rel="noreferrer" target="_blank">
                <MdEditNote />
              </Link>
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
