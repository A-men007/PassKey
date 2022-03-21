import Link  from 'next/link';
import classes from './PasswordItem.module.css';
import Image from 'next/image';
import editImage from '../../img/edit.png';
import deleteImage from '../../img/delete.png';

const PasswordItem = (props) => {
   
    return(
        <ul className={classes.passItem}>
            <li className={classes.checkBox}><input type="checkbox"></input></li>
            <li className={classes.passName}>{props.passwordInfo.name}</li>
            <li className={classes.passDecription}>{props.passwordInfo.description}</li>
            <li className={classes.passStatus}>{props.passwordInfo.status}</li>
            <li className={classes.editPass}><Link className={classes.lin} href= '/home'><a><Image src={editImage} width='35%' height='32%' /></a></Link></li>
            <li className={classes.deletePass}><Image src={deleteImage} width='28%' height='28%' /></li>
            <li className={classes.options}> . . . </li>
        </ul>  
    );
}

export default PasswordItem;

/**
 * This component renders each password item in the passwords list/table.
 */