import ExpandableHeading from '@/app/components/expandableHeading';
import { Person } from '@/app/lib/definitions';
import {
  filmHeaders,
  peopleHeaders,
  speciesHeaders,
  starshipHeaders,
  vehicleHeaders,
} from '../lib/tableHeaders';

export default async function PersonDetails({
  results,
}: {
  results: Person | undefined;
}) {
  return (
    <div className='text-md font-light'>
      <h2 className='pt-5 text-lg font-medium leading-loose'>
        Character Details
      </h2>
      <section className='pt-5'>
        {peopleHeaders.map((item) => {
          const keyAccess = item.field as keyof Person;
          const value = results ? results[keyAccess] : '-';
          return <p key={item.key}>{`${item.label}: ${value}`}</p>;
        })}
      </section>
      <ExpandableHeading
        title='Films'
        data={results?.films || []}
        fieldsToDisplay={filmHeaders}
      />
      <ExpandableHeading
        title='Species'
        data={results?.species || []}
        fieldsToDisplay={speciesHeaders}
      />
      <ExpandableHeading
        title='Starships'
        data={results?.starships || []}
        fieldsToDisplay={starshipHeaders}
      />
      <ExpandableHeading
        title='Vehicles'
        data={results?.vehicles || []}
        fieldsToDisplay={vehicleHeaders}
      />
      <section></section>
    </div>
  );
}
