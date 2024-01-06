import {
  StyledChangelog,
  Logs,
  LogCard,
  Field,
  Previous,
  Next,
} from "./Changelog.styled";
import { useFetchContact } from "../../hooks/useFetchContact";
import { useSearchParams } from "react-router-dom";
import { getUpdateDate } from "../../utils/transformerFunctions";

const Changelog = () => {
  const [searchParams] = useSearchParams();
  const query = searchParams.get("identifier");
  const { currentDoc } = useFetchContact(query);

  const getDate = (date) => {
    if (!date) return null;

    const { getDay, getMonth, getYear, getHours, getMinutes } =
      getUpdateDate(date);

    const hours = getHours?.toString().length === 1 ? "0" + getHours : getHours;
    const minutes =
      getMinutes?.toString().length === 1 ? "0" + getMinutes : getMinutes;

    return `${getDay} ${getMonth} ${getYear}-yil, ${hours}:${minutes}`;
  };

  const detectChanges = (logDoc, prop) =>
    logDoc[prop]?.trim() !== logDoc.new[prop]?.trim() ? "highlight" : "";

  return (
    <StyledChangelog>
      {currentDoc?.changelog?.map((logDoc, key) => {
        return (
          <Logs key={key}>
            <Previous>
              <LogCard>
                <Field>
                  <span>F.I.Sh</span>
                  <p>{logDoc.name || "-"}</p>
                </Field>

                <Field>
                  <span>Ichki raqam</span>
                  <p>{logDoc.phone || "-"}</p>
                </Field>

                <Field>
                  <span>Boshqarma</span>
                  <p>{logDoc.governance || "-"}</p>
                </Field>

                <Field>
                  <span>Bo'lim</span>
                  <p>{logDoc.separation || "-"}</p>
                </Field>

                <Field>
                  <span>Lavozim</span>
                  <p>{logDoc.jobtitle || "-"}</p>
                </Field>

                <Field>
                  <span>Hudud</span>
                  <p>{logDoc.region || "-"}</p>
                </Field>

                <Field>
                  <span>E-mail</span>
                  <p>{logDoc.email || "-"}</p>
                </Field>

                <Field>
                  <span>Administrator</span>
                  <p>{logDoc.author || "-"}</p>
                </Field>

                <Field>
                  <span>Sana</span>
                  <p>{getDate(logDoc.date) || "-"}</p>
                </Field>
              </LogCard>
            </Previous>

            <Next>
              <LogCard>
                <Field>
                  <span>F.I.Sh</span>
                  <p className={detectChanges(logDoc, "name")}>
                    {logDoc.new.name || "-"}
                  </p>
                </Field>

                <Field>
                  <span>Ichki raqam</span>
                  <p className={detectChanges(logDoc, "phone")}>
                    {logDoc.new.phone || "-"}
                  </p>
                </Field>

                <Field>
                  <span>Boshqarma</span>
                  <p className={detectChanges(logDoc, "governance")}>
                    {logDoc.new.governance || "-"}
                  </p>
                </Field>

                <Field>
                  <span>Bo'lim</span>
                  <p className={detectChanges(logDoc, "separation")}>
                    {logDoc.new.separation || "-"}
                  </p>
                </Field>

                <Field>
                  <span>Lavozim</span>
                  <p className={detectChanges(logDoc, "jobtitle")}>
                    {logDoc.new.jobtitle || "-"}
                  </p>
                </Field>

                <Field>
                  <span>Hudud</span>
                  <p className={detectChanges(logDoc, "region")}>
                    {logDoc.new.region || "-"}
                  </p>
                </Field>

                <Field>
                  <span>E-mail</span>
                  <p className={detectChanges(logDoc, "email")}>
                    {logDoc.new.email || "-"}
                  </p>
                </Field>

                <Field>
                  <span>Administrator</span>
                  <p>{logDoc.new.author || "-"}</p>
                </Field>

                <Field>
                  <span>Sana</span>
                  <p>{getDate(logDoc.new.date) || "-"}</p>
                </Field>
              </LogCard>
            </Next>
          </Logs>
        );
      })}
    </StyledChangelog>
  );
};

export default Changelog;
