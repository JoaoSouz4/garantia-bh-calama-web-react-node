import { ClientReport } from "../Fields/ClientReport";
import { TechnicalReport } from "../Fields/technicalReport";

export function ReportsSection() {
  return (
    <div className="mb-8 flex justify-between gap-8">
      <div className = 'w-1/2'>
        <ClientReport />
      </div>
      <div className = 'grow'>
        <TechnicalReport />
      </div>
    </div>
  );
}
