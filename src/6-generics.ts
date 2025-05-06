// Generics
// type parameters
type ResponseStatus = "success" | "error" | "pending";

type ComponentResponse = {
  status: ResponseStatus;
  result: Component;
};

type Component = {
  name: string;
  elements: string[];
};

function getComponent(): GenericComponentResponse<Component> {
  return {
    status: "success",
    result: { name: "Component1", elements: ["Page1", "Sidebar"] },
  };
}

type GenericComponentResponse<Result> = {
  status: ResponseStatus;
  result: Result;
};

type GenericResponse<Result = unknown, Status = ResponseStatus> = {
  status: Status;
  result: Result;
};

function getComponents(): GenericResponse<Component[]> {
  return {
    status: "success",
    result: [{ name: "Component2", elements: ["Page2", "Navigation"] }],
  };
}

type GetPropertyValue<
  Record extends object,
  Property extends keyof Record
> = Record[Property];

type Test = GetPropertyValue<Component, "elements">;

function getObjectProperty<
  Record extends object,
  Property extends keyof Record
>(entity: Record, property: Property): Record[Property] {
  return entity[property];
}

const test = getProperty<Component, "name">(
  { name: "Search", elements: [] },
  "name"
);
