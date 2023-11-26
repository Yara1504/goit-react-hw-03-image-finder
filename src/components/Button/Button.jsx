import css from './Button.module.css';

function Button({ loadMore }) {
  return (
    <button className={css.button} type="button" onClick={loadMore}>
      Load more
    </button>
  );
}

export default Button;