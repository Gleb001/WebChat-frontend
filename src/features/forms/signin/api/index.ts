// types ==================================================== //
interface UserType {
    email: FormDataEntryValue,
    password: FormDataEntryValue,
}

// main ===================================================== //
export async function postAuth(data: UserType) {
    return await fetch(
        "http://localhost:9000/api/auth/",
        {
            method: "POST",
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify(data)
        }
    ).then(response => response.json());
};