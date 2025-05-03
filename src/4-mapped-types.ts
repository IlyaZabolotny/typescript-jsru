type BookMapped = {
  title: string;
  author: string;
};

type Keys = keyof BookMapped;

type BookCopy = {
  [key in Keys]?: BookMapped[key];
};

type BookSetters = {
  -readonly [Key in keyof Book as `set${Capitalize<Key>}`]-?: (
    value: Book[Key]
  ) => void;
};

type BookGetters = {
  -readonly [Key in keyof Book as `get${Capitalize<Key>}`]-?: () => Book[Key];
};

type CompleteBook = BookCopy & BookGetters & BookSetters;

class BookClass implements CompleteBook {
  title?: string = '';
  author?: string = '';
  getTitle(): string {
    return this.title!;
  };
  getAuthor: () => string;
  getPages: () => number;
  setTitle: (value: string) => void;
  setAuthor: (value: string) => void;
  setPages: (value: number) => void;
}

type Stages = 'idle' | 'prepared' | 'paused' | 'end';

type StageSwitchers = {
  [Stage in Stages as `switchTo${Capitalize<Stage>}`]: () => Stages;
};

function createStageMachine(): {currentStage: Stages} & StageSwitchers {
  return {
    currentStage: 'idle',
    switchToIdle: () => {return 'idle'},
    switchToEnd: () => {return 'end'},
    switchToPrepared: () => {return 'prepared'},
    switchToPaused: () => {return 'paused'},
  }
}