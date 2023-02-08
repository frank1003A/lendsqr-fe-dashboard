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
  return (
    <div className="card" id={props.id}>
        <span className='icon'>
          <img src={props.icon} alt={`${props.icon}_icon`}/>
        </span>
        <span className='name'>{props.name}</span>
        <span className='fig'>{formatNumberWithCommas(props.fig)}</span>
    </div>
  )
}

export default Card