import axios from "axios";
import { useEffect, useState } from "react";
import { ChakraProvider, Flex } from '@chakra-ui/react'
import Card from './componentes/card'
import Card2 from './componentes/card2'

export default function App() {
  const [users, setUsers] = useState([]);

  useEffect(() => {
    fetchUsers();
  }, []);

  const fetchUsers = async () => {
    try {
      const response = await axios.get(
        "https://jsonplaceholder.typicode.com/users"
      );

      setUsers(response.data);
    } catch (error) {
      console.log("Erro ao buscar usuários");
      console.log(error);
    }
  };

  return (
    <ChakraProvider resetCSS>
      <Flex gap={'17px'} wrap={'wrap'} justifyContent={'center'}>
        {users && users.map((user) => {
          return <Card
            key={user.id}
            nome={user.name}
            site={user.website}
          />
        })}

        {users && users.map((user)=>{
          return(
          <Card2
          key={user.id}
          nome={user.name}

          
          />
          )
        })}

      </Flex>
    </ChakraProvider>
  );
}
