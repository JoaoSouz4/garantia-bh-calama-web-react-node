import { useFormContext } from "react-hook-form";

export function Option({ value, func, index }) {
  const { setValue } = useFormContext();

  function handleClick() {
    setValue(`payments[${index}].mode`, value);
    func();
  }
  return (
    <li
      onClick={handleClick}
      className="overflow-hidden cursor-pointer hover:bg-blue-300 p-3 px-6 text-xs bg-blue-100 text-blue-900 text-center "
    >
      {value}
    </li>
  );
}
