import { Sources } from "@/api/Models";
import {
  Select as ShadcnSelect,
  SelectContent,
  SelectGroup,
  SelectItem,
  SelectLabel,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { SearchFilter, useSearchFilter } from "./Context";

export function Select() {
  const { setFilter } = useSearchFilter();

  return (
    <ShadcnSelect
      onValueChange={(value) =>
        setFilter((f: SearchFilter) => ({ ...f, source: value }))
      }
    >
      <SelectTrigger className="w-[180px]">
        <SelectValue placeholder="Select source" />
      </SelectTrigger>
      <SelectContent>
        <SelectGroup>
          <SelectLabel>Select a source</SelectLabel>
          <SelectItem value={Sources.news}>News</SelectItem>
          <SelectItem value={Sources.nyTimes}>The New York Times</SelectItem>
          <SelectItem value={Sources.guardian}>The Guardian</SelectItem>
        </SelectGroup>
      </SelectContent>
    </ShadcnSelect>
  );
}
