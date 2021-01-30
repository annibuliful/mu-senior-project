import { APPOINTMENT_STATUS } from 'src/shared/constants';

export class AppointmentDto {
  offlineAppointmentId: string;
  childId: string;
  status: APPOINTMENT_STATUS;
  selectedVaccines: string[];
  time: string;
  vaccineId: string;
  dates: Date;
}
