import { DeviceBrand } from "../Fields/deviceBrand";
import { ClientDevice } from "../Fields/ClientDevice";
import { DeviceImei } from "../Fields/deviceImei";

export function DeviceSection(){
    return(
        <div className = 'mb-4'>
            <div className = 'flex justify-between gap-4'>
                <div className = 'flex gap-6'>
                    <DeviceBrand />
                    <ClientDevice />
                </div>
                <DeviceImei />
            </div>
        </div>
    )
}
