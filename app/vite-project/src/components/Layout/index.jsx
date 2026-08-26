import { QrCode } from "../../features/QrCode";
import { Form } from "../Form";

export function Layout() {
  return (
    <div className="grow flex justify-center">
      <Form />
      <QrCode />
    </div>
  );
}
