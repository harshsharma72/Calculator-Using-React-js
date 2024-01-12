import styles from "./ButtonContainer.module.css";
const ButtonContainer = ({ onButtonClick }) => {
  let buttons = [
    "C",
    "1",
    "2",
    "+",
    "3",
    "4",
    "-",
    "5",
    "6",
    "*",
    "7",
    "8",
    "/",
    "=",
    "9",
    "0",
    ".",
  ];
  return (
    <>
      <div className={styles.buttonContainer}>
        {buttons.map((btn) => (
          <button className={styles.btn} onClick={() => onButtonClick(btn)}>
            {btn}
          </button>
        ))}
      </div>
    </>
  );
};

export default ButtonContainer;
