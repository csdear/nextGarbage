import { FC } from "react";
import styles from "./ul.module.scss";

// GENERIC UL
// Not about to use FC with Generics...
// And may have to give up the T....
// My research consensus is that you can't create a functional component with a type annotation and make it generic
// You could still go the function route if your wanted.
// Not need React.DetailedHTMLProps either?
// but can no longer use T[] -- most likely need to  define the array shape for item as well.
// See notes re ts Pokemon array.
// from the useTodosHook I brought in todo which has the shape and renamed it item
// then my ul items can have type item[]
// next challenged is fixing these T' upd funcctions here.
// simply doing for render() and itemClick item: item seems to cause no  fuss.
// borrowing hard from navigation-link
// I have no use for  ...rest at the moment. But something to look into.
// At stasis now, lets try to use within the tsxreactCustom page...<?>
 

interface item {
    id: number;
    done: boolean;
    text: string;
  }

interface ULProps
    extends React.HTMLAttributes<HTMLUListElement> {
        items: item[];
        render: (item: item) => React.ReactNode;
        itemClick: (item: item) => void;
}

const UL: FC<ULProps> = ({
    items,
    render,
    itemClick
 }) => {
    return (
    <ul>
      {items.map((item, index) => (
        <li onClick={() => itemClick(item)} key={index}>
          {render(item)}
        </li>
      ))}
    </ul>
    );
};

export default UL;