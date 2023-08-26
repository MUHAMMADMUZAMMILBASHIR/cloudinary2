"use client"

import { Button } from "@/components/ui/button";
import { CldImage } from "next-cloudinary";
import React, { useState } from "react";


export default  function EditPage({ searchParams: { publicId } }: {
    searchParams: {
        publicId: string
    }
}) {
    const [transformation, setTransformation] = useState<
      undefined | "generative-fill" | "blur" | "grayscale" | "bg-remove"
    >();

    return (
      <>
        <section>
          <div className=" px-4 pt-8">
            <div className="flex space-between px-4 py-6 w-full">
              <h1 className="text-4xl font-bold w-full">Edit {publicId}</h1>
            </div>
            <Button
              className="w-full my-3"
              variant="default"
              onClick={() => setTransformation("generative-fill")}
            >
              Generative Fill
            </Button>

            <Button
              className="w-full my-3"
              variant="default"
              onClick={() => setTransformation("blur")}
            >
              blur Face
            </Button>
            <Button
              className="w-full my-3"
              variant="default"
              onClick={() => setTransformation("bg-remove")}
            >
              Remove Background
            </Button>

            <div className="grid grid-cols-2 gap-12">
              <CldImage src={publicId} width={300} height={200} alt="Image" />
              {transformation === "generative-fill" && (
                <CldImage
                  src={publicId}
                  width={300}
                  height={200}
                  alt="Image"
                  crop="pad"
                  fillBackground
                />
              )}
              {transformation === "blur" && (
                <CldImage
                  src={publicId}
                  width={300}
                  height={200}
                  alt="Image"
                  blur="800"
                  crop="pad"
                  fillBackground
                />
              )}
              {transformation === "bg-remove" && (
                <CldImage
                  src={publicId}
                  width={300}
                  height={200}
                  alt="Image"
                  removeBackground
                  crop="pad"
                  fillBackground
                />
              )}
            </div>
            <Button
              className="w-full my-3"
              variant="ghost"
              onClick={() => setTransformation(undefined)}
            >
              Clear Generative Fill
            </Button>
          </div>
        </section>
      </>
    );
}





