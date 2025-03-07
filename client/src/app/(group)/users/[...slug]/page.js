export default async function Page({ params }) {
    const  slug  = await params
    return <center>User {JSON.stringify(slug)}</center>
  }