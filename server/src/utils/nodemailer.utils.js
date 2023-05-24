export const generateMessage = ({ name, email, message }) => {
    const contentHTML = `
        <h1>User Information</h1>
        <ul>
            <li>Name: ${name}</li>
            <li>User Email: ${email}</li>
        </ul>
        <p>${message}</p>
    `

    const fullMessage = {
        from: "'Portfolio Server' <jorgeechiavarino@gmail.com>",
        to: 'jorgeechiavarino@gmail.com',
        subject: 'Mensaje desde portafolio',
        html: contentHTML
    }

    return fullMessage;
}