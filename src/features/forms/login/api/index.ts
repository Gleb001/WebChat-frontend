// types ==================================================== //
interface UserType {
    userId: FormDataEntryValue,
    firstName: FormDataEntryValue,
    lastName: FormDataEntryValue,
    email: FormDataEntryValue,
    password: FormDataEntryValue,
}

// main ===================================================== //
export async function postUser(data: UserType) {
    return await fetch(
        "http://localhost:9000/api/users/",
        {
            method: "POST",
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify(data)
        }
    ).then(response => response.json());
};