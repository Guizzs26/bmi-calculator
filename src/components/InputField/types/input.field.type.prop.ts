import { IconDefinition } from "@fortawesome/free-solid-svg-icons";

export type InputFieldProps = {
  children: string;
  id: string;
  value: number;
  onChange: (value: number) => void;
  unit?: string;
  icon: IconDefinition;
};
