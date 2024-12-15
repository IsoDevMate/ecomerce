import React,{FC,MouseEvent} from 'react'
type RandomProps = {
   // isActive: boolean
    disabled?: boolean,
}

const Random:FC<RandomProps> = ({disabled}) :React.ReactNode => {
    const [active,setActive] = React.useState<boolean>(false)
    const handleclick = (event: MouseEvent<HTMLButtonElement>) => {
        event.preventDefault() 
        alert('Random Alert!')
        setActive(!active)
    }

  return (
    <button onClick={handleclick}  disabled={disabled}>Hey there am i disabbled</button>
  )
}

export default Random


