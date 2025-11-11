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
    <div className={`relative w-full h-full ${card.url ? 'group' : ''}`}>
      {/* Background image layer */}
      <div
        className="absolute inset-0 bg-cover bg-center"
        style={{ backgroundImage: `url('${card.imageUrl}')` }}
      />
      {/* Overlay gradient */}
      <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/50 to-black/30" />

      <div className="absolute inset-0 flex flex-col items-center justify-end p-4 sm:p-6 md:p-8 text-center">
        <div className="flex flex-col items-center text-center w-full">
          {/* Responsive height title area - always same position */}
          <div className="h-32 sm:h-36 md:h-40 lg:h-44 flex items-end justify-center mb-3 sm:mb-4 w-full">
            <h1 className="text-2xl sm:text-3xl md:text-4xl font-bold text-white text-center leading-tight">
              {card.title}
            </h1>
          </div>

          <Separator.Root
            className="bg-white/50 h-px w-12 sm:w-14 md:w-16 mb-3 sm:mb-4"
            orientation="horizontal"
            decorative
          />

          {/* Responsive height description area - consistent spacing */}
          <div className="h-40 sm:h-44 md:h-48 lg:h-52 flex items-start justify-center w-full overflow-hidden">
            <p className="leading-relaxed text-white text-center text-sm sm:text-base md:text-lg">
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
      className={`py-12 sm:py-14 md:py-16 bg-slate-800 ${className}`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 sm:gap-7 md:gap-8">
          {cards.map((card, index) => (
            <div key={index}>
              <AspectRatio.Root
                ratio={2 / 3}
                className={card.url !== undefined && card.url !== null && card.url !== '' ? 'cursor-pointer hover:scale-105 transition-transform duration-300 rounded-xl overflow-hidden' : 'rounded-xl overflow-hidden'}
              >
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