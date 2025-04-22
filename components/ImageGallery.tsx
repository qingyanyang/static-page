"use client";

import type React from "react";

import { useState } from "react";
import Image from "next/image";
import { ChevronLeft, ChevronRight, X, ZoomIn } from "lucide-react";

interface ImageGalleryProps {
  galleryImgs: string[];
}

export default function ImageGallery({ galleryImgs }: ImageGalleryProps) {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [currentImageIndex, setCurrentImageIndex] = useState(0);

  const openModal = (index: number) => {
    setCurrentImageIndex(index);
    setIsModalOpen(true);
    // Prevent scrolling when modal is open
    document.body.style.overflow = "hidden";
  };

  const closeModal = () => {
    setIsModalOpen(false);
    // Re-enable scrolling
    document.body.style.overflow = "auto";
  };

  const goToPrevious = () => {
    console.log("Previous button clicked");
    setCurrentImageIndex((prevIndex) =>
      prevIndex === 0 ? galleryImgs.length - 1 : prevIndex - 1
    );
  };

  const goToNext = () => {
    setCurrentImageIndex((prevIndex) =>
      prevIndex === galleryImgs.length - 1 ? 0 : prevIndex + 1
    );
  };

  // Handle keyboard navigation
  const handleKeyDown = (e: React.KeyboardEvent) => {
    if (e.key === "ArrowLeft") {
      goToPrevious();
    } else if (e.key === "ArrowRight") {
      goToNext();
    } else if (e.key === "Escape") {
      closeModal();
    }
  };

  return (
    <>
      <div className="container grid grid-cols-2 md:grid-cols-5 gap-2">
        {galleryImgs.map((imgSrc, i) => (
          <div
            key={i}
            className="aspect-square bg-gray-200 cursor-pointer relative group overflow-hidden"
            onClick={() => openModal(i)}
          >
            <Image
              src={imgSrc || "/placeholder.svg"}
              alt={`Project ${i + 1}`}
              width={200}
              height={200}
              className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-105"
            />
            <div className="absolute inset-0 bg-black/0 group-hover:bg-black/20 transition-colors duration-300 flex items-center justify-center opacity-0 group-hover:opacity-100">
              <ZoomIn className="text-white" size={24} />
            </div>
          </div>
        ))}
      </div>

      {/* Fullscreen Modal */}
      {isModalOpen && (
        <div
          className="fixed inset-0 bg-black/90 z-50 flex items-center justify-center"
          onClick={(e) => {
            // Only close if clicking directly on the background
            if (e.target === e.currentTarget) {
              closeModal();
            }
          }}
          onKeyDown={handleKeyDown}
          tabIndex={0}
        >
          {/* Close button */}
          <button
            className="absolute top-4 right-4 text-white p-2 rounded-full hover:bg-white/10 transition-colors z-10"
            onClick={closeModal}
            aria-label="Close modal"
          >
            <X size={24} />
          </button>

          {/* Image counter */}
          <div className="absolute top-4 left-4 text-white bg-black/50 px-3 py-1 rounded-full">
            {currentImageIndex + 1}/{galleryImgs.length}
          </div>

          {/* Previous button */}
          <button
            className="absolute left-4 top-1/2 -translate-y-1/2 bg-black/50 text-white p-2 rounded-full hover:bg-black/70 transition-colors z-20"
            onClick={(e) => {
              e.stopPropagation();
              goToPrevious();
            }}
            aria-label="Previous image"
          >
            <ChevronLeft size={24} />
          </button>

          {/* Image container */}
          <div
            className="relative w-full h-full flex items-center justify-center p-10"
            onClick={(e) => e.stopPropagation()}
          >
            <Image
              src={galleryImgs[currentImageIndex] || "/placeholder.svg"}
              alt={`Project ${currentImageIndex + 1}`}
              fill
              className="object-contain"
              sizes="100vw"
              priority
            />
          </div>

          {/* Next button */}
          <button
            className="absolute right-4 top-1/2 -translate-y-1/2 bg-black/50 text-white p-2 rounded-full hover:bg-black/70 transition-colors"
            onClick={(e) => {
              e.stopPropagation();
              goToNext();
            }}
            aria-label="Next image"
          >
            <ChevronRight size={24} />
          </button>
        </div>
      )}
    </>
  );
}
