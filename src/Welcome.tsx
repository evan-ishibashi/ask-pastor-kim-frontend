
import aiKim from './assets/ai-kim-kira.png';
import Typewriter from './Typewriter';
import { motion, AnimatePresence } from 'framer-motion';

const welcomeText = "Welcome! My name is AI Pastor Kim and I'm here to help you learn \
more about Lighthouse Community Church and the resources we have.\nFor example, try \
asking questions like:\n\n- 'What are some sermons on patience?'\n- 'How can I \
become a member?'\n\nRemember, the information I provide isn't always 100% accurate, but \
more meant to point you in the right direction, so please refer to https://lighthousesouthbay.org/ \
or contact the church directly at info@lighthousesouthbay.org";


export default function Welcome({ firstRender }: { firstRender: Boolean; }) {

    return (
        <AnimatePresence>

            {firstRender && (
                <motion.div
                    initial={{ opacity: 1, y: 0 }}   // Initial state: visible at normal position
                    animate={{ opacity: 1, y: 0 }}    // Animate to normal position
                    exit={{ opacity: 0, y: -100 }}    // On exit: slide up and fade out
                    transition={{ duration: 0.1 }}     // Duration of animation
                >
                    <div className='flex flex-col max-h-fit justify-center'>
                        <div className='flex max-h-fit justify-center'>

                        <img
                            src={aiKim}
                            alt="ai-kim-kira"
                            className='rounded-full size-52' />
                        </div>
                    </div>
                    <br />
                    <div className='p-2 rounded-xl max-w-fit bg-gray-100'>
                        <Typewriter text={welcomeText} />
                    </div>

                </motion.div>
            )}
        </AnimatePresence>
    );
}