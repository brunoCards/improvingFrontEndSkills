import React, { useRef, useEffect } from "react";
import ChannelMessage, { Mention } from "../ChannelMessage";
import { Container, Messages, InputWrapper, Input, InputIcon } from "./styles";

const ChannelData: React.FC = () => {
  const messagesRef = useRef() as React.MutableRefObject<HTMLDivElement>;

  useEffect(() => {
    const div = messagesRef.current;
    if (div) {
      div.scrollTop = div.scrollHeight;
    }
  }, [messagesRef]);

  return (
    <Container>
      <Messages ref={messagesRef}>
        <ChannelMessage
          author="Bruno Cards"
          date="29/10/2020"
          content="Teste"
        />

        <ChannelMessage
          author="Bruno Cards"
          date="29/10/2020"
          content="Teste"
        />

        <ChannelMessage
          author="Son Goku"
          date="29/10/2020"
          content={
            <>
              <Mention>@Vegeta</Mention> , Eu irei acabar com você!
            </>
          }
          hasMention
          isBot
        />

        <ChannelMessage
          author="Vegeta"
          date="29/10/2020"
          content={
            <>
              <Mention>@Kakaroto</Mention> , Você é um verme despresível!
            </>
          }
          hasMention
        />

        <ChannelMessage
          author="Bruno Cards"
          date="29/10/2020"
          content="Teste"
        />

        <ChannelMessage
          author="Bruno Cards"
          date="29/10/2020"
          content="Teste"
        />

        <ChannelMessage
          author="Bruno Cards"
          date="29/10/2020"
          content="Teste"
        />

        <ChannelMessage
          author="Bruno Cards"
          date="29/10/2020"
          content="Teste"
        />

        <ChannelMessage
          author="Bruno Cards"
          date="29/10/2020"
          content="Teste"
        />

        <ChannelMessage
          author="Bruno Cards"
          date="29/10/2020"
          content="Teste"
        />

        <ChannelMessage
          author="Bruno Cards"
          date="29/10/2020"
          content="Teste"
        />

        <ChannelMessage
          author="Bruno Cards"
          date="29/10/2020"
          content="Teste"
        />
      </Messages>
      <InputWrapper>
        <Input type="text" placeholder="Cobversar em #chat-livre" />
        <InputIcon />
      </InputWrapper>
    </Container>
  );
};

export default ChannelData;
