export interface IRevisionData {
  userId: string;
  filePath: string;
}

export interface IRevisionResponse extends IRevisionData {
  createdAt: Date;
}
