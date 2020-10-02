import Temperature from '../../core/components/text/temperature';
import Loading from '../../core/components/text/loading';
import { WindIndication } from '../../core/enums';
import { currentMeetnetData } from '../api';
import WindSpeed from '../../core/components/text/windSpeed';
import Direction from '../../core/components/text/direction';
import WindArrow from './windArrow';

type Props = { 
  currentMeetnetData?: currentMeetnetData,
}

const backgroundColourOnWindStrength = (strength?: WindIndication) => {
  switch(strength) {
    case WindIndication.light:
      return 'bg-green-200';
    case WindIndication.good:
      return 'bg-green-300';
    case WindIndication.strong:
      return 'bg-green-red-200'
    case WindIndication.danger:
      return 'bg-green-red-300'
    default:
      return '';
  }
}

export default function MeetnetComponent({ currentMeetnetData } : Props) {
return (
  <div className="bg-white shadow overflow-hidden sm:rounded-lg">
    <div className="px-4 py-5 border-b border-gray-200 sm:px-6">
      <h3 className="text-lg leading-6 font-medium text-gray-900">
        Meetnet
      </h3>
      <p className="mt-1 max-w-2xl text-sm leading-5 text-gray-500 hidden md:block">
        In het kader van Safekiting meet de Vlaamse Overheid op verschillende plaatsen de windsnelheid, richting en temperatuur.
        In Zeebrugge staat de meet apparatuur op de havenmuur.
      </p>
      <p className="mt-1 max-w-2xl text-sm leading-5 text-gray-500">
        Laatste update: <code>{currentMeetnetData?.measurementTaken?.toLocaleString()}</code>.
      </p>
    </div>
    <div>
      <dl>
        <div className="bg-gray-100 px-4 py-5 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-6">
          <dt className="text-sm leading-5 font-medium text-gray-500">
            Temperatuur
          </dt>
          <dd className="mt-1 text-sm leading-5 text-gray-900 sm:mt-0 sm:col-span-2">
            {/* TODO: Move this logic to a meetnet component! */}
            {currentMeetnetData?.temperature ? <Temperature value={currentMeetnetData.temperature} /> : <Loading />}
          </dd>
        </div>
        <div className={`bg-white px-4 py-5 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-6 ${backgroundColourOnWindStrength(currentMeetnetData?.windSpeed.strength)}`}>
          <dt className="text-sm leading-5 font-medium text-gray-500">
            Wind snelheid
          </dt>
          <dd className="mt-1 text-sm leading-5 text-gray-900 sm:mt-0 sm:col-span-2">
            {currentMeetnetData?.windSpeed.metersPerSecond && currentMeetnetData?.windSpeed.knots ? <WindSpeed metersPerSecond={currentMeetnetData.windSpeed.metersPerSecond} knots={currentMeetnetData.windSpeed.knots} /> : <Loading />}
          </dd>
        </div>
        <div className={`bg-gray-50 px-4 py-5 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-6 ${backgroundColourOnWindStrength(currentMeetnetData?.windGusts.strength)}`}>
          <dt className="text-sm leading-5 font-medium text-gray-500">
            Gusts
          </dt>
          <dd className="mt-1 text-sm leading-5 text-gray-900 sm:mt-0 sm:col-span-2">
          {currentMeetnetData?.windGusts.metersPerSecond && currentMeetnetData?.windGusts.knots ? <WindSpeed metersPerSecond={currentMeetnetData.windGusts.metersPerSecond} knots={currentMeetnetData.windGusts.knots} /> : <Loading />}
          </dd>
        </div>
        <div className="bg-white px-4 py-5 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-6">
          <dt className="text-sm leading-5 font-medium text-gray-500">
            Windrichting
          </dt>
          <dd className="mt-1 text-sm leading-5 text-gray-900 sm:mt-0 sm:col-span-2">
            {currentMeetnetData?.windDirection ? <Direction value={currentMeetnetData.windDirection} /> : <Loading />}
          </dd>
        </div>
        <div className="bg-gray-100 px-4 py-5 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-6">       
          {/* <img className="object-center" src="/zeebrugge-beach-map.png" alt="zeebrugge beach map" /> */}
          {currentMeetnetData?.windDirection ?
            <WindArrow direction={currentMeetnetData.windDirection} /> : <Loading />}
        </div>
      </dl>
    </div>
  </div>
  )
}
