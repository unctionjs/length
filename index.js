import values from "@unction/values";
export default function length (functor) {
  return functor.length || functor.size || values(functor).length;
}
