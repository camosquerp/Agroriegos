import styled from "styled-components";


const Container = styled.div`
  width: 100vw;
  height: 100vh;
  background: linear-gradient(
      rgba(255, 255, 255, 0.5),
      rgba(255, 255, 255, 0.5)
    ),
    url("https://www.iagua.es/sites/default/files/riegoaspersion_portada.jpg")
      center;
  background-size: cover;
  display: flex;
  align-items: center;
  justify-content: center;
`;

const Wrapper = styled.div`
  width: 40%;
  padding: 20px;
  background-color: white;

`;

const Title = styled.h1`
  font-size: 24px;
  font-weight: 300;
`;

const Form = styled.form`
  display: flex;
  flex-direction: column;
`;

const Input = styled.input`
  flex: 1;
  min-width: 40%;
  margin: 20px 10px 10px 0px;
  padding: 10px;
`;

const Button = styled.button`
  width: 40%;
  border: none;
  padding: 15px 20px;
  background-color: #0fa104;
  color: white;
  cursor: pointer;
  margin: 20px 20px 20px 165px;
  margin-botton: 10px;
`;

const Link = styled.a`
  margin: 5px 0px;
  font-size: 15px;
  text-decoration: underline;
  cursor: pointer;
  justify-content: center;
`;

const IniciarSesion = () => {
  return (
    <Container>
        <Wrapper>
            <Title>INICIAR SESIÓN</Title>
            <Form>
                <Input placeholder="Correo"/>
                <Input placeholder="Contraseña"/>
             <Button>INGRESAR</Button>
             <Link>¿Olvidaste tu contraseña?</Link>
             <Link>Crear cuenta</Link>
            </Form>
        </Wrapper>
    </Container>
  )
}

export default IniciarSesion