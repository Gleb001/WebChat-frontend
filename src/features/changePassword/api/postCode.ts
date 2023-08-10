export async function postCode(verificationCode: number) {
    return await fetch(
        "http://localhost:9000/api/verification",
        {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
            },
            body: JSON.stringify({ verificationCode })
        }
    ).then(response => response.json());
};