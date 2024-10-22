import { Subtitle } from '@/components/text/subtitle'
import { Text } from '@/components/text/text'
import { Title } from '@/components/text/title'

export const ProfileText = () => {
  return (
    <div className="flex flex-col gap-0 text-xl">
      <Subtitle>Hi there 👋, I&apos;m</Subtitle>
      <Title className='text-xl'>EDUARDO FONTANA</Title>
      <Subtitle className="text-green-600 font-medium">FULLSTACK DEVELOPER</Subtitle>
    </div>
  )
}

export const ProfileBody = () => {
  return (
    <div className="w-full max-w-[600px] text-balance">
      <Text className='text-lg '>
        Constantly seeking new projects and ideas to drive innovation.
        A Computer Engineering student at Universidade Federal da Bahia (UFBA), 
        driven by a passion for technology and a commitment to continuous learning and development.
      </Text>
    </div>
  )
}
