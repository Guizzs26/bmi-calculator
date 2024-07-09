import { IconDefinition } from "@fortawesome/free-solid-svg-icons";

export type InputFieldProps = {
  children: string;
  id: string;
  value: number | string;
  onChange: (value: number | string) => void;
  unit?: string;
  icon: IconDefinition;
};
