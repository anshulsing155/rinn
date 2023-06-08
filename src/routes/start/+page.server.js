export const actions = {
    default: async({ request }) => {
        const formData = await request.formData();
        const firstname = formData.get("amount")
        // const lastname = formData.get("lastname")
        // const email = formData.get("email")
        // const gender = formData.get("gender")
        // const address = formData.get("address")
        console.log({firstname})
    }
}