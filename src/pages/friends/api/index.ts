export async function getUserData(userId: string) {
    return await fetch(
        "http://localhost:9000/api/users/",
        {
            method: "PUT",
            headers: { 'Content-Type': "application/json", },
            body: JSON.stringify({ userId })
        }
    ).then(response => response.json());
}