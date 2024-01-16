import './App.css';
import { useEffect } from 'react';
import getUserData from './GetData';



function App() {

  useEffect(() => {
    const fetchData = async () => {
      try {
        const userId = 1;
        const result = await getUserData(userId)
        console.log('Kullanıcı bilgileri ve postları : ', result);
      } catch (error) {
        console.log(error);
      }
    }
    fetchData();
  }, []);

  return (
    <div className="App">

    </div>
  );
}

export default App;
