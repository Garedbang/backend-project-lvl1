import promptly from 'promptly';

export default async () => {
    const name = await promptly.prompt('Your answer: ');
    return name;
  };