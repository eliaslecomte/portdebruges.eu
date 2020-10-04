import Temperature from '../../core/components/text/temperature';
import Loading from '../../core/components/text/loading';
import { WindIndication } from '../../core/enums';
import { currentMeetnetData } from '../api';
import WindSpeed from '../../core/components/text/windSpeed';
import Direction from '../../core/components/text/direction';
import WindArrow from './windArrow';
import Table from '../../core/components/table';

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

    <Table values={[
      { title: 'Temperatuur', description: currentMeetnetData?.temperature ? <Temperature value={currentMeetnetData.temperature} /> : <Loading /> },
      {
        title: 'Wind snelheid',
        description: currentMeetnetData?.windSpeed.metersPerSecond && currentMeetnetData?.windSpeed.knots ? <WindSpeed metersPerSecond={currentMeetnetData.windSpeed.metersPerSecond} knots={currentMeetnetData.windSpeed.knots} /> : <Loading />,
        style: backgroundColourOnWindStrength(currentMeetnetData?.windSpeed.strength),
      },
      {
        title: 'Gusts',
        description: currentMeetnetData?.windGusts.metersPerSecond && currentMeetnetData?.windGusts.knots ? <WindSpeed metersPerSecond={currentMeetnetData.windGusts.metersPerSecond} knots={currentMeetnetData.windGusts.knots} /> : <Loading />,
        style: backgroundColourOnWindStrength(currentMeetnetData?.windGusts.strength),
      },
      { title: 'Windrichting', description: currentMeetnetData?.windDirection ?
        <>
          <WindArrow direction={currentMeetnetData.windDirection} />
          <Direction value={currentMeetnetData.windDirection} />
        </>
        : <Loading /> },
    ]} />
  </div>
  )
};
