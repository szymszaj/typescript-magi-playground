type UserID = string;

type UserRole = "admin" | "editor" | "viewer";

interface UserConfig {
  id: UserID;
  username: string;
  role: UserRole;
  preferences: {
    theme: "dark" | "light";
    notifications: boolean;
  };
}

interface ValidationResult {
  isValid: boolean;
  message: string;
  timestamp: Date;
  processedBy: UserRole;
}

export const validateUserAccess = (
  user: UserConfig,
  requiredRole: UserRole,
  action: string
): ValidationResult => {
  console.log(`Sprawdzanie uprawnień dla użytkownika: ${user.username}`);

  const hasPermission = user.role === "admin" || user.role === requiredRole;

  return {
    isValid: hasPermission,
    message: hasPermission
      ? `Dostęp przyznany do akcji: ${action}`
      : `Brak uprawnień. Wymagana rola: ${requiredRole}`,
    timestamp: new Date(),
    processedBy: "admin",
  };
};
