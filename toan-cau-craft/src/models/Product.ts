import { Category } from "./Category"
import { Type } from "./Type"

export type Product = {
    id:string,
    name:string,
    category: Category
    type: Type
    timestamp: TimeStamp
    status: Status
}

type TimeStamp = {
    updateAt: string,
    deleteAt: string
}

export type Status = "active" | "pause"

export const columns = [
    { name: "ID", uid: "id" },
    { name: "Name", uid: "name" },
    { name: "Category", uid: "category" },
    { name: "Type", uid: "type" },
    { name: "status", uid: "status" },
    { name: "ACTIONS", uid: "actions" },
  ];
  