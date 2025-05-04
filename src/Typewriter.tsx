import { motion } from 'framer-motion';

export default function Typewriter({ text }: { text: string }) {
  const lines = text.split('\n');
  let wordCount = 0;

  return (
    <h1 className="text-black leading-snug font-semibold">
      {lines.map((line, lineIndex) => (
        <div key={lineIndex} className="block">
          {line.split(' ').map((word, wordIndex) => {
            const delay = wordCount * 0.15;
            wordCount++; // increment across all lines
            return (
              <motion.span
                key={`${lineIndex}-${wordIndex}`}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay, duration: 0.1 }}
                className="inline-block mr-2"
              >
                {word}
              </motion.span>
            );
          })}
        </div>
      ))}
    </h1>
  );
}