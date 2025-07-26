import React from "react";
import { Button } from "@/components/ui/button";
import { fetchAllProducts } from "@/action/product";
import connectDB from "@/lib/db";
import { Product } from "@/model/product";
import { redirect } from "next/navigation";

interface ProductPageProps {
  params: { id: string };
}

const ProductDetails = async ({ params }: ProductPageProps) => {
  const products = await fetchAllProducts();
  const product = products.find((p) => p.id.toString() === params.id);

  if (!product) {
    return <div>Product not found</div>;
  }

  // Define the server action here to delete this product
  async function deleteProduct(formData: FormData) {
    "use server";
    await connectDB();
    // Delete product by ID
    await Product.deleteOne({ _id: product.id });
    redirect("/admin/products");

    // After delete, redirect or do something else
    // redirect("/admin/products");  // uncomment if you want redirect
  }

  return (
    <div className="p-4">
      <h1 className="text-2xl font-bold">{product.productname}</h1>
      <img
        src={product.image}
        alt={product.productname}
        className="w-64 h-64 object-cover my-4"
      />
      <div className="flex flex-col mb-2">
        <p className="text-[20px] font-semibold">Description:</p>
        <p className="text-[16px] font-light">{product.description}</p>
      </div>
      <div className="flex flex-col mb-2">
        <p className="text-[20px] font-semibold">Price:</p>
        <p className="text-[16px] font-light">{product.price}</p>
      </div>
      <div className="flex flex-col mb-2">
        <p className="text-[20px] font-semibold">Color:</p>
        <p className="text-[16px] font-light">{product.color}</p>
      </div>
      <div className="flex flex-col mb-2">
        <p className="text-[20px] font-semibold">Quantity:</p>
        <p className="text-[16px] font-light">{product.quantity}</p>
      </div>

      <div className="flex gap-5 flex-row">
        <form action={deleteProduct}>
          <Button type="submit" className="mr-4">
            Delete
          </Button>
        </form>
        <Button>Edit</Button>
      </div>
    </div>
  );
};

export default ProductDetails;
