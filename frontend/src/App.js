import './App.css';
import axios from 'axios'
import {useEffect, useState} from 'react'
import Header from './components/Header';
import TableComponent from './components/TableComponent'
import { Container, Button , Row, Col} from 'react-bootstrap';
import ModalComponent from './components/ModalComponent';

function App() {
  const [modalShow, setModalShow] = useState(false);

  useEffect(() => {
    const fetchExpenses = async () => {
      const {data} = await axios.get('/api/expenses')

      console.log(data)
    }
    fetchExpenses()
  })
  return (
    <>
   <Header />
   <main className='py-3'>
   <Container>
     <Row>
   
   <h1>Expenses</h1>
  
   <Col className='offset-md-10'>
   <Button variant="primary" className='mb-2' onClick={() => setModalShow(true)}>Add Expense</Button>
   </Col>
   <TableComponent />
   </Row>
   
   <ModalComponent  show={modalShow}
        onHide={() => setModalShow(false)} />
   </Container>
   </main>
   </>
  );
}

export default App;
