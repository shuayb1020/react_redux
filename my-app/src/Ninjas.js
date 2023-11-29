const Ninjas=({ninjas, deleteNinja})=>{
        
    //     const ninjasList= ninjas.map(ninja => {
    //         if (ninja.age > 20 || ninja.name==="Ope"){
    //     return(
    //         <div className="ninjas" key={ninja.id}>
    //             <div> Name: {ninja.name}</div>
    //             <div>Age: {ninja.age}</div>
    //             <div>Belt: {ninja.belt}</div>
    //         </div>
    //     )}else{
    //         return null;
    //     }
    // })
    return(
        <div className="ninjas-list">
            {ninjas.map(ninja => {
             return  ninja.age > 20 || ninja.name==="Ope"?
        (
            <div className="ninjas" key={ninja.id}>
                <div> Name: {ninja.name}</div>
                <div>Age: {ninja.age}</div>
                <div>Belt: {ninja.belt}</div>
                <button onClick={()=>{deleteNinja(ninja.id)}}>delete Ninja</button>
            </div>
        ): null;
        
    })}
        </div> 
    )
     
    
}

export default Ninjas;