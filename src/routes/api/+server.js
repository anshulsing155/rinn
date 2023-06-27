import db from '$lib/server/database'
export async function GET() {
  const formData = await db.collection('formData').find().toArray()
  return {
    status: 200,
    body: { formData }
  }
}
