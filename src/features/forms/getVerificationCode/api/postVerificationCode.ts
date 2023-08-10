// export =================================================== //
export async function postVerificationCode(
    verificationCode: FormDataEntryValue
): Promise<boolean> {
    return await fetch(
        "http://localhost:9000/api/verification",
        {
            method: "POST",
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify({ verificationCode }, null, 2)
        }
    ).then(response => response.json());
};
// export async function putEmail(
//     email: FormDataEntryValue
// ): Promise<boolean> {
//     return await fetch(
//         "http://localhost:9000/api/verification",
//         {
//             method: "PUT",
//             headers: { "Content-Type": "application/json" },
//             body: JSON.stringify({ email }, null, 2)
//         }
//     ).then(response => response.json());
// };