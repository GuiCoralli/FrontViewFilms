<<<<<<< HEAD
import { Container } from './styles';
import { Tag } from '../Tag';

export function Note ({ data, ...rest}) {
    return(
        <Container {...rest} >
            <h1> {data.title} </h1>

            {
                data.tags &&
                <footer>
                    {
                      data.tags.map( tag => <Tag key={tag.id} title= {tag.name} />)
                    }
                </footer>
            }
        </Container>
    );
=======
import { Container } from './styles';
import { Tag } from '../Tag';

export function Note ({ data, ...rest}) {
    return(
        <Container {...rest} >
            <h1> {data.title} </h1>

            {
                data.tags &&
                <footer>
                    {
                      data.tags.map( tag => <Tag key={tag.id} title= {tag.name} />)
                    }
                </footer>
            }
        </Container>
    );
>>>>>>> f707860f216b5e0c4ff5a3b339bc02f6fb8ce508
}