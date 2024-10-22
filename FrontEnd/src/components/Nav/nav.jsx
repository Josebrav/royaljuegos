import { Box, Button, Image, Link, Text, Input, Stack } from "@chakra-ui/react";
import { useState } from "react"; // Importamos useState para controlar el estado del dropdown
import logo from '../../assets/IMG_3867.png';
import { FaGoogle } from "react-icons/fa"; // Icono de Google

export default function Navbar() {
  const [isLoginOpen, setIsLoginOpen] = useState(false); // Estado para mostrar/ocultar cuadro de inicio de sesión

  const toggleLoginBox = () => {
    setIsLoginOpen(!isLoginOpen); // Cambia el estado al hacer clic en "Iniciar Sesión"
  };

  return (
    <Box 
      width="100%"
      height="100px"
      bgAttachment={"fixed"}
      display="flex"
      bg="linear-gradient(180deg, #000000 80%, #666666 100%)" /* Gradiente gris */
      padding="15px"
      alignItems="center"
      position="relative" // Importante para posicionar el cuadro de login
    >
      <Image src={logo} color={"white"} pr={"120px"} w={"25%"} pt={"10px"} />
      <Box mr={"15px"}>
        <Link to="/">
          <Text borderRadius={"20px"} color={"white"} fontSize={"20px"}>
            Bingo
          </Text>
        </Link>
      </Box>
      <Box mr={"15px"}>
        <Link to="/">
          <Text borderRadius={"20px"} color={"white"} fontSize={"20px"}>
            Ruleta
          </Text>
        </Link>
      </Box>
      <Box mr={"15px"}>
        <Link to="/">
          <Text borderRadius={"20px"} color={"white"} fontSize={"20px"}>
            Parchis
          </Text>
        </Link>
      </Box>
      <Box mr={"15px"}>
        <Link to="/">
          <Text borderRadius={"20px"} color={"white"} fontSize={"20px"}>
            y 10 juegos más
          </Text>
        </Link>
      </Box>
      
      {/* Botón de Iniciar Sesión */}
      <Box mr={"15px"} ml={"auto"}>
        <Button
          borderRadius={"20px"}
          color={"black"}
          bgColor={"#56e215"}
          fontSize={"20px"}
          onClick={toggleLoginBox} // Abrimos el cuadro al hacer clic
        >
          Iniciar Sesión
        </Button>
      </Box>
      <Box mr={"15px"}>
        <Link to="/">
          <Button borderRadius={"20px"} color={"black"} fontSize={"20px"} bgColor={"#56e215"}>
            Registrarse
          </Button>
        </Link>
      </Box>

      {/* Cuadro desplegable de inicio de sesión */}
      {isLoginOpen && (
        <Box
          position="absolute"
          top="100px" // Colocamos el cuadro debajo de la navbar
          right="10%" // Ajustamos para que esté alineado a la derecha
          bg="white"
          p="20px"
          boxShadow="lg"
          borderRadius="10px"
          width="300px"
        >
          <Stack spacing={4}>
            <Input placeholder="Usuario" type="text" />
            <Input placeholder="Contraseña" type="password" />
            <Button
              leftIcon={<FaGoogle />}
              colorScheme="red"
              variant="outline"
              width="100%"
            >
              Iniciar sesión con Google
            </Button>
            <Button colorScheme="teal" variant="solid" width="100%">
              Iniciar sesión
            </Button>
          </Stack>
        </Box>
      )}
    </Box>
  );
}
