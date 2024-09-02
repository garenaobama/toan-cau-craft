import { firestore } from "@/utils/FireBase"
import { Category } from "./Category"
import { Type } from "./Type"
import { addDoc, collection, doc, DocumentReference, getDoc, getDocs, query, updateDoc, where } from "firebase/firestore"

const COLLECTION_ID = "products"

export type Product = {
    id?:string,
    name?:string,
    category?: Category
    slug?: string
    description?: string
    type?: Type
    status?: Status
    images?: ImageProduct[]
    updateAt?: string,
    createAt?: string
}

export type ProductImport = {
    id?:string,
    name?:string,
    category?: string
    slug?: string
    description?: string
    type?: string
    status?: Status
    images?: ImageProduct[]
    updateAt?: string,
    createAt?: string
}

export type ImageProduct ={
    color:string | null
    url:string
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

  export type AddProductProps = {
    product: ProductImport
  }

  export type UpdateProductProps = {
    productId: string,
    product: ProductImport
  }

  export const addProducts = async ({ product }: AddProductProps) => {
    try {
      // Create a reference to the category document
      const categoryRef: DocumentReference = doc(firestore, "categories", product.category ?? "");
        // Create a reference to the category document
      const typeRef: DocumentReference = doc(firestore, "types", product.type ?? "");
  
      // Include the category reference in the product data
      const productWithCategoryRef = {
        ...product,
        category: categoryRef,
        type: typeRef
      };
  
      const docRef = await addDoc(collection(firestore, "products"), productWithCategoryRef);
      return { success: true, data: docRef };
    } catch (e) {
      return { success: false, error: e };
    }
  };

  export const updateProduct = async ({ productId, product }: UpdateProductProps) => {
    try {
      // Create references to the category and type documents
      const categoryRef: DocumentReference = doc(firestore, "categories", product.category ?? "");
      const typeRef: DocumentReference = doc(firestore, "types", product.type ?? "");
  
      // Include the category and type references in the product data
      const productWithRefs = {
        ...product,
        category: categoryRef,
        type: typeRef,
      };
  
      // Update the product document
      const productDocRef = doc(firestore, "products", productId);
      await updateDoc(productDocRef, productWithRefs);
  
      return { success: true, data: productDocRef };
    } catch (e) {
      console.error("Error updating product: ", e);
      return { success: false, error: e };
    }
  };


  export const updateProductImage = async ({ productId, product }: UpdateProductProps) => {
    try {
      // Update the product document
      const productDocRef = doc(firestore, "products", productId);
      await updateDoc(productDocRef, product);
  
      return { success: true, data: productDocRef };
    } catch (e) {
      console.error("Error updating product: ", e);
      return { success: false, error: e };
    }
  };

export const fetchProducts = async (): Promise<Product[]> => {
    try {
      const querySnapshot = await getDocs(collection(firestore, COLLECTION_ID));
      const products: Product[] = await Promise.all(
        querySnapshot.docs.map(async (productDoc) => {
          const productData = productDoc.data() as Product;

          const categoryDoc = await getDoc(doc(firestore, "categories", productData.category?.id ?? ""));
          const typeDoc = await getDoc(doc(firestore, "types", productData.type?.id ?? ""));
          return {
            ...productData,
            id: productDoc.id,
            type: typeDoc.data() as Type ,
            category: categoryDoc.data() as Category,
          };
        })
      );
  
      return products;
    } catch (error) {
      console.error("Error fetching products: ", error);
      throw new Error("Failed to fetch products");
    }
  };
  

  export const fetchProductBySlug = async (slug: string): Promise<Product | null> => {
    try {
      const q = query(collection(firestore, "products"), where("slug", "==", slug));
      const querySnapshot = await getDocs(q);
  
      if (querySnapshot.empty) {
        console.log("No matching documents.");
        return null;
      }
  
      const productDoc = querySnapshot.docs[0];
      const productData = productDoc.data() as Product;
  
      const categoryDoc = await getDoc(doc(firestore, "categories", productData.category?.id ?? ""));
      const typeDoc = await getDoc(doc(firestore, "types", productData.type?.id ?? ""));
  
      return {
        ...productData,
        id: productDoc.id,
        category: { id: categoryDoc.id, ...categoryDoc.data() } as Category,
        type: { id: typeDoc.id, ...typeDoc.data() } as Type,
      };
    } catch (error) {
      console.error("Error fetching product by slug: ", error);
      throw new Error("Failed to fetch product by slug");
    }
  };