import { MinusIcon, PlusIcon } from "@radix-ui/react-icons";

export default function CountButtons() {
  return (
    <div className="button-container">
        <button className="count-btn">
        <MinusIcon className="count-btn-icon"></MinusIcon>
        </button>
        <button className="count-btn">
          <PlusIcon className="count-btn-icon"></PlusIcon>
        </button>
      </div>
  )
}
