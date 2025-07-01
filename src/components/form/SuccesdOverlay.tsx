"use client";

import { createPortal } from "react-dom";
import { useEffect, useState } from "react";
import Image from "next/image";

interface SuccessOverlayProps {
  open: boolean;
  onClose: () => void;
}

export default function SuccessOverlay({ open, onClose }: SuccessOverlayProps) {
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  // Lock scroll when overlay is open
  useEffect(() => {
    if (!mounted) return;

    if (open) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = '';
    }

    return () => {
      document.body.style.overflow = '';
    };
  }, [open, mounted]);

  if (!mounted || !open) return null;

  return createPortal(
    <section className="fixed inset-0 z-[9999] w-screen h-screen overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0 -z-10">
        <Image
          src="/sucess-form.jpg"
          alt="Background"
          fill
          className="object-cover"
          priority
        />
        <div className="absolute inset-0 bg-[linear-gradient(30deg,rgba(8,48,80,0.9),rgba(183,106,24,0.75))]" />
      </div>

      {/* Content */}
      <div className="relative z-10 flex flex-col items-center justify-center h-full text-white text-center px-4">
        <h1 className="text-4xl md:text-5xl font-bold mb-4">ĐĂNG KÝ THÀNH CÔNG!</h1>
        <p className="text-lg md:text-xl mt-8">
          Thông tin của Quý khách đã được gửi đi.
        </p>
        <p className="text-lg md:text-xl mb-8">
          Chuyên viên tư vấn tốt nhất của chúng tôi sẽ sớm liên hệ lại ngay!
        </p>
        <button
          className="bg-blue-900 hover:bg-blue-800 text-white px-6 py-2 rounded font-semibold"
          onClick={onClose}
        >
          QUAY LẠI
        </button>
      </div>
    </section>,
    document.body
  );
}