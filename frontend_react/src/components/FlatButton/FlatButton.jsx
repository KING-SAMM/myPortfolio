import './FlatButton.scss';
import { Link } from 'react-router-dom';

export const FlatButton = ({ text, linkAddr }) => {
  return (
    <div>
        <Link to={ linkAddr } className="flat-button text-[13px] py-2.5 px-5 mt-5 text-blue-400 ">{ text }</Link>
    </div>
  )
}

export default FlatButton;
