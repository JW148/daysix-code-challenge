import type { ReactNode, SyntheticEvent } from "react";
import "./edit-reps-modal.css";

type EditRepsModalProps = {
  isOpen: boolean;
  onClose: () => void;
  title: string;
  children?: ReactNode;
};

export function EditRepsModal({
  isOpen,
  onClose,
  title,
  children,
}: EditRepsModalProps) {
  if (!isOpen) return null;

  const handleBackdropClick = (e: SyntheticEvent) => {
    //when the modal overlay is clicked, but not the modal itself
    if (e.target === e.currentTarget) onClose();
  };

  return (
    <div className="modal-overlay" onClick={handleBackdropClick}>
      <div className="modal-content">
        <div className="modal-header">
          <h2 className="modal-title">{title}</h2>
          <button className="modal-close" onClick={onClose}>
            ×
          </button>
        </div>
        <div className="modal-body">{children}</div>
      </div>
    </div>
  );
}
