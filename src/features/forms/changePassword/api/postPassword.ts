// export =================================================== //
export async function postPassword(
    password: FormDataEntryValue
): Promise<boolean> {
    return await fetch(
        "http://localhost:9000/api/user",
        {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
            },
            body: JSON.stringify({ password })
        }
    ).then(response => response.json());
};