import { useState } from "react";
import { RiContactsBook2Fill } from "react-icons/ri";
import { BsFillChatSquareTextFill } from "react-icons/bs";
import Conversation from "./Conversation";
import Contact from "./Contact";
const SideBar = () => {
  const CONTACT = "CONTACT";
  const CONVERSATION = "CONVERSATION";
  const [show, setShow] = useState(CONTACT);

  return (
    <section className="w-1/2 flex flex-column">
      <aside className="border-r border-gray-400 overflow-auto w-80 grow">
        <button>
          <RiContactsBook2Fill onClick={() => setShow(CONTACT)} />
        </button>
        <button>
          <BsFillChatSquareTextFill onClick={() => setShow(CONVERSATION)} />
        </button>
        {show === CONTACT && <Contact />}
        {show === CONVERSATION && <Conversation />}
      </aside>
    </section>
  );
};

export default SideBar;
