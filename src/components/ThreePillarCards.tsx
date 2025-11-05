import * as AspectRatio from '@radix-ui/react-aspect-ratio';
import * as Separator from '@radix-ui/react-separator';

interface PillarCard {
  title: string;
  description: string;
  imageUrl: string;
  url?: string;
}

interface ThreePillarCardsProps {
  cards: PillarCard[];
  className?: string;
}

function CardContent({ card }: { card: PillarCard }) {
  return (
    <div
      className={`relative w-full h-full bg-cover bg-center bg-black/40 ${card.url ? 'group' : ''}`}
      style={{
        backgroundImage: `linear-gradient(rgba(0, 0, 0, 0.5), rgba(0, 0, 0, 0.5)), url('${card.imageUrl}')`
      }}
    >
      <div className="absolute inset-0 flex flex-col items-center justify-end p-8 text-center">
        <div className="flex flex-col items-center text-center w-full">
          {/* Fixed height title area - always same position */}
          <div className="h-48 flex items-end justify-center mb-4 w-full">
            <h1 className="text-3xl font-bold text-white text-center">{card.title}</h1>
          </div>
          
          <Separator.Root 
            className="bg-white/50 h-px w-16 mb-4" 
            orientation="horizontal"
            decorative
          />
          
          {/* Fixed height description area - consistent spacing */}
          <div className="h-48 flex items-start justify-center w-full overflow-hidden">
            <p className="leading-relaxed text-white text-center">
              {card.description}
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}

function ThreePillarCards({
  cards,
  className = ""
}: ThreePillarCardsProps) {
  return (
    <section
      id="values"
      tabIndex={-1}
      aria-labelledby="values-heading"
      aria-describedby="values-description"
      className={`py-16 bg-slate-800 ${className}`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {cards.map((card, index) => (
            <div key={index}>
              <AspectRatio.Root ratio={2 / 3} className={card.url !== undefined && card.url !== null && card.url !== '' ? 'cursor-pointer hover:scale-105 transition-transform duration-300' : ''}>
                {card.url !== undefined && card.url !== null && card.url !== '' ? (
                  <a href={card.url} className="block w-full h-full">
                    <CardContent card={card} />
                  </a>
                ) : (
                  <CardContent card={card} />
                )}
              </AspectRatio.Root>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default ThreePillarCards;