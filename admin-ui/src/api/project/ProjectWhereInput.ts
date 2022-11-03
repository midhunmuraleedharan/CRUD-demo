import { IntFilter } from "../../util/IntFilter";
import { StringFilter } from "../../util/StringFilter";
import { StringNullableFilter } from "../../util/StringNullableFilter";

export type ProjectWhereInput = {
  age?: IntFilter;
  email?: StringFilter;
  id?: StringFilter;
  mobile?: StringNullableFilter;
  name?: StringFilter;
  something?: StringNullableFilter;
  test?: StringNullableFilter;
};
