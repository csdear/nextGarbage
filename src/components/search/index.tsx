import { FC, useState } from "react";
import getSlouchy from "../slouch";
import styled from 'styled-components';
import { calculator, FireTimesTen } from "../../utils/calc";


// Styling a regular HTML input via styled-components
const StyledInput = styled.input`
  display: block;
  margin: 20px 0px;
  border: 3px solid lightblue;
`;

const Search: FC = () => {
    const [searchInputText, setSearchInputText] = useState<string>('');
    const [badConcatText, setbadConcatText] = useState<string>('');
    const personId = 42;
    const loveTacos = true;

    // const [calculatorInputText1, setCalculatorInputText1] = useState<number>(0);
    // const [calculatorInputText2, setCalculatorInputText2] = useState<number>(0);



    const [dataOptions] = useState([
        {
          label: "Luke Skywalker",
          value: "Luke Skywalker"
        },
        { label: "C-3PO", value: "C-3PO" },
        { label: "R2-D2", value: "R2-D2" }
      ]);

    //   const [dataOptions] = useState([1, 2, 3, 4]);
      const [selected, setSelected] = useState("");

    const handleOnSearch = () => {
        // just call the  helper function... no return
        slouchyFireA(searchInputText, personId, loveTacos);
      };

      const handleOnSearchTwo = () => {
        // call the helper function, do some work, and return the result, and set it to
        // state (badConcatText) so we can render it out.
        // good example of  USER DATA IN ---> DO WORK IN OUTSIDE FUNCTION ---> RETURN RESULT AND RENDER.
        const theRub = slouchyFireB(searchInputText, personId );
        console.log(theRub);
        setbadConcatText(theRub);
      };

      // Reset Input Field handler
        const resetInputField = () => {
            setSearchInputText("");
        };



// Playing with util functions
    const {
      data,
      slouchyA,
      slouchyB,
      slouchyFireA,
      slouchyFireB,
  } = getSlouchy(); //mock a utility/helper or custom hook.

  // a returning calc util function
  const {
    add,
    sub,
    mul,
    div,
  } = calculator;

  const num1 = 100;
  const num2 = 125;

  const result = add(num1,num2);
  console.log(result);

  // a voidoid non value returning util function.
  FireTimesTen(5);

  return (
    <div>
      <h1>Slouchy Search</h1>
      {slouchyA && <p>Found Suzy : {slouchyA}</p>}
      {slouchyB && <p>Found tacos : {slouchyB}</p>}
      {data && data.map((x, index) => (
        <p key={index}>{index} {x.email}</p>
      ))}
      <StyledInput
        onChange={(e) => setSearchInputText(e.target.value)}
        label={"Search"}
        id={""}
        value={searchInputText}
      />
      <p>You entered :{searchInputText}</p>
      <button onClick={handleOnSearch}>Search</button>
      <button onClick={handleOnSearchTwo}>Search Two</button>

      <button onClick={resetInputField}>CLEAR</button>

      <p>Click button 'Search Two' and ill make one bad concat: {badConcatText}</p>

    <p>
          React <code> SELECT RESET </code> demo.
        </p>
        <select value={selected} onChange={(e) => setSelected(e.target.value)}>
          <option>Select</option>
          {dataOptions &&
            dataOptions.map((d, index) => {
              return <option key={index}>{d.value}</option>;
            })}
        </select>
        <br />
        <button onClick={() => setSelected("")}>CLEAR DropDown</button>


    </div>
  );
};

export default Search;