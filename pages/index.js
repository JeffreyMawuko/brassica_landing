
import BaseLayout from '../components/BaseLayout'
import SectionOne from '../components/SectionOne'
import TopNav from '../components/TopNav'

export default function Home() {
  return (
    <BaseLayout>
      <TopNav/>
      <div className='container'>
        <SectionOne/>
      </div>
    </BaseLayout>
  )
}
