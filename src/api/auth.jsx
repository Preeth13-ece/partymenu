async function Auth(email, password) {
  const url = "https://serverless-api-teal.vercel.app/api/auth/signin";

  const userdetails = {
    email,
    password,
  };

  const response = await fetch(url, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(userdetails),
  });

  const data = await response.json();

  if (!response.ok) {
    throw new Error(data.message || "Login failed");
  }

  return data;
}

export default Auth;