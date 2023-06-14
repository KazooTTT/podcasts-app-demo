import App from "app/flow/page"

export default function Page({ params }: { params: { index: string } }) {
  return <App index={params.index}></App>
}
