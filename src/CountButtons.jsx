
import CountButton from "./CountButton";

export default function CountButtons({setCount,locked}) {
  return (
    <div className="button-container">
       <CountButton locked={locked} type={"minus"} setCount={setCount}></CountButton>
       <CountButton  locked={locked} type={"plus"} setCount={setCount}></CountButton>
      </div>
  )
}
