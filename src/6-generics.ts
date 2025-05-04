// Generics
// type parameters
type ResponseStatus = "success" | "error" | "pending";
type TickerResponse = {
  status: ResponseStatus;
  result: Ticker;
};
type Ticker = {
  market: string;
  price: number;
};
function getTicker(): GenericTickerResponse<Ticker> {
  throw new Error("some error");
};

type GenericTickerResponse<Result> = {
  status: ResponseStatus;
  result: Result;
};

type GenericResponse<Result = unknown, Status = ResponseStatus> = {
  status: Status;
  result: Result;
};

function getTickers():GenericResponse<Ticker[]> {
    throw new Error('some error');
}

type GetPropertyValue<Record extends object, Property extends keyof Record> = Record[Property];

type Test = GetPropertyValue<Ticker, 'market'>;

function getProperty<Record extends object, Property extends keyof Record>(
    entity: Record,
    property: Property
):Record[Property] {
    return entity[property];
}

function getProperty<Entity extends object, Property extends keyof Entity>(
    entity: Entity,
    property: Property
): Entity[Property] {
    return entity[property];
}

const test = getProperty<Ticker, 'market'>({market: 'MOEX', price: 190}, "market");