import { Author, Container, Description, Title } from "./styles";
import { ptBR } from 'date-fns/locale'
import { format } from 'date-fns'

export const Post = ({ title, description, author, createAt }) => {
    return (
        <Container>
            <Title>{title}</Title>
            <Description>{description}</Description>
            <Author>
                Por: <strong>{author}</strong> em {format(new Date(), 'dd/MMMM/yyyy - HH:mm', { locale: ptBR })}
            </Author>
        </Container>
    );
};
