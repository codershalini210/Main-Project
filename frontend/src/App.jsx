import Card from "./components/Card";
import Services from "./components/Services";

export default function App(){
  return(
    <>
    <Services></Services>
    <h2 className="text-amber-950">
      <div className="flex gap-10">
<Card pname="John" age={25} ></Card>  
<Card pname="Ron" age={15} ></Card>
<Card pname="Maria" age={24} ></Card>
      </div>
      
      </h2>      
      </> 
    
  )
}