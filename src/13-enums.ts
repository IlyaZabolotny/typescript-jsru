// Enums
enum SizeEnum {
  s = "small",
  m = "medium",
  l = "long",
}

// enum Size {
//     s = 0,
//     m = 1,
//     l,
// }

function getButtonSize(size: SizeEnum) {}
getButtonSize(SizeEnum.l);

type SizeUnion = "small" | "long" | "medium";

const sizeMap = {
  s: "small",
  m: "medium",
  l: "long",
} as const;

type SizeAlias = (typeof sizeMap)[keyof typeof sizeMap];

Object.values(sizeMap);

type SizeMapKeys = typeof sizeMap;
// type Size = (SizeMapKeys)[keyof SizeMapKeys]
