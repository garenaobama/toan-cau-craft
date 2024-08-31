import { firestore } from "@/utils/FireBase"
import { Category } from "./Category"
import { Type } from "./Type"
import { addDoc, collection, doc, getDoc, getDocs } from "firebase/firestore"

const COLLECTION_ID = "products"

export type Product = {
    id:string,
    name:string,
    category: Category
    slug: string
    description: string
    type: Type
    timestamp: TimeStamp
    status: Status
    images: {
        color:string
        url:string
    }
}

export type ProductImport = {
    id:string,
    name:string,
    category: string
    slug: string
    description: string
    type: string
    timestamp: TimeStamp
    status: Status
    images: {
        color:string
        url:string
    }
}

type TimeStamp = {
    updateAt: string,
    createAt: string
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

  export type AddproductProps = {
    product: ProductImport
  }

export const addProducts = async ({product}: AddproductProps)=>{
try {
    const docRef = await addDoc(collection(firestore, COLLECTION_ID), product);
    console.log("Document written : ", docRef);
  } catch (e) {
    console.error("Error adding document: ", e);
  }
}

export const fetchProducts = async (): Promise<Product[]> => {
    try {
      const querySnapshot = await getDocs(collection(firestore, COLLECTION_ID));
      const products: Product[] = await Promise.all(
        querySnapshot.docs.map(async (productDoc) => {
          const productData = productDoc.data() as Product;

          const categoryDoc = await getDoc(doc(firestore, "categories", productData.category.id));
          const typeDoc = await getDoc(doc(firestore, "types", productData.type.id));
          return {
            ...productData,
            id: productDoc.id,
            type: typeDoc.exists() ? typeDoc.data() : null ,
            category: categoryDoc.exists() ? categoryDoc.data() : null ,
          };
        })
      );
  
      console.log(products);
      return products;
    } catch (error) {
      console.error("Error fetching products: ", error);
      throw new Error("Failed to fetch products");
    }
  };
  