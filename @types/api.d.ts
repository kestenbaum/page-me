interface Contact {
  _id?: string;
  title: string;
  value: string;
}

interface Date<T> {
  date: T[];
  status: string;
}

interface Card {
  _id?: string;
  title: string;
  img: string;
  category?: string;
  link: string;
}

interface Skill {
  title: string;
  img: string;
}


