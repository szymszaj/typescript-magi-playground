interface ApiResponse<T> {
  data: T;
  status: number;
  success: boolean;
  error?: string;
}

export const updateData = <T>(currentData: T, updates: Partial<T>): T => {
  return { ...currentData, ...updates };
};

export const fetchData = async <T>(url: string): Promise<ApiResponse<T>> => {
  await new Promise((resolve) => setTimeout(resolve, 500));

  return {
    data: {} as T,
    status: 200,
    success: true,
  };
};

interface UserProfile {
  id: number;
  name: string;
  email: string;
}

const currentUser: UserProfile = {
  id: 1,
  name: "Szymon",
  email: "old@test.com",
};
const updated = updateData(currentUser, { email: "new@test.com" });

const loadUser = async () => {
  const result = await fetchData<UserProfile>("/api/user");

  console.log(result.data.email);
};
