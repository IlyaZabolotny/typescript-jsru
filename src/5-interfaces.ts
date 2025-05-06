// Interfaces
interface IBook {
  title: string;
  pages: number;
  author: string;
}

interface NominatedBook extends IBook {
  awards: string[];
}
