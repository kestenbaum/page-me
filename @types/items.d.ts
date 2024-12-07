type ContactItem = {
  _id?: string;
  title: string;
  value: string;
}

type WorkItem = {
  _id?: string;
  title: string;
  img: string;
  category?: string;
  link: string;
}

type SkillItem = {
  title: string;
  img: string;
}

interface Date<T> {
  date: T[];
  status: string;
}



