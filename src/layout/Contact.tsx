import React from 'react'
import { motion } from "framer-motion"
import { Thermometer, Globe, BarChart3 } from "lucide-react"
import Image from 'next/image'

interface TeamMember {
  name: string
  role: string
  description: string
  icon: React.ElementType
  imageUrl: string
}

const teamMembers: TeamMember[] = [
  {
    name: "Rafael Henrique",
    role: "Líder central e especialista de pesquisas",
    description: "Ele pesquisou muito",
    icon: Thermometer,
    imageUrl: "/pictures/rafael.jpg"
  },
  {
    name: "Pedro Henrique",
    role: "Desevolvedor de Hardware",
    description: "Ele robotica muite",
    icon: BarChart3,
    imageUrl: "/pictures/pedro.jpg"
  },
  {
    name: "Mateus A. O",
    role: "Desevolvedor de Software",
    description: "Ele coda muita",
    icon: Globe,
    imageUrl: "/pictures/matheus.jpg"
  },
]

const TeamMemberCard: React.FC<{ member: TeamMember }> = ({ member }) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 70 }}
      transition={{ duration: 0.5 }}
      whileInView={{ opacity: 1, y: 0 }}
      className="bg-white rounded-lg shadow-lg p-6 hover:shadow-xl transition-all duration-300 transform hover:scale-105 h-[45em] flex items-center justify-between flex-col flex-shrink-0"
    >
      <div className="flex justify-between mb-4 items-end relative">
        <h3 className="text-xl font-semibold text-center mb-2 py-1.5 underline underline-offset-4">{member.name}</h3>
      </div>
      <div className='flex flex-col items-center justify-between h-[85%] bg-Champagne-Gold/20 rounded-md p-2 flex-shrink-0'>
        <div>
          <p className="text-gray-600 text-center mb-3">{member.role}</p>
          <p className="text-gray-700 text-center mb-4">{member.description}</p>
        </div>
        <div className="relative w-[20em] h-[27em] rounded-lg">
          <Image
            src={member.imageUrl}
            alt={member.name}
            width={1000} height={1000}
            objectPosition='center'
            className="transition-transform duration-300 transform hover:scale-110 w-full h-full object-cover"
            style={{
              objectPosition: "center !important",
            }}
            />
        </div>
      </div>
    </motion.div>
  )
}

export default function MadeBySection() {
  return (
    <section className="min-h-screen py-16 px-4 bg-gradient-to-t from-Navy-blue  to-Champagne-Gold">
      <div className="w-screen px-[10%]">
        <h2 className="text-4xl font-bold text-center mb-[5%] text-gray-800">Made By:</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {teamMembers.map((member) => (
            <TeamMemberCard key={member.name} member={member} />
          ))}
        </div>
      </div>
    </section>
  )
}