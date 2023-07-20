
import './App.css';
import Person, {Button,Header,List} from './assignment';


function App() {
  const handleButtonClick = () => {
    return(  
      <>
       Congratulation🎉 <br/> Button clicked successfully!
       </>
       )
  };
  const listItems = ["Item 1", "Item 2", "Item 3", "Item 4"];
  return (
   <>
                 {/* assignment question one */}
                <h4 className='centre'>
                 Assignment question<span>one</span> solution
                </h4>
      <Person  name="Nitish" age="20"  />

                 {/* assignment question two */}
                 <h4 className='centre'>
                 Assignment question <span>two</span> solution
                </h4>

      <Button   text="click me!" onClick={handleButtonClick} />

                  {/* assignment question three */}
                  <h4 className='centre'>
                 Assignment question <span>three</span> solution
                </h4>
      <Header title="This is the header of my website"/>


                   {/* assignment question four */}
                  <h4 className='centre'>
                  Assignment question <span>four</span> solution
                   </h4>
      <List items={listItems} />
   </>
  );
}

export default App;
