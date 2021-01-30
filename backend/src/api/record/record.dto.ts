export class RecordDto {
  recordId?: string;
  offlineRecordId: string;
  appointmentId: string;
  batchNO: string;
  childId: string;
  doctorInfo: string;
  freetext: string;
  hostpitalName: string;
  photoDate: Date;
  receivingDate: Date;
  recordImage: string;
  selectedVaccines: string[];
  createAt?: Date;
  updateAt?: Date;
}
