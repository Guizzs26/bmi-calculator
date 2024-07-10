import { Category } from "../../../Helpers/imc.type";

export type InfoModalProps = {
  isOpen: boolean;
  selectedCategory: Category | null;
  onClose: () => void;
};
