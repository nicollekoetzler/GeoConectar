import { useEffect, useState } from "react";
import { getChats } from "@/services/chatRequisitions";
import styled from "@emotion/styled";
import MessageBox from "./MessageBox";

export default function MessagesSidebar() {
    const [ chats, setChats ] = useState([]);

    async function getAllChats() {
        try {
            const chatsList = await getChats();
            setChats(chatsList.data);
        } catch (error) {
            console.log(error);
        }
    }

    useEffect(() => {
        getAllChats();
    }, []);

  return (
    <Left>
		<Top>
			<h3>Mensagens</h3>
		</Top>
		<AllMessages>
            {
                chats.length > 0
                ?
                chats.map(chat => {
                    return (
                        <MessageBox
                            userId={ chat.userId }
                            addressedName={ chat.addressedName }
                            chatId={ chat.id } 
                            key={ chat.id }
                        />
                    );
                })
                :
                ""
            }
		</AllMessages>
	</Left>
  );
}

const Top = styled.div`
    width: 100%;
    height: 60px;
    border-bottom: 1px solid #CDCDCD;
    display: flex;
    align-items: center;
    padding-left: 32px;
    font-weight: 500;

    @media screen and (max-width: 600px) {
        padding: 0;
        justify-content: center;
    }
`;

const Left = styled.div`
    width: 30%;
    height: 100%;
    border-right: 1px solid #CDCDCD;
`;

const AllMessages = styled.div`
    height: 388px;
    padding-top: 8px;
    overflow-y: scroll;

    @media screen and (max-width: 600px) {
        display: flex;
        flex-direction: column;
        padding: 6px;
    }
`;