// Type Aliases
type MyString = string;
type Size = "s" | "m" | "l";

type Book = {
  title: string;
  author: string;
  pages: number;
};

type NominatedBooks = Book & {
  awards: string[];
};

type Magazine = Book & {
  episodes: number;
};
