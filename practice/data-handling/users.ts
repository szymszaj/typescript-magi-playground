type Id = string;

interface User {
  id: Id;
  name: string;
  role: "admin" | "editor" | "viewer";
  isActive: boolean;
  age?: number;
}

const users: User[] = [
  {
    id: "u_1",
    name: "Alice Johnson",
    role: "admin",
    isActive: true,
    age: 28,
  },
  {
    id: "u_2",
    name: "Bob Smith",
    role: "viewer",
    isActive: false,
  },
  {
    id: "u_3",
    name: "Charlie Brown",
    role: "editor",
    isActive: true,
    age: 35,
  },
  {
    id: "u_4",
    name: "Diana Prince",
    role: "viewer",
    isActive: true,
  },
];

const getUserById = (id: Id): User | undefined => {
  return users.find((user) => user.id === id);
};
const getActiveUsers = (): User[] => {
  return users.filter((user) => user.isActive);
};
const getUsersByRole = (role: User["role"]): User[] => {
  return users.filter((user) => user.role === role);
};

console.log("--- All Users ---");
console.log(`Total users: ${users.length}`);

console.log("\n--- Find User u_3 ---");
const user3 = getUserById("u_3");
if (user3) {
  console.log(`Found: ${user3.name} is an ${user3.role}`);
} else {
  console.log("User not found");
}

console.log("\n--- Active Users ---");
const activeOnes = getActiveUsers();
activeOnes.forEach((u) => console.log(`- ${u.name} (${u.role})`));

console.log("\n--- Viewers ---");
const viewers = getUsersByRole("viewer");
console.table(viewers);

export { getUserById, getActiveUsers, getUsersByRole };
