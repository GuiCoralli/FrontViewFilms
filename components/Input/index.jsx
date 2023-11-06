<<<<<<< HEAD
import { Container } from './styles';

export function Input ({ icon : Icon, ...rest}) {
    return (
        <Container>
            { Icon && < Icon size={20} /> }
            <input {...rest} />
        </Container>
    )
=======
import { Container } from './styles';

export function Input ({ icon : Icon, ...rest}) {
    return (
        <Container>
            { Icon && < Icon size={20} /> }
            <input {...rest} />
        </Container>
    )
>>>>>>> f707860f216b5e0c4ff5a3b339bc02f6fb8ce508
}