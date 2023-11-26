import css from './Button.module.css';

function Button({ onMore }) {
  return (
    <button className={css.button} type="button" onClick={onMore}>
      Load more
    </button>
  );
}

export default Button;