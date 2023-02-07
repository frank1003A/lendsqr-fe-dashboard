import { formatNumberWithCommas } from "utils";

interface Props {
    /**image or icon to render on card: 40px */
    icon?: string;
    /**name or category of card */
    name: string;
    /**numbers */
    fig: number;
    /**id of component */
    id: string;
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
    <div className="card" id={props.id}>
        <span className='icon'>
          <img src={props.icon} alt={`${slice(props.icon as string)}_icon`} />
        </span>
        <span className='name'>{props.name}</span>
        <span className='fig'>{formatNumberWithCommas(props.fig)}</span>
    </div>
  )
}

export default Card