/* eslint-disable react/prop-types */

export default function ArticleCard({
    image,
    author,
    subject,
    paragraph,
    alt,
  }) {
    return (
      <div className="w-85.5 md:w-60.75 flex flex-col bg-white shadow-lg font-light items-center rounded-md h-98.5 md:h-104.5">
        {/* Imagem fixa no topo */}
        <img 
          src={image} 
          alt={alt} 
          className="w-85.5 h-50 md:w-60.75 self-start"
        />
        {/* Conteúdo centralizado no espaço restante */}
        <div className="w-70.5 md:w-49 flex-grow flex flex-col justify-center px-4">
          <p className="text-grayish-blue text-[10px] mb-3.25">{`By ${author}`}</p>
          <h2 className="text-dark-blue text-[17px] leading-5 mb-2">{subject}</h2>
          <p className="text-grayish-blue text-[13px] leading-4.25">{paragraph}</p>
        </div>
      </div>
    );
  }
  