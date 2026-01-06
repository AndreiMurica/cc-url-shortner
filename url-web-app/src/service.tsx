const AUTH_API_URL =
    import.meta.env.VITE_AUTH_API_URL || "http://localhost:30002";
const BUSINESS_API_URL =
    import.meta.env.VITE_BUSINESS_API_URL || "http://localhost:30001";

console.log("Auth URL folosit:", AUTH_API_URL);

export const Login = async (username: string, password: string) => {
    const response = await fetch(`${AUTH_API_URL}/login`, {
        method: "POST",
        headers: {
            "Content-Type": "application/json",
        },
        body: JSON.stringify({ username, password }),
    });
    const data = await response.json();

    if (response.ok) {
        localStorage.setItem("token", data.token);
        localStorage.setItem("userName", username);
        return username;
    } else {
        alert("Login failed: " + data.message);
    }
};

export const Register = async (
    username: string,
    email: string,
    password: string
) => {
    const response = await fetch(`${AUTH_API_URL}/register`, {
        method: "POST",
        headers: {
            "Content-Type": "application/json",
        },
        body: JSON.stringify({ username, email, password }),
    });
    const data = await response.json();
    if (response.ok) {
        alert("Registration successful! Please log in.");
    } else {
        alert("Registration failed: " + data.message);
    }
};

export const ShortenURL = async (originalUrl: string) => {
    const token = localStorage.getItem("token");
    const response = await fetch(`${BUSINESS_API_URL}/createShortUrl`, {
        method: "POST",
        headers: {
            "Content-Type": "application/json",
            Authorization: `Bearer ${token}`,
        },
        body: JSON.stringify({ url: originalUrl }),
    });
    const data = await response.json();
    if (response.ok) {
        return data.short_code;
    } else {
        alert("URL shortening failed: " + data.message);
    }
};

export const GetLongUrl = async (shortCode: string) => {
    const response = await fetch(`${BUSINESS_API_URL}/getLongUrl/${shortCode}`);
    const data = await response.json();
    if (response.ok) {
        return data.long_url;
    } else {
        throw new Error(data.message || "Failed to retrieve long URL");
    }
};

export const GetUserUrls = async () => {
    const token = localStorage.getItem("token");
    const response = await fetch(`${BUSINESS_API_URL}/getUserUrls`, {
        method: "GET",
        headers: {
            "Content-Type": "application/json",
            Authorization: `Bearer ${token}`,
        },
    });
    const data = await response.json();
    if (response.ok) {
        return data.urls.sort(
            (a: any, b: any) =>
                new Date(b.created_at).getTime() -
                new Date(a.created_at).getTime()
        );
    } else {
        throw new Error(data.message || "Failed to retrieve user URLs");
    }
};
