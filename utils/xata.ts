// Generated by Xata Codegen 0.18.0. Please do not edit.
import {
  BaseClientOptions,
  buildClient,
  SchemaInference,
  XataRecord,
} from "@xata.io/client";

const tables = [
  {
    name: "User",
    columns: [
      { name: "username", type: "string", unique: true },
      { name: "email", type: "email", unique: true },
      { name: "password", type: "string" },
      { name: "token", type: "string" },
    ],
  },
  {
    name: "Book",
    columns: [
      { name: "title", type: "string" },
      { name: "author", type: "string" },
      { name: "year_published", type: "int" },
      { name: "genre", type: "string" },
      { name: "added_by", type: "link", link: { table: "User" } },
      { name: "image_url", type: "string" },
    ],
  },
] as const;

export type SchemaTables = typeof tables;
export type InferredTypes = SchemaInference<SchemaTables>;

export type User = InferredTypes["User"];
export type UserRecord = User & XataRecord;

export type Book = InferredTypes["Book"];
export type BookRecord = Book & XataRecord;

export type DatabaseSchema = {
  User: UserRecord;
  Book: BookRecord;
};

const DatabaseClient = buildClient();

const defaultOptions = {
  databaseURL: "https://Ubaydah-s-workspace-qb9vvt.us-east-1.xata.sh/db/bookly",
};

export class XataClient extends DatabaseClient<DatabaseSchema> {
  constructor(options?: BaseClientOptions) {
    super({ ...defaultOptions, ...options }, tables);
  }
}

let instance: XataClient | undefined = undefined;

export const getXataClient = () => {
  if (instance) return instance;

  instance = new XataClient();
  return instance;
};