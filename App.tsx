import React from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';
import { Section, Divider } from './components/Section';
import { CharacterCard } from './components/CharacterCard';
import { LoreChat } from './components/LoreChat';
import { ChevronDown, Skull, Sword, Shield, Crown, Film, BookOpen, Tv } from 'lucide-react';

const App: React.FC = () => {
  const { scrollY } = useScroll();
  const heroOpacity = useTransform(scrollY, [0, 500], [1, 0]);
  const heroScale = useTransform(scrollY, [0, 500], [1, 1.1]);
  const textParallax = useTransform(scrollY, [0, 500], [0, 200]);

  return (
    <div className="min-h-screen bg-titan-dark text-titan-bone selection:bg-titan-red selection:text-white overflow-hidden">
      
      {/* Fixed Background Texture */}
      <div className="fixed inset-0 bg-smoke opacity-20 pointer-events-none z-0 mix-blend-overlay"></div>
      
      {/* Dynamic Background Elements */}
      <div className="fixed inset-0 pointer-events-none z-0">
         <div className="absolute top-0 left-0 w-full h-1/2 bg-gradient-to-b from-titan-red/10 to-transparent"></div>
         <div className="absolute bottom-0 right-0 w-[500px] h-[500px] bg-red-900/10 blur-[100px] rounded-full"></div>
      </div>

      {/* --- HERO SECTION --- */}
      <header className="relative h-screen flex items-center justify-center overflow-hidden z-10">
        <motion.div 
          style={{ scale: heroScale, opacity: heroOpacity }}
          className="absolute inset-0 z-0"
        >
          <div className="absolute inset-0 bg-gradient-to-b from-black/60 via-black/40 to-black z-10" />
          {/* Placeholder for a Titan abstract background */}
          <img 
            src="https://picsum.photos/seed/titanbg/1920/1080?grayscale&blur=2" 
            alt="Wall Background" 
            className="w-full h-full object-cover object-top"
          />
        </motion.div>

        <div className="relative z-20 w-full max-w-7xl mx-auto px-6 grid grid-cols-1 md:grid-cols-12 h-full items-center">
          {/* Vertical Japanese Text */}
          <motion.div 
            style={{ y: textParallax }}
            className="hidden md:flex flex-col justify-center items-center col-span-2 h-full py-20"
          >
            <h1 className="vertical-text text-6xl md:text-8xl font-japanese font-black text-white drop-shadow-[0_0_15px_rgba(220,38,38,0.8)] tracking-widest border-r-2 border-titan-red/50 pr-8">
              進撃の巨人
            </h1>
          </motion.div>

          {/* Main Title Block */}
          <div className="col-span-1 md:col-span-10 flex flex-col justify-center md:items-start space-y-6 pt-20 md:pt-0">
            <motion.h2 
              initial={{ opacity: 0, x: 50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 1, delay: 0.5 }}
              className="text-5xl md:text-8xl font-cinzel font-bold text-titan-red uppercase tracking-tighter"
            >
              Attack on <br/><span className="text-white">Titan</span>
            </motion.h2>
            
            <motion.p 
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 1, delay: 1 }}
              className="text-lg md:text-xl max-w-2xl font-body text-gray-300 border-l-4 border-titan-red pl-6"
            >
              (Shingeki no Kyojin) is a highly acclaimed anime and manga series created by Hajime Isayama.
              A story of humanity's struggle against the Titans.
            </motion.p>
          </div>
        </div>

        <motion.div 
          animate={{ y: [0, 10, 0], opacity: [0.5, 1, 0.5] }}
          transition={{ repeat: Infinity, duration: 2 }}
          className="absolute bottom-10 left-1/2 -translate-x-1/2 text-white z-20"
        >
          <ChevronDown size={40} />
        </motion.div>
      </header>

      {/* --- OVERVIEW SECTION --- */}
      <Section id="overview">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-cinzel font-bold text-white mb-2">OVERVIEW</h2>
          <span className="text-titan-red font-japanese text-xl tracking-[0.5em]">概要</span>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {[
            { title: "ORIGINAL RUN", sub: "2009 - 2021 (Manga)", sub2: "2013 - 2023 (Anime)", icon: <BookOpen className="w-8 h-8 text-titan-red"/> },
            { title: "GENRE", sub: "Action, Dark Fantasy", sub2: "Post-Apocalyptic", icon: <Skull className="w-8 h-8 text-titan-red"/> },
            { title: "STUDIO", sub: "Wit Studio (S1-3)", sub2: "MAPPA (Final Season)", icon: <Film className="w-8 h-8 text-titan-red"/> }
          ].map((item, idx) => (
            <motion.div 
              key={idx}
              whileHover={{ y: -10, backgroundColor: 'rgba(20,20,20,0.8)' }}
              className="bg-black/40 border border-zinc-800 p-8 flex flex-col items-center text-center backdrop-blur-sm group hover:border-titan-red/50 transition-colors"
            >
              <div className="mb-4 p-4 rounded-full bg-titan-red/10 group-hover:bg-titan-red/20 transition-colors">
                {item.icon}
              </div>
              <h3 className="font-cinzel font-bold text-xl mb-4">{item.title}</h3>
              <p className="font-body text-gray-400">{item.sub}</p>
              <p className="font-body text-gray-400">{item.sub2}</p>
            </motion.div>
          ))}
        </div>
      </Section>

      <Divider />

      {/* --- PLOT SUMMARY --- */}
      <Section className="text-center max-w-4xl">
        <div className="mb-12">
          <h2 className="text-4xl font-cinzel font-bold text-white mb-2">PLOT SUMMARY</h2>
          <span className="text-titan-red font-japanese text-xl tracking-[0.5em]">あらすじ</span>
        </div>
        
        <p className="font-body text-xl md:text-2xl leading-loose text-gray-300">
          The story is set in a world where humanity is on the brink of extinction due to giant humanoid creatures known as <span className="text-titan-red font-bold">Titans</span>. 
          To protect themselves, the remnants of humanity live within massive walled cities. 
          The plot follows <span className="text-titan-red font-bold">Eren Yeager</span>, his adoptive sister <span className="text-titan-red font-bold">Mikasa Ackerman</span>, and their friend <span className="text-titan-red font-bold">Armin Arlert</span> as they join the military to fight against the Titans after their home is invaded, resulting in the death of Eren's mother.
        </p>
      </Section>

      <div className="w-full h-64 overflow-hidden relative opacity-50 my-12">
          <img src="https://picsum.photos/seed/wall/1920/400?grayscale" alt="The Wall" className="w-full h-full object-cover" />
          <div className="absolute inset-0 bg-gradient-to-r from-titan-dark via-transparent to-titan-dark"></div>
      </div>

      {/* --- THEMES --- */}
      <Section>
        <div className="text-center mb-16">
          <h2 className="text-4xl font-cinzel font-bold text-white mb-2">MAIN THEMES</h2>
          <span className="text-titan-red font-japanese text-xl tracking-[0.5em]">主要テーマ</span>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <motion.div whileHover={{ scale: 1.02 }} className="bg-zinc-900/80 p-8 border-l-4 border-titan-red">
            <h3 className="font-cinzel text-2xl mb-2 text-white">SURVIVAL</h3>
            <p className="font-body text-gray-400">The series explores the desperate struggle for survival against overwhelming odds.</p>
          </motion.div>
          
          <motion.div whileHover={{ scale: 1.02 }} className="bg-zinc-900/80 p-8 border-l-4 border-white">
            <h3 className="font-cinzel text-2xl mb-2 text-white">FREEDOM VS CONFINEMENT</h3>
            <p className="font-body text-gray-400">A central theme revolves around the desire for freedom and the moral dilemmas faced by the characters.</p>
          </motion.div>
          
          <motion.div whileHover={{ scale: 1.02 }} className="md:col-span-2 bg-zinc-900/80 p-8 border-l-4 border-gray-500">
            <h3 className="font-cinzel text-2xl mb-2 text-white">HUMAN NATURE</h3>
            <p className="font-body text-gray-400">The show delves into the darker aspects of humanity, including betrayal, fear, and the consequences of war.</p>
          </motion.div>
        </div>
      </Section>

      <Divider />

      {/* --- CHARACTERS --- */}
      <Section id="characters">
        <div className="text-center mb-24">
          <h2 className="text-4xl md:text-5xl font-cinzel font-bold text-white mb-2">CHARACTERS</h2>
          <span className="text-titan-red font-japanese text-xl tracking-[0.5em]">キャラクター</span>
        </div>

        <CharacterCard 
          name="Eren Yeager"
          role="The Determined Protagonist"
          description="A boy who seeks to eradicate the Titans after witnessing his mother's death. Possesses a mysterious power that allows him to shift into a Titan."
          imgSeed="eren"
          align="left"
          themeColor="red"
        />
        
        <CharacterCard 
          name="Mikasa Ackerman"
          role="The Protector"
          description="Eren's fierce protector and skilled soldier, known for her loyalty and unmatched combat strength. The last of her clan."
          imgSeed="mikasa"
          align="right"
          themeColor="red"
        />

        <CharacterCard 
          name="Armin Arlert"
          role="The Strategist"
          description="Eren's intelligent friend, who often provides strategic insight and emotional support. Though physically weaker, his mind is his greatest weapon."
          imgSeed="armin"
          align="left"
          themeColor="yellow"
        />

        <CharacterCard 
          name="Levi Ackerman"
          role="Humanity's Strongest"
          description="A highly skilled soldier known for his incredible combat abilities and leadership. Captain of the Special Operations Squad."
          imgSeed="levi"
          align="right"
          themeColor="blue"
        />

        <CharacterCard 
          name="Historia Reiss"
          role="The True Heir"
          description="The true heir to the throne, whose character arc explores themes of identity, responsibility, and the burden of lineage."
          imgSeed="historia"
          align="left"
          themeColor="yellow"
        />
      </Section>

      <div className="relative py-32 flex justify-center items-center overflow-hidden">
        <motion.div 
           initial={{ width: "0%" }}
           whileInView={{ width: "100%" }}
           transition={{ duration: 1.5, ease: "easeInOut" }}
           className="absolute h-1 bg-white z-10"
        />
        <Sword className="absolute z-20 text-titan-red fill-current w-16 h-16 rotate-45" />
      </div>

      {/* --- RECEPTION --- */}
      <Section>
        <div className="text-center mb-16">
          <h2 className="text-4xl font-cinzel font-bold text-white mb-2">RECEPTION</h2>
          <span className="text-titan-red font-japanese text-xl tracking-[0.5em]">受付</span>
        </div>
        <div className="max-w-3xl mx-auto text-center relative">
            <div className="absolute -top-10 -left-10 text-9xl font-cinzel opacity-10 text-titan-red">"</div>
            <p className="font-body text-xl md:text-2xl italic leading-relaxed text-gray-200">
              <span className="text-titan-red font-bold">Attack on Titan</span> has received widespread critical acclaim for its intricate plot, character development, and animation quality. It has won numerous awards and is considered one of the best anime series of all time.
            </p>
            <div className="absolute -bottom-10 -right-10 text-9xl font-cinzel opacity-10 text-titan-red rotate-180">"</div>
        </div>
      </Section>

      {/* --- ADAPTATIONS --- */}
      <Section>
         <div className="text-center mb-16">
          <h2 className="text-4xl font-cinzel font-bold text-white mb-2">ADAPTATIONS</h2>
          <span className="text-titan-red font-japanese text-xl tracking-[0.5em]">アダプテーション</span>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
           <div className="group relative overflow-hidden bg-zinc-800 rounded-sm aspect-[4/5] cursor-pointer">
              <img src="https://picsum.photos/seed/aotlive/400/500?grayscale" className="absolute inset-0 w-full h-full object-cover opacity-50 group-hover:opacity-30 transition-opacity" alt="Live Action"/>
              <div className="absolute inset-0 flex flex-col justify-end p-6 bg-gradient-to-t from-black to-transparent">
                  <Film className="text-titan-red mb-2" size={32}/>
                  <h3 className="font-cinzel text-xl font-bold">Live-Action Films</h3>
                  <p className="text-sm text-gray-400 mt-2 h-0 group-hover:h-auto overflow-hidden transition-all">Mixed reviews, but a notable attempt to bring Titans to reality.</p>
              </div>
           </div>
           
           <div className="group relative overflow-hidden bg-zinc-800 rounded-sm aspect-[4/5] cursor-pointer">
              <img src="https://picsum.photos/seed/aotmanga/400/500?grayscale" className="absolute inset-0 w-full h-full object-cover opacity-50 group-hover:opacity-30 transition-opacity" alt="Spin-offs"/>
              <div className="absolute inset-0 flex flex-col justify-end p-6 bg-gradient-to-t from-black to-transparent">
                  <BookOpen className="text-titan-red mb-2" size={32}/>
                  <h3 className="font-cinzel text-xl font-bold">Spin-off Manga</h3>
                  <p className="text-sm text-gray-400 mt-2 h-0 group-hover:h-auto overflow-hidden transition-all">Titles like "No Regrets" and "Lost Girls" expand the universe.</p>
              </div>
           </div>

           <div className="group relative overflow-hidden bg-zinc-800 rounded-sm aspect-[4/5] cursor-pointer">
              <img src="https://picsum.photos/seed/aotmovie/400/500?grayscale" className="absolute inset-0 w-full h-full object-cover opacity-50 group-hover:opacity-30 transition-opacity" alt="Movies"/>
              <div className="absolute inset-0 flex flex-col justify-end p-6 bg-gradient-to-t from-black to-transparent">
                  <Tv className="text-titan-red mb-2" size={32}/>
                  <h3 className="font-cinzel text-xl font-bold">Compilation Movies</h3>
                  <p className="text-sm text-gray-400 mt-2 h-0 group-hover:h-auto overflow-hidden transition-all">Condensed versions of the anime seasons for theatrical release.</p>
              </div>
           </div>
        </div>
      </Section>

      {/* --- CULTURAL IMPACT --- */}
      <section className="relative min-h-screen flex items-center justify-center py-20 px-6">
        <div className="absolute inset-0 z-0">
           <img src="https://picsum.photos/seed/titanface/1920/1080?grayscale&blur=2" alt="Impact Background" className="w-full h-full object-cover" />
           <div className="absolute inset-0 bg-gradient-to-t from-black via-black/80 to-transparent"></div>
        </div>

        <div className="relative z-10 max-w-4xl text-center">
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 1 }}
          >
            <h2 className="text-5xl md:text-7xl font-cinzel font-bold text-titan-red mb-4">CULTURAL IMPACT</h2>
            <p className="text-2xl md:text-3xl font-japanese mb-12 text-gray-400">文化的影響</p>
            
            <p className="font-body text-xl md:text-2xl leading-relaxed text-white mb-8">
              The series has made a significant impact on pop culture, influencing various media and inspiring a passionate fanbase worldwide. Its themes of conflict, humanity, and the fight for freedom resonate deeply, making it a profound work in the anime genre.
            </p>

            <p className="font-japanese text-sm md:text-base text-gray-500 leading-relaxed max-w-2xl mx-auto">
              このシリーズはポップカルチャーに大きな影響を与え、さまざまなメディアに影響を与え、世界中の熱狂的なファン層を刺激しました。紛争、人間性、自由のための戦いというテーマが心に深く響き、アニメジャンルの中でも奥深い作品となっています。
            </p>
          </motion.div>
        </div>
      </section>

      {/* --- FOOTER --- */}
      <footer className="bg-black py-12 text-center border-t border-zinc-900">
        <p className="text-gray-600 font-cinzel text-sm">© 2024 Titan Chronicles. Designed based on Fan Works. Not officially affiliated.</p>
      </footer>

      {/* Floating Lore Chat using Gemini */}
      <LoreChat />
    </div>
  );
};

export default App;