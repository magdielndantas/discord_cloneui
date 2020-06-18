import React from 'react'

import {Container, Role, User, Avatar} from './styles'

interface UserProps{
    nickname: string;
    isBot?: boolean;
}

const UserRow: React.FC<UserProps> = (
{   nickname,
    isBot}
)=>{
    return(
        <User>
            <Avatar className={isBot ? 'bot' : ''}/>
            <strong>{nickname}</strong>

            {isBot && <span>Bot</span>}
        </User>
    )
}


const Userlist: React.FC = () =>{
    return(
        <Container>
            <Role>Disponível - 1</Role>
            <UserRow nickname='Magdiel Dantas'/>

            <Role>Offline - 4</Role>
            <UserRow nickname='Diego Fernandes' isBot/>
            <UserRow nickname='Fulano'/>
            <UserRow nickname='Guilherme Rodz'/>
            <UserRow nickname='Sicrano'/>
            <UserRow nickname='Sicrano'/>
            <UserRow nickname='Sicrano'/>
            <UserRow nickname='Sicrano'/>
            <UserRow nickname='Sicrano'/>
            <UserRow nickname='Sicrano'/>
            <UserRow nickname='Sicrano'/>
            <UserRow nickname='Sicrano'/>
            <UserRow nickname='Sicrano'/>
            <UserRow nickname='Sicrano'/>
        </Container>
    )
};

export default Userlist