import { ConfirmBoxType } from 'src/types';
import ConfirmBoxButtons from './ConfirmBoxButtons';
import LogOut from '../LogOut';

function ConfirmBox({
  children,
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
}: ConfirmBoxType) {
  return (
    <div className='react-confirm-box'>
      <h4>{children}</h4>
      <ConfirmBoxButtons
        onCancel={onCancel}
        onConfirm={onConfirm}
        taskFailure={taskFailure}
        startGame={startGame}
        isLogOut={isLogOut}
        setPaused={setPaused}
        setDisabled={setDisabled}
        navigate={navigate}
        setNextClicked={setNextClicked}
        setCanChangePet={setCanChangePet}
        logOut={LogOut}
      />
    </div>
  );
}

export default ConfirmBox;
