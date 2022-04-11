import { useState } from "react";
import { RiContactsBook2Fill } from "react-icons/ri";
import { BsFillChatSquareTextFill } from "react-icons/bs";
const SideBar = () => {
  const CONTACT = "CONTACT";
  const CONVERSATION = "CONVERSATION";
  const [show, setShow] = useState(CONTACT);

  return (
    <section>
      {show === CONTACT && <p>Contact</p>}
      {show === CONVERSATION && <p>Conversation</p>}
      <button>
        <RiContactsBook2Fill onClick={() => setShow(CONTACT)} />
      </button>
      <button>
        <BsFillChatSquareTextFill onClick={() => setShow(CONVERSATION)} />
      </button>
    </section>
  );
};

export default SideBar;
