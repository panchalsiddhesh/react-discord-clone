import { useDispatch } from "react-redux";
import { setChannelInfo } from ".././features/appSlice";
import "./SidebarChannel.css";
import DeleteIcon from "@mui/icons-material/Delete";
import db from "./firebase";

function SidebarChannel({ id, channelName }) {
  const dispatch = useDispatch();

  const handleDeleteChannel = (id) => {
    if (id) {
      db.collection("channels").doc(id).delete();
    }
  };

  return (
    <div
      className="sidebarChannel"
      onClick={() =>
        dispatch(
          setChannelInfo({
            channelId: id,
            channelName: channelName,
          })
        )
      }
    >
      <h4>
        <span className="sidebarChannel__hash">#</span>
        {channelName}
      </h4>
      <DeleteIcon onClick={() => handleDeleteChannel(id)} />
    </div>
  );
}

export default SidebarChannel;
