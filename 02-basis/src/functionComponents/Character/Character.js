import styles from './Character.module.scss';
import PropTypes from 'prop-types';

const Character = ({
  character,
  status
}) => {
  const { image, name } = character;
  return (
    <div className={styles.card}>
      <img src={image} alt={name} />
      <div className={styles['card-body']}>
        <h3>{name}</h3>
        <p>{status}</p>
      </div>
    </div>
  );
};

Character.propTypes = {
  //img: PropTypes.string.isRequired,
  //name: PropTypes.string.isRequired,
  character: PropTypes.shape({
    image: PropTypes.string.isRequired,
    name: PropTypes.string.isRequired
  }).isRequired,
  status: PropTypes.string
}

Character.defaultProps = {
  status: 'Desconocido'
}

export default Character;
