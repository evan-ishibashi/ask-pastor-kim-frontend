import { SourceType } from "./interface";
import { useState } from "react";


export default function Links({ links }: { links: SourceType[] | undefined }) {
    const [showLinks, setShowLinks] = useState<Boolean>(false)

    function handleOnClick(){
        setShowLinks(true);
    }

    return (
      <div className="mt-0 flex flex-col">
       <button onClick={handleOnClick} className={`text-blue text-sm ${showLinks ? 'hidden':''}`}>
        Show Links
       </button>
        <div className={showLinks ? "": "hidden"}>
        {links?.length ? (
            links.map((link, idx) => (
                <a
                key={idx}
                href={link.url}
                target="_blank"
                rel="noopener noreferrer"
                style={{
                    display: 'block',
                    marginBottom: '2px',
                    fontSize: '8px',
                    color: 'blue'
                }}
                >
              {link.url}
            </a>
          ))
        ) : (
            <p>No links available</p>
        )}
        </div>
      </div>
    );
  }