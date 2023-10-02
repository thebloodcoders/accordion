import { useState } from "react";
import AccordionItem from "./AccordionItem";

const data = [
  {
    title: "This is demo title 1",
    desc: "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Dolorem repellat earum culpa quisquam incidunt exercitationem autem voluptas cum eos sequi!",
  },
  {
    title: "This is demo title 2",
    desc: "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Exercitationem, quisquam?",
  },
  {
    title: "This is demo title 3",
    desc: "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Cum magni fugiat aliquid repudiandae tenetur libero illum voluptates id dolorum? Illum sed ipsam, blanditiis rerum modi quibusdam necessitatibus. In ab optio soluta dolor odio, ut impedit nulla amet, quia expedita ad.",
  },
];

const Accordion = () => {
  const [open, setOpen] = useState<boolean | number>(false);

  const toggle = (index: number) => {
    if (index === open) {
      return setOpen(false);
    }

    setOpen(index);
  };

  return (
    <div className="accordion_holder">
      {data.map((item, index) => (
        <AccordionItem
          key={item.title}
          title={item.title}
          desc={item.desc}
          open={index === open}
          toggle={() => toggle(index)}
        />
      ))}
    </div>
  );
};

export default Accordion;
