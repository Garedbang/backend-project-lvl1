import promptly from 'promptly';

export default async () => {
    const name = await promptly.prompt('Your answer: ');
    return name;
  };

export function NOD (x, y) {
	if (y > x) return NOD(y, x);
	if (!y) return x;
	return NOD(y, x % y);
};