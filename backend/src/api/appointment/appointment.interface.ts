import { APPOINTMENT_STATUS } from 'src/shared/constants';

export interface IAppointment {
  appointmentId?: string;
  offlineAppointmentId: string;
  childId: string;
  status: APPOINTMENT_STATUS;
  selectedVaccines: string[];
  time: string;
  vaccineId: string;
  dates: Date;
  createAt?: Date;
  updateAt?: Date;
}
