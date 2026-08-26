import { Input } from "../../Input";
import { FaCalendar } from "react-icons/fa";
import { useFormContext } from "react-hook-form";

export function DateIssue() {
  const {
    register,
    formState: { errors },
  } = useFormContext();

  return (
    <Input.Root>
      <Input.Label label={"Data de emissão"} icon={FaCalendar} />
      <Input.Wrapper>
        <Input.Content error={errors.dateIssue}>
          <Input.Field
            type="date"
            {...register("dateIssue", { required: "Campo obrigatório" })}
          />
        </Input.Content>
      </Input.Wrapper>
      {errors.dateIssue && <Input.Error message={errors.dateIssue.message} />}
    </Input.Root>
  );
}
