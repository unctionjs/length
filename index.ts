import values from "@unction/values";
import {EnumerableType} from "./types";

export default function length<A> (enumerable: EnumerableType<A>): number {
  return enumerable.length || enumerable.size || values(enumerable).length;
}
