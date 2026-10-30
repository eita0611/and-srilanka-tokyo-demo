"use client";

import { useEffect, useRef } from "react";

type Props = {
  open: boolean;
  onClose: () => void;
  label: string;
  className?: string;
  onKeyDown?: (event: React.KeyboardEvent<HTMLDialogElement>) => void;
  children: React.ReactNode;
};

/** dialog 要素に、フォーカスの閉じ込めと Esc での終了を任せます */
export function Modal({ open, onClose, label, className = "", onKeyDown, children }: Props) {
  const ref = useRef<HTMLDialogElement>(null);

  useEffect(() => {
    const dialog = ref.current;
    if (!dialog) return;
    if (open && !dialog.open) dialog.showModal();
    if (!open && dialog.open) dialog.close();
  }, [open]);

  return (
    <dialog
      ref={ref}
      aria-label={label}
      className={`modal ${className}`}
      onClose={onClose}
      onKeyDown={onKeyDown}
      onClick={(event) => {
        // 中身の外側（余白）を押したら閉じる
        if (event.target === event.currentTarget) onClose();
      }}
    >
      {children}
    </dialog>
  );
}

export function CloseButton({ onClick, label, className = "" }: { onClick: () => void; label: string; className?: string }) {
  return (
    <button type="button" onClick={onClick} aria-label={label} className={`relative size-11 ${className}`}>
      <span className="absolute left-2.5 top-1/2 h-px w-6 rotate-45 bg-current" />
      <span className="absolute left-2.5 top-1/2 h-px w-6 -rotate-45 bg-current" />
    </button>
  );
}
