import { Category } from "./Category"
import { Type } from "./Type"

export type Product = {
    id:string,
    name:string,
    category: Category
    type: Type
    status: Status
}

export type Status = "active" | "pause"

export const columns = [
    { name: "ID", uid: "id" },
    { name: "Name", uid: "name" },
    { name: "Category", uid: "category" },
    { name: "Type", uid: "type" },
    { name: "status", uid: "isActive" },
    { name: "ACTIONS", uid: "actions" },
  ];
  