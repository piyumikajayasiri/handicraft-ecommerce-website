import { createProduct } from "@/action/product";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import React from "react";
import { Bounce, ToastContainer } from "react-toastify";

const CreateProduct = () => {
  return (
    <div className="p-2">
      <h1 className="text-2xl font-bold mb-5">Create New Product</h1>
      <div>
        <form action={createProduct}>
          <div className="mb-2">
            <Label htmlFor="productname">Product Name</Label>
            <Input
              name="productname"
              type="text"
              id="productname"
              placeholder="Product Name"
            />
          </div>
          <div className="mb-2">
            <Label htmlFor="category">Category</Label>
            <Input
              name="category"
              type="text"
              id="category"
              placeholder="category"
            />
          </div>
          <div className="mb-2">
            <Label htmlFor="color">Color</Label>
            <Input name="color" type="text" id="color" placeholder="Color" />
          </div>
          <div className="mb-2">
            <Label htmlFor="quantity">Quantity</Label>
            <Input
              name="quantity"
              type="text"
              id="quantity"
              placeholder="Quantity"
            />
          </div>
          <div className="mb-2">
            <Label htmlFor="image">Product Image Url</Label>
            <Input
              name="image"
              type="text"
              id="image"
              placeholder="Image Url"
            />
          </div>
          <div className="mb-2">
            <Label htmlFor="description">Description</Label>
            <Input
              name="description"
              type="text"
              id="description"
              placeholder="Description"
            />
          </div>
          <div className="mb-2">
            <Label htmlFor="price">Price</Label>
            <Input name="price" type="number" id="price" placeholder="price" />
          </div>
          <Button>Create Product</Button>
        </form>
      </div>
    </div>
  );
};

export default CreateProduct;
