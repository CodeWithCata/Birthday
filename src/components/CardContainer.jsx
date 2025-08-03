import React from 'react'
import Card from './Card'
import CardImg from './CardImg'
import poza1 from '../assets/PozeKitty/ExcursieMunte.jpg'
import poza2 from '../assets/PozeKitty/PozaFeteDoamna.jpg'
import poza3 from '../assets/PozeKitty/PozaInimioara.jpg'    
import poza4 from '../assets/PozeKitty/PozaToataClasa.jpg'
import poza5 from '../assets/PozeKitty/PozaToataClasaPeHol.jpg'
import poza6 from '../assets/PozeKitty/tortCartonase.jpg'
import { color, motion, useInView } from "framer-motion";
import { useRef, useState, useEffect } from "react";
import Confetti from "react-confetti";



const urariDoamnaInvatatoare = [
  "🎉Doamna învățătoare, în această zi cu totul specială, vă multumesc din suflet pentru dăruirea și răbdarea cu care ma insotiti în fiecare pas al drumului nostru spre cunoaștere și creștere.🎉",
  
  "🎉Sărbătorim astăzi nu doar ziua dumneavoastră de naștere, ci și lumina pe care o răspândiți în sufletele noastre, transformând fiecare lecție într-o experiență plină de sens și inspirație.🎉",
  
  "🎉Vă dorim din inimă multa sanatate și bucurii nenumărate, ca să puteți continua să vă împliniți visul cu aceeași pasiune și eleganță care vă definesc.🎉",
  
  "🎉Fie ca fiecare zi să vă aducă satisfacții profunde și recunoștință sinceră pentru impactul frumos pe care îl aveți asupra noastră, asupra clasei care se bucurăm să vă avem ca model și ghid.🎉",
  
  "🎉Pe măsură ce anii trec, vă dorim să păstrați mereu acel spirit cald și entuziast, să găsiți în fiecare provocare un prilej de creștere și să inspirați cu aceeași bucurie și dedicare.🎉",
  
  "🎉La mulți ani fericiți, Doamna învățătoare! Fie ca drumul vieții să vă fie mereu luminat de iubire, armonie și aprecierea sinceră a tuturor celor pe care i-ați învățat să viseze și să reușească.🎉"
];

const culori =  [
  'bg-purple-500',
  'bg-blue-500',
  'bg-green-500',
  'bg-red-500',
  'bg-yellow-500',
  'bg-pink-500'
]


const imagini = [poza1, poza2, poza3, poza4, poza5, poza6];

function useWindowSize() {
  const [size, setSize] = useState({ width: window.innerWidth, height: window.innerHeight });
  useEffect(() => {
    function handleResize() {
      setSize({ width: window.innerWidth, height: window.innerHeight });
    }
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);
  return size;
}

function AnimatedCard({ description, imageSrc ,bg}) {
  const ref = useRef();
  const isInView = useInView(ref, { once: true, margin: "-100px" });
  const [showConfetti, setShowConfetti] = useState(false);
  const { width, height } = useWindowSize();

  useEffect(() => {
    if (isInView) {
      const confettiTimeout = setTimeout(() => setShowConfetti(true), 500); // Delay for impact
      const stopConfetti = setTimeout(() => setShowConfetti(false), 3500);  // Smooth fade-out
      return () => {
        clearTimeout(confettiTimeout);
        clearTimeout(stopConfetti);
      };
    }
  }, [isInView]);

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 80, scale: 0.92 }}
      animate={isInView ? { opacity: 1, y: 0, scale: 1 } : {}}
      transition={{
        type: "spring",
        stiffness: 80,
        damping: 18,
        mass: 0.8,
        duration: 0.9
      }}
      className="mb-10 relative"
    >
      {showConfetti && (
        <Confetti
          width={width}
          height={height}
          numberOfPieces={140}
          gravity={0.35}
          recycle={false}
          tweenDuration={4500}
          colors={["#FFD700", "#00BCD4", "#FF4081", "#8BC34A", "#3F51B5"]}
        />
      )}

      <CardImg description={description} imageSrc={imageSrc} bgColor={bg}  />
    </motion.div>
  );
}
 function CardContainer() {
  return (
    <div>
      {urariDoamnaInvatatoare.map((urare, index) => (
        <AnimatedCard
          key={index}
          description={urare}
          imageSrc={imagini[index % imagini.length]}
          bg={culori[index]}
        />
      ))}
    </div>
  );
}

export default CardContainer;
