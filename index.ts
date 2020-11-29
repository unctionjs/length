import values from "@unction/values";

export default function length<A> (enumerable: Array<A> | Set<A> | RecordType<unknown, A> | string): number {
  return enumerable.length || enumerable.size || values(enumerable).length;
}
