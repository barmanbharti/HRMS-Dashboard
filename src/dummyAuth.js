
export const fakeLogin = (email, password) => {
    return new Promise((resolve) => {
      setTimeout(() => {
        if (email === "caspr@example.com" && password === "123456") {
          resolve({
            name: "Caspr",
            email,
            role: "HR Manager",
            department: "Human Resources",
          });
        } else {
          resolve(null);
        }
      }, 500);
    });
  };
  