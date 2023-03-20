import React,{ memo } from 'react'
import Detail from './Detail'

interface IProps{
  data: any
}


const AboutSection:React.FC<IProps> = ({data}) => {
  return (
      <Detail data = {data} />
  )
}
export default memo(AboutSection)
