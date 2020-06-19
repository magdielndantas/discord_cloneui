import React, {useRef, useEffect} from 'react'
import ChannelMessage, {Mention} from '../ChannelMessage'
import {Container, Messages, InputWrapper, Input, InputIcon} from './styles'

const ChannelData: React.FC = () =>{
    const messagesRef = useRef() as React.MutableRefObject<HTMLDivElement>

    useEffect(()=>{
        const div = messagesRef.current;

        if(div){
            div.scrollTop = div.scrollHeight;
        }
    }, [messagesRef]);

    return(
        <Container>
            <Messages ref={messagesRef}>
            {Array.from(Array(15).keys()).map((n)=>(
                <ChannelMessage
                author="Magdiel Dantas"
                date="17/06/2020"
                content="Fiz um clone da interface do Discord usando ReactJS e Typescript com o vídeo da Rocketseat"/>
            ))}
            
                <ChannelMessage
                    author="Diego Fernades"
                    date="17/06/2020"
                    content={
                        <>
                            <Mention>@Magdiel Dantas</Mention>, meus parabéns!
                        </>
                    }
                    hasMention
                    isBot
                />
            </Messages>
            <InputWrapper>
                <Input type='text' placeholder='Conversar em #chat-livre'/>
                <InputIcon/>
            </InputWrapper>
        </Container>
    )
};

export default ChannelData