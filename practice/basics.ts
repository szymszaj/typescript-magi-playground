const greeting: string = "Hello, TypeScript!";

const year: number = 2024;

const isAwesome: boolean = true;

const skills: string[] = ["JavaScript", "TypeScript", "React"];

interface User {
  id: number;
  username: string;
  email: string;
  name: string;
  role: "admin" | "editor" | "viewer";
  isActive: boolean;
}

const newUser: User = {
  id: 1,
  username: "magic_coder",
  email: "magic@example.com",
  name: "test1",
  role: "admin",
  isActive: true,
};

function formatUser(user: User): string {
  return `User ${user.username} (${user.email})`;
}

const add = (a: number, b: number): number => {
  return a + b;
};

console.log(greeting);
console.log(formatUser(newUser));
console.log(`2 + 3 = ${add(2, 3)}`);
