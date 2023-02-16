import { Container as ContainerContent} from 'semantic-ui-react';

export default function Container({children}){
    return (
        < ContainerContent text>{children}</ ContainerContent>
    )
};