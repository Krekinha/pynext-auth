async function getData() {
  const api = "http://127.0.0.1:3000/api/hello";

  const res = await fetch(api, {method:'GET'})
  const data = await res.json();
  return data;
}

export default async function Home() {
  const data = await getData();
  console.log(data);

  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24 bg-slate-900 text-slate-500">
      <div>{data.message}</div>
    </main>
  );
}
