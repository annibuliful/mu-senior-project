import Dexie from "dexie";

const db = new Dexie("senior");
db.version(1).stores({
  users: "++userId, username",
  families: "++familyId, userId, fullname",
  vaccines: "++vaccineId name",
  appointments: "++appointmentId childId",
  diseases: "++diseaseId"
});
export default db;
export class DB {
  constructor(dbName) {
    this.models = [];
    this.db = new Dexie(dbName);
  }

  addModel(model) {
    this.models.push(model);
  }

  sync() {
    const listModels = Object.keys(this.models)
      .map(key => ({ [key]: this.models[key] }))
      .reduce((a, b) => Object.assign(a, b), {});

    db.version(1).stores(listModels);
  }

  async create(table, data) {
    if (Array.isArray(data)) {
      const result = [];
      data.forEach(async el => {
        result.push(await this.db.table(table).add(el));
      });
      return result;
    }

    return await this.db.table(table).add(data);
  }
}
