import values from "@unction/values"

export default function length (functor: ArrayType & ObjectType & MapType & SetType & string): number {
  return functor.length || functor.size || values(functor).length
}
