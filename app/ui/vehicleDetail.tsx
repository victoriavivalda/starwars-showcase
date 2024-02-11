import ExpandableHeading from '@/app/components/expandableHeading';
import { Vehicle } from '@/app/lib/definitions';
import {
  peopleHeaders,
  filmHeaders,
  vehicleHeaders,
} from '../lib/tableHeaders';

export default async function VehicleDetails({
  results,
}: {
  results: Vehicle | undefined;
}) {
  return (
    <div className='text-md font-light'>
      <h2 className='pt-5 text-lg font-medium leading-loose'>
        Vehicle Details
      </h2>
      <section className='pt-5'>
        {vehicleHeaders.map((item) => {
          const keyAccess = item.field as keyof Vehicle;
          const value = results ? results[keyAccess] : '-';
          return <p key={item.key}>{`${item.label}: ${value}`}</p>;
        })}
      </section>
      <ExpandableHeading
        title='Pilots'
        data={results?.pilots || []}
        fieldsToDisplay={peopleHeaders}
      />
      <ExpandableHeading
        title='Films'
        data={results?.films || []}
        fieldsToDisplay={filmHeaders}
      />
      <section></section>
    </div>
  );
}
