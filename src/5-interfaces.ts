// Interfaces
interface IBook {
  title: string;
  pages: number;
  author: string;
};

interface IMagazine extends IBook {
  episodes: number;
};

interface NominatedBook extends IBook {
    awards: string[];
};