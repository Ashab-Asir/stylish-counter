import Title from './Title'
import Count from './Count'
import ResetButton from './ResetButton'
import CountButtons from './CountButtons'

export default function Card() {
  return (
    <div>
      <Title></Title>
      <Count></Count>
      <ResetButton></ResetButton>
      <CountButtons></CountButtons>
    </div>
  )
}
