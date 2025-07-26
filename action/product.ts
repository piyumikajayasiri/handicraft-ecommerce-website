"use server";
import connectDB from "@/lib/db";
import { Product } from "@/model/product";
import { redirect } from "next/navigation";

const createProduct = async (formData: FormData) => {
  const productname = formData.get("productname")?.toString().trim();
  const category = formData.get("category")?.toString().trim();
  const color = formData.get("color")?.toString().toLowerCase().trim();
  const quantity = Number(formData.get("quantity"));
  const image = formData.get("image")?.toString().trim();
  const description = formData.get("description")?.toString().trim();
  const price = Number(formData.get("price"));

  if (
    !productname ||
    !category ||
    !color ||
    !quantity ||
    !image ||
    !description ||
    !price
  ) {
    throw new Error("Please fill in all fields.");
  }

  try {
    await connectDB();

    const existingProduct = await Product.findOne({ productname });

    if (existingProduct) {
      throw new Error("A product with this name already exists.");
    }

    await Product.create({
      productname,
      category,
      color,
      quantity,
      image,
      description,
      price,
    });

    console.log("✅ Created the Product Successfully.");
    redirect("/admin/products"); // You can change the route after success
  } catch (error) {
    console.error("❌ Creating Product failed:", error);
  }
};

const fetchAllProducts = async () => {
  await connectDB();
  const product = await Product.find({});
  return product;
};

const updateProduct = async (_id: string, formData: FormData) => {
  const productname = formData.get("productname")?.toString().trim();
  const category = formData.get("category")?.toString().trim();
  const color = formData.get("color")?.toString().toLowerCase().trim();
  const quantity = Number(formData.get("quantity"));
  const image = formData.get("image")?.toString().trim();
  const description = formData.get("description")?.toString().trim();
  const price = Number(formData.get("price"));

  if (
    !productname ||
    !category ||
    !color ||
    !quantity ||
    !image ||
    !description ||
    !price
  ) {
    throw new Error("Please fill in all fields.");
  }

  try {
    await connectDB();
    await Product.updateOne(
      { _id }, // make sure _id is passed as a parameter
      {
        $set: {
          productname,
          category,
          color,
          quantity,
          image,
          description,
          price,
        },
      },
      { upsert: false } // set to false to avoid accidentally creating new product
    );

    console.log("✅ Updated the Product Successfully.");
    redirect("/admin/products");
  } catch (error) {
    console.error("❌ Updating Product failed:", error);
  }
};

export { createProduct, fetchAllProducts, updateProduct };
