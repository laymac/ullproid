type Programmer = {
  name: string;
  age: number;
  favoriteLanguages: string[];
  yearsOfExperience: number;
  worksRemotely: boolean;
};

function createProgrammer(
  name: string,
  age: number,
  favoriteLanguages: string[],
  yearsOfExperience: number,
  worksRemotely: boolean
): Programmer {
  return {
    name,
    age,
    favoriteLanguages,
    yearsOfExperience,
    worksRemotely,
  };
}

const newProgrammer = createProgrammer('Alice', 32, ['TypeScript', 'JavaScript'], 10, true);
