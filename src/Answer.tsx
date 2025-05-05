import ReactMarkdown from 'react-markdown';

export default function Answer({text}:{text:string}){
    return(
        <>
        <ReactMarkdown
            components={{
                ol: ({ children }) => <ol className="list-decimal ml-6 mb-4 text-sm">{children}</ol>,
                ul: ({ children }) => <ul className="list-disc ml-6 mb-4 text-sm">{children}</ul>,
                li: ({ children }) => <li className="mb-1">{children}</li>,
                p: ({ children }) => <p className="mb-2 text-base">{children}</p>,
                }}
            >
                {text}
        </ReactMarkdown>
                    </>
    )
}