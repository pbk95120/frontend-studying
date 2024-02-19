"use client";
import Image from "next/image";
import { useState, useRef } from "react";

import styles from "@/components/meals/image-picker.module.css";
import { ImagePickerProps } from "@/types/type";

export default function ImagePicker({ label, name }: ImagePickerProps) {
  const [pickedImage, setPickedImage] = useState<string | null>(null);
  const imageInput = useRef<HTMLInputElement>(null);

  function handleImageChange(event: React.ChangeEvent<HTMLInputElement>) {
    if (event.target.files !== null) {
      const file = event.target.files[0];
      if (!file) {
        setPickedImage(null);
        return;
      }
      const fileReader = new FileReader();
      fileReader.onload = () => {
        const result = fileReader.result;
        if (typeof result === "string") {
          setPickedImage(result);
        }
      };
      fileReader.readAsDataURL(file);
    }
  }

  function handlePickClick() {
    if (imageInput.current) {
      imageInput.current.click();
    }
  }

  return (
    <div className={styles.picker}>
      <label htmlFor={name}>{label}</label>
      <div className={styles.controls}>
        <div className={styles.preview}>
          {!pickedImage && <p>No image picked yet. </p>}
          {pickedImage && (
            <Image
              src={pickedImage}
              alt="The image selected by the user."
              fill
            />
          )}
        </div>
        <input
          className={styles.input}
          type="file"
          id={name}
          accept="image/png, image/jpeg"
          name={name}
          ref={imageInput}
          onChange={handleImageChange}
          required
        />
        <button
          className={styles.button}
          type="button"
          onClick={handlePickClick}
        >
          Pick an image
        </button>
      </div>
    </div>
  );
}
