import { ClientName } from "../Fields/ClientName";
import { DateIssue } from "../Fields/DateIssue";
import { ClientCpf } from "../Fields/clientCpf";
import { OsCode } from "../Fields/osCode";

export function ClientSection() {
  return (
    <div className="mb-4">
      <div className="flex justify-between">
        <ClientName />
        <DateIssue />
        <ClientCpf />
        <OsCode />
      </div>
    </div>
  );
}
