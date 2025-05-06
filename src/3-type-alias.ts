// Type Aliases
type MyString = string;

type Size = "s" | "m" | "l";

type Book = {
  title: string;
  author: string;
  pages: number;
  genre: string;
  publicationYear: number;
};

type NominatedBooks = Book & {
  awards: string[];
  yearOfAwawrd: number;
};
