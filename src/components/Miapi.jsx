import React, { useState, useEffect,  } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import Card from "react-bootstrap/Card";
import ListGroup from "react-bootstrap/ListGroup";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Button from "react-bootstrap/Button";
import SearchBar from "./SearchBar"; // Importa el componente SearchBar

function Miapi() {
  const [info, setInfo] = useState([]);
  const [error, setError] = useState(null);
  const [searchTerm, setSearchTerm] = useState("");
  const [page, setPage] = useState(1);

  useEffect(() => {
    setPage(1);
    fetchApiData();
  }, [searchTerm]);

  useEffect(() => {
    console.log("Component loaded");
    fetchApiData();
  }, [page]);

  const fetchApiData = async (term = "") => { // La función fetchApiData realiza peticiones a la API de Rick and Morty .
    try {
      const url = `https://rickandmortyapi.com/api/character/?name=${term}&page=${page}`;
      const response = await fetch(url); //the variable where the response to the request to the URL is stored.

      if (!response.ok) {
        throw new Error("Failed to fetch data from API.");
      }

      const data = await response.json(); //toma los datos en formato JSON 
      setInfo(data.results);//
      setError(null); // Clear error on successful fetch
    } catch (error) {
      console.error("Error fetching API:", error);
      setError("Error loading data. Please try again later.");
      setInfo([]); // Clear data on error
    }
  };

  const handleSearch = (term) => {
    setSearchTerm(term);
    setPage(1);
    fetchApiData(term);
  };

  const goToPreviousPage = () => {
    if (page > 1) {
      setPage(page - 1);
    }
  };

  const goToNextPage = () => {
    setPage(page + 1);
  };

  // Punto 6: Función para ordenar los resultados por nombre
  const sortByName = () => {
    const sortedByName = [...info].sort((a, b) => {
      return a.name.localeCompare(b.name); // Compare names alphabetically
    });
    setInfo(sortedByName);
  };

  return (
    <>
      <Container className="mt-5">
        <Row className="justify-content-center">
          <Col xs={12} md={6} className="text-center d-lg-block">
            {/* Elimina el componente Hero aquí */}
            <SearchBar onSearch={handleSearch} />
            {/* Punto 6: Botón para ordenar los resultados */}
            <Button variant="primary" onClick={sortByName}>
              Sort by name
            </Button>
          </Col>
        </Row>
        {error && <p>Error: {error}</p>}
        <Container className="mt-5">
          <Row className="g-4">
            {/* Punto 4: Muestra de resultados de la API */}
            {info.map((character) => (
              <Col key={character.id} xs={12} md={6} lg={3}>
                <Card className="mb-3">
                  <Card.Img
                    variant="top"
                    src={character.image}
                    alt={character.name}
                  />
                  <Card.Body>
                    <Card.Title>{character.name}</Card.Title>
                    <Card.Text>Status: {character.status}</Card.Text>
                    <Card.Text>Species: {character.species}</Card.Text>
                  </Card.Body>
                  <ListGroup className="list-group-flush">
                    <ListGroup.Item>Gender: {character.gender}</ListGroup.Item>
                    <ListGroup.Item>Origin: {character.origin.name}</ListGroup.Item>
                    <ListGroup.Item>Location: {character.location.name}</ListGroup.Item>
                  </ListGroup>
                </Card>
              </Col>
            ))}
          </Row>
          <Row className="justify-content-center mt-3">
            <Col xs={12} md={6}>
              {/* Punto 6: Botones para paginación */}
              <Button
                variant="primary"
                onClick={goToPreviousPage}
                className="me-2"
                disabled={page === 1}
              >
                Previous Page
              </Button>
              <Button variant="primary" onClick={goToNextPage}>
                Next Page
              </Button>
            </Col>
          </Row>
        </Container>
      </Container>
    </>
  );
}

export default Miapi;
