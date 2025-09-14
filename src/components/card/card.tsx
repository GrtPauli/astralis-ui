type CardProps = {
    title: string;
    description: string;
  };
  
  export const Card = ({ title, description }: CardProps) => {
    return (
      <div className="astralis">
        <div className="astralis-bg-white astralis-rounded-lg astralis-shadow-lg astralis-overflow-hidden">
          <div className="astralis-px-6 astralis-py-4">
            <h2 className="astralis-font-sans astralis-text-gray-700 astralis-font-bold astralis-text-xl">{title}</h2>
            <p className="astralis-font-sans astralis-text-gray-700 astralis-text-base">{description}</p>
          </div>
        </div>
      </div>
    );
  };
  