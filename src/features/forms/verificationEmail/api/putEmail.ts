// export =================================================== //
export async function putEmail(
    email: FormDataEntryValue
): Promise<boolean> {
    return await fetch(
        "http://localhost:9000/api/verification",
        {
            method: "PUT",
            headers: {
                "Content-Type": "application/json",
            },
            body: JSON.stringify({ email })
        }
    ).then(response => response.json());
};