import { MinusIcon, PlusIcon } from "@radix-ui/react-icons"

export default function CountButton({type,setCount,locked}) {
    const hendleClick=()=>{
        setCount(curr=>{
            if(type==='minus'){
                let newCount=curr-1;
                if(newCount<0){
                    return 0;
                }
                else{
                    return newCount;
                }
            }
            else{
                let newCount=curr+1;
                if(newCount>5){
                    return 5;
                }
                else{
                    return newCount;
                }
            }
        })

      }
      
  return (
    <button disabled={locked} onClick={()=>hendleClick(type)} className="count-btn">
    {
        type==="minus"?<MinusIcon className="count-btn-icon"></MinusIcon>:<PlusIcon className="count-btn-icon"></PlusIcon>
    }
    
    </button>
  )
}
