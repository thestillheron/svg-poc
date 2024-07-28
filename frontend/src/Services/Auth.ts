const clientId = "CeWbvtkZOr24UozJtbgXR2yL08XSZWdK";

export const login = (atlassianInstance: string) => {
  const callbackUrl = "http://localhost:3000/callback";
  const targetUrl = `https://auth.atlassian.com/authorize?audience=api.atlassian.com&redirect_uri=${encodeURIComponent(
    callbackUrl
  )}&response_type=code&prompt=consent&client_id=${clientId}&scope=${encodeURIComponent(
    "read:jira-work"
  )}`;
  console.log(targetUrl);
  window.location.replace(targetUrl);
};

export const exchangeCode = async () => {
  const code = new URLSearchParams(window.location.search).get("code");
  if (!code) {
    throw new Error("No code found in URL");
  }
  console.log(code);

  const request = new Request("https://auth.atlassian.com/oauth/token", {
    method: "POST",
    body: JSON.stringify({
      grant_type: "authorization_code",
      client_id: clientId,
      code,
    }),
  });
  request.headers.append("Content-Type", "application/json");

  let result: any;
  try {
    result = await fetch(request);
  } catch (e) {
    console.error(e);
    return;
  }
  const body = await result.json();
  console.log(body);
};

// example callback parameters:
// http://localhost:3000/callback?code=eyJhbGciOiJIUzI1NiJ9.eyJqdGkiOiI1NjNhOTRkNC1kNjQ3LTQ2ZjMtODEwMS1iNDJhYTdkMzQwNTAiLCJzdWIiOiI3MTIwMjA6YTJiN2I2ZmEtYzI5Yy00MTVjLWFhY2QtZWE1MTcxMmI5YWVjIiwibmJmIjoxNzIxNjA4NjQ5LCJpc3MiOiJhdXRoLmF0bGFzc2lhbi5jb20iLCJpYXQiOjE3MjE2MDg2NDksImV4cCI6MTcyMTYwODk0OSwiYXVkIjoiQ2VXYnZ0a1pPcjI0VW96SnRiZ1hSMnlMMDhYU1pXZEsiLCJjbGllbnRfYXV0aF90eXBlIjoiUE9TVCIsImh0dHBzOi8vaWQuYXRsYXNzaWFuLmNvbS92ZXJpZmllZCI6dHJ1ZSwiaHR0cHM6Ly9pZC5hdGxhc3NpYW4uY29tL3VqdCI6IjU2M2E5NGQ0LWQ2NDctNDZmMy04MTAxLWI0MmFhN2QzNDA1MCIsInNjb3BlIjpbInJlYWQ6amlyYS13b3JrIl0sImh0dHBzOi8vaWQuYXRsYXNzaWFuLmNvbS9hdGxfdG9rZW5fdHlwZSI6IkFVVEhfQ09ERSIsImh0dHBzOi8vaWQuYXRsYXNzaWFuLmNvbS9oYXNSZWRpcmVjdFVyaSI6dHJ1ZSwiaHR0cHM6Ly9pZC5hdGxhc3NpYW4uY29tL3Nlc3Npb25faWQiOiIzYjAxOGM4NC1iOGNiLTQxZjgtYmM5NS00MmY4MWExMWRlMjUiLCJodHRwczovL2lkLmF0bGFzc2lhbi5jb20vcHJvY2Vzc1JlZ2lvbiI6InVzLXdlc3QtMiJ9.cyphP1aoZ1ZgzgLurW3BK5l9QaiAz3udvy6ur8zeTbg
