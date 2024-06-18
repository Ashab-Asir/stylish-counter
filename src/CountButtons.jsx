import { MinusIcon, PlusIcon } from "@radix-ui/react-icons";

export default function CountButtons({setCount}) {
  const hendleIncrement=()=>{
    setCount(curr=>curr+1)
  }
  const hendleDecrement=()=>{
    setCount(curr=>curr-1)
  }
  return (
    <div className="button-container">
        <button onClick={hendleDecrement} className="count-btn">
        <MinusIcon className="count-btn-icon"></MinusIcon>
        </button>
        <button onClick={hendleIncrement} className="count-btn">
          <PlusIcon className="count-btn-icon"></PlusIcon>
        </button>
      </div>
  )
}
