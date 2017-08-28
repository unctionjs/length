import values from "@unction/values"

export default function length (iterable: ArrayType & ObjectType & MapType & SetType & string): number {
  return iterable.length || iterable.size || values(iterable).length
}
