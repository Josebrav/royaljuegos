import { Box, Text } from "@chakra-ui/react";

export default function () {
    return(
        <Box
        w={"75%"} /* La caja azul ocupa el 80% del ancho de la pantalla */
        h={"300px"}
        bgColor={"#709c8a"}
        m={"0 auto"} /* Centrar la caja azul horizontalmente */
        mt={"1%"}
         /* Usar marginBottom directamente */
        display={"flex"} /* Usamos flex para alinear el contenido interno */
        justifyContent={"center"} /* Centrar el contenido de la caja azul */
        alignItems={"center"}
      >
            <Box 
               
              p={"20px"} /* Agregamos padding a la caja amarilla */
              w={"80%"} /* La caja amarilla ocupa el 80% del ancho de la caja azul */
              m={"10%"} /* Margen del 10% dentro de la caja azul */
            >
              <Text
              textAlign={"center"}
              fontSize={"80px"}>Novedades</Text>
            </Box>
        </Box>
    )
}
