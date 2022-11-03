import { IntFilter } from "../../util/IntFilter";
import { StringFilter } from "../../util/StringFilter";

export type SampleWhereInput = {
  age?: IntFilter;
  email?: StringFilter;
  id?: StringFilter;
  name?: StringFilter;
  sex?: StringFilter;
};
