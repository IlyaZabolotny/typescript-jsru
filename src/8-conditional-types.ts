// Conditional types
type IdLable = {
  id: number;
};

type NameLable = {
  name: string;
};

type NameOrId<Value extends string | number> = Value extends number
  ? IdLable
  : NameLable;

function createLable<Value extends string | number>(
  value: Value
): NameOrId<Value> {
  return { id: 1 } as NameOrId<Value>;
}

const idLable = createLable<number>(123);
const nameLable = createLable<string>("label1");
const idLable1 = createLable(123);
const nameLable1 = createLable("label2");
