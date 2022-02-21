
import '../App.css';
import Tabela from '../common/Tabela';

import Header from '../common/Header';





function MarcarPresenca({pisoCurrent}) {




  return (
    <div>
            <Header/>     
            <Tabela piso={pisoCurrent}/>
            
    </div>
   

  );
}

export default MarcarPresenca;
