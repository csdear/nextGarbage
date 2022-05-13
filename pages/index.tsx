import Hello from "../src/components/hello";
import RenderCounter from "../src/components/render-counter";
import Search from "../src/components/search";
import BareBones from "../src/components/bare-bones"

const Index = ()=>(
<div>
    <h1>Garbage.</h1>
    <Hello />
    <RenderCounter/>
    <Search/>
    <BareBones/>
</div> );
export default Index;