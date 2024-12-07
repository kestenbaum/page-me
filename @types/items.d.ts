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

type ApiResponse<T> = {
  data: T;
  status: number | string;
};



