import { QrCode } from "../../features/QrCode";
import { Form } from "../Form";
import { Header } from "../Form/FormSections/header";

export function Layout() {
  return (
    <div className="flex flex-col justify-center m-15">
      <Header />
      <div className="flex">
        <Form />
        <QrCode />
      </div>
    </div>
  );
}
