import { FC, useState } from "react";
import getSlouchy from "../slouch";
import styled from 'styled-components';

// Styling a regular HTML input via styled-components
const StyledInput = styled.input`
  display: block;
  margin: 20px 0px;
  border: 1px solid lightblue;
`;

const Search: FC = () => {
    const [searchInputText, setSearchInputText] = useState<string>('');
    const [badConcatText, setbadConcatText] = useState<string>('');
    const personId = 42;
    const loveTacos = true;

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

    const {
      data,
      slouchyA,
      slouchyB,
      slouchyFireA,
      slouchyFireB,
  } = getSlouchy();

  return (
    <div>
      <h1>Slouchy Search</h1>
      {slouchyA && <p>Found Suzy : {slouchyA}</p>}
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
    </div>
  );
};

export default Search;