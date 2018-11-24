class Choice {
  id: number;
  display: string;
}

class Member {
  memberName: string;
  choices: Choice[];
}

class Group {
  groupName: string;
  members: Member[];
}

export type Selects = Group[];
