import { firestore } from "@/utils/FireBase";
import { addDoc, collection, deleteDoc, doc, getDocs } from "firebase/firestore";

const COLLECTION_ID = "categories"

export type Category = {
  id: string;
  name: string;
  image: string;
  slug: string;
};

export const columns = [
    { name: "ID", uid: "id" },
    { name: "Name", uid: "name" },
    { name: "Slug", uid: "slug" },
    { name: "Action", uid: "actions" },
  ];

  export type AddCategoryProps ={
    category: {
        name: string
        slug: string;
        image: string;
    }
  }

export const fetchCategories = async (): Promise<Category[]> => {
  try {
    const querySnapshot = await getDocs(collection(firestore, COLLECTION_ID));
    const categories: Category[] = querySnapshot.docs.map((doc) => ({
      id: doc.id,
      name: doc.data().name,
      image: doc.data().image,
      slug: doc.data().slug,
    }));
    return categories;
  } catch (error) {
    console.error("Error fetching categories: ", error);
    throw new Error("Failed to fetch categories");
  }
};

export const addCategory = async ({ category }: AddCategoryProps) => {
    try {
      const categoryDoc = await addDoc(collection(firestore, COLLECTION_ID), category);
      return { success: true, data: categoryDoc };
    } catch (e) {
      console.error("Error adding document: ", e);
      return { success: false, error: e };
    }
  };

  export const deleteaddCategoryByIds = async (ids:string) => {
    try {
      await deleteDoc(doc(firestore, COLLECTION_ID, ids))
    } catch (error) {
      console.error('Error deleting documents:', error);
    }
  };