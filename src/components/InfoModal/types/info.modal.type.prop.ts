import { Category } from "../../../Helpers/imc.type";

export type InfoModalProps = {
  isOpen: boolean;
  category?: Category | null;
  onClose: () => void;
};
