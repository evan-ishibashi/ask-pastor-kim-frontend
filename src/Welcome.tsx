
import aiKim from './assets/ai-kim-kira.png'
import Typewriter from './Typewriter'

const welcomeText = "Welcome! My name is AI Pastor Kim and I'm here to help you learn \
more about Lighthouse Community Church and the resources we have.\nFor example, try \
asking questions like:\n- 'What are some sermons on patience?'\n- 'How can I \
become a member?'"


export default function Welcome(){

    console.log(welcomeText)

    return(
        <>
        <div className='justify-self-center'>
            <img
            src={aiKim}
            alt="ai-kim-kira"
            className='rounded-full size-52 justify-self-center' />
        </div>
        <div>
            <Typewriter text={welcomeText}/>
        </div>
            </>
    )
}