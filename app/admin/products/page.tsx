import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import React from "react";
import { Button } from "@/components/ui/button";
import Link from "next/link";
import { fetchAllProducts } from "@/action/product";

const ProductList = async () => {
  const product = await fetchAllProducts();
  return (
    <div className="p-5">
      <h1 className="text-2xl font-bold">Product Details</h1>
      <Link href={"/admin/create-product"}>
        <Button className="bg-blue-600 p-2 my-2">Create New Product</Button>
      </Link>
      <Table className="border-none">
        <TableHeader className="bg-[#565656] hover:bg-[#565656]">
          <TableRow>
            <TableHead>Name</TableHead>
            <TableHead>Price (Rs.)</TableHead>
            <TableHead>Quantity</TableHead>
            <TableHead>Details</TableHead>
          </TableRow>
        </TableHeader>
        <TableBody className="bg-[#D9D9D9]">
          {product.map((products) => (
            <TableRow key={products.id}>
              <TableCell>{products.productname}</TableCell>
              <TableCell>{products.price}</TableCell>
              <TableCell>{products.quantity}</TableCell>
              <TableCell className="flex flex-row gap-5">
                <Link href={`/admin/update-product/${products.id}`}>
                  <Button className="bg-[#3FB31F]">Edit</Button>
                </Link>
                <Link href={`/admin/products/${products.id}`}>
                  <Button className="bg-[#E65C00]">Detail View</Button>
                </Link>
              </TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </div>
  );
};

export default ProductList;
