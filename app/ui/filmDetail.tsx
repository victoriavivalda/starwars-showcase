import ExpandableHeading from '@/app/components/expandableHeading';
import { Film } from '@/app/lib/definitions';
import {
  filmHeaders,
  peopleHeaders,
  speciesHeaders,
  starshipHeaders,
  vehicleHeaders,
} from '../lib/tableHeaders';

export default async function FilmDetails({
  results,
}: {
  results: Film | undefined;
}) {
  return (
    <div className='text-md font-light'>
      <h2 className='pt-5 text-lg font-medium leading-loose'>Film Details</h2>
      <section className='pt-5'>
        {filmHeaders.map((item) => {
          const keyAccess = item.field as keyof Film;
          const value = results ? results[keyAccess] : '-';
          return <p key={item.key}>{`${item.label}: ${value}`}</p>;
        })}
      </section>
      <ExpandableHeading
        title='Characters'
        data={results?.characters || []}
        fieldsToDisplay={peopleHeaders}
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
    </div>
  );
}
