import {
  Select as ShadcnSelect,
  SelectContent,
  SelectGroup,
  SelectItem,
  SelectLabel,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";

type SelectProps = {
  options: { label: string; value: any }[];
  onChange: (value: string) => void;
  placeholder: string;
  defaultValue?: string;
};

export function Select({
  options,
  onChange,
  placeholder,
  defaultValue,
}: SelectProps) {
  return (
    <ShadcnSelect defaultValue={defaultValue} onValueChange={onChange}>
      <SelectTrigger className="w-full">
        <SelectValue placeholder={placeholder || "Select"} />
      </SelectTrigger>
      <SelectContent>
        <SelectGroup>
          <SelectLabel>Select a source</SelectLabel>
          {options?.map((opt) => (
            <SelectItem key={opt.label} value={opt.value}>
              {opt.label}
            </SelectItem>
          ))}
        </SelectGroup>
      </SelectContent>
    </ShadcnSelect>
  );
}
