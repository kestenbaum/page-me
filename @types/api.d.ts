interface Contact {
  _id?: string;
  title: string;
  value: string;
}

type GetContacts = {
  data: Contact[];
  status: number;
};

interface Card {
  _id?: string;
  title: string;
  img: string;
  category?: string;
  link: string;
}

type GetCards = {
  data: Card[];
  status: number;
};

interface Skill {
  title: string;
  img: string;
}

type GetSkills = {
  data: Skill[];
  status: number;
};

interface HeaderMenuProps {
  id: number,
  to: string,
  link: string
}

interface LogoProps {
  children: string
}