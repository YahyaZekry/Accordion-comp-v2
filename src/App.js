import { useState } from "react";
import "./styles.css";

const faqs = [
  {
    title: "Where are these chairs assembled?",
    text: "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Accusantium, quaerat temporibus quas dolore provident nisi ut aliquid ratione beatae sequi aspernatur veniam repellendus.",
  },
  {
    title: "How long do I have to return my chair?",
    text: "Pariatur recusandae dignissimos fuga voluptas unde optio nesciunt commodi beatae, explicabo natus.",
  },
  {
    title: "Do you ship to countries outside the EU?",
    text: "Excepturi velit laborum, perspiciatis nemo perferendis reiciendis aliquam possimus dolor sed! Dolore laborum ducimus veritatis facere molestias!",
  },
];

export default function App() {
  return (
    <div>
      <Accordion faqs={faqs} />
    </div>
  );
}

function Accordion({ faqs }) {
  const [curOpen, setCurOpen] = useState(null);
  return (
    <div className="accordion">
      {faqs.map((el, i) => (
        <AccordionItem
          num={i}
          title={el.title}
          text={el.text}
          key={i}
          curOpen={curOpen}
          onOpen={setCurOpen}
        />
      ))}

      <AccordionItem
        num={4}
        title="test 1"
        key="test 1"
        curOpen={curOpen}
        onOpen={setCurOpen}
      >
        <p>Allows React developers to:</p>
        <ul>
          <li>Break up Ul into components</li>
          <li>Make components reusuable</li>
          <li>Place state efficiently</li>
        </ul>
      </AccordionItem>
    </div>
  );
}

function AccordionItem({ num, title, text, curOpen, onOpen, children }) {
  // const [isOpen, setIsIopen] = useState(false);
  let isOpen = num === curOpen;
  function handleOpen() {
    if (curOpen === num) {
      onOpen(null);
    } else {
      onOpen(num);
    }
  }
  return (
    <div className={isOpen ? "item open" : "item"} onClick={handleOpen}>
      <p className="number">0{num + 1}</p>
      <p className="title">{title}</p>
      <p className="icon">{isOpen ? "-" : "+"}</p>
      {isOpen && <div className="content-box">{text || children}</div>}
    </div>
  );
}
