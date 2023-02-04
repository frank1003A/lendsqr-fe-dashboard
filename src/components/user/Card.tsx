
interface Props {
    /**image or icon to render on card: 40px */
    icon?: string;
    /**name or category of card */
    name: string;
    /**numbers */
    fig: number;
}

const Card = (props: Props) => {
  // remove file type information from icon string
  const slice = (str: string): string => {
    // index of dot
    let dot = str.indexOf(".")
    // slice out the index of . tothe end of string
    let ret = str.slice(dot, str.length)
    return ret
  }
  return (
    <div className="card">
        <span className='icon'>
          <img src={props.icon} alt={`${slice(props.icon as string)}_icon`} />
        </span>
        <span className='name'>{props.name}</span>
        <span className='fig'>{props.fig}</span>
    </div>
  )
}

export default Card