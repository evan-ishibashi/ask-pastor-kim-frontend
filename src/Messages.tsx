import {MessageType} from "./interface";
import Answer from "./Answer";
import Links from "./Links";

export default function Messages({messages, lastMessageRef}:{messages:MessageType[], lastMessageRef:React.RefObject<HTMLDivElement | null>}) {
    return(
        <>
    {messages.map((msg:MessageType, idx) => (
        <div
        key={idx}
        className={`p-2 rounded-xl max-w-fit ${
            msg.sender === "user" ? "bg-blue-100 justify-self-end" : "bg-gray-100 justify-self-start"
        }`}
        >

        <div ref={lastMessageRef} />
        <Answer text={msg.text} />
        {msg.sender === "bot" && <Links links={msg.links}/>}

    </div>
    ))}
    </>
    )
}