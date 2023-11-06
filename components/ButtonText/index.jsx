<<<<<<< HEAD
import { Container } from "./styles";

export function ButtonText ({ title, isActive = false, ...rest }) {
    return (
        <Container
            type="button"
            $isactive={isActive.toString()}
            {...rest}
        >
            {title}
        </Container>
    );
=======
import { Container } from "./styles";

export function ButtonText ({ title, isActive = false, ...rest }) {
    return (
        <Container
            type="button"
            $isactive={isActive.toString()}
            {...rest}
        >
            {title}
        </Container>
    );
>>>>>>> f707860f216b5e0c4ff5a3b339bc02f6fb8ce508
}