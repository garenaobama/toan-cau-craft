import { firestore } from "@/utils/FireBase";
import { addDoc, collection, deleteDoc, doc, getDocs } from "firebase/firestore";

const COLLECTION_ID = "types"

export type Type = {
  id: string;
  name: string;
  slug: string;
};

export const columns = [
    { name: "ID", uid: "id" },
    { name: "Name", uid: "name" },
    { name: "Slug", uid: "slug" },
    { name: "Action", uid: "actions" },
  ];

  export type AddTypeProps ={
    type: {
        name: string
        slug: string;
    }
  }

export const fetchTypes = async (): Promise<Type[]> => {
  try {
    const querySnapshot = await getDocs(collection(firestore, "types"));
    const types: Type[] = querySnapshot.docs.map((doc) => ({
      id: doc.id,
      name: doc.data().name,
      slug: doc.data().slug,
    }));
    return types;
  } catch (error) {
    console.error("Error fetching types: ", error);
    throw new Error("Failed to fetch types");
  }
};

export const addType = async ({ type }: AddTypeProps) => {
    try {
      const typeDoc = await addDoc(collection(firestore, COLLECTION_ID), type);
      return { success: true, data: typeDoc };
    } catch (e) {
      console.error("Error adding document: ", e);
      return { success: false, error: e };
    }
  };

  export const deleteaddTypeByIds = async (ids:string) => {
    try {
      await deleteDoc(doc(firestore, COLLECTION_ID, ids))
    } catch (error) {
      console.error('Error deleting documents:', error);
    }
  };