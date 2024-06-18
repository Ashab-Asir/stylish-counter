export default function Title({locked}) {
  return (
    <h1 className="title">{locked?<span>Limit! Buy pro for &gt;5</span>:"Stylish Counter"}</h1>
  )
}
