import { Box, Button, FormControl, FormLabel, Input, VStack, Textarea, Image } from "@chakra-ui/react";
import { FaCamera, FaFileDownload } from "react-icons/fa";

const Index = () => {
  const handleCapture = () => {
    // Aquí iría la lógica para capturar la imagen del albarán utilizando la cámara del dispositivo.
  };

  const handleGeneratePDF = () => {
    // Aquí iría la lógica para generar el PDF con los datos del formulario y la imagen capturada.
  };

  return (
    <Box p={4}>
      <VStack spacing={4}>
        <FormControl isRequired>
          <FormLabel htmlFor="customer-name">Nombre del Cliente</FormLabel>
          <Input id="customer-name" placeholder="Escribe el nombre del cliente aquí" />
        </FormControl>
        <FormControl isRequired>
          <FormLabel htmlFor="delivery-address">Dirección de Entrega</FormLabel>
          <Textarea id="delivery-address" placeholder="Escribe la dirección de entrega aquí" />
        </FormControl>
        <FormControl isRequired>
          <FormLabel htmlFor="order-list">Lista de Productos Ordenados</FormLabel>
          <Textarea id="order-list" placeholder="Escribe la lista de productos ordenados aquí" />
        </FormControl>
        <FormControl>
          <FormLabel htmlFor="file-upload">Foto del Albarán</FormLabel>
          <Input type="file" id="file-upload" accept="image/*" capture="environment" onChange={handleCapture} />
        </FormControl>
        <Button leftIcon={<FaCamera />} colorScheme="teal" onClick={handleCapture}>
          Tomar Foto del Albarán
        </Button>
        <Button leftIcon={<FaFileDownload />} colorScheme="blue" onClick={handleGeneratePDF}>
          Generar y Descargar Ficha en PDF
        </Button>
      </VStack>
    </Box>
  );
};

export default Index;
