import { ConfirmBoxButtonsType } from 'src/types';

function ConfirmBoxButtons({
  onCancel,
  onConfirm,
  taskFailure,
  startGame,
  isLogOut,
  setPaused,
  setDisabled,
  navigate,
  setNextClicked,
  setCanChangePet,
  logOut,
}: ConfirmBoxButtonsType) {
  return (
    <div className='confirm-box-btnWrapper'>
      <button
        onClick={() => {
          onCancel();
          if (taskFailure) setPaused(false);
          setDisabled(false);
        }}
      >
        {taskFailure && 'Continue'}
        {startGame && 'Start!'}
        {isLogOut && 'Continue'}
      </button>
      <button
        onClick={() => {
          onConfirm();
          if (taskFailure) navigate('../taskfailure');
          if (startGame) {
            setNextClicked(true);
            setTimeout(() => navigate('../gamego'), 150);
            setCanChangePet(false);
          }
          setDisabled(false);
          if (isLogOut) {
            return logOut();
          }
        }}
      >
        Continue
        {taskFailure && 'Forfeit'}
        {startGame && 'Start!'}
        {isLogOut && 'Logout'}
      </button>
    </div>
  );
}

export default ConfirmBoxButtons;
