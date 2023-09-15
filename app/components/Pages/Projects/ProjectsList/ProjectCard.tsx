import Image from 'next/image'

export function ProjectCard() {
  return (
    <div
      className="rounded-lg h-[436px] flex flex-col bg-gray-800 
    overflow-hidden border-2  hover:border-emerald-500 opacity-70 hover:opacity-100 transition-all group"
    >
      <div className="w-full h-48 overflow-hidden">
        <Image
          width={380}
          height={200}
          src="https://media.graphassets.com/FRhUdgUQTHmLmwf9u0BA"
          alt="Substituir por imagem do projeto"
          unoptimized
          className="group-hover:scale-110 w-full h-full object-cover duration-500 transition-all"
        />
      </div>
      <div className="flex-1 flex flex-col p-8">
        <strong className="font-medium text-gray-50/90 group-hover:text-emerald-500 transition-all">
          Project Name
        </strong>
        <p className="mt-2 text-gray-400 line-clamp-4">
          Lorem ipsum dolor sit amet consectetur, adipisicing elit. Quidem
          repellendus exercitationem dolore natus non. Officia, odit. Cum
          perspiciatis adipisci consequatur.
        </p>
        <span className="text-gray-300 text-sm font-medium block mt-auto truncate">
          Substituir por tecnologias
        </span>
      </div>
    </div>
  )
}
